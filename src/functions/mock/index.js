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
      title: "Re:Zero kara Hajimeru Isekai Seikatsu 2nd Season",
      status: "RELEASING",
      coverLink:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx108632-Z8LOaPpYPK93.jpg",
    },
    {
      id: 2,
      title: "No Game No Life",
      status: "FINISHED",
      coverLink:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx19815-bIo51RMWWhLv.jpg",
    },
    {
      id: 3,
      title: "Steins;Gate",
      status: "FINISHED",
      coverLink:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx9253-x1WUtyzJBXXX.jpg",
    },
    {
      id: 4,
      title: "Kimi no Na wa.",
      status: "FINISHED",
      coverLink:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21519-XIr3PeczUjjF.png",
    },
    {
      id: 5,
      title: "Death Note",
      status: "FINISHED",
      coverLink:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx1535-0seL81FuzaJL.jpg",
    },
    {
      id: 6,
      title: "Shinsekai yori",
      status: "FINISHED",
      coverLink:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx13125-3EupAxwkDwA9.jpg",
    },
    {
      id: 7,
      title: "Berserk: Ougon Jidaihen III - Kourin",
      status: "FINISHED",
      coverLink:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b12115-a0apheImsQ4G.jpg",
    },
  ];
  return mockAnimes;
}

export { getMockTabs, getMockLogo, getMockAnimeList };
