import { useEffect } from "react";
import { useState } from "react";

import logo from "../assets/016fed143773ec247f2069a83192657c1.png";
import searchIcon from "../assets/search.svg";

import "./App.css";
import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js";
import MovieCard from "../components/movieCard/movieCard";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const apiKey = "84574f82";
  const apiUrl = `https://omdbapi.com/?apikey=${apiKey}`;

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json();

    console.log(data);
    setMovies(data.Search);
  };

  const handleKeyPress = (e) => {
    e.key === "Enter" && searchMovies(searchTerm);
  };

  return (
    <div id="app">
      <div className="cabecalhoMaster">
        <div className="logo">
          <img src={logo} alt="logo devflix" />
        </div>
        <div className="search">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Pesquise por filmes"
          />
          <img
            src={searchIcon}
            alt="Icone de Pesquisa"
            onClick={() => searchMovies(searchTerm)}
          />
        </div>
      </div>
      <div className="novidades">
        {movies?.length > 0 && <h1>
          Trending <ion-icon name="flame-outline"></ion-icon>
        </h1>}
        {movies?.length > 0 ? (
          <div className="trending">
            {movies.map((movie) => (
              <MovieCard key={movie.imdbID} movies={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>Nenhum filme encontrado 🥺</h2>
          </div>
        )}
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movies={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2></h2>
        </div>
      )}
      ;
    </div>
  );
};

export default App;
