import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import '../About.css';

export default function About() {
  return (
    <div className="home-container about-wrapper">
      {/* Header / Navbar */}
      <header className="navbar">
        <div className="logo-container">
          <h2 className="logo-text-white">Digital</h2>
          <h2 className="logo-text-blue">Dynamo</h2>
        </div>

        <nav className="nav-menu">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/about" className="active">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <div className="nav-cta">
          <span className="tagline">Ideas. Content. Growth.</span>
          <button className="btn-primary">Let's Grow Together &rarr;</button>
        </div>
      </header>

      {/* Hero Section Split Layout */}
      <section className="about-hero-grid">
        <div className="about-hero-content">
          <span className="blue-tag">ABOUT DIGITAL DYNAMO</span>
          <h1 className="about-hero-title">
            More Than a <br />
            <span className="gradient-purple-blue">Digital Agency</span>
          </h1>
          <p className="about-hero-desc">
            We are a team of creators, strategists and storytellers on a mission to help educators, coaches and mission-driven brands create real impact through powerful content and smart digital growth.
          </p>

          <div className="about-hero-actions">
            <Link to="/services">
              <button className="btn-purple-blue">Our Services &rarr;</button>
            </Link>
          </div>
        </div>

        <div className="about-hero-visual">
          <img 
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop" 
            alt="Workspace Setup" 
            className="about-hero-img"
          />
        </div>
      </section>

      {/* Our Story & Quote Section */}
      <section className="our-story-section">
        <div className="story-image-box">
          <img 
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop" 
            alt="Studio Setup" 
          />
        </div>

        <div className="story-text-box">
          <h2>Our Story</h2>
          <p>
            Digital Dynamo was born from a simple belief — that great educators and creators deserve world-class content and digital support to reach more people and create lasting impact.
          </p>
          <p>
            What started as a small team with a big vision has now grown into a trusted partner for 250+ educators, institutes and creators across India. We combine creativity, strategy and technology to transform ideas into measurable results.
          </p>
        </div>

        <div className="story-quote-card">
          <span className="quote-mark">“</span>
          <blockquote>
            Empowering Educators. Inspiring Minds. Building a Brighter Tomorrow.
          </blockquote>
          <div className="quote-logo">
            <span className="logo-white">Digital </span>
            <span className="logo-blue">Dynamo</span>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values Grid */}
      <section className="mvv-grid">
        <div className="mvv-card">
          <div className="mvv-header">
            <span className="mvv-icon">🎯</span>
            <h3>Our Mission</h3>
          </div>
          <p>
            To empower educators, coaches and institutes with high-quality content, smart strategy and consistent digital growth.
          </p>
        </div>

        <div className="mvv-card">
          <div className="mvv-header">
            <span className="mvv-icon">👁️</span>
            <h3>Our Vision</h3>
          </div>
          <p>
            To become the most trusted digital partner for educators and mission-driven brands across India and beyond.
          </p>
        </div>

        <div className="mvv-card values-card">
          <div className="mvv-header">
            <span className="mvv-icon">💎</span>
            <h3>Our Values</h3>
          </div>
          <ul className="values-icons-list">
            <li>
              <span className="val-icon">👥</span>
              <span>People First</span>
            </li>
            <li>
              <span className="val-icon">⚙️</span>
              <span>Creativity in Action</span>
            </li>
            <li>
              <span className="val-icon">📊</span>
              <span>Results Driven</span>
            </li>
            <li>
              <span className="val-icon">🤝</span>
              <span>Long-Term Partnerships</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Journey in Numbers Bar */}
      <section className="journey-numbers-bar">
        <div className="journey-title-box">
          <h2>Our Journey <br /><span className="gradient-purple-blue">in Numbers</span></h2>
          <p>Real partnerships. Real growth. Real impact.</p>
        </div>

        <div className="numbers-grid">
          <div className="num-box">
            <h3>250+</h3>
            <p>Educators & Institutes</p>
          </div>
          <div className="num-box">
            <h3>1M+</h3>
            <p>Students Reached</p>
          </div>
          <div className="num-box">
            <h3>3x</h3>
            <p>Average Growth</p>
          </div>
          <div className="num-box">
            <h3>120K+</h3>
            <p>Content Pieces Created</p>
          </div>
          <div className="num-box">
            <h3>98%</h3>
            <p>Client Satisfaction</p>
          </div>
        </div>
      </section>

      {/* Bottom Team Banner */}
      <section className="team-banner-section">
        <div className="team-image-side">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" 
            alt="Team Members" 
          />
        </div>

        <div className="team-info-side">
          <h2>A Team That Believes in <span className="gradient-purple-blue">Impact</span></h2>
          <p>
            We are a passionate team of strategists, designers, editors, creators and growth experts who love what we do — helping you create content that educates, inspires and grows.
          </p>
          <button className="btn-purple-blue">Meet Our Team &rarr;</button>
        </div>

        <div className="team-handwriting-tag">
          <span>Ideas <br /> Content <br /> Growth <br /> Together</span>
        </div>
      </section>
    </div>
  );
}