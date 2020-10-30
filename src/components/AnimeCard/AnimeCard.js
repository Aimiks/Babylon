import React, { useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./AnimeCard.scss";
import AnimeCardDetails from "../AnimeCardDetails/AnimeCardDetails.js";
import PopUp from "../PopUp/PopUp.js";
import isRequiredIf from "react-proptype-conditional-require";

const AnimeCard = (props) => {
  const [imgLoadingStatus, setImageLoadingStatus] = useState("loading");
  const [showDetails, setShowDetail] = useState(false);
  const portalContainer = document.getElementById("app");

  const handleImageLoaded = () => {
    setImageLoadingStatus("loaded");
  };

  const handleImageErrored = () => {
    setImageLoadingStatus("errored");
  };

  return (
    <React.Fragment>
      <div className={`animeCard ${props.loading ? "loading" : ""}`}>
        <div className="animeLink" onClick={setShowDetail}>
          <div className={`animeCover ${imgLoadingStatus}`}>
            <img
              alt={`cover of ${props.romajiName}`}
              className="animeImage"
              src={props.imagePath}
              onLoad={handleImageLoaded}
              onError={handleImageErrored}
            ></img>
          </div>
          <div className={`animeBadge ${props.status}`}></div>
          <div className="animeTitle">{props.romajiName}</div>
        </div>
      </div>
      {showDetails &&
        ReactDOM.createPortal(
          <PopUp onClose={() => setShowDetail(false)}>
            <AnimeCardDetails {...props} />
          </PopUp>,
          portalContainer
        )}
    </React.Fragment>
  );
};
AnimeCard.defaultProps = {
  status: "UNKNOWN",
  loading: false,
};
AnimeCard.propTypes = {
  imagePath: isRequiredIf(PropTypes.string, (props) => props.loading !== true),
  status: PropTypes.oneOf(["RELEASING", "UNKNOWN", "FINISHED"]).isRequired,
  romajiName: isRequiredIf(PropTypes.string, (props) => props.loading !== true),
  loading: PropTypes.bool,
};
export default AnimeCard;
