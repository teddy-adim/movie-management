import React from "react";
import { Link } from "react-router-dom";
import "../Footer_styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Watch</h4>
          <ul>
            <li><Link to="/spotlight">Spotlight</Link></li>
            <li><Link to="/movies">Movies</Link></li>
            <li><Link to="/tv">TV</Link></li>
            <li><Link to="/free">Free</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>My Account</h4>
          <ul>
            <li><Link to="/account">My Vudu</Link></li>
            <li><Link to="/settings">Settings</Link></li>
            <li><Link to="/devices">Manage Devices</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Features</h4>
          <ul>
            <li><Link to="/lists">Lists</Link></li>
            <li><Link to="/family">Family</Link></li>
            <li><Link to="/disc-to-digital">Disc to Digital</Link></li>
            <li><Link to="/instawatch">InstaWatch</Link></li>
            <li><Link to="/movies-anywhere">Movies Anywhere</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Help</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/devices">Devices</Link></li>
            <li><Link to="/support">Support</Link></li>
            <li><Link to="/forums">Forums</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/jobs">Jobs</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-social">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
        <a href="https://www.rss.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-rss"></i></a>
      </div>
    </footer>
  );
};

export default Footer;
