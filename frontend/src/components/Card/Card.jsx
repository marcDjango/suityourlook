// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react";
import "./Card.scss";
import model1 from "../../assets/images/model1.jpg";

function Card() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchModelsProducts = async () => {
  //     try {
  //       const response = await fetch("/api/models_products");
  //       if (!response.ok) {
  //         throw new Error("Erreur réseau");
  //       }

  //       const data = await response.json();
  //       setData(data);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  //   fetchModelsProducts();
  // }, []);

  return (
    <div className="modal">
      <div className="main-card">
        <div className="image-main-card">
          <img src={model1} alt="prise" />
        </div>
        <div className="text-main-card">
          <div className="make-up">
            <h3>Maquillage</h3>
          </div>
          <div className="skin-care">
            <h3>Soins de la peau</h3>
          </div>
          <div className="hair-care">
            <h3>Soins des cheveux</h3>
          </div>
          <div className="shampoo">
            <h3>Shampooing</h3>
          </div>
          <div className="fragrance">
            <h3>Parfum</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
