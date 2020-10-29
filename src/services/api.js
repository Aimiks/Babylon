import config from "../config";

const api = {};

api.getAllAnimeFromAPI = async function () {
  const headers = new Headers({
    "Content-Type": "application/json",
  });
  const init = {
    method: "GET",
    mode: "cors",
    cache: "default",
    headers,
  };
  const route = "/animes";
  let res = null;
  try {
    const response = await fetch(config.API_URL + route, init);
    const json = await response.json();
    res = json;
  } catch (e) {
    throw e;
  }
  return res;
};

export default api;
