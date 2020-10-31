import React, { useState } from "react";
import PropTypes from "prop-types";
import "./PopUp.scss";
import ReactDOM from "react-dom";

const PopUp = (props) => {
  const [classClose, setClassClose] = useState("");
  const portalContainer = document.getElementById("app");

  const animationDuration = 0.5;

  const handleCloseButton = () => {
    if (classClose !== "closed") {
      setClassClose("closed");
      setTimeout(() => {
        props.onClose();
      }, animationDuration * 1000);
    }
  };

  const handleCloseOutButton = (e) => {
    if (e.target.className.includes("popupContainer")) {
      handleCloseButton();
    }
  };

  return ReactDOM.createPortal(
    <div
      className={`popupContainer ${classClose}`}
      onClick={handleCloseOutButton}
      style={{ animationDuration: animationDuration + "s" }}
    >
      <div className={`popup`}>
        <div className="popupHeader">
          <button onClick={handleCloseButton}>Close</button>
        </div>
        <div className="popupContent">{props.children}</div>
      </div>
    </div>,
    portalContainer
  );
};
PopUp.propTypes = {
  onClose: PropTypes.func.isRequired,
};
export default PopUp;
