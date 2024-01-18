/* eslint-disable */
import React, { useEffect, useState } from "react";
import Carusel from "./Carusel";
import SortButon from "./SortButon";
import "./cardList.scss";

const { VITE_BACKEND_URL } = import.meta.env;

function CardsList() {
  const [data, setData] = useState([]);
  const dataSoft = [
    {
      name: "hairColorOptions",
      style: [
        "Noir",
        "Brun foncé",
        "Brun",
        "Châtain",
        "Blond foncé",
        "Blonde",
        "Blond clair",
        "Roux",
        "Auburn",
        "Gris",
        "Blanc",
        "Autre",
      ],
    },
    {
      name: "haircutOptions",
      style: [
        "Court",
        "Moyen",
        "Long",
        "Dégradé",
        "Undercut",
        "Frange",
        "Queue de cheval",
        "Chignon",
        "Rasé sur les côtés",
        "Tresse",
        "Dreadlocks",
        "Autre",
      ],
    },
    {
      name: "skinTypeOptions",
      style: [
        "Peau normale",
        "Peau sèche",
        "Peau grasse",
        "Peau mixte",
        "Peau sensible",
        "Peau acnéique",
        "Peau mature",
        "Peau déshydratée",
        "Autre",
      ],
    },
    {
      name: "lipsTypeOptions",
      style: [
        "Lèvres pulpeuses",
        "Lèvres fines",
        "Lèvres épaisses",
        "Lèvres asymétriques",
        "Lèvres bien définies",
        "Lèvres naturelles",
        "Lèvres dessinées",
        "Lèvres en forme de cœur",
        "Lèvres en arc de Cupidon",
        "Lèvres uniformes",
        "Autre",
      ],
    },
  ];
  const [active, setActive] = useState(false);

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
  let categoriesSoftMap;

  if (data.length) {
    categories = Object.groupBy(data, ({ category }) => category);
  }
  const [dataMap, setDataMap] = useState();
  useEffect(() => {
    setDataMap(Object.groupBy(data, ({ category }) => category));
  }, [data]);
  useEffect(() => {
    let dataSortTrue = [];
    let dataSortFalse = [];
    for (let i = 0; i < Object.keys(categories).length; i++) {
      const dataSort = Object.values(categories)[i];
      dataSort.map((item) => {
        if (Object.values(item).includes(active)) {
          dataSortTrue.unshift(item);
        } else {
          dataSortFalse.unshift(item);
        }
      });
    }
    categoriesSoftMap = [...dataSortTrue, ...dataSortFalse];
    setDataMap(Object.groupBy(categoriesSoftMap, ({ category }) => category));
  }, [active]);

  const [styleContainer, setStyleContainer] = useState();
  console.log(dataMap);
  return (
    <div className="cardsList">
      <section className="soft-containers">
        {dataSoft.map((item, index) => (
          <div key={index} className="soft-cantainer">
            <button
              type="button"
              className="title-soft-style"
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
      {dataMap &&
        Object.entries(dataMap).map((item) => (
          <div key={item[1][0].id} style={{ width: "20%" }}>
            <button type="button" className="title-card-btn">
              {item[0]}
            </button>
            <Carusel item={item[1]} />
          </div>
        ))}
    </div>
  );
}

export default CardsList;
