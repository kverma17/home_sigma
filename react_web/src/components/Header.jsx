import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaBars, FaSearch, FaTimes } from 'react-icons/fa';
import DynamicDropdown from './DynamicDropdown';
import DynamicButton from './Button';
import PopupForm from './PopupForm';
import './css/Header.css';

export default function Header({setLimit}) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [menuData, setMenuData] = useState({});
  const [data, setData] = useState([]);
  const [showDropdowns, setShowDropdowns] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const interestOptions = ['Condo / Apartment', 'Villas', 'Town House'];
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');


  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/header/`);
        setMenuData(response.data);
      } catch (error) {
        console.error('Failed to fetch menu data:', error);
      }
    };

    fetchMenuData();
    setShowDropdowns(false)
    setShowSearchBar(false)
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
    if (data && data[0] && data[0].id) {
      console.log('Search query:', data[0].id);
      navigate(`/property/${data[0].id}`);
    } else {
      console.log('No valid ID found, redirecting to home');
      navigate('/');
    }
    // console.log('Search query:', data[0].id);
    // navigate(`/property/${data[0].id}`)||navigate('/');
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleLogoClick = () => {
    navigate('/');
    setLimit(16);
  };

  const handleToggleDropdowns = () => {
    setShowDropdowns(!showDropdowns);
  };

  const handleToggleSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setData([]);
  };
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const formStyle = {
    display: isMobile ? (showSearchBar ? 'flex' : 'none') : 'block'
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
            return <DynamicDropdown key={menu} dropdownName={menu} options={options} setLimit={setLimit}/>;
          })}
          <div style={{ paddingRight:10, display: "inline-flex",
    gap: 20}}>
        <Link to="/areas" className="areas" >
  <h4 style={{margin:5, marginTop:13}}>Areas</h4>
</Link>
<Link to="/developers" className="areas" >
  <h4 style={{ marginTop:13}}>Developers</h4>
</Link>

        </div>
        </div>
        <div className="search-container">
          <form style={ formStyle
          }>
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
          { showSearchBar ? (
            <FaTimes onClick={handleToggleSearchBar} className="search-toggle-faicon" />
          ) : (
            <FaSearch onClick={handleToggleSearchBar} className="search-toggle-faicon" />
          )}
        </div>
        <div className="button-container">
          <DynamicButton buttonName="Get in Touch" handleClick={handleButtonClick} />
          {isPopupOpen && <PopupForm onClose={handleClosePopup} />}
        </div>
      </div>
    </header>
  );
}
