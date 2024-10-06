import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Header Section */}
      <header className="header">
        <div className="logo">Scholarship Finder</div>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/features">Features</Link>
          <Link to="/login">Register/Login</Link> {/* Updated link */}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Find and Track Scholarships Effortlessly</h1>
          <p>Discover thousands of scholarships tailored to your profile and manage your applications in one place.</p>
          <div className="hero-buttons">
            <Link to="/login">
              <button className="btn-primary">Get Started</button>
            </Link>
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
          <div className="step">
            <div className="step-icon">1</div>
            <div className="step-content">
              <h3>Sign Up</h3>
              <p>Create your account to get started.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-icon">2</div>
            <div className="step-content">
              <h3>Search Scholarships</h3>
              <p>Find scholarships that match your profile.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-icon">3</div>
            <div className="step-content">
              <h3>Apply & Track</h3>
              <p>Submit applications and monitor their status.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-icon">4</div>
            <div className="step-content">
              <h3>Get Notifications</h3>
              <p>Receive updates on your applications.</p>
            </div>
          </div>
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

/* CSS file */

