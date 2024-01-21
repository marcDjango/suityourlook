/*eslint-disable*/
import React from "react";
import Input from "../Input/Input";
import "./FormProduct.scss";
import { useState } from "react";
import InputSelect from "../InputSelect/InputSelect";
import { brandOptions, categoriesOptions } from "../../services/productOptions";
import WaitingUpload from "../../assets/images/upload-maquillage.png";
import { useNavigate } from "react-router-dom";

function FormProduct() {
  const [previewSource, setPreviewSource] = useState();
  const navigate = useNavigate();

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
    console.log(objectToPost);

    objectToPost.image = base64EncodedImage;

    const token = localStorage.getItem("token");

    try {
      await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/products/upload`, {
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

  return (
    <div className="form-product-main-container">
      <div className="btn-navigate">
        <button onClick={() => navigate(-1)}>Prev</button>
        <button onClick={() => navigate(1)}>Next</button>
      </div>
      <h1 className="main-title">Ajouter un produit</h1>
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

        {/* <hr style={{ border: "1px solid black", width: "400px" }} /> */}
        <h2 className="second-title">Sélectionner des options</h2>
        <Input
          className="form-input"
          labelName="product_name"
          labelText="Nom du produit"
          type="product_name"
          maxLength="100"
        />
        <Input
          className="form-input"
          labelName="product_price"
          labelText="Prix"
          type="product_price"
          maxLength="100"
        />
        <InputSelect
          labelName="product_category"
          labelTitle="Catégorie"
          id="product_category"
          modelsOptions={categoriesOptions}
        />
        <InputSelect
          labelName="brand"
          labelTitle="Marque du produit"
          id="brand"
          modelsOptions={brandOptions}
        />

        <div className="button">
          <button type="submit" name="submit">
            Ajouter
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormProduct;
