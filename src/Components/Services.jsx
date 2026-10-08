import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import '../Services.css';

export default function Services() {
  return (
    <div className="services-page-container">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo-container">
          <h2 className="logo-text-white">Digital</h2>
          <h2 className="logo-text-blue">Dynamo</h2>
        </div>

        <nav className="nav-menu">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services" className="active">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <div className="nav-cta">
          <span className="tagline">Ideas. Content. Growth.</span>
          <button className="btn-primary">Let's Grow Together &rarr;</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="s-hero-section">
        <div className="s-hero-left">
          <span className="s-sub-tag">PROFESSIONAL SERVICES. REAL RESULTS.</span>
          <h1 className="s-hero-title">
            Our <span className="purple-gradient-text">Services</span>
          </h1>
          <p className="s-hero-desc">
            Creative solutions designed to grow your brand online.
          </p>

          <div className="s-features-pills">
            <div className="pill-item">
              <span className="pill-icon">👥</span>
              <div>
                <strong>Tailored Solutions</strong>
                <p>For Your Goals</p>
              </div>
            </div>
            <div className="pill-item">
              <span className="pill-icon">⭐</span>
              <div>
                <strong>Creative Experts</strong>
                <p>With Real-World Experience</p>
              </div>
            </div>
            <div className="pill-item">
              <span className="pill-icon">📊</span>
              <div>
                <strong>Results-Driven</strong>
                <p>Strategy & Execution</p>
              </div>
            </div>
          </div>
        </div>

        <div className="s-hero-right">
          <div className="s-hero-img-frame">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
              alt="Services Overview Workspace"
            />
          </div>
        </div>
      </section>

      {/* 4-Card Services Grid */}
      <section className="services-4grid">
        {/* Card 1 */}
        <div className="service-card">
          <div className="s-card-img">
            <img src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=600&auto=format&fit=crop" alt="Video Editing" />
            <span className="s-card-badge">▶ Video Editing</span>
          </div>
          <div className="s-card-body">
            <h3>Video Editing</h3>
            <p>Transform your raw footage into high-impact, engaging videos that get results.</p>
            <div className="s-tags-row">
              <span>Reels & Shorts</span>
              <span>YouTube</span>
              <span>Brand Videos</span>
            </div>
           
          </div>
        </div>

        {/* Card 2 */}
        <div className="service-card">
          <div className="s-card-img">
            <img src="https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?q=80&w=600&auto=format&fit=crop" alt="Shoot Production" />
            <span className="s-card-badge">📷 Shoot Production</span>
          </div>
          <div className="s-card-body">
            <h3>Shoot Production</h3>
            <p>Professional video shoots for courses, ads, brand films and more — from concept to creation.</p>
            <div className="s-tags-row">
              <span>On-Location</span>
              <span>Studio Setup</span>
              <span>End-to-End</span>
            </div>
           
          </div>
        </div>

        {/* Card 3 */}
        <div className="service-card">
          <div className="s-card-img">
            <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&auto=format&fit=crop" alt="Social Media Management" />
            <span className="s-card-badge">🌐 Social Media Management</span>
          </div>
          <div className="s-card-body">
            <h3>Social Media Management</h3>
            <p>Consistent content. Stronger engagement. A growing community for your brand.</p>
            <div className="s-tags-row">
              <span>Content Strategy</span>
              <span>Posting & Growth</span>
              <span>Community</span>
            </div>
            
          </div>
        </div>

        {/* Card 4 */}
        <div className="service-card">
          <div className="s-card-img">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop" alt="Brand Strategy & Ads" />
            <span className="s-card-badge">📈 Brand Strategy & Ads</span>
          </div>
          <div className="s-card-body">
            <h3>Brand Strategy & Ads</h3>
            <p>Data-driven strategies and high-performing ad campaigns to scale your brand faster.</p>
            <div className="s-tags-row">
              <span>Brand Positioning</span>
              <span>Paid Ads</span>
              <span>Performance</span>
            </div>
            
          </div>
        </div>
      </section>

      {/* Our Work Process Bar */}
      <section className="process-section">
        <div className="process-header">
          <span className="s-sub-tag">OUR WORK PROCESS</span>
          <h2>From <span className="purple-gradient-text">Idea</span> to <span className="purple-gradient-text">Impact</span></h2>
          <p>A simple, proven process to bring your vision to life and drive real growth.</p>
        </div>

        <div className="process-steps">
          <div className="step-item">
            <div className="step-num-icon">🎯 <span>01</span></div>
            <h4>Strategy</h4>
            <p>We understand your goals, audience and opportunities.</p>
          </div>
          <span className="step-arrow">&rarr;</span>

          <div className="step-item">
            <div className="step-num-icon">💡 <span>02</span></div>
            <h4>Create</h4>
            <p>We craft content, campaigns and creative assets.</p>
          </div>
          <span className="step-arrow">&rarr;</span>

          <div className="step-item">
            <div className="step-num-icon">🚀 <span>03</span></div>
            <h4>Publish</h4>
            <p>We launch across the right channels with precision.</p>
          </div>
          <span className="step-arrow">&rarr;</span>

          <div className="step-item">
            <div className="step-num-icon">📊 <span>04</span></div>
            <h4>Grow</h4>
            <p>We track, optimize and scale for measurable results.</p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="s-cta-banner">
        <div className="cta-left-text">
          <span className="handwriting-cta">Let's Build Something Amazing &rarr;</span>
        </div>

        <div className="cta-center">
          <h2>Ready to Grow <span className="purple-gradient-text">Your Brand?</span></h2>
          <p>Book a free discovery call and let's discuss how Digital Dynamo can help you achieve your goals.</p>
        </div>

        <div className="cta-right-box">
          <Link to="/contact">
            <button className="btn-solid-purple cta-btn">
              📅 Book a Discovery Call &rarr;
            </button>
          </Link>
          <ul className="cta-check-list">
            <li>✓ No Obligation</li>
            <li>✓ Tailored Recommendations</li>
            <li>✓ Real Growth Opportunities</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="s-footer">
        <div className="footer-left">
          <strong>Digital Dynamo</strong>
          <span>A FULL-SERVICE DIGITAL MARKETING COMPANY</span>
        </div>
        <div className="footer-right">
          <span>Ideas. Content. Growth.</span>
          <span className="handwriting-footer">A Brighter Tomorrow.</span>
        </div>
      </footer>
    </div>
  );
}