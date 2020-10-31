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

/**
 *
 * @param {*} infos Specify if we want the animes infos
 */
api.getAllAnimes = async function (infos = true) {
  const route = "/animes";
  let res = null;
  try {
    const response = await fetch(config.API_URL + route, def_options);
    const json = await response.json();
    res = json;
  } catch (e) {
    throw e;
  }
  if (infos) {
    res = await anilist.getAnimesInfos(res.map((r) => r.id));
  }
  return res;
};
api.countAllAnimes = async function () {
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

api.addAnime = async function (id) {
  const route = `/animes`;
  let res = null;
  const opt = { ...def_options };
  opt.method = "POST";
  opt.body = JSON.stringify({
    id,
  });
  try {
    const response = await fetch(config.API_URL + route, opt);
    const json = await response.json();
    res = json;
  } catch (e) {
    throw e;
  }
  return res;
};

export default api;
