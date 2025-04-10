import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles.css";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);

  const API_BASE_URL = "https://digital-video-store-v1.onrender.com";

  useEffect(() => {
    // Fetch featured movies
    axios.get(`${API_BASE_URL}/media?type=movie`)

      .then((response) => setMovies(response.data.slice(0, 6)))
      .catch((error) => console.error("Error fetching featured movies:", error));

    // Fetch featured TV shows
    axios.get(`${API_BASE_URL}/media/featured?type=tvshow`)
      .then((response) => setTvShows(response.data.slice(0, 6)))
      .catch((error) => console.error("Error fetching featured TV shows:", error));
  }, []);

  return (
    <div className="hero-featured-container">
      <section className="featured-movies">
        <h2>Featured Movies</h2>
        <div className="movie-grid">
          {movies.map((movie) => (
            <div key={movie.id} className="movie-item">
              <img src={movie.smallPoster} alt={movie.title} className="movie-poster" />
              <Link to={`/MovieDetails/${movie.id}?type=${movie.type}`}>
                <p>{movie.title}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="featured-tvshows">
        <h2>Featured TV Shows</h2>
        <div className="movie-grid">
          {tvShows.map((show) => (
            <div key={show.id} className="movie-item">
              <img src={show.smallPoster} alt={show.title} className="movie-poster" />
              <Link to={`/MovieDetails/${show.id}?type=${show.type}`}>
                <p>{show.title}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
