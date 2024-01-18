/* eslint-disable */
import React, { useRef, useState, useNavigate } from "react";
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
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper"
    >
      {data.map((item) => (
        <SwiperSlide
          key={item.id}
          style={{ backgroundImage: `url(${item.image})` }}
          onClick={() => {
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
