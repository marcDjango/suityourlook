import React from "react";
import { Form, redirect, useNavigate } from "react-router-dom";
import Input from "../../components/Input-R/Input";

import "./Loginpage.scss";

function Login() {
  const navigate = useNavigate();
  // Permet de suprimer le token au Click
  const handleClick = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
  };
  const handleClickRegister = () => {
    navigate("/register");
  };
  return (
    <div className="login-page">
      <div className="input-block">
        <div className="login-input">
          <h1 className="login-title">CONNECTE-TOI</h1>
          <Form className="form" method="post" action="/login" replace>
            <Input
              className="input"
              labelName="email"
              type="email"
              labelText="Adresse Mail"
              maxLength="45"
            />
            <Input
              className="input"
              labelName="password"
              type="password"
              labelText="Mot de passe"
              maxLength="455"
            />
            <button className="continue" type="submit">
              CONTINUE
            </button>
          </Form>
        </div>
      </div>
      <div className="logout-page">
        <button type="submit" onClick={handleClick}>
          Déconnexion
        </button>
      </div>
      <div className="login-text">
        <div className="text">Nouveau dans la jungle urbaine?</div>
        <button
          className="register"
          type="submit"
          onClick={handleClickRegister}
        >
          INSCRITS-TOI
        </button>
      </div>
    </div>
  );
}

export default Login;
// Fonction asynchrone pour gérer l'authentification
export const authenticate = async ({ request }) => {
  // Récupération des données du formulaire depuis la requête
  const form = await request.formData();

  // Conversion des données du formulaire en objet clé-valeur
  const formData = Object.fromEntries(form);

  try {
    // Envoi d'une requête POST au backend pour l'authentification
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/users/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    // Vérification de la réponse HTTP
    if (!response.ok) {
      // En cas d'échec, une erreur est levée avec un message explicatif
      throw new Error(
        "Le mot de passe ou l'adresse e-mail que vous avez entré est incorrect. Veuillez vérifier vos informations et réessayer. Assurez-vous que votre adresse e-mail est correctement saisie et que le mot de passe respecte les critères requis."
      );
    }

    // Récupération des données JSON de la réponse
    const data = await response.json();

    // Stockage des informations de l'utilisateur et du token dans le localStorage
    localStorage.setItem("user", JSON.stringify(data.user));
    localStorage.setItem("token", data.token);
  } catch (error) {
    console.error(error);
  }
  // Redirection de l'utilisateur vers la page d'accueil
  return redirect("/");
};