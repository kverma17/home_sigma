import React, { useState } from 'react';
import './css/PopupForm.css'; // Import your CSS file for styling
import DynamicButton from './Button';
import { FaTimes } from 'react-icons/fa';

const PopupForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: ''
  });
  const handleButtonClick = () => {

  };

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, mobile, email } = formData;
    let formErrors = {};

    if (!name) formErrors.name = 'Name is required';
    if (!mobile) formErrors.mobile = 'Mobile number is required';
    if (!email) formErrors.email = 'Email is required';

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      // Handle form submission
      console.log('Form submitted:', formData);
      onClose(); // Close the popup after submission
    }
  };

  return (
    <div className="popup-form-overlay">
      <div className="popup-form">
      <div className="filter-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2>Get in Touch</h2>
              <FaTimes className="close-button" onClick={onClose} />
            </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name*"
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="form-group">
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Mobile*"
            />
            {errors.mobile && <span className="error">{errors.mobile}</span>}
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email*"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          {/* <button type="submit">Get in Touch</button> */}
          <center>
          <DynamicButton buttonName="Get In Touch" handleClick={handleButtonClick}/>
          </center>
        </form>
        {/* <button className="close-button" onClick={onClose}>Close</button> */}
      </div>
    </div>
  );
};

export default PopupForm;
