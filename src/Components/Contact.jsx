import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../App.css';
import '../Contact.css';

export default function Contact() {
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [bookedStatus, setBookedStatus] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const whatsappNumber = "918815800027";
  const whatsappMessage = encodeURIComponent("Hello Digital Dynamo Team! I submitted a query on your website and would like an urgent response.");
  const whatsappUrl = `https://wa.me/${918815800027}?text=${whatsappMessage}`;

  const handleSaveSlot = () => {
    if (selectedDate && selectedTime) {
      setBookedStatus(`${selectedDate} (${selectedTime})`);
      setShowTimePicker(false);
    } else {
      alert("Kripya Date aur Time dono select karein!");
    }
  };

  return (
    <div className="home-container">
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
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <div className="nav-cta">
          <span className="tagline">Ideas. Content. Growth.</span>
          <button className="btn-primary">Let's Grow Together &rarr;</button>
        </div>
      </header>

      <div className="contact-page">
        {/* HERO & CONTACT CARDS SECTION */}
        <section className="contact-hero">
          <span className="badge-tag">GET IN TOUCH</span>
          <h1 className="hero-title">
            Let's Build Your <span className="gradient-text">Digital Presence</span>
          </h1>
          <p className="hero-desc">
            We help brands and educators grow with creative content, smart strategy, and measurable marketing that makes an impact.
          </p>

          <ul className="hero-highlights">
            <li>⚡ Fast Response</li>
            <li>👥 Expert Support</li>
            <li>📊 Real Growth Results</li>
          </ul>

          <div className="contact-cards-grid">
            <div className="contact-card">
              <span className="card-icon">📞</span>
              <h3>Call Us</h3>
              <p>Speak with our team</p>
              <p className="card-highlight">+91 8815800027</p>
            </div>

            <div className="contact-card">
              <span className="card-icon">✉️</span>
              <h3>Email Us</h3>
              <p>Send us a message</p>
              <p className="card-highlight">digitaldynamo964@gmail.com</p>
            </div>

            <div className="contact-card border-glow consultation-card">
              <span className="card-icon">📅</span>
              <h3>Book a Consultation</h3>
              <p>Free 30-minute strategy call</p>

              {!showTimePicker ? (
                <>
                  {bookedStatus && <p className="booking-success-msg">✓ {bookedStatus}</p>}
                  <button
                    className="btn-gold-sm"
                    onClick={() => setShowTimePicker(true)}
                  >
                    {bookedStatus ? "Change Time" : "Choose a Time"} &rarr;
                  </button>
                </>
              ) : (
                <div className="inline-picker-box">
                  <div className="picker-field">
                    <label>Select Date:</label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                    />
                  </div>

                  <div className="picker-field">
                    <label>Select Time Slot:</label>
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                    >
                      <option value="">-- Choose Slot --</option>
                      <option value="10:00 AM">10:00 AM - 10:30 AM</option>
                      <option value="11:30 AM">11:30 AM - 12:00 PM</option>
                      <option value="02:00 PM">02:00 PM - 02:30 PM</option>
                      <option value="04:00 PM">04:00 PM - 04:30 PM</option>
                    </select>
                  </div>

                  <div className="picker-btn-group">
                    <button className="btn-confirm-sm" onClick={handleSaveSlot}>Confirm</button>
                    <button className="btn-cancel-sm" onClick={() => setShowTimePicker(false)}>Cancel</button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="impact-note">
            <p>
              Let's turn your ideas into impact. We're excited to learn about your project and explore how we can grow together.
            </p>
          </div>
        </section>

        {/* FORM & SERVICES SECTION */}
        <section className="contact-body-grid">
          {/* FORM CONTAINER */}
          <div className="form-container">
            {isSubmitted ? (
              /* --- THANK YOU & WHATSAPP CARD --- */
              <div className="thankyou-card">
                <span className="thankyou-icon">🎉</span>
                <h2>Thank You for Reaching Out!</h2>
                <p className="thankyou-subtext">
                  We have received your project details. Our team will review your requirements and get back to you within 24 hours.
                </p>

                <div className="thankyou-cta-box">
                  <p className="urgent-note">Need an urgent reply?</p>
                  <a 
                    href={whatsappUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-whatsapp"
                  >
                    💬 Chat on WhatsApp
                  </a>
                </div>

                <button 
                  className="btn-reset-form" 
                  onClick={() => setIsSubmitted(false)}
                >
                  &larr; Send Another Message
                </button>
              </div>
            ) : (
              /* --- NORMAL CONTACT FORM --- */
              <>
                <span className="badge-tag">SEND US A MESSAGE</span>
                <h2>Start Your Project</h2>
                <p className="form-subtext">Fill out the form below and our team will get back to you within 24 hours.</p>

                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Name *</label>
                    <input type="text" placeholder="Your full name" required />
                  </div>

                  <div className="form-group">
                    <label>Business *</label>
                    <input type="text" placeholder="Your business or brand name" required />
                  </div>

                  <div className="form-group">
                    <label>Service Needed *</label>
                    <select required>
                      <option value="">Select a service</option>
                      <option value="video-editing">Video Editing</option>
                      <option value="shoot-production">Shoot Production</option>
                      <option value="social-media">Social Media Management</option>
                      <option value="brand-strategy">Brand Strategy &amp; Ads</option>
                    </select>
                  </div>

                  <button type="submit" className="btn-gold-wide">Submit &rarr;</button>
                  <p className="privacy-note"><small>🔒 Your information is safe with us. We respect your privacy.</small></p>
                </form>
              </>
            )}
          </div>

          {/* SIDEBAR SERVICES & TESTIMONIAL */}
          <div className="services-sidebar">
            <div className="sidebar-box">
              <h3>Our Services</h3>
              <p className="sidebar-sub">The building blocks for your digital success.</p>

              <ul className="sidebar-services-list">
                <li>
                  <h4>Video Editing</h4>
                  <p>Turn your ideas into high-impact videos that get results.</p>
                </li>
                <li>
                  <h4>Shoot Production</h4>
                  <p>Professional video shoots from concept to creation.</p>
                </li>
                <li>
                  <h4>Social Media Management</h4>
                  <p>Consistent content. Stronger engagement. A growing community.</p>
                </li>
                <li>
                  <h4>Brand Strategy &amp; Ads</h4>
                  <p>Data-driven strategies and high-performing ad campaigns.</p>
                </li>
              </ul>
            </div>

            <div className="testimonial-card">
              <p>"Digital Dynamo transformed our online presence. Professional, creative, and results-driven!"</p>
              <p className="testimonial-author"><strong>Education Brand Partner</strong></p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}