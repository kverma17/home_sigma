import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from '../assets/logo.png';
import DynamicDropdown from './DynamicDropdown';
import DynamicButton from './Button';
import PopupForm from './PopupForm';
import './css/Header.css';

export default function Header() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [menuData, setMenuData] = useState({});
  const interestOptions = ['Condo / Apartment', 'Villas', 'Town House'];

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/header/`);
        console.log("response>>>>",response.data)
        setMenuData(response.data);
      } catch (error) {
        console.error('Failed to fetch menu data:', error);
      }
    };

    fetchMenuData();
  }, []);

  const handleButtonClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <header className="header-container">
      <div className="header-content">
        <div className="logo-container">
          <img src={logo} alt="HomeSigma Real Estate LLC Logo" className="logo-img" height={70} />
        </div>
        <div className="dropdowns-container">
          {Object.keys(menuData).map((menu) => {
            const options = menuData[menu].reduce((acc, item) => {
              const key = Object.keys(item)[0];
              acc[key] = item[key];
              return acc;
            }, {});
            return <DynamicDropdown key={menu} dropdownName={menu} options={options} />;
          })}
        </div>
        <div className="button-container">
          <DynamicButton buttonName="Get In Touch" handleClick={handleButtonClick} />
          {isPopupOpen && <PopupForm onClose={handleClosePopup} interestOptions={interestOptions} />}
        </div>
      </div>
    </header>
  );
}
