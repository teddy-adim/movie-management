import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles.css";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "", // New field for confirm password
  });

  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordError, setPasswordError] = useState(""); // State to hold password validation error

  const API_BASE_URL = "https://digital-video-store-v1.onrender.com";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validatePassword = () => {
    const { password, confirmPassword } = formData;

    // Check if the password and confirm password match
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match.");
      return false;
    }

    // Check if the password meets the required pattern
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/; // At least 8 chars, 1 uppercase, 1 lowercase, and 1 number
    if (!passwordPattern.test(password)) {
      setPasswordError(
        "Password must be at least 8 characters long, with at least 1 uppercase letter, 1 lowercase letter, and 1 number."
      );
      return false;
    }

    setPasswordError(""); // Clear error if validation passes
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!agree) {
      alert("You must agree to the terms and policies.");
      return;
    }

    if (!validatePassword()) {
      return; 
    }

    setLoading(true); 
    try {
      const res = await axios.post(`${API_BASE_URL}/api/customers/register`, formData);
      alert("Registration successful!");
      setFormData({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" });
      setAgree(false);
      setLoading(false); 
    } catch (error) {
      console.error("Registration failed:", error);
      setErrorMessage("Registration failed. Email may already exist."); // Display error message
      setLoading(false); 
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
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="input"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          {passwordError && <div className="error-message">{passwordError}</div>} {/* Display password validation error */}
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
          <button type="submit" className="button" disabled={loading}>
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
        {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Display general error message */}
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
