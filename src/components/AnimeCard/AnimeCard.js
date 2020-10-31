import React from "react";
import PropTypes from "prop-types";
import "./AnimeCard.scss";
import isRequiredIf from "react-proptype-conditional-require";
import AnimeCardInfos from "../AnimeCardInfos/AnimeCardInfos";

const AnimeCard = (props) => {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick(props.id);
    }
  };

  return (
    <div className={`animeCard ${props.loading ? "loading" : ""}`} onClick={handleClick}>
      <AnimeCardInfos key={props.id} {...props} />
    </div>
  );
};
AnimeCard.defaultProps = {
  status: "UNKNOWN",
  loading: false,
  romajiName: "",
};
AnimeCard.propTypes = {
  imagePath: isRequiredIf(PropTypes.string, (props) => props.loading !== true),
  status: PropTypes.oneOf(["RELEASING", "UNKNOWN", "FINISHED"]).isRequired,
  romajiName: isRequiredIf(PropTypes.string, (props) => props.loading !== true),
  loading: PropTypes.bool,
  onClick: PropTypes.func,
};
export default AnimeCard;
