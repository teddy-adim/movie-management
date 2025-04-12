import React, { useState } from "react";
import SuccessModal from "./SuccessModal";  // Adjust path as needed
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const [agree, setAgree] = useState(false);
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

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
      const res = await axios.post(`${API_BASE_URL}/api/customers/register`, formData);
      setShowModal(true); // Show modal after successful registration
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
              <a href="/terms">Terms and Policies</a> and{" "}
              <a href="/privacy">Privacy Policy</a>.
            </label>
          </div>
          <button type="submit" className="button">
            Sign Up
          </button>
        </form>
        <p className="login-link">
          Already have an account? <a href="/login">Sign in here</a>
        </p>
      </div>
      {showModal && (
        <SuccessModal message="Registration successful!" onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default Register;
