import React from "react";
import PropTypes from "prop-types";
import "./AnimeCardDetails.scss";
const AnimeCardDetails = (props) => {
  return (
    <div className="animeCardDetails">
      <div className={`cover`} style={{ backgroundImage: `url(${props.bannerImage})` }}></div>
      <div className="details">
        <div className="header">
          <span className="title">{props.title.romaji}</span>
        </div>
        <div className="description"></div>
        <div className="episodesList"></div>
      </div>
    </div>
  );
};
AnimeCardDetails.propTypes = {
  bannerImage: PropTypes.string.isRequired,
  status: PropTypes.oneOf(["RELEASING", "UNKNOWN", "FINISHED", "CANCELLED", "NOT_YET_RELEASED"]).isRequired,
  title: PropTypes.shape({
    romaji: PropTypes.string,
    english: PropTypes.string,
    native: PropTypes.string,
  }).isRequired,
};
export default AnimeCardDetails;
