import React, { useState } from "react";
import PropTypes from "prop-types";
import AnimeCardDetails from "../AnimeCardDetails/AnimeCardDetails.js";
import PopUp from "../PopUp/PopUp.js";
import isRequiredIf from "react-proptype-conditional-require";

const AnimeCardInfos = (props) => {
  const [imgLoadingStatus, setImageLoadingStatus] = useState("loading");
  const [showDetails, setShowDetail] = useState(false);

  const handleImageLoaded = () => {
    setImageLoadingStatus("loaded");
  };

  const handleImageErrored = () => {
    setImageLoadingStatus("errored");
  };

  const handleClick = () => {
    setShowDetail(true);
  };

  return (
    <React.Fragment>
      <div className="animeLink" onClick={handleClick}>
        <div className={`animeCover ${imgLoadingStatus}`}>
          {props.loading === false && (
            <img
              alt={`cover of ${props.romajiName}`}
              className="animeImage"
              src={props.imagePath}
              onLoad={handleImageLoaded}
              onError={handleImageErrored}
            ></img>
          )}
        </div>
        <div className={`animeBadge ${props.status}`}></div>
        <div className="animeTitle">{props.romajiName}</div>
      </div>
      {props.withDetails && showDetails && (
        <PopUp onClose={() => setShowDetail(false)}>
          <AnimeCardDetails {...props} />
        </PopUp>
      )}
    </React.Fragment>
  );
};
AnimeCardInfos.defaultProps = {
  status: "UNKNOWN",
  loading: false,
  romajiName: "",
  withDetails: true,
};
AnimeCardInfos.propTypes = {
  imagePath: isRequiredIf(PropTypes.string, (props) => props.loading !== true),
  status: PropTypes.oneOf(["RELEASING", "UNKNOWN", "FINISHED"]).isRequired,
  romajiName: isRequiredIf(PropTypes.string, (props) => props.loading !== true),
  loading: PropTypes.bool,
  withDetails: PropTypes.bool,
  id: isRequiredIf(PropTypes.number, (props) => props.loading !== true),
};
export default AnimeCardInfos;
