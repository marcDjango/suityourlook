/* eslint-disable no-restricted-syntax */
import React, { useEffect, useState } from "react";
import "./Card.scss";
import model1 from "../../assets/images/model1.jpg";

const { VITE_BACKEND_URL } = import.meta.env;

function Card() {
  const [data, setData] = useState([]);
  const [selectedModelId, setSelectedModelId] = useState(null);
  const dataCarousel = 3;

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

  useEffect(() => {
    setSelectedModelId(dataCarousel);
  }, [dataCarousel]);

  const filteredProducts = data.filter(
    (product) => product.id === selectedModelId
  );

  const groupedProducts = filteredProducts.reduce((acc, product) => {
    if (!acc[product.product_category]) {
      acc[product.product_category] = [];
    }

    acc[product.product_category].push(product);

    return acc;
  }, {});

  console.log("data", data);
  console.log("selectedModelId", selectedModelId);
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
