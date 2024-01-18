/* eslint-disable */
// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react";
import "./Card.scss";
import model1 from "../../assets/images/model1.jpg";

function Card({ item }) {
  console.log(item);
  // const [data, setData] = useState([]);

  // useEffect(() => {https://media.discordapp.net/attachments/1197106714521129031/1197245472188936313/IMG_0219.png?ex=65ba90bc&is=65a81bbc&hm=406fb92a58c4fa8dbd8a24eecf2291c05a04448ed0f9048f6378c89fa4c292ef&=&format=webp&quality=lossless&width=526&height=936
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
