import React from "react";
import PropTypes from "prop-types";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import numberWithCommas from "../../helper/numberWithCommas";
import "./productCard.scss";
const ProductItem = (props) => {
  return (
    <div className="product__card">
      <Link to={`/products/${props.slug}`}>
        <div className="product__card__images">
          <div className="product__card__images__img1">
            <img src={props.img1} alt="" />
          </div>
          <div className="product__card__images__img2">
            <img src={props.img2} alt="" />
          </div>
        </div>
        <h1 className="product__card__title">{props.title}</h1>
        <div className="product__card__price">
          <span className="product__card__price--new">
            {numberWithCommas(props.price)}
          </span>
          <span className="product__card__price--old">
            {numberWithCommas((props.price * 50) / 100)}
          </span>
        </div>
        <div className="product__card__btn">
          <Button color="orange" size="sm" animate="animate">
            mua hàng
          </Button>
        </div>
      </Link>
    </div>
  );
};

ProductItem.propTypes = {};

export default ProductItem;
