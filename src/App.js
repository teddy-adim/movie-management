import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Movies from "./components/Movies";
import MovieDetails from "./components/MovieDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Hero from "./components/Hero";
import SpotlightBanner from "./components/Spotlight";
import TVShows from "./components/TVShows";
import Dashboard from "./components/Dashboard";
import "./styles.css";

const App = () => {
  return (
    <Router>
      <Header />
      
      <Routes>
      <Route path="/" element={
          <>
             <Hero/>
            <Home />
            <SpotlightBanner /> 
          </>
        } />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvshows" element={<TVShows />} />
        <Route path="/MovieDetails/:id" element={<MovieDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path ="/register" element={<Registration />} />
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
