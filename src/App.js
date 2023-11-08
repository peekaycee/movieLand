import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import Moviecard from "./Moviecard";

const API_URL = "https://www.omdbapi.com?apikey=d6d70208";

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies();
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    if (data.Search) {
      setMovies(data.Search);
    } else {
      setMovies(["Superman"]); // Set movies to an empty array if no results are found.
    }
  }

  return (
    <div className="app">
      <Header />
      {movies.length > 0 ? (
        
        movies.map((movie) => (
          <div className='moviecard--container'>
            <Moviecard
              key={movie.imdbID} // Adding a unique key for each movie
              Title={movie.Title}
              Year={movie.Year}
              Poster={movie.Poster}
              Type={movie.Type}
              movie = {movie}
            />
          </div>
        ))
       
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
