/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */

import React, { useEffect, useRef } from "react";
import "./modal.scss";

function Modal({ isModal, setIsModal, dataCategories, onCardClick }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isModal && modalRef.current) {
      modalRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isModal, dataCategories]);
  // eslint-disable-next-line no-restricted-syntax
  console.log("TEST", dataCategories);
  return (
    <div className="contain-modal" onClick={() => setIsModal(!isModal)}>
      <div
        ref={modalRef}
        className="body-modal"
        id="view-modal"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="main-body-modal">
          {dataCategories.map((element) => (
            <div
              key={element.id}
              className="Card"
              onClick={() => onCardClick(element)}
            >
              <img src={element.image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Modal;
