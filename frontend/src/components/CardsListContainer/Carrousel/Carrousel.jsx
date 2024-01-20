/* eslint-disable */
import React, { useRef, useState, useNavigate } from "react";
import "./Carrousel.scss";
// Import Swiper React components
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
function Carrousel({ item, onCardClick }) {
  const data = item;
  const [swiperRef, setSwiperRef] = useState(false);
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className="swiper"
    >
      {data.map((item) => (
        <SwiperSlide
          key={item.id}
          style={{ backgroundImage: `url(${item.image})` }}
          onClick={() => {
            setSwiperRef(true);
            onCardClick(item);
          }}
        >
          {swiperRef}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carrousel;
