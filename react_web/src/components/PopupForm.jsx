import React, { useState } from 'react';
import './css/PopupForm.css'; // Import your CSS file for styling
import DynamicButton from './Button';
import { FaTimes } from 'react-icons/fa';

const PopupForm = ({ onClose, interestOptions }) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    interests: []
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => {
        const newInterests = checked
          ? [...prevData.interests, value]
          : prevData.interests.filter((interest) => interest !== value);
        return {
          ...prevData,
          interests: newInterests
        };
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, mobile, email, interests } = formData;
    let formErrors = {};

    if (!name) formErrors.name = 'Name is required';
    if (!mobile) formErrors.mobile = 'Mobile number is required';
    if (!email) formErrors.email = 'Email is required';
    if (interests.length === 0) formErrors.interests = 'Please select at least one interest';

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
          <div className="form-group interests-group">
            <label>Interests</label>
            {interestOptions.map((option, index) => (
              <div key={index} className='option'>
                <label>
                  <input
                    type="checkbox"
                    name="interests"
                    value={option}
                    checked={formData.interests.includes(option)}
                    onChange={handleChange}
                  />
                  {option}
                </label>
              </div>
            ))}
            {errors.interests && <span className="error">{errors.interests}</span>}
          </div>
          <center>
            <DynamicButton buttonName="Get In Touch" handleClick={handleSubmit} />
          </center>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
