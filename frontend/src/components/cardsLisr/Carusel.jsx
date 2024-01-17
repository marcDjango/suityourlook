/* eslint-disable */
import React, { useRef, useState } from "react";
// Import Swiper React components
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../Card/Card";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
function Carusel({ item }) {
  const data = item;
  const [swiperRef, setSwiperRef] = useState(false);
  console.log();
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper"
    >
      {data.map((item, index) => (
        <SwiperSlide
          className={item.nome}
          key={index}
          style={{ backgroundImage: `url(${item.nom})` }}
          onClick={(e) => {
            setSwiperRef(true);
          }}
        >
          {swiperRef && <Card item={item} />}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carusel;
