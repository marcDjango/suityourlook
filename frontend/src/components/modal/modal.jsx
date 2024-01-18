import React from "react";
import "./modal.scss";

function Modal() {
  return (
    <div className="contain-modal">
      <div className="body-modal" id="view-modal">
        <div className="header-body-modal">close</div>
        <div className="main-body-modal">
          <div className="Card" />
          <div className="Card" />
          <div className="Card" />
          <div className="Card" />
          <div className="Card" />
          <div className="Card" />
          <div className="Card" />
        </div>
      </div>
    </div>
  );
}

export default Modal;
