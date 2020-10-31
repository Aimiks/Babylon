import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import AnimeCard from "../AnimeCard/AnimeCard";
import "./AnimeList.scss";
const AnimeList = (props) => {
  const [animesList, setAnimesList] = useState([]);

  const { animes, withDetails, onAnimeCardClick, count } = props;

  useEffect(() => {
    const handleAnimeCardClick = (id) => {
      if (onAnimeCardClick) {
        onAnimeCardClick(id);
      }
    };
    if (animes && animes.length) {
      setAnimesList(
        animes.map((anime, i) => (
          <AnimeCard
            key={i}
            withDetails={withDetails}
            loading={false}
            onClick={handleAnimeCardClick}
            id={anime.id ? anime.id : anime.anilistId}
            {...anime}
          ></AnimeCard>
        ))
      );
    }
  }, [animes, withDetails, onAnimeCardClick]);

  useEffect(() => {
    const length = animes ? animes.length : 0;
    if (count > length) {
      const prevLength = length;
      const tmpAnimes = [...new Array(count - prevLength)].map((anime, i) => (
        <AnimeCard key={prevLength + i} withDetails={false} loading={true}></AnimeCard>
      ));
      setAnimesList(tmpAnimes);
    }
  }, [count, animes]);

  return <div className="animeList">{animesList}</div>;
};
AnimeList.defaultProps = {
  withDetails: true,
};

AnimeList.propTypes = {
  withDetails: PropTypes.bool,
  onAnimeCardClick: PropTypes.func,
  animes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      imagePath: PropTypes.string,
      status: PropTypes.oneOf(["RELEASING", "UNKNOWN", "FINISHED"]),
      romajiName: PropTypes.string,
      loading: PropTypes.bool,
    })
  ),
};
export default AnimeList;
