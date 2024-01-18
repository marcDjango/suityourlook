/* eslint-disable no-restricted-syntax */
import React, { useEffect, useState } from "react";
import "./Card.scss";
import PropTypes from "prop-types";
import model1 from "../../assets/images/model1.jpg";

const { VITE_BACKEND_URL } = import.meta.env;

function Card({ item }) {
  const [data, setData] = useState([]);
  console.log("testdata", item);

  useEffect(() => {
    const fetchModelsProducts = async () => {
      try {
        const response = await fetch(`${VITE_BACKEND_URL}/api/models/products`);
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

  // useEffect(() => {
  //   setSelectedModelId(dataCarousel);
  // }, [dataCarousel]);

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

  return (
    <div className="modal">
      <div className="main-card">
        <div className="image-main-card">
          <img className="model-image" src={model1} alt="modele" />
        </div>
        <div className="text-main-card">
          {filteredProducts.map((product) => (
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
    // other properties of item
  }).isRequired,
};
