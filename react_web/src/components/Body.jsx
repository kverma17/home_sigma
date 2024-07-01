import React, { useEffect, useState, useRef } from 'react';
import './css/Body.css';
import { FaSearch, FaFilter, FaTimes } from 'react-icons/fa'; // Importing search, filter, and close icons
import axios from 'axios';

const Body = ({ filterOptions,setSearchTerm,setType,setMinPrice,setMaxPrice,setBedrooms,setListingType,setCompletionStatus }) => {
  const [selectedOption, setSelectedOption] = useState('Project');
  const [showFilters, setShowFilters] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [selectedListingType, setSelectedListingType] = useState('');
  const [selectedCompletionStatus, setSelectedCompletionStatus] = useState('');
  const [selectedMinPrice, setSelectedMinPrice] = useState('');
  const [selectedMaxPrice, setSelectedMaxPrice] = useState('');
  const [selectedBedroom, setSelectedBedroom] = useState('');
  const [menuData, setMenuData] = useState([]);

  const placeholders = {
    Project: 'City, Community or Building',
    Buy: 'City, Community or Building - Sale',
    Rent: 'City, Community or Building - Rent'
  };

  const resultsEndRef = useRef(null); // Create a ref to store the end of results element

  useEffect(() => {
    if (searchInput) {
      const fetchMenuData = async () => {
        try {
          const response = await axios.get(`${process.env.REACT_APP_API_URL}/autocomplete?term=${searchInput}`);
          setMenuData(response.data);
        } catch (error) {
          console.error('Failed to fetch menu data:', error);
        }
      };

      fetchMenuData();
    } else {
      setMenuData([]);
    }
  }, [searchInput]);

  const generateFilterOptions = (options, stateSetter, selectedValue) => {
    return (
      <select value={selectedValue} onChange={(e) => {
        const value = e.target.value;
        stateSetter(value === 'Select' ? '' : value);
      }}>
        <option value='Select'>Select</option>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    );
  };

  const handleButtonClick = (option) => {
    setSelectedOption(option);
  };


  const handleSearchClick = () => {
    setSearchTerm(searchInput);
    setBedrooms(selectedBedroom);
    setListingType(selectedListingType);
    if(selectedMaxPrice===""){
      setMaxPrice(999999999)
    }
    else{
      setMaxPrice(selectedMaxPrice);
    }
    if(selectedMinPrice===""){
      setMinPrice(0)
    }
    else{
      setMinPrice(selectedMinPrice);
    }
    if(selectedOption==="Project"){
      setType("")
    }
    else{
      setType(selectedOption);
    }
    setCompletionStatus(selectedCompletionStatus);
    setShowFilters(false);
    
    // Scroll to the end of the component
    resultsEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleResetClick = () => {
    setSelectedListingType('');
    setSelectedCompletionStatus('');
    setSelectedMinPrice('');
    setSelectedMaxPrice('');
    setSelectedBedroom('');
    setSearchInput('');
    handleSearchClick();
    setShowFilters(false);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const closeFilters = () => {
    setShowFilters(false);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchInput(suggestion);
    setMenuData([]);
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
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder={placeholders[selectedOption]}
            className="search-bar"
          />
          <FaSearch onClick={handleSearchClick} className="search-icon" />
          <FaFilter className="filter-icon" onClick={toggleFilters} />
          {menuData.length > 0 && (
            <div className="autocomplete-dropdown">
              {menuData.map((item, index) => (
                <div key={index} className="autocomplete-item" onClick={() => handleSuggestionClick(item.name)}>
                  {item.name}
                </div>
              ))}
            </div>
          )}
        </div>
        {showFilters && (
          <div className="filters-dropdown">
            <div className="filter-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>Filters</span>
              <FaTimes className="close-button" onClick={closeFilters} />
            </div>
            <div className="filter-group">
              <label>Listing Type</label>
              {generateFilterOptions(filterOptions.listingTypes, setSelectedListingType, selectedListingType)}
            </div>
            <div className="filter-group">
              <label>Completion Status</label>
              {generateFilterOptions(filterOptions.completionStatuses, setSelectedCompletionStatus, selectedCompletionStatus)}
            </div>
            <div className="filter-group">
              <label>Min Price</label>
              {generateFilterOptions(filterOptions.minPrice, setSelectedMinPrice, selectedMinPrice)}
            </div>
            <div className="filter-group">
              <label>Max Price</label>
              {generateFilterOptions(filterOptions.maxPrice, setSelectedMaxPrice, selectedMaxPrice)}
            </div>
            <div className="filter-group">
              <label>Bedrooms</label>
              {generateFilterOptions(filterOptions.bedroom, setSelectedBedroom, selectedBedroom)}
            </div>
            <div className="filter-actions">
              <button onClick={handleResetClick} className="reset-button">Reset</button>
              <button onClick={handleSearchClick} className="search-button">Search</button>
            </div>
          </div>
        )}
      </div>
      <div ref={resultsEndRef} /> {/* This empty div serves as a reference for scrolling */}
    </div>
  );
};

export default Body;
