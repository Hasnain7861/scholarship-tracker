import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/FeaturesPage.css';
import { FaSearch, FaClipboardCheck, FaFileAlt, FaChartLine } from 'react-icons/fa';

const FeaturesPage = () => {
  return (
    <div className="features-page">
      <header className="header">
        <div className="logo">Scholarship Finder</div>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/features">Features</Link>
          <Link to="#contact">Contact</Link>
          <Link to="#login">Register/Login</Link>
        </nav>
      </header>

      <section className="features-hero">
        <h1>Unlock Your Scholarship Potential</h1>
        <p>
          Our platform empowers students to find, track, and manage scholarship opportunities
          effortlessly, turning your academic dreams into reality.
        </p>
        <button className="cta-button">Start Your Journey Today</button>
      </section>

      <section className="features-content">
        <h2>Our Key Features</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <FaSearch className="feature-icon" />
            <h3>Scholarship Search</h3>
            <p>Find scholarships tailored to your profile with our powerful search engine.</p>
          </div>
          <div className="feature-card">
            <FaClipboardCheck className="feature-icon" />
            <h3>Application Tracking</h3>
            <p>Keep track of all your applications, deadlines, and progress in one place.</p>
          </div>
          <div className="feature-card">
            <FaFileAlt className="feature-icon" />
            <h3>Document Management</h3>
            <p>Upload, store, and organize all your application documents with ease.</p>
          </div>
          <div className="feature-card">
            <FaChartLine className="feature-icon" />
            <h3>Analytics & Insights</h3>
            <p>Gain valuable insights into your application success rates and improve your strategy.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Find Your Perfect Scholarship?</h2>
        <p>Join thousands of students who have successfully found scholarships using our platform.</p>
        <button className="cta-button">Register Now</button>
      </section>

      <footer className="footer">
        <div className="footer-links">
          <Link to="/about">About Us</Link>
          <Link to="#contact">Contact</Link>
          <Link to="#privacy">Privacy Policy</Link>
          <Link to="#terms">Terms of Service</Link>
        </div>
      </footer>
    </div>
  );
};

export default FeaturesPage;
