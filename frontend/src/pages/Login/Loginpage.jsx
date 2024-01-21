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

  return (
    <div className="login-register-page">
      <div className="login-page">
        <div className="input-block">
          <div className="login-input">
            <h1 className="login-title">Se Connecter</h1>
            <Form className="form" method="post" action="/login" replace>
              <Input
                className="input"
                labelName="email"
                type="email"
                labelText="Mon adresse e-mail"
                maxLength="45"
              />
              <Input
                className="input"
                labelName="password"
                type="password"
                labelText="Mot de passe"
                maxLength="455"
              />
              <button
                className="continue"
                type="submit"
                name="intent"
                value="add"
              >
                CONTINUE
              </button>
            </Form>
          </div>
        </div>
        <div className="logout-page">
          <button className="logout-button" type="submit" onClick={handleClick}>
            Déconnexion
          </button>
        </div>
      </div>
      <div className="register-page">
        <div className="register-input">
          <h1 className="register-title">Créer un compte</h1>
          <Form className="form" method="post" action="/login" replace>
            <Input
              className="input"
              labelName="firstname"
              type="firstname"
              labelText="Prénom"
              maxLength="45"
            />
            <Input
              className="input"
              labelName="lastname"
              type="lastname"
              labelText="Nom"
              maxLength="45"
            />
            <Input
              className="input"
              labelName="email"
              type="email"
              labelText="Votre e-mail"
              maxLength="45"
            />
            <Input
              className="input"
              labelName="password"
              type="password"
              labelText="Mot de passe"
              maxLength="255"
            />
            <Input
              className="input"
              labelName="passwordConfirme"
              type="password"
              labelText="Confirmer votre mdp"
              maxLength="255"
            />
            <label className="label" htmlFor="genre">
              Genre
              <select className="select" name="genre" id="genre">
                <option>Mr</option>
                <option>Mme</option>
              </select>
            </label>
            <Input
              className="input"
              labelName="phone"
              type="phone"
              labelText="Numéro de téléphone"
              maxLength="10"
            />

            <button className="continue" type="submit">
              INSCRIPTION
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
// Fonction asynchrone pour gérer l'authentification
export const authenticate = async ({ request }) => {
  // Récupération des données du formulaire depuis la requête

  try {
    const form = await request.formData();

    // Conversion des données du formulaire en objet clé-valeur

    const intent = form.get("intent");
    if (intent === "add") {
      const formData = Object.fromEntries(form);
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
    } else {
      const data = Object.fromEntries(form);

      const formData = {
        ...data,
        is_admin: 0,
      };
      if (formData.genre === "Mr") {
        formData.genre = 1;
      } else {
        formData.genre = 0;
      }
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/users`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (data.password !== data.passwordconfirme) {
        throw new Error(
          "Le mot de passe ou l'adresse e-mail que vous avez entré est incorrect. Veuillez vérifier vos informations et réessayer. Assurez-vous que votre adresse e-mail est correctement saisie et que le mot de passe respecte les critères requis."
        );
      }

      if (!response.ok) {
        throw new Error("cant fetch user");
      }
      return redirect("/");
    }
  } catch (error) {
    console.error(error);
  }
  // Redirection de l'utilisateur vers la page d'accueil
  return redirect("/");
};
