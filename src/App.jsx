import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Components/Home';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import About from './Components/About';
import AdLogin from './Components/AdLogin';
import AdminDashboard from './Components/AdminDashboard';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/adlogin" element={<AdLogin />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route />
            </Routes>
        </Router>
    );
}

export default App;