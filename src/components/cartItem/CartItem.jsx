import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./cartItem.scss";
import { AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import numberWithCommas from "../../helper/numberWithCommas";
import { useDispatch } from "react-redux";
import {
  removeCartItem,
  updateCartItem,
} from "../../redux/features/cartItemSlice";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const [item, setItem] = useState(props.product);
  const [quantily, setQuantily] = useState(props.product.quantily);

  const updateQuatily = (type) => {
    if (type === "increase") {
      dispatch(updateCartItem({ ...item, quantily: quantily + 1 }));
    }
    if (type === "decrease") {
      dispatch(
        updateCartItem({
          ...item,
          quantily: quantily - 1 === 0 ? 1 : quantily - 1,
        })
      );
    }
  };
  useEffect(() => {
    setItem(props.product);
    setQuantily(props.product.quantily);
  }, [props.product]);
  return (
    <div className="cart__item">
      <div className="cart__item__image">
        <img src={item.product.image01} alt="" />
      </div>
      <div className="cart__item__info">
        <div className="cart__item__info__name">
          {`${item.product.title} - ${item.color} - ${item.size}`}
        </div>
        <div className="cart__item__info__price">
          {numberWithCommas(item.price)}
        </div>
        <div className="product__content__quantity cart__quantily">
          <div className="product__content__quantity__btn">
            <div
              className="product__content__quantity__btn__item"
              onClick={() => updateQuatily("decrease")}
            >
              <AiOutlineMinus />
            </div>
            <div className="product__content__quantily__btn__content">
              {Number(item.quantily)}
            </div>
            <div
              className="product__content__quantity__btn__item"
              onClick={() => updateQuatily("increase")}
            >
              <AiOutlinePlus />
            </div>
          </div>
        </div>
        <div
          className="cart__item__info__delete"
          onClick={() => dispatch(removeCartItem(item))}
        >
          <AiOutlineDelete />
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {};

export default CartItem;
