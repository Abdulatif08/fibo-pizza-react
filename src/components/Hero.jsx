import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { nextIcon, prevIcon, slide1, slide2 } from "../assets/data";
import { useState } from "react";

import "swiper/css";
import "swiper/css/autoplay";

export default function Hero() {
  const [customSwiper, setCustomSwiper] = useState(null);

  const nextSlide = () => {
    customSwiper?.slideNext();
  };

  const prevSlide = () => {
    customSwiper?.slidePrev();
  };

  return (
    <section>
      <div className="container">
        <Swiper
          className="w-full relative cursor-pointer"
          slidesPerView={1}
          loop
          autoplay={{ delay: 1500 }}
          modules={[Autoplay]}
          onInit={(swiperInstance) => setCustomSwiper(swiperInstance)}
          breakpoints={{
            640: { slidesPerView: 2 },
            868: { slidesPerView: 2 },
          }}
        >
          {[slide1, slide2, slide1, slide2].map((slide, index) => (
            <SwiperSlide key={index}>
              <img className="w-full h-auto" src={slide} alt={`slide-${index + 1}`} />
            </SwiperSlide>
          ))}

          <div className="control absolute inset-0 flex justify-between items-center">
            <button className="z-10" onClick={prevSlide}>
              <img src={nextIcon} alt="prev" />
            </button>
            <button className="z-10" onClick={nextSlide}>
              <img src={prevIcon} alt="next" />
            </button>
          </div>
        </Swiper>
      </div>
    </section>
  );
}
