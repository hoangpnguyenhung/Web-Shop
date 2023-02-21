import React from "react";
import PropTypes from "prop-types";
import "./textbox.scss";

const Textbox = (props) => {
  const animate = props.animate ? "text-box--animate" : "";
  return (
    <div className="text-box">
      <input type="text" className="text-box__input" required />
      <label htmlFor="" className={`text-box__placehoder ${animate}`}>
        {props.placehoder}
      </label>
      <p className="text-box-message"></p>
    </div>
  );
};

Textbox.propTypes = {
  placehoder: PropTypes.string.isRequired,
  animate: PropTypes.bool.isRequired,
};

export default Textbox;
