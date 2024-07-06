import React from 'react';
import { FaInstagram, FaLinkedin, FaYoutube, FaFacebook, FaWhatsapp, FaMobile, FaMailBulk } from 'react-icons/fa';
import './css/Footer.css';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = ({setLimit}) => {
  const handleLogoClick = () => {
    setLimit(2);
  };
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="contact-us">
          <h3>Contact Us</h3>
          <p><FaLocationDot/> I-SH/R 10, P1 / BLOCK I, <br />Saih Shuaib 2, Dubai <br/>Industrial City, Dubai, U.A.E</p>
          <p><FaMailBulk/> Email: <a href="mailto:Homesigmarealestate@gmail.com">Homesigmarealestate@gmail.com</a></p>
          <p><FaWhatsapp /> WhatsApp: <a href="https://wa.me/971502754127">+971 50 275 4127</a></p>
          <p><FaMobile /> Phone: <a href="tel:+971502754127">+971 50 275 4127</a>, <a href="tel:+971568899896">+971 56 889 9896</a></p>
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
            <li>
            <Link to={"/category/Buy%20a%20Property"} className="buy" onClick={handleLogoClick}>
                <a>Buy a Property</a>
              </Link>
              </li>
            {/* <li><a href="#sell">Sell a Property</a></li> */}
            <li>
            <Link to={"/category/Rent%20a%20Property"} className="rent" onClick={handleLogoClick}>
              <a>Rent a Property</a>
              </Link>
              </li>
          </ul>
        </div>
        <div className="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
            <Link to={"/about-home-sigma"} className="about">
              <a>About Home Sigma</a>
            </Link>  
            </li>
            <li>
            <Link to={"/terms-of-service"} className="about">
              <a>Terms of Service</a>
            </Link>
            </li>
            <li>
            <Link to={"/our-team"} className="about">
              <a>Our Team</a>
            </Link>
            </li>
            <li>
            <Link to={"/faq"} className="about">
              <a>FAQ</a>
            </Link>
            </li>
          </ul>
        </div>
        <div className="featured-areas">
          <h3>Featured Areas</h3>
          <ul>
            <li><a href="#downtown">Downtown Dubai</a></li>
            <li><a href="#business-bay">Business Bay</a></li>
            {/* <li><a href="#creek-harbour">Dubai Creek Harbour</a></li> */}
            {/* <li><a href="#dubai-land">Dubai Land</a></li>
            <li><a href="#jvc">JVC</a></li> */}
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
