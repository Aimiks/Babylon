import React, { useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./AnimeCard.scss";
import AnimeCardDetails from "../AnimeCardDetails/AnimeCardDetails.js";
import PopUp from "../PopUp/PopUp.js";

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
      <div className="animeCard">
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
AnimeCard.propTypes = {
  imagePath: PropTypes.string.isRequired,
  status: PropTypes.oneOf(["RELEASING", "UNKNOWN", "FINISHED"]).isRequired,
  romajiName: PropTypes.string.isRequired,
};
export default AnimeCard;
