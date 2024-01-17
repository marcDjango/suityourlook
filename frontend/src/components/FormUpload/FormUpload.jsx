import React from "react";
import Input from "../Input/Input";
import "./FormUpload.scss";
import { useState } from "react";

function FormUpload() {
  const [previewSource, setPreviewSource] = useState();

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
    uploadImage(previewSource);
  };

  //       // Post l'url du fichier image, ainsi que les autres champs de la table photo sur cloudinary puis sur la database
  // const uploadImage = async (base64EncodedImage) => {
  //     // Penser à mettre à jour les valeurs de l'objet objectToPost !!
  //     // une fois qu'on aura défini user_id et artwork_id
  //     const objectToPost = {
  //       image: base64EncodedImage,
  //       is_validated: 0,
  //       user_id: 1,
  //       artwork_id: 1,
  //     };
  //     console.log(base64EncodedImage);

  //     try {
  //       await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/upload`, {
  //         method: "POST",
  //         body: JSON.stringify({ objectToPost }),
  //         headers: { "Content-Type": "application/json" },
  //       });
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  return (
    <div className="form-upload-main-container">
      <h1 className="form-main-title">Ajouter un modèle</h1>

      <form>
        <label htmlFor="image">
          <input
            id="image"
            type="file"
            name="image"
            onChange={handleFileInputChange}
          />
        </label>
        <div className="btn-container">
          <button type="submit" name="submit">
            <span className="btn-span">Ajouter</span>
          </button>
        </div>
      </form>

      <Input
        className="form-input"
        labelName="input"
        labelText="Nom du modèle"
        type="input"
        maxLength="100"
      />
      <Input
        labelName="input"
        labelText="Catégorie"
        type="input"
        maxLength="100"
      />

      <Input
        labelName="input"
        labelText="Couleur de cheveux"
        type="input"
        maxLength="100"
      />
      <Input
        labelName="input"
        labelText="Coupe de cheveux"
        type="input"
        maxLength="100"
      />
      <Input
        labelName="input"
        labelText="Teint de peau"
        type="input"
        maxLength="100"
      />
      <Input
        labelName="input"
        labelText="Type de lèvres"
        type="input"
        maxLength="100"
      />
    </div>
  );
}

export default FormUpload;
