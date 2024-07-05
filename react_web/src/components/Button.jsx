import React, { useState} from 'react';

const DynamicButton = ({ buttonName, handleClick, theme="dark", width }) => {
  const [isHovered, setIsHovered] = useState(false);


  const buttonStyleDark = {
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: isHovered ? 'white' : 'black',
    background: isHovered ? 'linear-gradient(270deg, #efdc97, #a96f44)' : 'white',
    border: isHovered ? '2px solid linear-gradient(270deg, #efdc97, #a96f44)': '2px solid linear-gradient(270deg, #efdc97, #a96f44)',
    borderRadius: '50px',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    height: '50px',
    margin: '10px',
    width: width ? width : 'auto'
  };
  const buttonStyleLight = {
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: isHovered ? 'black' : 'white',
    background: isHovered ? 'white': 'linear-gradient(270deg, #efdc97, #a96f44)',
    border: '2px solid black',
    borderRadius: '50px',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    height: '50px',
    margin: '10px',
    width: width ? width : 'auto'
  };
  const buttonStyle = theme === 'light' ? buttonStyleLight : buttonStyleDark;

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={buttonStyle}
      aria-label={buttonName}
    >
      {buttonName}
    </button>
  );
};

export default DynamicButton;
