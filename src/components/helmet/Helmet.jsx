import React, { useEffect } from "react";
import PropTypes from "prop-types";

const Helmet = (props) => {
  document.title = "World Store - " + props.title;
  useEffect(() => window.scrollTo(0, 0), []);
  return <div className="helmet">{props.children}</div>;
};

Helmet.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Helmet;
