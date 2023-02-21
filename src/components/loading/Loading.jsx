import React from "react";
import "./loading.scss";

function Loading() {
  return (
    <div className="container">
      <div className="loading">
        <ul>
          <li className="loading__element"></li>
          <li className="loading__element"></li>
          <li className="loading__element"></li>
          <li className="loading__element"></li>
        </ul>
      </div>
    </div>
  );
}

Loading.propTypes = {};

export default Loading;
