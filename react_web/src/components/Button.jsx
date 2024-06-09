import React, { useState} from 'react';

const DynamicButton = ({ buttonName, handleClick, theme="dark", width }) => {
  const [isHovered, setIsHovered] = useState(false);


  const buttonStyleDark = {
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: isHovered ? 'rgb(216, 165, 80)' : 'rgb(216, 165, 80)',
    backgroundColor: isHovered ? '#fff' : 'black',
    border: isHovered ? '2px solid black': '2px solid rgb(216, 165, 80)',
    borderRadius: '5px',
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
    color: isHovered ? 'rgb(216, 165, 80)' : 'rgb(216, 165, 80)',
    backgroundColor: isHovered ? 'black': '',
    border: isHovered ? '2px solid rgb(216, 165, 80)': '2px solid black',
    borderRadius: '5px',
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
