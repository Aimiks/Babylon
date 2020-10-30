import config from "../config";

const api = {};
const def_headers = new Headers({
  "Content-Type": "application/json",
});
const def_init = {
  method: "GET",
  mode: "cors",
  cache: "default",
  headers: def_headers,
};

api.getAllAnimeFromAPI = async function () {
  const route = "/animes";
  let res = null;
  try {
    const response = await fetch(config.API_URL + route, def_init);
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
    const response = await fetch(config.API_URL + route, def_init);
    const json = await response.json();
    res = json;
  } catch (e) {
    throw e;
  }
  return res;
};

export default api;
