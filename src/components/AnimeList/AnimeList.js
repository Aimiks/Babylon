import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import AnimeCard from "../AnimeCard/AnimeCard";
import "./AnimeList.scss";
const AnimeList = (props) => {
  const [animesList, setAnimesList] = useState([]);

  useEffect(() => {
    setAnimesList(props.animes.map((anime, i) => <AnimeCard key={i} {...anime}></AnimeCard>));
  }, [props.animes]);
  useEffect(() => {
    const length = props.animes ? props.animes.length : 0;
    if (props.count > length) {
      const prevLength = length;
      const tmpAnimes = [...new Array(props.count - prevLength)].map((anime, i) => (
        <AnimeCard key={prevLength + i} loading={true}></AnimeCard>
      ));
      setAnimesList(tmpAnimes);
    }
  }, [props.count, props.animes]);
  return <div className="animeList">{animesList}</div>;
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
