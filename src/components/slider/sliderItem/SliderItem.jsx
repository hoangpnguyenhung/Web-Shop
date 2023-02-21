import React from "react";
import PropTypes from "prop-types";
import Button from "../../button/Button";
import "./sliderItem.scss";

const SliderItem = (props) => {
  return (
    <div>
      <div className={`slider__item ${props.active ? "active" : ""}`}>
        <div className="slider__item__content">
          <div className="slider__item__content__title">
            <span>{props.title}</span>
          </div>
          <div className="slider__item__content__description">
            <p>{props.des}</p>
          </div>
          <div className="slider__item__content__btn">
            <Button color="orange" animate="animate">
              Mua Hàng
            </Button>
          </div>
        </div>
        <div className="slider__item__image">
          <img src={props.image} alt="" />
        </div>
      </div>
    </div>
  );
};

SliderItem.propTypes = {};

export default SliderItem;
