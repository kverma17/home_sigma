// src/ListingCard.js
import React from 'react';
// import { useHistory } from 'react-router-dom';
import './css/ListingCard.css'; // Create CSS for your component if needed

const ListingCard = ({ image, labels, location, name, price, redirectTo }) => {
  // const history = useHistory();

  const handleClick = () => {
    // history.push(redirectTo);
  };

  return (
    <div className="listing-card" onClick={handleClick}>
      <img src={image} alt={name} />
      <div className="listing-details">
        <div className="listing-labels">
          {labels.map(label => (
            <span key={label} className="listing-label">{label}</span>
          ))}
        </div>
        <div className="listing-location">{location}</div>
        <div className="listing-name">{name}</div>
        <div className="listing-price">From AED {price}</div>
      </div>
    </div>
  );
};

export default ListingCard;
