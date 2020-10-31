import config from "../config";

const anilist = {};
const def_headers = new Headers({
  "Content-Type": "application/json",
  Accept: "application/json",
});
const def_options = {
  method: "POST",
  cache: "no-cache",
  credentials: "same-origin",
  headers: def_headers,
};
anilist.getAnimesInfos = async function (ids) {
  const variables = {
    idPage: 0,
    perPage: ids.length,
    ids,
  };
  const query = `
  query ($idPage: Int, $perPage: Int, $ids: String) {
    Page (page: $idPage, perPage: $perPage) {
       pageInfo {
         total
         currentPage
         lastPage
         hasNextPage
         perPage
       }
       media (id_in:$ids, type:ANIME, isAdult: false) {
         id
         title {
           romaji
         },
         status,
         coverImage {
           large
           color
         }
       }
     }
   }`;
  const options = def_options;
  options.body = JSON.stringify({
    query: query,
    variables: variables,
  });
  let res = [];
  try {
    const response = await fetch(config.ANILIST_API_URL, options);
    const json = await response.json();
    if (json.data && json.data.Page && json.data.Page.media) {
      res = json.data.Page.media.map((m) => {
        const { id, status, title, coverImage } = m;
        return {
          id,
          status,
          romajiName: title.romaji,
          imagePath: coverImage.large,
        };
      });
    }
  } catch (e) {
    throw e;
  }
  return res;
};

anilist.getAnimesFromSearch = async function (search, nbMax) {
  const variables = {
    idPage: 0,
    perPage: nbMax,
    search,
  };
  const query = `
  query ($idPage: Int, $perPage: Int, $search: String) {
    Page (page: $idPage, perPage: $perPage) {
       pageInfo {
         total
         currentPage
         lastPage
         hasNextPage
         perPage
       }
       media (search:$search, type:ANIME, isAdult: false) {
         id
         title {
           romaji
         },
         status,
         coverImage {
           large
           color
         }
       }
     }
   }`;
  const options = def_options;
  options.body = JSON.stringify({
    query: query,
    variables: variables,
  });
  let res = [];
  try {
    const response = await fetch(config.ANILIST_API_URL, options);
    const json = await response.json();
    if (json.data && json.data.Page && json.data.Page.media) {
      res = json.data.Page.media.map((m) => {
        const { id, status, title, coverImage } = m;
        return {
          id,
          status,
          romajiName: title.romaji,
          imagePath: coverImage.large,
        };
      });
    }
  } catch (e) {
    throw e;
  }
  return res;
};

export default anilist;
