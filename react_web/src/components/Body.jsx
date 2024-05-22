import React, { useState } from 'react';
import './css/Body.css';
import { FaSearch, FaFilter, FaTimes } from 'react-icons/fa'; // Importing search, filter, and close icons

const Body = ({ filterOptions }) => {
  const [selectedOption, setSelectedOption] = useState('Project');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedListingType, setSelectedListingType] = useState('Select');
  const placeholders = {
    Project: 'City, Community or Building',
    Buy: 'City, Community or Building - Sale',
    Rent: 'City, Community or Building - Rent'
  };
  const generateFilterOptions = (options) => {
    return (
      <select>
        <option>{selectedListingType}</option>
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    );
  };

  const handleButtonClick = (option) => {
    setSelectedOption(option);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const closeFilters = () => {
    setShowFilters(false);
  };

  return (
    <div className="header">
      <div className="search-container">
        <div className="buttons">
          <button
            onClick={() => handleButtonClick('Project')}
            className={selectedOption === 'Project' ? 'active' : ''}
          >
            Project
          </button>
          <button
            onClick={() => handleButtonClick('Buy')}
            className={selectedOption === 'Buy' ? 'active' : ''}
          >
            Buy
          </button>
          <button
            onClick={() => handleButtonClick('Rent')}
            className={selectedOption === 'Rent' ? 'active' : ''}
          >
            Rent
          </button>
        </div>
        <div className="search-bar-container">
          <input
            type="text"
            placeholder={placeholders[selectedOption]}
            className="search-bar"
          />
          <FaSearch className="search-icon" />
          <FaFilter className="filter-icon" onClick={toggleFilters} />
        </div>
        {showFilters && (
          <div className="filters-dropdown">
            <div className="filter-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  <span>Filters</span>
  <FaTimes className="close-button" onClick={closeFilters} />
</div>
            <div className="filter-group">
              <label>Listing Type</label>
              {generateFilterOptions(filterOptions.listingTypes)}
            </div>
            <div className="filter-group">
              <label>Filter by Completion Status</label>
              {generateFilterOptions(filterOptions.completionStatuses)}
            </div>
            <div className="filter-group">
              <label>Min Price</label>
              {generateFilterOptions(filterOptions.minPrice)}
            </div>
            <div className="filter-group">
              <label>Max Price</label>
              {generateFilterOptions(filterOptions.maxPrice)}
            </div>
            <div className="filter-group">
              <label>Bedrooms</label>
              {generateFilterOptions(filterOptions.bedroom)}
            </div>
            <div className="filter-actions">
              <button className="reset-button">Reset</button>
              <button className="search-button">Search!</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;
