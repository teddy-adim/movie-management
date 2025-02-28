import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Movies from "./components/Movies";
import MovieDetails from "./components/MovieDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Registration from "./components/Registration";
import "./styles.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/MovieDetails/:id" element={<MovieDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path ="/register" element={<Registration />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
