/* eslint-disable no-restricted-syntax */
import React, { useEffect, useState } from "react";
import "./Favorite.scss";

function Favorite() {
  const [listFavorite, setListFavorite] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/favorite`
        );
        const data = await response.json();

        const payload = JSON.parse(localStorage.getItem("user"));
        const yourFavorite = data.filter((el) => el.id === payload.id);
        console.log("Filtered data:", yourFavorite);
        setListFavorite(yourFavorite);

        console.log("Updated listFavorite:", yourFavorite);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="favorite-container">
      <button
        className="button-favorite"
        type="button"
        onClick={() => window.history.back()}
      >
        &lt;
      </button>
      <div className="contain-favorite">
        {listFavorite &&
          listFavorite.map((el) => (
            <div key={el.model_id}>
              {console.log("Data for current element (el):", el)}
              <button type="button">
                <img src={el.model_image} alt={el.models_name} />
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Favorite;
