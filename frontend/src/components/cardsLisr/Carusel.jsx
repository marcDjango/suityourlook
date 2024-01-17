/* eslint-disable */
import React, { useRef, useState } from "react";
// Import Swiper React components
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
function Carusel() {
  const data = [
    {
      nom: "https://www.loreal-paris.fr/dw/image/v2/BHHX_PRD/on/demandware.static/-/Sites-oap-fr-ng-Library/default/dw7cba0f40/images/landing-page/offress-peciales/Exclusive-offer-pages-4_DESK-opt.jpg?sw=1998&sh=1126&sm=cut&q=70",
    },
    {
      nom: "https://www.loreal-paris.fr/dw/image/v2/BHHX_PRD/on/demandware.static/-/Sites-oap-fr-ng-Library/default/dw7cba0f40/images/landing-page/offress-peciales/Exclusive-offer-pages-4_DESK-opt.jpg?sw=1998&sh=1126&sm=cut&q=70",
    },
    {
      nom: "https://www.loreal-paris.fr/dw/image/v2/BHHX_PRD/on/demandware.static/-/Sites-oap-fr-ng-Library/default/dw7cba0f40/images/landing-page/offress-peciales/Exclusive-offer-pages-4_DESK-opt.jpg?sw=1998&sh=1126&sm=cut&q=70",
    },
    {
      nom: "https://www.loreal-paris.fr/dw/image/v2/BHHX_PRD/on/demandware.static/-/Sites-oap-fr-ng-Library/default/dw7cba0f40/images/landing-page/offress-peciales/Exclusive-offer-pages-4_DESK-opt.jpg?sw=1998&sh=1126&sm=cut&q=70",
    },
  ];
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper"
    >
      {data.map((item) => (
        <SwiperSlide style={{ backgroundImage: `url(${item.nom})` }}>
          <h1>{item.nom}</h1>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carusel;
