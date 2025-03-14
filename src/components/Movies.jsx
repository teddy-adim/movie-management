import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles.css";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("https://67c1155b61d8935867e1d939.mockapi.io/movies") // Update with your MockAPI endpoint
      .then((response) => setMovies(response.data))
      .catch((error) => console.error("Error fetching Movies:", error));
  }, []);

  return (
    <div className="container movie-listing">
      <h2>Movie Listings</h2>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <Link to={`/MovieDetails/${movie.id}?type=${movie.type}`}>
              <img src={movie.poster} alt={movie.title} className="movie-poster" />
              <p>{movie.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
