import React, { useEffect, useState } from "react";
import Carusel from "./Carusel";
import "./cardList.scss";
import Card from "../Card/Card";
import Modal from "../modal/modal";

import {
  hairColorOptions,
  haircutOptions,
  skinTypeOptions,
  lipsTypeOptions,
} from "../../data/modelsData";

const { VITE_BACKEND_URL } = import.meta.env;

function CardsList() {
  const [data, setData] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [isCard, setIsCard] = useState(false);
  const [dataCategories, setDataCategories] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const dataSoft = [
    hairColorOptions,
    haircutOptions,
    skinTypeOptions,
    lipsTypeOptions,
  ];

  useEffect(() => {
    const fetchModelsProducts = async () => {
      try {
        const response = await fetch(`${VITE_BACKEND_URL}/api/models`);
        if (!response.ok) {
          throw new Error("Erreur réseau");
        }

        const resalt = await response.json();
        setData(resalt);
      } catch (err) {
        console.error(err);
      }
    };
    fetchModelsProducts();
  }, []);
  let categories = [];
  if (data.length) {
    categories = Object.groupBy(data, ({ category }) => category);
  }

  const handleCardOpen = (item) => {
    setDataCategories([item]);
    setIsCard(true);
  };

  return (
    <div className="cardsList">
      {categories &&
        Object.entries(categories).map((entry) => {
          const categoryKey = entry[0];
          const categoryItems = entry[1];

          return (
            <div key={categoryItems[0].id} style={{ width: "20%" }}>
              <button
                type="button"
                onClick={() => {
                  setDataCategories(categoryItems);
                  setIsModal(!isModal);
                }}
              >
                {categoryKey}
              </button>
              <Carusel item={categoryItems} onCardClick={handleCardOpen} />
            </div>
          );
        })}
      {isModal && (
        <Modal
          setIsModal={setIsModal}
          isModal={isModal}
          dataCategories={dataCategories}
        />
      )}
      {isCard && (
        <Card item={dataCategories[0]} setIsCard={setIsCard} isCard={isCard} />
      )}
    </div>
  );
}

export default CardsList;
