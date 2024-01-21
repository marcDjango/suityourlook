/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/*eslint-disable*/
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCounter } from "../context/CurrentBasketContext";
import logo from "../../assets/logo.png";
import basketnavbar from "../../assets/basket.svg";

import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const { currentBasket } = useCounter();
  const navigate = useNavigate();

  const handleNavigation = (lien) => {
    if (lien === "HOME") {
      navigate("/");
    } else {
      // Gérer la navigation pour les autres liens si nécessaire
    }
  };
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

  const token = localStorage.getItem("token");
  const handleClickRegister = () => {
    if (!token) {
      return navigate("/login");
    }

    return navigate("/profil");
  };
  return (
    <div>
      <div className="header-navbar-main">
        <div className="header-navbar">
          <div className="header-navbar-left">
            <p>Besoin d'aide?</p>
          </div>
          <img className="nav-img" src={logo} alt="" />
          <div className="header-navbar-rigth">
            <p>Inscription newsletter</p>
            <button
              type="button"
              className="btn-moncompte"
              onClick={handleClickRegister}
            >
              Mon compte
            </button>
            <p>Mon panier ({currentBasket})</p>
            <img className="icon-basket" src={basketnavbar} alt="basket" />
          </div>
        </div>
      </div>
      <div className="contain-navbar-main">
        <div className="contain-navbar">
          <ul>
            {categories.map((lien) => (
              <li key={lien} onClick={() => handleNavigation(lien)}>
                {lien}
              </li>
            ))}
            <ul>
              <Link to="/list-cards">Suit Your Look</Link>
            </ul>
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
