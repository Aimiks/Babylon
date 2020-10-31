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
  loading: false,
};
AnimeCard.propTypes = {
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  id: isRequiredIf(PropTypes.number, (props) => props.loading !== true),
};
export default AnimeCard;
