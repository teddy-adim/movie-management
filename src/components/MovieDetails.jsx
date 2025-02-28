import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import "../styles.css";

const MovieDetails = () => {
  const { id } = useParams();
  const type = new URLSearchParams(useLocation().search).get("type");
  const [item, setItem] = useState(null);
  
const API_BASE_URL = "https://67c1155b61d8935867e1d939.mockapi.io"
  useEffect(() => {
    if (!type || !id) return;
    axios.get(`${API_BASE_URL}/${type}s`)
    // axios.get(`http://localhost:3000/${type}s`)
      .then((res) => setItem(res.data.find((i) => i.id.toString() === id)))
      .catch((err) => console.error("Error fetching data:", err));
  }, [id, type]);

  if (!item) return <p>Loading...</p>;

  return (
    <div className="container details">
      <div className="details-content">
        <div className="poster-section">
          <img src={item.poster} alt={item.title} className="detail-poster" />
        </div>
        <div className="info-section">
          <h2>{item.title}</h2>
          <p className="synopsis">{item.synopsis}</p>
          <div className="price-buttons">
            <button className="rent-button">Rent ${item.rent_price}</button>
            <button className="buy-button">Buy ${item.buy_price}</button>
          </div>
          <p><strong>Type:</strong> {type === "movie" ? "Movie" : "TV Show"}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
