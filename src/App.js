	import { useState,useEffect } from "react";
	import Header from "./Components/Header";
	import Sidebar from "./Components/Sidebar";
	function App() {
const [animeList, setAnimeList] = useState([]);
const [topAnime, setTopAnime] = useState([]);
const [searct, setSearct] = useState('');
		return (
			<div className="App">
				<Header/>
				<div className="content-wrap">
				<Sidebar topAnime={topAnime}/>
				</div>

			</div>
		);
	}


	export default App;


