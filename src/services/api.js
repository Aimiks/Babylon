import config from "../config";
import anilist from "./anilist";

const api = {};
const def_headers = new Headers({
  "Content-Type": "application/json",
});
const def_options = {
  method: "GET",
  mode: "cors",
  cache: "default",
  headers: def_headers,
};

api.getAllAnimeFromAPI = async function () {
  const route = "/animes";
  let res = null;
  try {
    const response = await fetch(config.API_URL + route, def_options);
    const json = await response.json();
    res = json;
  } catch (e) {
    throw e;
  }
  return res;
};
api.countAllAnimeFromAPI = async function () {
  const route = "/animes/size";
  let res = null;
  try {
    const response = await fetch(config.API_URL + route, def_options);
    const json = await response.json();
    res = json;
  } catch (e) {
    throw e;
  }
  return res;
};

export default api;
