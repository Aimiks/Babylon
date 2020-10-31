import React, { useState } from "react";
import AnimeList from "../../components/AnimeList/AnimeList";
import anilist from "../../services/anilist";
import api from "../../services/api";

import SearchInput from "../../components/SearchInput/SearchInput";

const FormAddAnime = (props) => {
  const [animes, setAnimes] = useState([]);
  const [search, setSearch] = useState("");

  const nbMax = 5;
  const searchAnimes = (search) => {
    setSearch(search);
    (async () => {
      try {
        const _animes = await anilist.getAnimesFromSearch(search, nbMax);
        setAnimes(_animes);
      } catch (e) {
        // need error handling
      }
    })();
  };

  const getAnimeFromId = (id) => {
    return animes.find((a) => a.id === id);
  };

  const handleAnimeCardClick = (id) => {
    console.log(getAnimeFromId(id));
    (async () => {
      try {
        const res = await api.addAnime(id);
        console.log(res);
      } catch (e) {
        // need error handling
      }
    })();
  };

  return (
    <div>
      <SearchInput type="text" onChange={searchAnimes}></SearchInput>
      <div id="animeListContainer">
        <AnimeList
          animes={animes}
          count={search.length ? nbMax : 0}
          withDetails={false}
          onAnimeCardClick={handleAnimeCardClick}
        ></AnimeList>
      </div>
    </div>
  );
};

export default FormAddAnime;
