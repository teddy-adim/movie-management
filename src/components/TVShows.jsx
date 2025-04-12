import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles.css";

const TVShows = () => {
  const [tvShows, setTvShows] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const API_BASE_URL = "https://digital-video-store-v1.onrender.com/api/media";

  // Fetch all TV shows initially
  useEffect(() => {
    axios
      .get(`${API_BASE_URL}?type=tvshow`)
      .then((response) => setTvShows(response.data))
      .catch((error) => console.error("Error fetching TV Shows:", error));
  }, []);

  const handleSearch = async (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term.trim() === "") {
      // Reset to all TV shows
      axios
        .get(`${API_BASE_URL}?type=tvshow`)
        .then((res) => setTvShows(res.data));
      return;
    }

    try {
      const res = await axios.get(`${API_BASE_URL}/search?title=${encodeURIComponent(term)}`);
      const filtered = res.data.filter((show) => show.type === "tvshow");
      setTvShows(filtered);
    } catch (error) {
      console.error("Search failed:", error);
    }
  };

  return (
    <div className="container movie-listing">
      <h2>TV Show Listings</h2>

      <div className="search-bar-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search TV shows by title..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <div className="movie-grid">
        {tvShows.map((show) => (
          <div key={show.id} className="movie-item">
            <Link to={`/MovieDetails/${show.id}?type=${show.type}`}>
              <img src={show.smallPoster} alt={show.title} className="movie-poster" />
              <p>{show.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TVShows;
