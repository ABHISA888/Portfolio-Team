import React from "react";
import "./Home.css";
// import '../App.css';
const Home = () => {
  return (
    <div className="home-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <button className="nav-button active">Home</button>
        <button className="nav-button">Mentors</button>
        <button className="nav-button">Kalvians</button>
        <button className="nav-button">Our memories</button>
        <button className="nav-button">Projects</button>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hello-badge animate-fade-in">
          Hello!
        </div>
        <h1 className="hero-heading animate-slide-up">
          We are <span className="highlight">Kalvians</span> <br /> Squad -76
        </h1>
        <div className="hero-circle animate-scale-up">
          <button className="portfolio-button">
            Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
