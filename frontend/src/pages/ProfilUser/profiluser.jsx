/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
/*eslint-disable*/
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./profiluser.scss";

function Profiluser() {
  const [isChangeProfil, setIsChangeProfil] = useState(true);
  const [isShowProfil, setIsShowProfil] = useState(false);
  const isUserconnect = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
  };

  const isAdminModel = () => {
    if (localStorage.getItem("user")) {
      return navigate("/admin-form-model");
    } else {
      console.log("User not found in local storage or token removal failed.");
    }
  };

  const isAdminProduct = () => {
    if (localStorage.getItem("user")) {
      return navigate("/admin-form-product");
    } else {
      console.log("User not found in local storage or token removal failed.");
    }
  };

  const UpdateProfil = async ({ request }) => {
    // Récupération des données du formulaire depuis la requête

    try {
      const form = await request.formData();
      if (isUserconnect.id) {
        const formData = Object.fromEntries(form);
        // Envoi d'une requête POST au backend pour l'authentification
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/users/:id`,
          {
            method: "PUT",
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
      }
    } catch (error) {
      console.error(error);
    }
    // Redirection de l'utilisateur vers la page d'accueil
  };
  const handleNavigate = () => {
    navigate("/favorite");
  };

  return (
    <div className="contain-profilpage">
      <div className="contain-profilpage-body">
        <div className="contain-profilpage-header">
          Home {">"} Mon Compte {">"} Information Du Compte
        </div>

        <div className="contain-profilpage-main">
          {/* //Debut de la side bar */}
          <div className="side-profilpage">
            <div className="side-name">Bonjour Théo Napoly</div>
            <div className="side-details">Détails du compte client</div>
            <div className="side-navigation">
              <div className="side-links">
                {" "}
                <button className="btn-link">MON COMPTE</button>
                <p>&gt;</p>
              </div>
              <div className="side-links">
                {" "}
                <button className="btn-link">HISTORIQUE DES COMMANDES</button>
                <p>&gt;</p>
              </div>
              <div className="side-links">
                {" "}
                <button className="btn-link">CARNET D'ADRESSES</button>
                <p>&gt;</p>
              </div>
              <div className="side-links">
                {" "}
                <button className="btn-link" onClick={handleNavigate}>
                  LISTE DES FAVORIS
                </button>
                <p>&gt;</p>
              </div>
              <div className="side-links">
                {" "}
                <button className="btn-link" onClick={isAdminProduct}>
                  ADMIN PRODUCTS
                </button>
                <p>&gt;</p>
              </div>
              <div className="side-links">
                {" "}
                <button className="btn-link" onClick={isAdminModel}>
                  ADMIN MODELS
                </button>
                <p>&gt;</p>
              </div>
            </div>
            <div className="side-button">
              <button
                type="button"
                className="btn-deconnexion"
                onClick={handleClick}
              >
                DECONNEXION
              </button>
            </div>
          </div>
          {/* //Debut du contenu du body */}
          <div className="body-profilpage">
            <div className="main-title">
              <h2>Options du compte & inscription</h2>
            </div>

            <div className="main-body">
              {isShowProfil && (
                <>
                  {" "}
                  <form>
                    <div className="main-contain-action">
                      <h4>MON COMPTE</h4>
                      <div className="main-contain-button">
                        <button type="button" className="btn-action">
                          MODIFIER LES INFORMATIONS
                        </button>
                        <button type="button" className="btn-action">
                          CHANGER LE MOT DE PASSE
                        </button>
                      </div>
                    </div>
                    <div className="main-contain-form-login">
                      <div className="row-form-login">
                        <label htmlFor="" className="label-form-input">
                          Nom
                        </label>
                        <input type="text" placeholder="Romero Marcelo" />
                      </div>
                      <div className="row-form-login">
                        <label htmlFor="" className="label-form-input">
                          Adresse email
                        </label>
                        <input
                          type="text"
                          placeholder="marceloromero2016ar@gmail.com"
                        />
                      </div>
                    </div>
                  </form>
                </>
              )}

              {isChangeProfil && (
                <>
                  <div className="main-contain-action">
                    <h4>MODIFIER LES INFORMATIONS</h4>
                  </div>
                  <div className="main-contain-form-login">
                    <label className="label" htmlFor="genre">
                      Genre
                      <select className="select" name="genre" id="genre">
                        <option>Mr</option>
                        <option>Mme</option>
                      </select>
                    </label>
                    <div className="row-form-login">
                      <label htmlFor="" className="label-form-input">
                        Prenom*
                      </label>
                      <input type="text" placeholder="Théo" />
                    </div>
                    <div className="row-form-login">
                      <label htmlFor="" className="label-form-input">
                        Nom*
                      </label>
                      <input type="text" placeholder="Napoly" />
                    </div>
                    <div className="row-form-login">
                      <label htmlFor="" className="label-form-input">
                        Numéro de téléphone
                      </label>
                      <input type="text" placeholder="0609330543" />
                    </div>
                    <div className="row-form-login">
                      <label htmlFor="" className="label-form-input">
                        Votre e-mail*
                      </label>
                      <input type="text" placeholder="theonapoly@me.com" />
                    </div>
                    <div className="row-form-login">
                      <label htmlFor="" className="label-form-input">
                        Confirmer votre e-mail*
                      </label>
                      <input type="text" placeholder="theonapoly@me.com" />
                    </div>
                  </div>
                  <button type="button" className="btn-action-modif">
                    ENREGISTRER LES MODIFICATIONS
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profiluser;
