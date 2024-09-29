import React from 'react';
import '../styles/HomePage.css'; 

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Header Section */}
      <header className="header">
        <div className="logo">Scholarship Finder</div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
          <a href="#login">Register/Login</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Find and Track Scholarships Effortlessly</h1>
          <p>Discover thousands of scholarships tailored to your profile and manage your applications in one place.</p>
          <div className="hero-buttons">
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose Our Platform?</h2>
        <div className="feature-cards">
          <div className="feature-card">Scholarship Search</div>
          <div className="feature-card">Application Tracking</div>
          <div className="feature-card">Document Management</div>
          <div className="feature-card">Analytics & Insights</div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">Step 1: Sign Up</div>
          <div className="step">Step 2: Search Scholarships</div>
          <div className="step">Step 3: Apply & Track</div>
          <div className="step">Step 4: Get Notifications</div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="call-to-action">
        <h2>Ready to start your scholarship journey?</h2>
        <div className="cta-buttons">
          <button className="btn-primary">Register Now</button>
          <button className="btn-secondary">Explore Scholarships</button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-links">
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
        <div className="social-media-icons">
          {/* Add social media icons here */}
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
