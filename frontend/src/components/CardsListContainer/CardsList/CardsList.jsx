/* eslint-disable */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carrousel from "../Carrousel/Carrousel";
import SortButon from "../SortButon/SortButon";
import Modal from "../../modal/modal";
import Card from "../../Card/Card";
import "./CardsList.scss";

const { VITE_BACKEND_URL } = import.meta.env;

function CardsList() {
  // STATES
  const [data, setData] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [isCard, setIsCard] = useState(false);
  const [dataCategories, setDataCategories] = useState([]);
  const [dataMap, setDataMap] = useState();
  const [active, setActive] = useState(false);
  const [styleContainer, setStyleContainer] = useState();

  const dataSoft = [
    {
      name: "Cheveux",
      style: [
        "Noir",
        "Brun foncé",
        "Brun",
        "Châtain",
        "Blond",
        "Roux",
        "Gris",
        "Coloré",
        "Autre",
      ],
    },
    {
      name: "Coiffure",
      style: [
        "Court",
        "Long",
        "Ondulé",
        "Undercut",
        "Frange",
        "Bohème",
        "Chignon",
        "Tresse",
        "Afro",
        "Autre",
      ],
    },
    {
      name: "Peau",
      style: ["Pâle", "Claire", "Medium", "Mate", "Foncée", "Autre"],
    },
    {
      name: "Lèvres",
      style: ["Pulpeuse", "Fine", "Naturelle", "Dessinée", "En cœur", "Autre"],
    },
  ];

  useEffect(() => {
    const fetchModelsProducts = async () => {
      try {
        const response = await fetch(`${VITE_BACKEND_URL}/api/models`);
        if (!response.ok) {
          throw new Error("Erreur réseau");
        }

        const result = await response.json();

        setData(result);
      } catch (err) {
        console.error(err);
      }
    };
    fetchModelsProducts();
  }, []);

  const categories = data.length
    ? Object.groupBy(data, ({ category }) => category)
    : [];

  useEffect(() => {
    setDataMap(Object.groupBy(data, ({ category }) => category));
  }, [data]);

  useEffect(() => {
    let dataSortTrue = [];
    let dataSortFalse = [];
    for (let i = 0; i < Object.keys(categories).length; i++) {
      const dataSort = Object.values(categories)[i];
      dataSort.forEach((item) => {
        if (Object.values(item).includes(active)) {
          dataSortTrue.unshift(item);
        } else {
          dataSortFalse.unshift(item);
        }
      });
    }
    const categoriesSoftMap = [...dataSortTrue, ...dataSortFalse];
    setDataMap(Object.groupBy(categoriesSoftMap, ({ category }) => category));
  }, [active]);

  // Modal
  const handleCardOpen = (item) => {
    setDataCategories([item]);
    setIsCard(true);
    setIsModal(false);
  };

  // ---------------------- RENDER ----------------------
  return (
    // <div className="mega-container">
    <>
      <div className="cardsList-main-container">
        {isModal && (
          <Modal
            setIsModal={setIsModal}
            isModal={isModal}
            dataCategories={dataCategories}
            onCardClick={handleCardOpen}
          />
        )}
        {isCard && (
          <Card
            item={dataCategories[0]}
            setIsCard={setIsCard}
            isCard={isCard}
          />
        )}
        <section className="sort-container">
          {dataSoft.map((item, index) => (
            <div
              key={index}
              className="sort-titles-container"
              style={{ color: "green" }}
            >
              <button
                type="button"
                className="sort-titles"
                onClick={(e) => {
                  styleContainer === e.target.textContent
                    ? setStyleContainer()
                    : setStyleContainer(e.target.textContent);
                }}
              >
                {item.name}
              </button>

              {styleContainer === item.name && (
                <SortButon
                  item={item.style}
                  active={active}
                  setActive={setActive}
                  setStyleContainer={setStyleContainer}
                />
              )}
            </div>
          ))}
        </section>

        <div className="galerie-main-container">
          {dataMap &&
            Object.entries(dataMap).map((entry) => {
              const categoryKey = entry[0];
              const categoryItems = entry[1];

              return (
                <div
                  key={categoryItems[0].id} // Utilisez directement categoryItems[0].id
                  style={{ width: "25%" }}
                  className="galerie-cards"
                >
                  <button
                    type="button"
                    className="galerie-title"
                    onClick={() => {
                      setDataCategories(categoryItems);
                      setIsModal(!isModal);
                    }}
                  >
                    {categoryKey}
                  </button>
                  <Carrousel
                    item={categoryItems}
                    onCardClick={handleCardOpen}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </>
    // </div>
  );
}

export default CardsList;
