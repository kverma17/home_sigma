import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaBars, FaSearch, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png';
import DynamicDropdown from './DynamicDropdown';
import DynamicButton from './Button';
import PopupForm from './PopupForm';
import './css/Header.css';

export default function Header() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [menuData, setMenuData] = useState({});
  const [data, setData] = useState({});
  const [showDropdowns, setShowDropdowns] = useState(false);
  const interestOptions = ['Condo / Apartment', 'Villas', 'Town House'];
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');


  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/header/`);
        console.log("response>>>>", response.data);
        setMenuData(response.data);
      } catch (error) {
        console.error('Failed to fetch menu data:', error);
      }
    };

    fetchMenuData();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const fetchMenuData = async () => {
        try {
          const response = await axios.get(`${process.env.REACT_APP_API_URL}/autocomplete?term=${searchQuery}`);
          setData(response.data);
        } catch (error) {
          console.error('Failed to fetch menu data:', error);
        }
      };

      fetchMenuData();
    } else {
      setData([]);
    }
  }, [searchQuery]);

  const handleButtonClick = () => {
    setIsPopupOpen(true);
  };
  
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle search functionality here
    console.log('Search query:', searchQuery);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleToggleDropdowns = () => {
    setShowDropdowns(!showDropdowns);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setData([]);
  };

  return (
    <header className="header-container">
      <div className="header-content">
        <div className="logo-container" onClick={handleLogoClick}>
          <img src={"https://homesigmaimages.s3.amazonaws.com/HomeSigma+final+logo.png"} alt="HomeSigma Real Estate LLC Logo" className="logo-img" height={70} />
        </div>
        <button className="toggle-dropdowns-button" onClick={handleToggleDropdowns}>
          {showDropdowns ? <FaTimes /> : <FaBars />}
        </button>
        <div className={`dropdowns-container ${showDropdowns ? 'visible' : ''}`}>
          {Object.keys(menuData).map((menu) => {
            const options = menuData[menu].reduce((acc, item) => {
              const key = Object.keys(item)[0];
              acc[key] = item[key];
              return acc;
            }, {});
            return <DynamicDropdown key={menu} dropdownName={menu} options={options} />;
          })}
        </div>
        <div className="search-container">
          <form>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="search-input"
            />
            <FaSearch onClick={handleSearchSubmit} className="search-faicon" />
          </form>
          {data.length > 0 && (
            <div className="autocomplete-dropdown">
              {data.map((item, index) => (
                <div key={index} className="autocomplete-item" onClick={() => handleSuggestionClick(item.name)}>
                  {item.name}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="button-container">
          <DynamicButton buttonName="Get in Touch" handleClick={handleButtonClick} />
          {isPopupOpen && <PopupForm onClose={handleClosePopup} interestOptions={interestOptions} />}
        </div>
      </div>
    </header>
  );
}
