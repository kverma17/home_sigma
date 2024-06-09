import React from 'react';
import { FaInstagram, FaLinkedin, FaYoutube, FaFacebook, FaWhatsapp, FaMobile, FaMailBulk } from 'react-icons/fa';
import './css/Footer.css';
import { FaLocationDot } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="contact-us">
          <h3>Contact Us</h3>
          <p><FaLocationDot/> Office 104, 105 & 106 <br />Bay Square, Building 2 Business <br />   Bay, Dubai, UAE</p>
          <p><FaMailBulk/> Email: <a href="mailto:info@springfield-re.com">info@springfield-re.com</a></p>
          <p><FaWhatsapp /> WhatsApp: <a href="https://wa.me/971545616583">+971 54 561 6583</a></p>
          <p><FaMobile /> Phone: <a href="tel:+97144542588">+971 4 4542588</a></p>
          <div className="social-icons">
            <a href="https://www.instagram.com" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://www.linkedin.com" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://www.youtube.com" aria-label="YouTube"><FaYoutube /></a>
            <a href="https://www.facebook.com" aria-label="Facebook"><FaFacebook /></a>
          </div>
        </div>
        <div className="our-services">
          <h3>Our Services</h3>
          <ul>
            <li><a href="#buy">Buy a Property</a></li>
            <li><a href="#sell">Sell a Property</a></li>
            <li><a href="#rent">Rent a Property</a></li>
            <li><a href="#management">Property Management</a></li>
            <li><a href="#developer-sales">Developer Sales</a></li>
            <li><a href="#handover">Property Handover</a></li>
            <li><a href="#all-services">All Our Services</a></li>
          </ul>
        </div>
        <div className="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about">About Springfield</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#team">Our Team</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
        <div className="featured-areas">
          <h3>Featured Areas</h3>
          <ul>
            <li><a href="#downtown">Downtown Dubai</a></li>
            <li><a href="#business-bay">Business Bay</a></li>
            <li><a href="#creek-harbour">Dubai Creek Harbour</a></li>
            <li><a href="#dubai-land">Dubai Land</a></li>
            <li><a href="#jvc">JVC</a></li>
            <li><a href="#mbr-city">MBR City</a></li>
            <li><a href="#all-areas">All Our Areas</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Home Sigma – Made with ❤️ in India.</p>
      </div>
    </footer>
  );
}

export default Footer;
