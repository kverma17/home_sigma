import React from 'react';
// import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="search-options">
        <button className="search-option">Projects</button>
        <button className="search-option">Buy</button>
        <button className="search-option">Rent</button>
      </div>
      <input type="text" placeholder="City, Community or Building" className="search-input" />
      <button className="search-button">Search</button>
    </div>
  );
};

export default SearchBar;