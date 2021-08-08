import { useState, useEffect } from "react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import MainContent from "./Components/MainContent";
import AnimeCard from "./Components/AnimeCard"
function App() {
  const [animeList, setAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [search, setSearch] = useState("");

  const GetTopAnime = async () => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/top/anime/1/bypopularity`
    ).then((res) => res.json());

    setTopAnime(temp.top.slice(0, 5));
  };
  const HandleSearch = (e) => {
    e.preventDefalut();
    console.log(search);
  };

  const FeatchAnime = async (query) => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`
    ).then((res) => res.json());
    setAnimeList(temp.results);
  };
  useEffect(() => {
    GetTopAnime();
  }, []);
  //console.log(topAnime);

  return (
    <div className="App">
      <Header />
      <div className="content-wrap">
        <Sidebar topAnime={topAnime} />
        <MainContent
          HandleSearch={HandleSearch}
          search={search}
          setSearch={setSearch}
          animeList={animeList}
        />
      </div>
    </div>
  );
}

export default App;
