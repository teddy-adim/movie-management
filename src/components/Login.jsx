import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const API_BASE_URL = "https://digital-video-store-v1.onrender.com";
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_BASE_URL}/api/customers/login`, formData);
      const user = res.data;

      
      localStorage.setItem("user", JSON.stringify(user));

      navigate("/Dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Check email or password.");
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Login to Your Account</h2>
        <form className="form" onSubmit={handleSubmit}>
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
          <button type="submit" className="button">Login</button>
        </form>
        <p className="login-link">
          Don’t have an account? <Link to="/register">Sign up here</Link>
        </p>
        <div className="social-login">
          <button className="social-button walmart-button">Walmart</button>
          <button className="social-button">Facebook</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
