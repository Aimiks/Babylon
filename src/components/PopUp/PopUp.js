import React, { useState } from "react";
import PropTypes from "prop-types";
import "./PopUp.scss";

const PopUp = (props) => {
  const [open, setOpen] = useState(true);
  const handleCloseButton = () => {
    setOpen(false);
    props.onClose();
  };
  return (
    <React.Fragment>
      {open && (
        <div className="popup">
          <div className="popupHeader">
            <button onClick={handleCloseButton}>Close</button>
          </div>
          <div className="popupContent">{props.children}</div>
        </div>
      )}
    </React.Fragment>
  );
};
PopUp.propTypes = {
  onClose: PropTypes.func,
};
export default PopUp;
