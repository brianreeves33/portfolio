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
          {/* Add Photo Here */}
          <p>I am a passionate developer.</p>
          <button>View Portfolio</button>
        </div>
      </section>
      <section className="about-section">
        <div className="about-content">
          <h2>About Me</h2>
          <p>Brian Reeves Application Developer</p>
        </div>
      </section>
      <section className="portfolio-section">
        <div className="portfolio-content">
          <h2>My Portfolio</h2>
          {/* Add your portfolio items here */}
          <p>IBM Apprenticeship</p>
          <p>AWS Certified Cloud Practitioner</p>
          <p>CU Certified Cloud Test Practitioner</p>
          <p>Full Stack Coding Academy Bootcamp</p>
          <p></p>
        </div>
      </section>
      <section className="work-history-section">
        <div className="work-history-content">
          <h2>Work History</h2>
          <p>IBM</p>
          <p>State Farm</p>
          <p>TQL</p>
          <p>AFLAC</p>
        </div>
      </section>
      <section className="contact-section">
        <div className="contact-content">
          <h2>Contact Me</h2>
          <p>Email: brianreeves729@gmail.com</p>
          <p>GitHub: https://github.com/brianreeves33</p>
        </div>
      </section>
      <footer className="footer">
        {/* Add your footer content here */}
      </footer>
    </div>
  );
};

export default HomePage;
