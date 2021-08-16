import { useState, useEffect } from "react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import MainContent from "./Components/MainContent";

function App() {
  const [animeList, setAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [search, setSearch] = useState("");

  const GetTopAnime = async () => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/top/anime/1/bypopularity`
    ).then((res) => res.json());
    return setTopAnime(temp.top.slice(0, 50));
  };

  useEffect(() => {
    GetTopAnime();
    FeatchAnime(search);
  }, []);

  const HandleSearch = (e) => {
<<<<<<< HEAD
    e.preventDefalut();
=======
    e.preventDefault();
    // preventDefault
>>>>>>> main
    FeatchAnime(search);
  };

  const FeatchAnime = async (query) => {
    if (query === "") {
      const temp = await fetch(
        `https://api.jikan.moe/v3/search/anime?q=onepiece&order_by=title&sort=asc&limit=1000`
      ).then((res) => res.json());
      console.log(temp);
      return setAnimeList(temp.results.slice(0, 30));
    } else {
      const temp = await fetch(
        `https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=1000`
      ).then((res) => res.json());
      console.log(temp);
      return setAnimeList(temp.results.slice(0, 50));
    }
  };

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
