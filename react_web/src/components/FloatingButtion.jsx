import React from 'react';
import { FaWhatsapp, FaPhone, FaFacebook, FaInstagram } from 'react-icons/fa';
import './css/FloatingButtons.css';

const FloatingButtons = () => {
  return (
    <div className="floating-buttons">
      <a href="https://api.whatsapp.com/send/?phone=971502754127&text=Hello%2C+I+am+interested+in+learning+more+about+a+project+I+found+on+Home+Sigma.+Project%3A+ABCD&type=phone_number&app_absent=0
" className="floating-button whatsapp" aria-label="WhatsApp">
        <FaWhatsapp />
      </a>
      <a href="tel:+8527281066" className="floating-button phone" aria-label="Phone">
        <FaPhone />
      </a>
      <a href="https://www.messenger.com/t/hitesh.dureja.1" className="floating-button facebook" aria-label="Facebook">
        <FaFacebook />
      </a>
      <a href="https://www.instagram.com/hiteshdureja03/" className="floating-button insta" aria-label="Insta">
        <FaInstagram />
      </a>
    </div>
  );
}

export default FloatingButtons;
