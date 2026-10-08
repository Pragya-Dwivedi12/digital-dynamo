import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';
import { Video, Scissors, Image, Users } from 'lucide-react';

import unsplash from "../assets/unsplash.jpg";
import videoEditing from "../assets/videoEditing.jpg";
import ShootPro from "../assets/ShootPro.jpg";
import socialMedia from "../assets/socialMedia.jpg";
import Brand from "../assets/Brand.jpg";
import Educator from "../assets/Educator.jpg";


export default function Home() {

    const whatsappNumber = "918815800027";
    const whatsappMessage = encodeURIComponent("Hello Digital Dynamo Team! I am reaching out from your website home page.");
    const whatsappUrl = `https://wa.me/${918815800027}?text=${whatsappMessage}`;

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
                    <Link to="/contact">
                        <button className="btn-primary">Let's Grow Together &rarr;</button>
                    </Link>
                </div>
            </header>

            {/* Hero Section (Text Over Image) */}
            <section className="hero-section">
                <div className="hero-image-container">
                    <img src={unsplash} className="hero-img" alt="Digital Agency" />
                    <div className="hero-overlay-content">
                        <p className="hero-subtitle">A FULL-SERVICE DIGITAL MARKETING COMPANY</p>
                        <h1 className="hero-title">Powering Your Digital Growth</h1>
                        <p className="hero-description">
                            We help brands create, communicate and grow online with powerful content and smart strategies.
                        </p>

                        <div className="hero-btn-group">
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary"
                                style={{ textDecoration: 'none', display: 'inline-block' }}
                            >
                                Chat in Whatsapp
                            </a>
                        </div>
                    </div>
                    <div className="stats-container">
                        <div className="stat-card">
                            <h4>250+</h4>
                            <p>Happy Clients</p>
                        </div>
                        <div className="stat-card">
                            <h4>500+</h4>
                            <p>Projects Delivered</p>
                        </div>
                        <div className="stat-card">
                            <h4>3X</h4>
                            <p>Average Growth</p>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}

            </section>

            {/* Services Section */}
            <section className="services-section">
                <div className="section-header">
                    <div className="section-Header">
                        <h2>Our <span>Services</span></h2>
                        <p>Everything you need to build a powerful brand online.</p>
                    </div>

                    <div className="section-Headerr">
                        <p>Strategy, Content, Community, Results.</p>
                        <Link to="/services">
                            <button className="btn-primary">Explore All Services &rarr;</button>
                        </Link>
                    </div>
                </div>
                <div className="services-grid">
                    <div className="service-card">
                        <img src={videoEditing} alt="Video Editing" className="card-img" />
                        <h3>Video Editing</h3>
                        <p>Transform your raw footage into high-impact, engaging videos that get results.</p>
                        <button className="btn-icon">&rarr;</button>
                    </div>

                    <div className="service-card">
                        <img src={ShootPro} alt="Shoot Production" className="card-img" />
                        <h3>Shoot Production</h3>
                        <p>Professional video shoots for courses, ads, brand films and more—from concept to creation.</p>
                        <button className="btn-icon">&rarr;</button>
                    </div>

                    <div className="service-card">
                        <img src={socialMedia} alt="Social Media Management" className="card-img" />
                        <h3>Social Media Management</h3>
                        <p>Consistent content, stronger engagement, and a growing community for your brand.</p>
                        <button className="btn-icon">&rarr;</button>
                    </div>

                    <div className="service-card">
                        <img src={Brand} alt="Brand Strategy & Ads" className="card-img" />
                        <h3>Brand Strategy & Ads</h3>
                        <p>Data-driven strategies and high-performing ad campaigns to scale your brand faster.</p>
                        <button className="btn-icon">&rarr;</button>
                    </div>
                </div>
            </section>


            <svg width="0" height="0" style={{ position: 'absolute' }}>
                <linearGradient id="blue-purple-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
            </svg>

            {/* Special Offer Section */}
            <section className="offer-section">
                <div className="offer-header">
                    <img src={Educator} alt="Educators Offer" className="offer-img" />

                    <div className='offer-badgee'>
                        <span className="offer-badge">SPECIAL OFFER</span>
                        <h2>Educators Special Combo</h2>
                        <p>Designed for Educators, Coaching Institutes & Subject Matter Experts. Focus on Teaching. We'll Handle Your Digital Growth.</p>
                    </div>
                </div>
                <div className="offer-grid">
                    <div className="offer-card">
                        <Video className="gradient-icon" size={40} />
                        <h3>Lecture Shoot</h3>
                        <p>(Studio/On-Location)</p>
                    </div>

                    <div className="offer-card">
                        <Scissors className="gradient-icon" size={40} />
                        <h3>Reel Editing</h3>
                        <p>(Shorts & Highlights)</p>
                    </div>

                    <div className="offer-card">
                        <Image className="gradient-icon" size={40} />
                        <h3>Thumbnail Design</h3>
                        <p>(Custom & Eye-Catching)</p>
                    </div>

                    <div className="offer-card">
                        <Users className="gradient-icon" size={40} />
                        <h3>Social Media Support</h3>
                        <p>(Posting, Strategy & Growth)</p>
                    </div>


                    <div className="offer-cta-box">
                        <span className="limited-tag">LIMITED TIME OFFER</span>
                        <h2>Complete Digital Support</h2>
                        <p>for Educators at a Special Price</p>
                        <button className="btn-cta">Get Your Educator Pack</button>
                    </div>

                </div>
            </section>
        </div>
    );
}