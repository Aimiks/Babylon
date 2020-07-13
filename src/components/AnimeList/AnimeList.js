import React from "react";
import PropTypes from "prop-types";
import AnimeCard from "../AnimeCard/AnimeCard";
import "./AnimeList.scss";
const AnimeList = (props) => {
  const animeList = props.animes.map((anime) => (
    <AnimeCard key={anime.id} {...anime}></AnimeCard>
  ));
  return <div className="animeList">{animeList}</div>;
};
AnimeList.propTypes = {
  animes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      link: PropTypes.string,
      coverLink: PropTypes.string,
      status: PropTypes.oneOf(["RELEASING", "UNKNOWN", "FINISHED"]),
      title: PropTypes.string,
    })
  ),
};
export default AnimeList;
