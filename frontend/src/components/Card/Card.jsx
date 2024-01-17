import React from "react";
import "./Card.scss";
import model1 from "../../assets/images/model1.jpg";

function Card() {
  return (
    <div className="modal">
      <div className="main-card">
        <img src={model1} alt="prise" />
      </div>
    </div>
  );
}

export default Card;
