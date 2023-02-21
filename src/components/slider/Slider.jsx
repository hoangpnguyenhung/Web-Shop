import React from "react";
import { sliderData } from "../../constants";
import PropTypes from "prop-types";

import SliderItem from "./sliderItem/SliderItem";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import "./slider.scss";
import { useState } from "react";
import { useEffect } from "react";
const Slider = (props) => {
  const [active, setActive] = useState(0);
  const timeOut = props.timeOut ? props.timeOut : 3000;
  const nextSlide = () => {
    active + 1 < sliderData.length ? setActive(active + 1) : setActive(0);
  };
  const prevSlide = () => {
    active - 1 >= 0 ? setActive(active - 1) : setActive(sliderData.length - 1);
  };

  useEffect(() => {
    if (props.auto) {
      const autoSlide = setInterval(() => {
        nextSlide();
      }, timeOut);
      return () => {
        clearInterval(autoSlide);
      };
    }
  }, [active]);

  return (
    <div className="slider-wrapper">
      <div className="slider">
        {sliderData.map((item, index) => (
          <SliderItem
            key={index}
            title={item.title}
            des={item.description}
            image={item.img}
            active={index === active}
          />
        ))}
        <div className="slider__control">
          <div className="slider__control__left" onClick={prevSlide}>
            <AiOutlineArrowLeft />
          </div>
          <div className="slider__control__right" onClick={nextSlide}>
            <AiOutlineArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};
Slider.propTypes = {
  auto: PropTypes.bool,
  timeOut: PropTypes.number,
};
export default Slider;
