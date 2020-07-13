import React from "react";
import PropTypes from "prop-types";
import "./AnimeCard.scss";
const AnimeCard = (props) => {
  return (
    <div className="animeCard">
      <a className="animeLink" href={props.link}>
        <div className="animeCover">
          <img
            alt={`cover of ${props.title}`}
            className="animeImage"
            src={props.coverLink}
          ></img>
        </div>
        <div className={`animeBadge ${props.status}`}></div>
        <div className="animeTitle">{props.title}</div>
      </a>
    </div>
  );
};
AnimeCard.propTypes = {
  link: PropTypes.string.isRequired,
  coverLink: PropTypes.string.isRequired,
  status: PropTypes.oneOf(["RELEASING", "UNKNOWN", "FINISHED"]).isRequired,
  title: PropTypes.string.isRequired,
};
export default AnimeCard;
