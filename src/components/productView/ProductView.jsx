import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Button from "../button/Button";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import numberWithCommas from "../../helper/numberWithCommas";
import { addItem } from "../../redux/features/cartItemSlice";
import "./productView.scss";
import { useNavigate } from "react-router-dom";

const ProductView = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [previewImg, setPreviewImg] = useState(product.image01);
  const [color, setColor] = useState(null);
  const [size, setSize] = useState(null);
  const [quantily, setQuantily] = useState(1);
  const [descriptionExpand, setDescriptionExpand] = useState(false);

  const updateQuantily = (type) => {
    if (type === "increase") {
      setQuantily(quantily + 1);
    } else {
      setQuantily(quantily - 1 < 1 ? "1" : quantily - 1);
    }
  };

  if (!product) {
    product = {
      title: "",
      price: "",
      image01: null,
      image02: null,
      categorySlug: "",
      colors: [],
      slug: "",
      size: [],
      description: "",
    };
  }

  const check = () => {
    if (color === null) {
      alert("Vui lòng chọn màu!");
      return false;
    }
    if (size === null) {
      alert("Vui lòng chọn size!");
      return false;
    }
    return true;
  };

  const addCart = () => {
    if (check()) {
      const newItem = {
        slug: product.slug,
        color: color,
        size: size,
        price: product.price,
        quantily: quantily,
      };
      if (dispatch(addItem(newItem))) {
        alert("Thành công!");
      } else {
        alert("Thất bại!");
      }
    }
  };
  const goToCart = () => {
    if (check()) {
      const newItem = {
        slug: product.slug,
        color: color,
        size: size,
        price: product.price,
        quantily: quantily,
      };
      if (dispatch(addItem(newItem))) {
        navigate("/cart");
      } else {
        alert("Thất bại!");
      }
    }
  };
  useEffect(() => {
    setPreviewImg(product.image01);
    setQuantily(1);
    setColor(null);
    setSize(null);
  }, [product]);
  return (
    <div className="product">
      <div className="product__images">
        <div className="product__images__left">
          <div
            className="product__images__left__img1"
            onClick={() => setPreviewImg(product.image01)}
          >
            <img src={product.image01} alt="" />
          </div>
          <div
            className="product__images__left__img2"
            onClick={() => setPreviewImg(product.image02)}
          >
            <img src={product.image02} alt="" />
          </div>
        </div>
        <div className="product__images__right">
          <img src={previewImg} alt="" />
        </div>
        <div
          className={`product-description ${descriptionExpand ? "expand" : ""}`}
        >
          <div className="product-description__title">Chi tiết sản phẩm</div>
          <div
            className={`product-description__content `}
            dangerouslySetInnerHTML={{ __html: product.description }}
          ></div>
          <div className="product-description__toggle">
            <Button
              size="sm"
              color="orange"
              animate=""
              onClick={() => setDescriptionExpand(!descriptionExpand)}
            >
              {descriptionExpand ? "thu gọn" : "Xem thêm"}
            </Button>
          </div>
        </div>
      </div>
      <div className="product__content">
        <div className="product__content__title">{product.title}</div>
        <div className="product__content__price">
          {numberWithCommas(product.price)}
        </div>
        <div className="product__content__color">
          <h2 className="product__content__color__title">Màu sắc</h2>

          <div className="product__content__color__list">
            {product.colors.map((item, index) => (
              <div
                className={`product__content__color__list__item ${
                  color === item ? "active" : ""
                }`}
                onClick={() => setColor(item)}
                key={index}
              >
                <div className={`circle bg-${item}`}></div>
              </div>
            ))}
          </div>
        </div>
        <div className="product__content__size">
          <h2 className="product__content__size__title">Size</h2>

          <div className="product__content__size__list">
            {product.size.map((item, index) => (
              <div
                className={`product__content__size__list__item ${
                  size === item ? "active" : ""
                }`}
                key={index}
                onClick={() => setSize(item)}
              >
                <span className="product__content__size__list__item_size">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="product__content__quantity">
          <h2 className="product__content__quantity__title">Số lượng</h2>
          <div className="product__content__quantity__btn">
            <div
              className="product__content__quantity__btn__item"
              onClick={() => updateQuantily("decrease")}
            >
              <AiOutlineMinus />
            </div>
            <div className="product__content__quantily__btn__content">
              {quantily}
            </div>
            <div
              className="product__content__quantity__btn__item"
              onClick={() => updateQuantily("increase")}
            >
              <AiOutlinePlus />
            </div>
          </div>
        </div>
        <div className="product__content__btn">
          <Button size="sm" color="orange" onClick={() => addCart()}>
            Thêm vào giỏ
          </Button>
          <Button size="sm" color="orange" onClick={() => goToCart()}>
            mua hàng
          </Button>
        </div>
      </div>
      <div
        className={`product-description mobile ${
          descriptionExpand ? "expand" : ""
        }`}
      >
        <div className="product-description__title">Chi tiết sản phẩm</div>
        <div
          className={`product-description__content `}
          dangerouslySetInnerHTML={{ __html: product.description }}
        ></div>
        <div className="product-description__toggle">
          <Button
            size="sm"
            color="orange"
            animate=""
            onClick={() => setDescriptionExpand(!descriptionExpand)}
          >
            {descriptionExpand ? "thu gọn" : "Xem thêm"}
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductView.propTypes = {};

export default ProductView;
