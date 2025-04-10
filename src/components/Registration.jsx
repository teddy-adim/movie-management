import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles.css";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const [agree, setAgree] = useState(false);

  const API_BASE_URL = "https://digital-video-store-v1.onrender.com";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agree) {
      alert("You must agree to the terms and policies.");
      return;
    }

    try {
      const res = await axios.post(`${API_BASE_URL}/customers/register`, formData);
      alert("Registration successful!");
      setFormData({ firstName: "", lastName: "", email: "", password: "" });
      setAgree(false);
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed. Email may already exist.");
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Create a New Account</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              className="input"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              className="input"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="terms"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              required
            />
            <label htmlFor="terms">
              I certify that I am at least 18 years old and agree to the{" "}
              <Link to="/terms">Terms and Policies</Link> and{" "}
              <Link to="/privacy">Privacy Policy</Link>.
            </label>
          </div>
          <button type="submit" className="button">
            Sign Up
          </button>
        </form>
        <p className="login-link">
          Already have an account? <Link to="/login">Sign in here</Link>
        </p>
        <div className="social-login">
          <button className="social-button walmart-button">Walmart</button>
          <button className="social-button">Facebook</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
