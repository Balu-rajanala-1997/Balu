import React from "react";
import PropTypes from "prop-types";

const NoComponentFound = (props) => {
  return (
    <div
      className="d-flex mt-1  mx-3 justify-content-center"
      style={{ height: "570px" }}
    >
      <h3 style={{ paddingTop: "200px" }}>
        404 - Page your looking not found.
      </h3>
      <h5></h5>
    </div>
  );
};

export default NoComponentFound;
