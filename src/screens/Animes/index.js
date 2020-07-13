import React from "react";
import { getMockAnimeList } from "../../functions/mock";
import AnimeList from "../../components/AnimeList/AnimeList";

const AnimesPage = () => {
  let animes = getMockAnimeList().map((an) => ({
    ...an,
    link: `anime/${an.id}`,
  }));
  return (
    <div id="animeScreen">
      <div className="container">
        <h3 className="title">Animes</h3>
        <AnimeList animes={animes}></AnimeList>
      </div>
    </div>
  );
};

export default AnimesPage;
