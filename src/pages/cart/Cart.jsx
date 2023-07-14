import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Helmet from "../../components/helmet/Helmet";
import Button from "../../components/button/Button";
import "./cart.scss";
import { useSelector } from "react-redux";
import productData from "../../api/fake-api/products";
import CartItem from "../../components/cartItem/CartItem";
import numberWithCommas from "../../helper/numberWithCommas";
import { Link } from "react-router-dom";

const Cart = (props) => {
  const cartItem = useSelector((state) => state.cartItem.value);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartProducts, setCartProducts] = useState(
    productData.getCartProducts(cartItem)
  );
  console.log(cartProducts);
  useEffect(() => {
    setCartProducts(productData.getCartProducts(cartItem));
    setTotalProducts(
      cartProducts.reduce(
        (total, currentValue) => total + currentValue.quantily,
        0
      )
    );
    setTotalPrice(
      cartItem.reduce((total, item) => total + item.price * item.quantily, 0)
    );
  }, [cartItem]);
  return (
    <Helmet title="Giỏ hàng">
      <div className="cart">
        <div className="cart__info">
          <p className="cart__info__text">
            Bạn đang có {totalProducts} sản phẩm trong giỏ hàng
          </p>
          <div className="cart__info__price">
            <span>Thành tiền: </span>
            <span>{numberWithCommas(totalPrice)}</span>
          </div>
          <div className="cart__info__btn">
            <div className="cart__info__btn__order">
              <Button color="orange" size="block">
                đặt hàng
              </Button>
            </div>
            <div className="cart__info__btn__continue">
              <Link to="/products">
                <Button color="orange" size="block">
                  tiếp tục mua hàng
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="cart__list">
          {cartProducts.map((item, index) => (
            <CartItem product={item} key={index} />
          ))}
        </div>
      </div>
    </Helmet>
  );
};

Cart.propTypes = {};

export default Cart;
