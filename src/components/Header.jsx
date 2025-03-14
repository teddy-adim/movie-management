import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles.css"; 
import { FaBars, FaTimes } from "react-icons/fa"; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/" className="logo">TEDFLIX</Link>

        {/* Hamburger Menu Button (Only on small screens) */}
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className={`nav-bar ${menuOpen ? "show" : ""}`}>
        <Link to="/movies" className="nav-link">Movies</Link>
        <Link to="/tvshows" className="nav-link">TV Shows</Link>
        <Link to="/register" className="nav-link">Register</Link>
        <Link to="/login" className="nav-link">Login</Link>
      </nav>
    </header>
  );
};

export default Header;
