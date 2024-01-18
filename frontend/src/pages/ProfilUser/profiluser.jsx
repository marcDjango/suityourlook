/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React, { useState } from "react";
import "./profiluser.scss";

function Profiluser() {
  const [isChangeProfil, setIsChangeProfil] = useState(true);
  const [isShowProfil, setIsShowProfil] = useState(false);
  return (
    <div className="contain-profilpage">
      <div className="contain-profilpage-body">
        <div className="contain-profilpage-header">
          Home `{">"}` Mon Compte `{">"}` Information Du Compte{" "}
        </div>

        <div className="contain-profilpage-main">
          {/* //Debut de la side bar */}
          <div className="side-profilpage">
            <div className="side-name">Bonjour Romero Marcelo</div>
            <div className="side-details">Détails du compte client</div>
            <div className="side-navigation">
              <div className="side-links">
                {" "}
                <button className="btn-link">MON COMPTE</button>
                <p>`&gt;`</p>
              </div>
              <div className="side-links">
                {" "}
                <button className="btn-link">HISTORIQUE DES COMMANDES</button>
                <p>`&gt;`</p>
              </div>
              <div className="side-links">
                {" "}
                <button className="btn-link">CARNET D'ADRESSES</button>
                <p>`&gt;`</p>
              </div>
              <div className="side-links">
                {" "}
                <button className="btn-link">LISTE DES FAVORIS</button>
                <p>`&gt;`</p>
              </div>
            </div>
            <div className="side-button">
              <button type="button" className="btn-deconnexion">
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
                  <div className="main-contain-action">
                    <h4>MON COMPTE</h4>
                    <div className="main-contain-button">
                      <button type="button" className="btn-action">
                        MODIFIER LES INSFORMATIONS
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
                </>
              )}

              {isChangeProfil && (
                <>
                  <div className="main-contain-action">
                    <h4>MODIFIER LES INFORMATIONS</h4>
                  </div>
                  <div className="main-contain-form-login">
                    <div className="row-form-login">
                      <label htmlFor="" className="label-form-input">
                        Prenom*
                      </label>
                      <input type="text" placeholder="Marcelo" />
                    </div>
                    <div className="row-form-login">
                      <label htmlFor="" className="label-form-input">
                        Nom*
                      </label>
                      <input type="text" placeholder="Romero" />
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
                      <input
                        type="text"
                        placeholder="marceloromero2016ar@gmail.com"
                      />
                    </div>
                    <div className="row-form-login">
                      <label htmlFor="" className="label-form-input">
                        Confirmer votre e-mail*
                      </label>
                      <input
                        type="text"
                        placeholder="marceloromero2016ar@gmail.com"
                      />
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
