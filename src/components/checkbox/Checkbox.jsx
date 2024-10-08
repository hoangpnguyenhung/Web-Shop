import React, { useRef } from "react";
import PropTypes from "prop-types";
import { AiOutlineCheck } from "react-icons/ai";
import "./checkbox.scss";

const Checkbox = (props) => {
  const inputRef = useRef(null);
  const onChange = () => {
    if (props.onChange) {
      props.onChange(inputRef.current);
    }
  };
  console.log(props.checked);

  return (
    <label className="checkbox">
      <input
        type="checkbox"
        ref={inputRef}
        onChange={onChange}
        checked={props.checked}
      />
      <span className="checkbox__checkmar">
        <i>
          <AiOutlineCheck />
        </i>
      </span>
      {props.label}
    </label>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
};

export default Checkbox;
