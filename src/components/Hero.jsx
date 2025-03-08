import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles.css";

const Hero = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://67c1155b61d8935867e1d939.mockapi.io/movies")
      .then(({ data }) => {
        setMovies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
        setLoading(false);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    fade: true,
    className: "movie-slider"
  };

  if (loading) {
    return (
      <section className="hero">
        <div className="loading">Loading movies...</div>
      </section>
    );
  }

  return movies.length ? (
    <section className="hero">
      <h2>Top 2021 Movies</h2>
      <p>Mix & Match 2 for $9.99</p>
      <Slider {...settings}>
        {movies.map((movie) => (
          <div key={movie.id} className="slide-item">
            <div className="image-container">
              <img 
                src={movie.poster} 
                alt={movie.title} 
                className="carousel-image" 
              />
            </div>
            <h3 className="movie-title">{movie.title}</h3>
          </div>
        ))}
      </Slider>
    </section>
  ) : (
    <section className="hero">
      <div className="no-movies">No movies available</div>
    </section>
  );
};

export default Hero;
