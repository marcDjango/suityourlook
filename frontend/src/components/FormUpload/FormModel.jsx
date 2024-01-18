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

function FormModel() {
  const [previewSource, setPreviewSource] = useState();
  const [numberProduct, setNumberProduct] = useState(1);
  const [numberStock, setNumberStock] = useState(1);
  console.log(numberStock);
  const [dataProduct, setDataProduct] = useState([]);
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
      objectToPost[key] = value;
    });

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
  };

  const numbOfInput = () => {
    const inputComponents = [];

    for (let i = 0; i < numberStock; i++) {
      inputComponents.push(
        <InputSelect
          key={i}
          labelName={`ingredients ${i}`}
          labelTitle={`ingredients ${i + 1}`}
          id={`lips_type_${i}`}
          modelsOptions={dataProduct}
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

          if (data) {
            let array = [];
            data.map((el) => {
              array = [...array, el.product_name];
            });
            setDataProduct(array);
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataProducts();
  }, []);

  console.log(dataProduct);

  return (
    <div className="form-model-main-container">
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

        <h2 className="second-title">Sélectionnez des options</h2>
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
          labelTitle="Type de lèvres"
          id="lips_type"
          modelsOptions={lipsTypeOptions}
        />

        <div className="button">
          <button type="submit" name="submit">
            Ajouter
          </button>
        </div>
        <InputSelect
          labelName="lips_type"
          labelTitle="Nombre de produits"
          id="lips_type"
          modelsOptions={numberOptions}
          isHandleChange
          setNumberStock={setNumberStock}
        />
        {numberProduct && <>{numbOfInput()}</>}
      </form>
    </div>
  );
}

export default FormModel;
