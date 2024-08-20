import React from 'react';
import './css/ListingCard.css'; // Make sure this CSS file includes the new styles
import { FaMobile, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ListingCard = ({ image, labels, location, name, price, agentName="Aman", agentRole="Sales Adviser", agentImage="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.webp?b=1&s=612x612&w=0&k=20&c=A87DXDjXjoyJWkWIlLfhJYsjqKtTyuvhOg14QY4SeMQ=", agentPhoneNumber = "8527281066", redirectTo }) => {

  const handleClick = () => {
    // history.push(redirectTo);
  };

  return (
    <div className="listing-card" onClick={handleClick}>
      <Link to={`/property/${redirectTo}`} key={name} className="listing-link">
      <img src={image} alt={name} className='thumbnail' />
      </Link>
      <div className="listing-details">
        <Link to={`/property/${redirectTo}`} key={name} className="listing-link">
          {labels && labels.length > 0 && (
            <div className="listing-labels">
              {labels.map(label => (
                <span key={label} className="listing-label">{label}</span>
              ))}
            </div>
          )}
          <div className="listing-location">{location}</div>
          <div className="listing-name">{name}</div>
          <div className="listing-price">From AED {price}</div>
        </Link>
        <div className="agent-details">
          <img src={agentImage} alt={agentName} className="agent-image" />
          <div className="agent-info">
            <div className="agent-name">{agentName}</div>
            <div className="agent-role">{agentRole}</div>
          </div>
          <div className="agent-contact">
              <a href={`tel:${agentPhoneNumber}`} className="agent-contact-icon">
                <FaPhone style={{ transform: 'rotate(90deg)', zIndex: 1000, width: 24, height: 24, color:"black"}}/>
              </a>
              <a href={`https://wa.me/${agentPhoneNumber}`} className="agent-contact-icon">
                <FaWhatsapp style={{ zIndex: 1000,width: "24px", height: "24px", color:"black", scale:"1.2"}}/>
              </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
