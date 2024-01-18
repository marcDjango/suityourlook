/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-restricted-syntax */
import React, { useEffect, useState, useRef } from "react";
import "./Card.scss";
import PropTypes from "prop-types";

const { VITE_BACKEND_URL } = import.meta.env;

function Card({ item, isCard, setIsCard }) {
  const [data, setData] = useState([]);
  console.log("testdata", item);
  const cardRef = useRef(null);

  useEffect(() => {
    if (isCard && cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isCard]);

  useEffect(() => {
    const fetchModelsProducts = async () => {
      try {
        const response = await fetch(`${VITE_BACKEND_URL}/api/models-products`);
        if (!response.ok) {
          throw new Error("Erreur réseau");
        }

        const dataDb = await response.json();
        setData(dataDb);
      } catch (err) {
        console.error(err);
      }
    };

    fetchModelsProducts();
  }, []);

  const filteredProducts = data.filter((product) => product.id === item.id);

  const groupedProducts = filteredProducts.reduce((acc, product) => {
    if (!acc[product.product_category]) {
      acc[product.product_category] = [];
    }

    acc[product.product_category].push(product);

    return acc;
  }, {});

  console.log("data", data);
  console.log("filteredProducts", filteredProducts);
  console.log("groupedProducts", groupedProducts);
  console.log("image", item.image);

  return (
    <div
      className="modal"
      role="button"
      tabIndex={0}
      onClick={() => setIsCard(!isCard)}
      onKeyDown={(event) => {
        if (event.key === "Enter") setIsCard(!isCard);
      }}
    >
      <div
        className="main-card"
        ref={cardRef}
        role="button"
        tabIndex={0}
        onClick={(e) => {
          e.stopPropagation();
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            e.stopPropagation();
          }
        }}
      >
        <div className="image-main-card">
          <img className="model-image" src={item.image} alt="modele" />
        </div>
        <div className="text-main-card">
          {filteredProducts &&
            filteredProducts.map((product) => (
              <div key={product.product_id}>
                <h3>{product.product_category}</h3>
                <p>{product.product_name}</p>
                <p>{product.brand}</p>
                <p>{product.product_price}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string, // Add this line
    // other properties of item
  }).isRequired,
};
