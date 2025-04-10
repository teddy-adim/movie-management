import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles.css";

const MovieDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  const API_BASE_URL = "http://localhost:8080/api";

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/media/${id}`)
      .then((res) => setItem(res.data))
      .catch((err) => console.error("Error fetching movie details:", err));
  }, [id]);

  if (!item) return <p>Loading...</p>;

  return (
    <div className="container details">
      <div className="details-content">
        <div className="poster-section">
          <img src={item.largePoster} alt={item.title} className="detail-poster" />
        </div>
        <div className="info-section">
          <h2>{item.title}</h2>
          <p className="synopsis">{item.synopsis}</p>
          <div className="price-buttons">
            <button className="rent-button">Rent ${item.rentPrice}</button>
            <button className="buy-button">Buy ${item.buyPrice}</button>
          </div>
          <p><strong>Type:</strong> {item.type === "movie" ? "Movie" : "TV Show"}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
