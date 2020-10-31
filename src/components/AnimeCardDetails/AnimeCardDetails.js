import React from "react";
import PropTypes from "prop-types";
import "./AnimeCardDetails.scss";
const AnimeCardDetails = (props) => {
  return (
    <div className="animeCardDetails">
      <div className={`cover`} style={{ backgroundImage: `url(${props.imagePath})` }}></div>
      <div className="details">
        <div className="header">
          <span className="title">{props.romajiName}</span>
        </div>
        <div className="description"></div>
        <div className="episodesList"></div>
      </div>
    </div>
  );
};
AnimeCardDetails.propTypes = {
  imagePath: PropTypes.string,
  status: PropTypes.oneOf(["RELEASING", "UNKNOWN", "FINISHED"]),
  romajiName: PropTypes.string,
};
export default AnimeCardDetails;
