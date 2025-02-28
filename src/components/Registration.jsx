import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const Register = () => {
  return (
    <div className="container">
      <div className="form-container">
        <h2>Create a New Account</h2>
        <form className="form">
          <div className="input-group">
            <input type="text" placeholder="First name" className="input" required />
            <input type="text" placeholder="Last name" className="input" required />
          </div>
          <input type="email" placeholder="Email" className="input" required />
          <input type="password" placeholder="Password" className="input" required />
          <div className="checkbox-container">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">I certify that I am at least 18 years old and agree to the <Link to="/terms">Terms and Policies</Link> and <Link to="/privacy">Privacy Policy</Link>.</label>
          </div>
          <button type="submit" className="button">Sign Up</button>
        </form>
        <p className="login-link">Already have an account? <Link to="/login">Sign in here</Link></p>
        <div className="social-login">
          <button className="social-button walmart-button">Walmart</button>
          <button className="social-button">Facebook</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
