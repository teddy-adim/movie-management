import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles.css";

const TVShows = () => {
  const [tvShows, setTvShows] = useState([]);

  useEffect(() => {
    axios
      .get("https://67c1155b61d8935867e1d939.mockapi.io/tvshows") // Update this with your actual API
      .then((response) => setTvShows(response.data))
      .catch((error) => console.error("Error fetching TV Shows:", error));
  }, []);

  return (
    <div className="container movie-listing">
      <h2>TV Show Listings</h2>
      <div className="movie-grid">
        {tvShows.map((show) => (
          <div key={show.id} className="movie-item">
           <Link to={`/MovieDetails/${show.id}?type=${show.type}`}>
              <img src={show.poster} alt={show.title} className="movie-poster" />
              <p>{show.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TVShows;
