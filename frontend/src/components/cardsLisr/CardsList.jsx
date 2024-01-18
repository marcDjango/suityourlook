/* eslint-disable */
import React, { useEffect, useState } from "react";
import Carusel from "./Carusel";
// import Modal from "../modal/modal";
import "./cardList.scss";

import {
  hairColorOptions,
  haircutOptions,
  skinTypeOptions,
  lipsTypeOptions,
} from "../../data/modelsData";

const { VITE_BACKEND_URL } = import.meta.env;

function CardsList() {
  const [data, setData] = useState([]);
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

  return (
    <div className="cardsList">
      {/* <section>
        {dataSoft.map((item) => (
          <h1>name</h1>
        ))}
      </section> */}
      {categories &&
        Object.entries(categories).map((item) => (
          <div key={item[1][0].id} style={{ width: "20%" }}>
            <button type="button">{item[0]}</button>
            <Carusel item={item[1]} />
          </div>
        ))}
    </div>
  );
}

export default CardsList;
