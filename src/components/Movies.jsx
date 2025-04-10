import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles.css";

const Movies = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const API_BASE_URL = "http://localhost:8080/api/media";

  // Fetch all movies initially
  useEffect(() => {
    axios
      .get(`${API_BASE_URL}?type=movie`)
      .then((response) => setMovies(response.data))
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  // Fetch from /search and filter by movie type
  const handleSearch = async (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term.trim() === "") {
      // Reset to all movies
      axios
        .get(`${API_BASE_URL}?type=movie`)
        .then((res) => setMovies(res.data));
      return;
    }

    try {
      const res = await axios.get(`${API_BASE_URL}/search?title=${encodeURIComponent(term)}`);
      const filtered = res.data.filter((m) => m.type === "movie");
      setMovies(filtered);
    } catch (error) {
      console.error("Search failed:", error);
    }
  };

  return (
    <div className="container movie-listing">
      <h2>Movie Listings</h2>

      <div className="search-bar-container">
  <input
    type="text"
    className="search-bar"
    placeholder="Search movies by title..."
    value={searchTerm}
    onChange={handleSearch}
  />
</div>

      <div className="movie-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <Link to={`/MovieDetails/${movie.id}?type=${movie.type}`}>
              <img src={movie.smallPoster} alt={movie.title} className="movie-poster" />
              <p>{movie.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
