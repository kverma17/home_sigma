import React, { useState } from 'react';

const DynamicButton = ({ buttonName, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    const baseUrl = window.location.origin;
    window.location.href = `${baseUrl}${link}`;
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: isHovered ? '#000080' : '#fff',
    backgroundColor: isHovered ? '#fff' : '#000080',
    border: isHovered ? '2px solid #000080' : 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    height: "50px",
    margin:"10px"
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={buttonStyle}
    >
      {buttonName}
    </button>
  );
};

export default DynamicButton;
