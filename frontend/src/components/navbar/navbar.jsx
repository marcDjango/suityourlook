import React from "react";
import logo from "../../assets/logo.png";
import "./navbar.css";

function Navbar() {
  const categories = [
    "NOS OFFRES",
    "MAQUILLAGE",
    "SOIN",
    "COLORATION",
    "CHEVEUX",
    "HOME",
    "SERVICES EXCLUSIFS",
    "NOS ENGAGEMENTS",
  ];
  return (
    <div>
      <div className="header-navbar-main">
        <div className="header-navbar">
          <div className="header-navbar-left">
            <p>Besoin d'aide?</p>
          </div>
          <img className="image-logo" src={logo} alt="" />
          <div className="header-navbar-rigth">
            <p>Inscription newsletter</p>
            <button type="button" className="btn-moncompte">
              Mon compte
            </button>
            <p>Mon panier (0)</p>
          </div>
        </div>
      </div>
      <div className="contain-navbar-main">
        <div className="contain-navbar">
          <ul>
            {categories.map((lien) => (
              <li key={lien}>{lien}</li>
            ))}
          </ul>
          <button type="button" className="btn-recherche">
            Recherche un produit...
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
