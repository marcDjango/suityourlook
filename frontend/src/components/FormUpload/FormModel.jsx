/*eslint-disable*/
import React, { useEffect } from "react";
import Input from "../Input/Input";
import "./FormModel.scss";
import { useState } from "react";
import InputSelect from "../InputSelect/InputSelect";
import {
  hairColorOptions,
  haircutOptions,
  skinTypeOptions,
  lipsTypeOptions,
  categoriesOptions,
  numberOptions,
} from "../../services/modelsOptions";
import WaitingUpload from "../../assets/images/upload-image.png";
import { useNavigate } from "react-router-dom";

function FormModel() {
  const [previewSource, setPreviewSource] = useState();
  const [numberProduct, setNumberProduct] = useState(1);
  const [numberStock, setNumberStock] = useState(1);
  const [dataNameProduct, setDataNameProduct] = useState([]);
  const [dataProduct, setDataProduct] = useState([]);
  const navigate = useNavigate();
  console.log(dataNameProduct);
  console.log(dataProduct);

  const previewFile = (file) => {
    const reader = new FileReader();
    console.info(reader);
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  // Se déclenche à la sélection d'un fichier image, puis appelle previewFile
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };

  // Se déclenche au submit du formulaire et passe à uploadImage l'URL base64 de l'image
  const handleSubmitFile = (e) => {
    e.preventDefault();
    if (!previewSource) return;
    uploadImage(previewSource, e);
  };

  // Post l'url du fichier image, ainsi que les autres champs de la table photo sur cloudinary puis sur la database
  const uploadImage = async (base64EncodedImage, e) => {
    const formData = new FormData(e.target);

    const objectToPost = {};
    formData.forEach((value, key) => {
      if (key !== "ingredients" && key !== "number_stock") {
        objectToPost[key] = value;
      }
    });

    const ingrArray = formData.getAll("ingredients");

    const filteredProduct = dataProduct.filter((el) => {
      if (ingrArray.includes(el.product_name)) {
        return el.id;
      }
    });

    console.log(filteredProduct);

    objectToPost.image = base64EncodedImage;

    const token = localStorage.getItem("token");

    try {
      await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/models/upload`, {
        method: "POST",
        body: JSON.stringify({ objectToPost }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error(error);
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/models`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      const newModel = data[data.length - 1];

      if (newModel) {
        await Promise.all(
          filteredProduct.map(async (el) => {
            const response = await fetch(
              `${import.meta.env.VITE_BACKEND_URL}/api/models-products`,
              {
                method: "POST",
                body: JSON.stringify({
                  models_id: newModel.id,
                  products_id: el.id,
                }),
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
                },
              }
            );
            if (response.ok) {
              console.log("ok");
            }
          })
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  const numbOfInput = () => {
    const inputComponents = [];

    for (let i = 0; i < numberStock; i++) {
      inputComponents.push(
        <InputSelect
          key={i}
          labelName={`ingredients`}
          labelTitle={`ingredients ${i + 1}`}
          id={`ingredients_${i}`}
          modelsOptions={dataNameProduct}
        />
      );
    }

    return inputComponents;
  };

  useEffect(() => {
    const fetchDataProducts = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/products`
        );
        if (response.ok) {
          const data = await response.json();
          setDataProduct(data);

          if (data) {
            let array = [];
            data.map((el) => {
              array = [...array, el.product_name];
            });
            setDataNameProduct(array);
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataProducts();
  }, []);

  return (
    <div className="form-model-main-container">
      <div className="btn-navigate">
        <button onClick={() => navigate(-1)}>Prev</button>
        <button onClick={() => navigate(1)}>Next</button>
      </div>
      <h1 className="main-title">Ajouter un modèle</h1>
      <form className="formu" onSubmit={handleSubmitFile}>
        <label className="label" htmlFor="image">
          <div className="image">
            {previewSource ? (
              <img src={previewSource} alt="chosen" />
            ) : (
              <img className="preview-image" src={WaitingUpload} alt="chosen" />
            )}
          </div>
          <input
            id="image"
            type="file"
            name="image"
            onChange={handleFileInputChange}
          />
        </label>

        <h2 className="second-title">Sélectionner des options</h2>
        <Input
          className="form-input"
          labelName="name"
          labelText="Nom du modèle"
          type="name"
          maxLength="100"
        />

        <InputSelect
          labelName="hair_style"
          labelTitle="Coupe de cheveux"
          id="hair_style"
          modelsOptions={haircutOptions}
        />

        <InputSelect
          labelName="hair_color"
          labelTitle="Couleur de cheveux"
          id="hair_color"
          modelsOptions={hairColorOptions}
        />
        <InputSelect
          labelName="category"
          labelTitle="Catégorie"
          id="category"
          modelsOptions={categoriesOptions}
        />
        <InputSelect
          labelName="skin_tone"
          labelTitle="Teint de peau"
          id="skin_tone"
          modelsOptions={skinTypeOptions}
        />
        <InputSelect
          labelName="lips_type"
          labelTitle="Type de bouche"
          id="lips_type"
          modelsOptions={lipsTypeOptions}
        />
        <InputSelect
          labelName="number_stock"
          labelTitle="Nombre de produits"
          id="number_stock"
          modelsOptions={numberOptions}
          isHandleChange
          setNumberStock={setNumberStock}
        />
        {numberProduct && <>{numbOfInput()}</>}

        <div className="button">
          <button type="submit" name="submit">
            Ajouter
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormModel;
