import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/AboutPage.css';

const AboutPage = () => {
  const handleContactClick = () => {
    window.location.href = 'mailto:mucklaihasnain@gmail.com';
  };

  return (
    <div className="about-page">
      <header className="header">
        <div className="logo">Scholarship Finder</div>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/features">Features</Link>
          <Link to="#login">Register/Login</Link>
        </nav>
      </header>

      <section className="about-hero">
        <h1>About Us</h1>
        <p>
          Scholarship Finder was created out of frustration with how difficult it is to find relatable scholarships.
          As someone who struggled with endless searches and missed opportunities, I wanted to make it easier for
          students to connect with the scholarships that are truly meant for them. Our mission is simple:
          to help students unlock their potential by making scholarship searching and application tracking
          easy, accessible, and efficient.
        </p>
        <p>
          We believe every student deserves the chance to pursue their academic dreams without financial barriers.
          Whether you're looking for merit-based, need-based, or niche-specific scholarships, our platform
          is designed to match you with the opportunities that best fit your profile. We’re committed to constantly
          improving our platform and expanding our database to serve you better.
        </p>
        <button className="contact-button" onClick={handleContactClick}>
          Contact Me for Suggestions
        </button>
      </section>

      {/* Our Story Section */}
      <section className="story-section">
        <h2>Our Story</h2>
        <p>
          Scholarship Finder began as a personal project driven by a need to solve a common problem: the struggle of 
          finding the right scholarships. From its humble beginnings, it has grown into a platform helping countless 
          students achieve their academic goals with less financial burden.
        </p>
      </section>

      {/* Mission and Vision Section */}
      <section className="mission-vision-section">
        <h2>Our Mission & Vision</h2>
        <p>
          Our mission is to empower students by simplifying the scholarship search and application process. We envision 
          a future where every student has the financial support they need to pursue higher education without the stress 
          of overwhelming costs.
        </p>
      </section>

      {/* Meet the Founder Section */}
      <section className="founder-section">
        <h2>Meet the Founder</h2>
        <img src="/assets/Tahoe Picture.jpg" alt="Founder" className="founder-image" />
        <p>
          Hi, I'm Hasnain Mucklai, the founder of Scholarship Finder. As a student who faced countless barriers to securing 
          financial aid, I realized there had to be a better way. My goal is to make it easier for students everywhere 
          to find the scholarships they need to succeed.
        </p>
      </section>

      <footer className="footer">
        <div className="footer-links">
          <Link to="/about">About Us</Link>
          <Link to="#contact">Contact</Link>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
