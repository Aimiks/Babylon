import React, { useState, useEffect } from "react";
import { getMockAnimeList } from "../../functions/mock";
import AnimeList from "../../components/AnimeList/AnimeList";
import api from "../../services/api";
import PopUpAddAnimes from "../../popup/PopUpAddAnimes/PopUpAddAnimes";

const AnimesPage = () => {
  // Duplicate to have more content
  /*const mockAnimes = getMockAnimeList()
    .concat(getMockAnimeList())
    .map((a, i) => {
      return { ...a, id: i };
    });
  // Due to the duplication we specify an auto-increment id
  const animes = mockAnimes.map((an) => ({
    ...an,
    link: `anime/${an.id}`,
  }));*/

  const [animes, setAnimes] = useState([]);
  const [count, setCount] = useState([]);
  const [showAddAnimes, setShowAddAnimes] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const _animes = await api.getAllAnimeFromAPI();
        setAnimes(_animes);
      } catch (e) {
        // need error handling
      }
    })();
    (async () => {
      try {
        const _nb = await api.countAllAnimeFromAPI();
        setCount(_nb);
      } catch (e) {
        // need error handling
      }
    })();
  }, []);

  const handleOpenAddAnimes = function () {
    setShowAddAnimes(!showAddAnimes);
  };

  return (
    <div id="animeScreen">
      <div className="container">
        <h3 className="title">Animes</h3>
        <input type="button" onClick={handleOpenAddAnimes} value="+ Add animes" />
        <AnimeList animes={animes} count={count}></AnimeList>
      </div>
      {showAddAnimes && <PopUpAddAnimes onClose={handleOpenAddAnimes} />}
    </div>
  );
};

export default AnimesPage;
