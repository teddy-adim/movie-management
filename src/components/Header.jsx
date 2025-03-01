import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const Header = () => {
  return (
    <header className="header">
      <div>
      <Link to="/" className="logo">TEDFLIX</Link>
      </div>
      <nav className="nav-bar">
        <Link to="/movies" className="nav-link">Movies</Link>
        <Link to="/register" className="nav-link">Register</Link>
        <Link to="/login" className="nav-link">Login</Link>
      </nav>
    </header>
  );
};

export default Header;
