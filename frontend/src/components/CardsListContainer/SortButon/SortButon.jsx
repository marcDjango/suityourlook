/* eslint-disable */
import React from "react";
import "./SortButon.scss";

function SortButon({ item, active, setActive, setStyleContainer }) {
  return (
    <div className="title-soft">
      {item.map((items, index) => (
        <button
          type="button"
          key={index}
          className="title-soft-btn"
          onClick={(e) => {
            setActive(e.target.textContent);
            setTimeout(() => {
              setStyleContainer();
            }, 200);
          }}
        >
          {items}
        </button>
      ))}
    </div>
  );
}

export default SortButon;
