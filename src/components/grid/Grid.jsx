import React from "react";
import PropTypes from "prop-types";
import "./grid.scss";

const Grid = (props) => {
  const col = props.col ? `grid-col-${props.col}` : "";
  const md = props.md ? "grid-md-" + props.md : "";
  const sm = props.sm ? "grid-sm-" + props.sm : "";
  const style = props.gap ? { gap: `${props.gap}` } : "";
  return (
    <div className={`grid ${col} ${md} ${sm}`} style={style}>
      {props.children}
    </div>
  );
};

Grid.propTypes = {
  col: PropTypes.number.isRequired,
  gap: PropTypes.string.isRequired,
  md: PropTypes.number,
  sm: PropTypes.number,
};

export default Grid;
