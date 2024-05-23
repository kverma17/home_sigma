import React, { useState } from 'react'
import logo from '../assets/logo.png';
import DynamicDropdown from './DynamicDropdown';
import DynamicButton from './Button';
import PopupForm from './PopupForm';

export default function Header() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleButtonClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  const buyOptions = {
    "Offplan Apartment": "/offplan-apartment",
    "Offplan Villas": "/offplan-villas",
    "Luxury Projects": "/luxury-projects"
  };
  const rentOptions = {
    "Short Term Rentalt": "/short-term-rental",
    "Apartment For Rent": "/apartment-for-rent"
  };
  const servicesOptions = {
    "Buy a Property": "/buy-a-property",
    "Sell a Property": "/sell-a-property"
  };
  const aboutOptions = {
    "About Home Sigma": "/about-home-sigma",
    "Our Team": "/out-team",
    "FAQ": "/faq"
  };
  return (
    <header>
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src={logo} alt="HomeSigma Real Estate LLC Logo" className="logo-img" height={70} width={200} />
      <DynamicDropdown dropdownName="Buy" options={buyOptions} />
      <DynamicDropdown dropdownName="Rent" options={rentOptions} />
      <DynamicDropdown dropdownName="Our Services" options={servicesOptions} />
      <DynamicDropdown dropdownName="About Us" options={aboutOptions} />
    </div>
      <DynamicButton buttonName="Get In Touch" handleClick={handleButtonClick} />
      {isPopupOpen && <PopupForm onClose={handleClosePopup} />}
  </div>
</header>

  )
}
