/* eslint-disable */
import React from "react";

function SortButon({ item, active, setActive, setStyleContainer }) {
  return (
    <div className="title-soft">
      {item.map((items, index) => (
        <button
          type="button"
          key={index}
          className={
            active === items ? "title-soft-btn-active" : "title-soft-btn"
          }
          onClick={(e) => {
            setActive(e.target.textContent);
            const timer = setTimeout(() => {
              setStyleContainer();
            }, [300]);
          }}
        >
          {items}
        </button>
      ))}
    </div>
  );
}

export default SortButon;
