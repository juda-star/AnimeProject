import React from "react";

export default function Sidebar({ topAnime }) {

  return (
    <aside>
      <nav>
        <h3>Top-Anime</h3>
        {topAnime.map(anime => {
          return <a
            href={anime.url}
            target="_blank"
            key={anime.mal_id}
            rel="noreferrer"
          >
            {anime.title}
          </a>
        })}
      </nav>
    </aside>
  );
}