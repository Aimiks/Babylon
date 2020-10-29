function getMockTabs() {
  const mockTabs = [
    {
      name: "Home",
      type: 1,
      link: "/home",
    },
    {
      name: "Animes",
      type: 1,
      link: "animes",
    },
    {
      name: "Settings",
      type: 1,
      link: "settings",
    },
  ];
  return mockTabs;
}

function getMockLogo() {
  const mockLogo = {
    img: "",
    link: "#",
  };
  return mockLogo;
}

function getMockAnimeList() {
  const mockAnimes = [
    {
      id: 1,
      romajiName: "Re:Zero kara Hajimeru Isekai Seikatsu 2nd Season",
      status: "RELEASING",
      imagePath: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx108632-Z8LOaPpYPK93.jpg",
    },
    {
      id: 2,
      romajiName: "No Game No Life",
      status: "FINISHED",
      imagePath: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx19815-bIo51RMWWhLv.jpg",
    },
    {
      id: 3,
      romajiName: "Steins;Gate",
      status: "FINISHED",
      imagePath: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx9253-x1WUtyzJBXXX.jpg",
    },
    {
      id: 4,
      romajiName: "Kimi no Na wa.",
      status: "FINISHED",
      imagePath: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21519-XIr3PeczUjjF.png",
    },
    {
      id: 5,
      romajiName: "Death Note",
      status: "FINISHED",
      imagePath: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx1535-0seL81FuzaJL.jpg",
    },
    {
      id: 6,
      romajiName: "Shinsekai yori",
      status: "FINISHED",
      imagePath: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx13125-3EupAxwkDwA9.jpg",
    },
    {
      id: 7,
      romajiName: "Berserk: Ougon Jidaihen III - Kourin",
      status: "FINISHED",
      imagePath: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b12115-a0apheImsQ4G.jpg",
    },
  ];
  return mockAnimes;
}

export { getMockTabs, getMockLogo, getMockAnimeList };
