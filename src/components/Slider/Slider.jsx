import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { fetchSlider } from "../../redux/Slider/SliderSlice";
const Slider = () => {
  let slider = useSelector((state) => state.slider.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSlider());
  }, []);
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {slider?.map((elem, idx) => {
          return (
            <SwiperSlide className="bg-red-50" key={`${elem.id}-${idx}`}>
              <img src={elem.image} alt={elem.alt} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Slider;
