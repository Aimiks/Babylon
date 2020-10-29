import React from "react";
import PropTypes from "prop-types";
import AnimeCard from "../AnimeCard/AnimeCard";
import "./AnimeList.scss";
const AnimeList = (props) => {
  if (props.animes.length) {
    const animeList = props.animes.map((anime) => (
      <AnimeCard key={anime.id ? anime.id : anime.anilistId} {...anime}></AnimeCard>
    ));
    return <div className="animeList">{animeList}</div>;
  } else {
    return null;
  }
};
AnimeList.propTypes = {
  animes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      imagePath: PropTypes.string,
      status: PropTypes.oneOf(["RELEASING", "UNKNOWN", "FINISHED"]),
      romajiName: PropTypes.string,
    })
  ),
};
export default AnimeList;
