import React from "react";
import "./Card.scss";
import model1 from "../../assets/images/model1.jpg";

function Card() {
  return (
    <div className="modal">
      <div className="main-card">
        <div className="image-main-card">
          <img src={model1} alt="prise" />
        </div>
        <div className="text-main-card">
          <div className="make-up">Maquillage :</div>
          <div className="skin-care">Soins de la peau :</div>
          <div className="hair-care">Soins des cheveux :</div>
          <div className="shampoo">Shampooing :</div>
          <div className="fragrance">Parfum :</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
