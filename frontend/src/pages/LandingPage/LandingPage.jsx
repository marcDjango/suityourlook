/*eslint-disable*/
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LandingPage.scss";
import { useEffect } from "react";
import Section1 from "../../assets/images/model1.jpg";
import Section2 from "../../assets/images/model2.svg";
import Section3 from "../../assets/images/model3.svg";

function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const elementToAnimate = document.getElementsByClassName("section");

    const handleIntersection = (entries) => {
      console.log(entries);
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        } else {
          entry.target.classList.remove("active");
        }
      });
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    Array.from(elementToAnimate).forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleClick = () => {
    navigate("/list-cards");
  };

  return (
    <div className="landing-page-main-container">
      <div className="section-1 section">
        <img className="img-1" src={Section1} alt="" />
        <div className="text-1">
          <h2 className="title-1">
            Explorez l'avenir de la beaute avec Suit Your Look.
          </h2>
          <p className="first-p-1">
            Une experience inedite qui va au-dela des tendances, creant une
            connexion authentique entre vos clients et les produits L'Oreal.
          </p>
          <p className="second-p-1">
            Propulsez vos ventes en ligne en creant des experiences
            personnalisees qui connectent vos produits a l'authenticite de vos
            clients.
          </p>
          <button className="btn-1" type="button" onClick={handleClick}>
            En savoir plus
          </button>
        </div>
      </div>

      <div className="section-2 section">
        <img className="img-2" src={Section2} alt="" />
        <div className="text-2">
          <h2 className="title-2">
            Precision de l'Analyse, Résultats Époustouflants.
          </h2>
          <p className="first-p-2">
            En un clin d'oeil, l'app identifie le makeup utilise, Recommandant
            les produits L'Oreal pour recreer des looks captivants.
          </p>
          <p className="second-p-2">
            Chaque recommandation de produit est adaptee a la morphologie, a la
            teinte de peau et a la personnalite uniques de chaque utilisateur.
          </p>

          <Link
            className="btn-2"
            type="button"
            to="/tuto"
            style={{ textDecoration: "none" }}
          >
            Tester notre IA
          </Link>
        </div>
      </div>

      <div className="section-3 section">
        <img className="img-3" src={Section3} alt="" />
        <div className="text-3">
          <h2 className="title-3">
            Optimisez Vos Ventes en Ligne avec Suit Your Look.
          </h2>
          <p className="first-p-3">
            Maximisez l'impact des produits L'Oreal en integrant Suit Your Look,
            la cle de votre succes commercial alliant Intelligence Artificielle,
            recommandations personnalisees, et qualite.
          </p>

          <button className="btn-3" type="button" onClick={handleClick}>
            En savoir plus
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
