import { useState, useEffect } from "react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";


function App() {
  const [animeList, setAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [searct, setSearct] = useState("");

  const GetTopAnime = async () => {
	  const temp = await fetch('https://api.jikan.moe/v3/top/anime/1/bypopularity')
	  .then(res => res.json());

	  setTopAnime(temp.top.slice(0,5));
  }

  useEffect(() => {
	GetTopAnime();

	console.log('Top Anime');
  }, [])

  console.log(topAnime);


  return (
    <div className="App">
      <Header />
      <div className="content-wrap">
        <Sidebar topAnime={topAnime} />
      </div>
    </div>
  );
}


import MainContent from "./Components/MainContent";
function App() {
  const [animeList, setAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [searct, setSearct] = useState("");
  const GetTopAnime=async()=>{
	  const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
	  .then(res=>res.json());

	  setTopAnime(temp.top.slice(0,5));
  }

  useEffect(() => {
	GetTopAnime();
  }, [])
  console.log(topAnime);


  return (
    <div className="App">
      <Header />
      <div className="content-wrap">
        <Sidebar topAnime={topAnime} />
        <MainContent />
      </div>
    </div>
  );
}


export default App;
