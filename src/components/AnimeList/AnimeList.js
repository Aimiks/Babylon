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
            id={anime.id}
            {...anime}
          ></AnimeCard>
        ))
      );
    }
  }, [animes, withDetails, onAnimeCardClick]);

  useEffect(() => {
    const length = animes ? animes.length : 0;
    if (length === 0) {
      const tmpAnimes = [...new Array(count)].map((anime, i) => (
        <AnimeCard key={i} withDetails={false} loading={true}></AnimeCard>
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
      coverImage: PropTypes.shape({
        large: PropTypes.string,
        color: PropTypes.string,
      }),
      status: PropTypes.oneOf(["RELEASING", "UNKNOWN", "FINISHED", "CANCELLED", "NOT_YET_RELEASED"]),
      title: PropTypes.shape({
        romaji: PropTypes.string,
        english: PropTypes.string,
        native: PropTypes.string,
      }),
      loading: PropTypes.bool,
      withDetails: PropTypes.bool,
      id: PropTypes.number,
      bannerImage: PropTypes.string,
    })
  ),
};
export default AnimeList;
