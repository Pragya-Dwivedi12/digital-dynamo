import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import '../Portfolio.css';

export default function Portfolio() {
  return (
    <div className="portfolio-page-container">
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
            <li><Link to="/portfolio" className="active">Portfolio</Link></li>
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
      <section className="p-hero-section">
        <div className="p-hero-left">
          <span className="p-sub-tag">REAL BRANDS. REAL PEOPLE. REAL GROWTH.</span>
          <h1 className="p-hero-title">
            Our Work &amp; <span className="purple-gradient-text">Results</span>
          </h1>
          <p className="p-hero-desc">
            From educators and coaches to mission-driven brands, we help visionary creators turn their expertise into real impact — with powerful content, smart strategy, and measurable results.
          </p>

          <div className="p-hero-btn-group">
            <Link to="/about">
            <button className="btn-solid-purple">About-Us &rarr;</button>
          </Link>
          </div>
        </div>

        <div className="p-hero-right">
          <div className="p-hero-img-frame">
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop" 
              alt="Our Work Laptop Showcase" 
            />
          </div>
        </div>
      </section>

      {/* Featured Case Studies Header */}
      <section className="section-header-row">
        <div>
          <h2 className="section-title">
            Featured <span className="purple-gradient-text">Case Studies</span>
          </h2>
          <p className="section-subtitle">Real strategies. Measurable results. Lasting impact.</p>
        </div>
        <div className="header-right-action">
          <span className="handwriting-sub">Different goals. Same bigger tomorrow.</span>
          <button className="btn-solid-purple">View All Projects &rarr;</button>
        </div>
      </section>

      {/* Case Studies 4-Card Grid */}
      <section className="case-studies-grid">
        {/* Card 1 */}
        <div className="case-card">
          <div className="case-card-img">
            <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop" alt="Educator Branding" />
            <span className="case-badge">🔮 Educator Branding</span>
          </div>
          <div className="case-card-body">
            <h3>From Teacher to Thought Leader</h3>
            <p>Personal brand strategy, content system, and visual identity for an education expert.</p>
            
            <div className="case-stats-row">
              <div className="stat-item">
                <h4>3x</h4>
                <p>Engagement</p>
              </div>
              <div className="stat-item">
                <h4>120K</h4>
                <p>Reach</p>
              </div>
              <div className="stat-item">
                <h4>2.5x</h4>
                <p>Profile Visits</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="case-card">
          <div className="case-card-img">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop" alt="Course Launch Campaign" />
            <span className="case-badge">🚀 Course Launch Campaign</span>
          </div>
          <div className="case-card-body">
            <h3>A Record-Breaking Launch</h3>
            <p>End-to-end campaign strategy, ad creatives, and funnel optimization for a flagship course.</p>
            
            <div className="case-stats-row">
              <div className="stat-item">
                <h4>250+</h4>
                <p>Leads</p>
              </div>
              <div className="stat-item">
                <h4>35%</h4>
                <p>Conversion Rate</p>
              </div>
              <div className="stat-item">
                <h4>4.2x</h4>
                <p>ROAS</p>
              </div>
            </div>

          </div>
        </div>

        {/* Card 3 */}
        <div className="case-card">
          <div className="case-card-img">
            <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&auto=format&fit=crop" alt="Social Media Growth" />
            <span className="case-badge">📊 Social Media Growth</span>
          </div>
          <div className="case-card-body">
            <h3>From Followers to a Community</h3>
            <p>Content strategy, short-form videos, and community management across platforms.</p>
            
            <div className="case-stats-row">
              <div className="stat-item">
                <h4>120K</h4>
                <p>Reach</p>
              </div>
              <div className="stat-item">
                <h4>3x</h4>
                <p>Engagement</p>
              </div>
              <div className="stat-item">
                <h4>40%</h4>
                <p>Growth</p>
              </div>
            </div>

          </div>
        </div>

        {/* Card 4 */}
        <div className="case-card">
          <div className="case-card-img">
            <img src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=600&auto=format&fit=crop" alt="Video Content Production" />
            <span className="case-badge">📹 Video Content Production</span>
          </div>
          <div className="case-card-body">
            <h3>Ideas That Inspire Action</h3>
            <p>High-quality video production, editing, and storytelling for an educational brand.</p>
            
            <div className="case-stats-row">
              <div className="stat-item">
                <h4>500K</h4>
                <p>Video Views</p>
              </div>
              <div className="stat-item">
                <h4>4x</h4>
                <p>Watch Time</p>
              </div>
              <div className="stat-item">
                <h4>2.8x</h4>
                <p>Subscriber Growth</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Client Stories / Testimonials Banner */}
      <section className="testimonials-banner">
        <div className="testi-header">
          <span className="p-sub-tag">CLIENT STORIES</span>
          <h2>
            Trusted by <br />
            <span className="purple-gradient-text">Educators. Loved for Results.</span>
          </h2>
          <p>Don't just take our word for it. Here's what our clients have to say.</p>
        </div>

        <div className="testi-cards-container">
          <div className="testi-card">
            <div className="testi-user-row">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop" alt="Dr. Priya Sharma" className="testi-avatar" />
              <div className="stars">★★★★★</div>
            </div>
            <p className="testi-text">
              "Digital Dynamo helped me turn my ideas into a brand that actually reaches people. My course launch exceeded all expectations!"
            </p>
            <h4 className="testi-name">Dr. Priya Sharma</h4>
            <p className="testi-role">Educator &amp; Course Creator</p>
          </div>

          <div className="testi-card">
            <div className="testi-user-row">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop" alt="Arjun Mehta" className="testi-avatar" />
              <div className="stars">★★★★★</div>
            </div>
            <p className="testi-text">
              "The team is professional, creative, and results-driven. Our social media growth has been incredible — real engagement, real students, real impact."
            </p>
            <h4 className="testi-name">Arjun Mehta</h4>
            <p className="testi-role">Founder, LearnBridge</p>
          </div>
        </div>

        <div className="testi-cta-side">
          <span className="handwriting-cta">~More Success Stories Ahead &rarr;</span>
          <button className="btn-solid-purple">See More Success Stories &rarr;</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-footer">
        <div className="logo-container">
          <h3 className="logo-text-white">Digital</h3>
          <h3 className="logo-text-blue">Dynamo</h3>
        </div>
        <div className="footer-tagline">
          <span>Educate | Inspire | Grow Online</span>
        </div>
        <div className="footer-corner-handwriting">
          Same Knowledge, Bigger Reach.
        </div>
      </footer>
    </div>
  );
}