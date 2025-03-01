import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles.css";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [tvShows, setTvShows] = useState([]);

    const API_BASE_URL = "https://67c1155b61d8935867e1d939.mockapi.io"
  useEffect(() => {
    axios.get(`${API_BASE_URL}/movies`).then((response) => {
        setMovies(response.data.slice(0, 6)); // Display only 6 featured movies
      });
    // axios.get("http://localhost:3000/movies").then((response) => {
    //   setMovies(response.data.slice(0, 6)); // Display only 6 featured movies
    // });

    // axios.get("http://localhost:3000/tvshows").then((response) => {
    //     setTvShows(response.data.slice(0, 6)); // Display 4-6 featured TV shows
    //   });

      axios.get(`${API_BASE_URL}/tvshows`).then((response) => {
        setTvShows(response.data.slice(0, 6)); // Display 4-6 featured TV shows
      });
  }, []);


  return (
    <div className="hero-featured-container">
    
    <section className="featured-movies">
      <h2>Featured Movies</h2>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <img src={movie.poster} alt={movie.title} className="movie-poster" />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </section>


    <section className="featured-tvshows">
        <h2>Featured TV Shows</h2>
        <div className="movie-grid">
          {tvShows.map((show) => (
            <div key={show.id} className="movie-item">
              <img src={show.poster} alt={show.title} className="movie-poster" />
              <p>{show.title}</p>
            </div>
          ))}
        </div>
      </section>
  </div>
  );
};

export default Home;
