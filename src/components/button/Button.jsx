import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { AiOutlineShoppingCart } from "react-icons/ai";

import "./button.scss";

const Button = (props) => {
  const color = props.color ? `btn__bg-${props.color}` : "";
  const size = props.size ? `btn-${props.size}` : "";
  const animate = props.animate ? `btn-${props.animate}` : "";
  return (
    <button
      className={`btn ${color} ${size} ${animate}`}
      onClick={props.onClick ? () => props.onClick() : null}
    >
      <div className="btn__content">{props.children}</div>
      <div className="btn__icon">
        <AiOutlineShoppingCart />
      </div>
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.string,
  animate: PropTypes.string,
};

export default Button;
