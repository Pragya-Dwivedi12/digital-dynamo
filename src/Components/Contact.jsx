import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../App.css';
import '../Contact.css';

export default function Contact() {
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [showQrInCard, setShowQrInCard] = useState(false); // Card ke andar QR dikhane ke liye state
  const [bookedStatus, setBookedStatus] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [coachingName, setCoachingName] = useState("");
  const [ytLink, setYtLink] = useState("");
  const [instaLink, setInstaLink] = useState("");

  const handleConsultationSubmit = (e) => {
    e.preventDefault();
    if (!coachingName) {
      alert("Please enter your Coaching or Brand Name!");
      return;
    }
    // Form hide karke usi card ke andar QR Code show karein
    setShowQrInCard(true);
  };

  const handlePaymentConfirmed = () => {
    // Automatic 2 days logic at 6:00 PM
    const bookingDate = new Date();
    bookingDate.setDate(bookingDate.getDate() + 2);
    const formattedDate = bookingDate.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    const assignedSlot = `${formattedDate}, 06:00 PM`;

    const confirmationMsg = `🎉 *Booking & Payment Confirmed - Digital Dynamo*\n` +
      `----------------------------------------\n` +
      `📌 *Coaching/Brand:* ${coachingName}\n` +
      `🔗 *YouTube:* ${ytLink || 'N/A'}\n` +
      `📸 *Instagram:* ${instaLink || 'N/A'}\n` +
      `💰 *Fee Paid:* ₹1000 via QR Scanner\n` +
      `📅 *Assigned Slot:* ${assignedSlot}\n` +
      `----------------------------------------\n` +
      `✅ Payment is complete. If there is any change in the slot timing, we will share the update with you here.`;

    const consultationWaUrl = `https://wa.me/918815800027?text=${encodeURIComponent(confirmationMsg)}`;

    setBookedStatus(`Confirmed for ${assignedSlot}`);
    setShowQrInCard(false);
    setShowTimePicker(false);

    // Auto Open WhatsApp
    window.open(consultationWaUrl, "_blank");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent("Hello Digital Dynamo Team! I submitted a query on your website and would like an urgent response.");
  const whatsappUrl = `https://wa.me/918815800027?text=${whatsappMessage}`;

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

            {/* CONSULTATION CARD WITH INLINE QR */}
            <div className="contact-card border-glow consultation-card">
              <span className="card-icon">📅</span>
              <h3>Book a Consultation</h3>
              <p>1-on-1 Strategy & Growth Call</p>

              <div className="fee-badge">
                <span className="fee-amount">₹1000</span>
                <span className="fee-label">-UPI Consultation Fee</span>
              </div>

              {!showTimePicker && !showQrInCard ? (
                <>
                  {bookedStatus && <p className="booking-status-msg" style={{ color: '#38bdf8', fontSize: '0.85rem', margin: '0.50rem 0' }}>✓ {bookedStatus}</p>}
                  <button
                    className="btn-gold-sm"
                    onClick={() => setShowTimePicker(true)}
                  >
                    {bookedStatus ? "Book Another" : "Fill your Information"} &rarr;
                  </button>
                </>
              ) : showQrInCard ? (
                /* --- INLINE QR CODE SECTION INSIDE THE CARD --- */
                <div className="inline-qr-box">
                  <h4 style={{ color: '#38bdf8', marginBottom: '0.5rem' }}>Scan & Pay ₹1000</h4>
                  <p style={{ fontSize: '0.75rem', color: '#94a3b8', marginBottom: '0.8rem' }}>Please scan through PhonePe, GPay, Paytm.</p>

                  <div className="qr-image-container" style={{ background: '#fff', padding: '0.5rem', borderRadius: '8px', display: 'inline-block' }}>
                    <img
                      src="/Scanner.jpeg"
                      alt="Payment QR Code"
                      style={{ width: '130px', height: '130px', display: 'block', margin:'0 auto'}}
                    />

                    {/* Mobile Direct Pay Button */}
                    <a
                      href="upi://pay?pa=8815800027@paytm&pn=DigitalDynamo&am=1000&cu=INR"
                      className="btn-pay-direct"
                      style={{
                        display: 'inline-block',
                        margin: '0.5rem 0',
                        padding: '8px 16px',
                        backgroundColor: '#38bdf8',
                        color: '#000',
                        fontWeight: 'bold',
                        borderRadius: '6px',
                        textDecoration: 'none',
                        fontSize: '0.85rem'
                      }}
                    >
                      📲 Open UPI App
                    </a>

                  </div>

                  <p style={{ fontSize: '0.8rem', color: '#38bdf8', margin: '0.6rem 0' }}>UPI ID: <strong>8815800027@paytm</strong></p>

                  <div className="picker-btn-group">
                    <button className="btn-confirm-sm" onClick={handlePaymentConfirmed}>
                      Payment Done? Confirm 💬
                    </button>
                    <button
                      type="button"
                      className="btn-cancel-sm"
                      onClick={() => setShowQrInCard(false)}
                    >
                      Back
                    </button>
                  </div>
                </div>
              ) : (
                /* --- CONSULTATION FORM --- */
                <form className="inline-picker-box" onSubmit={handleConsultationSubmit}>
                  <div className="picker-field">
                    <label>Coaching/Brand Name *</label>
                    <input
                      type="text"
                      placeholder="e.g. Sparsh Classes"
                      value={coachingName}
                      onChange={(e) => setCoachingName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="picker-field">
                    <label>YouTube Channel Link</label>
                    <input
                      type="url"
                      placeholder="https://youtube.com/..."
                      value={ytLink}
                      onChange={(e) => setYtLink(e.target.value)}
                    />
                  </div>

                  <div className="picker-field">
                    <label>Instagram Handle / Link</label>
                    <input
                      type="text"
                      placeholder="@yourusername or link"
                      value={instaLink}
                      onChange={(e) => setInstaLink(e.target.value)}
                    />
                  </div>

                  <div className="picker-btn-group">
                    <button type="submit" className="btn-confirm-sm">
                      Pay via UPI &amp; Confirm
                    </button>
                    <button
                      type="button"
                      className="btn-cancel-sm"
                      onClick={() => setShowTimePicker(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
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
              <form className="contact-form" onSubmit={handleSubmit}>
                <span className="badge-tag">SEND US A MESSAGE</span>
                <h2>Start Your Project</h2>
                <p className="form-subtext">Fill out the form below and our team will get back to you within 24 hours.</p>

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