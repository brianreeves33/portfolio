import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="header">
      </header>
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to My Portfolio</h1>
          <p>I am a passionate developer.</p>
          <button>View Portfolio</button>
        </div>
      </section>
      <section className="about-section">
        <div className="about-content">
          <h2>About Me</h2>
          <p>Brian Reeves Full Stack Developer</p>
        </div>
      </section>
      <section className="portfolio-section">
        <div className="portfolio-content">
          <h2>My Portfolio</h2>
          {/* Add your portfolio items here */}
        </div>
      </section>
      <section className="contact-section">
        <div className="contact-content">
          <h2>Contact Me</h2>
          <p>Feel free to reach out to me for any inquiries.</p>
        </div>
      </section>
      <footer className="footer">
        {/* Add your footer content here */}
      </footer>
    </div>
  );
};

export default HomePage;
