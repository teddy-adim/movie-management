import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles.css";

const Movies = () => {
  const [media, setMedia] = useState([]);

  const API_BASE_URL = "https://67c1155b61d8935867e1d939.mockapi.io"

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const moviesResponse = await axios.get(`${API_BASE_URL}/movies`);
        const tvShowsResponse = await axios.get(`${API_BASE_URL}/tvshows`);
        // const moviesResponse = await axios.get("http://localhost:3000/movies");
        // const tvShowsResponse = await axios.get("http://localhost:3000/tvshows");
        setMedia([...moviesResponse.data, ...tvShowsResponse.data]); // Merge movies & TV shows
      } catch (error) {
        console.error("Error fetching media:", error);
      }
    };
    fetchMedia();
  }, []);

  return (
    <div className="container movie-listing">
      <h2>Movie & TV Show Listings</h2>
      <div className="movie-grid">
        {media.map((item) => (
          <div key={item.id} className="movie-item">
            <Link to={`/MovieDetails/${item.id}?type=${item.type}`}>
              <img src={item.poster} alt={item.title} className="movie-poster" />
              <p>{item.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
