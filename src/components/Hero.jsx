import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles.css";

const Hero = () => {
  const [movies, setMovies] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    axios.get("https://67c1155b61d8935867e1d939.mockapi.io/movies") // Replace with actual MockAPI URL
      .then(({ data }) => setMovies(data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setIndex((i) => (i + 1) % movies.length), 3000);
    return () => clearInterval(interval);
  }, [movies]);

  return movies.length ? (
    <section className="hero">
      <h2>Top 2021 Movies</h2>
      <p>Mix & Match 2 for $9.99</p>
      <div className="movie-carousel">
        <img src={movies[index].poster} alt={movies[index].title} className="carousel-image" />
        <h3>{movies[index].title}</h3>
      </div>
    </section>
  ) : null;
};

export default Hero;