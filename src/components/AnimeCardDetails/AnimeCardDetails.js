import React, { useState } from "react";
import PropTypes from "prop-types";
import "./AnimeCardDetails.scss";
const AnimeCardDetails = (props) => {
  const [imgLoadingStatus, setImageLoadingStatus] = useState("loading");

  const handleImageLoaded = () => {
    setImageLoadingStatus("loaded");
  };

  const handleImageErrored = () => {
    setImageLoadingStatus("errored");
  };

  return (
    <div className="animeCardDetails">
      <div className={`cover ${imgLoadingStatus}`}>
        <img
          alt={`cover of ${props.title}`}
          className="animeImage"
          src={props.coverLink}
          onLoad={handleImageLoaded}
          onError={handleImageErrored}
        ></img>
      </div>
      <div className="details">
        <div className="header">
          <span className="title">{props.title}</span>
        </div>
        <div className="description"></div>
        <div className="episodesList"></div>
      </div>
    </div>
  );
};
AnimeCardDetails.propTypes = {
  link: PropTypes.string.isRequired,
  coverLink: PropTypes.string.isRequired,
  status: PropTypes.oneOf(["RELEASING", "UNKNOWN", "FINISHED"]).isRequired,
  title: PropTypes.string.isRequired,
};
export default AnimeCardDetails;
