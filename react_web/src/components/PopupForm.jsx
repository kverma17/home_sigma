import React, { useState } from 'react';
import './css/PopupForm.css'; // Import your CSS file for styling
import DynamicButton from './Button';
import { FaTimes } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Utility function to get the CSRF token from cookies
function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
}

const PopupForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    interests: []
  });
  const interestOptions = ['Condo / Apartment', 'Villas', 'Town House'];

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false); // State to control form visibility

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, mobile, email, interests } = formData;
    let formErrors = {};

    if (!name) formErrors.name = 'Name is required';
    if (!mobile && !email) formErrors.mobile = 'Mobile number or Email is required';
    if (interests.length === 0) formErrors.interests = 'Please select at least one interest';

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      const currentUrl = window.location.href;
      const leadData = {
        ...formData,
        interests: interests.join(', '), // Convert interests array to a comma-separated string
        landing_link: currentUrl,
        generated_by: 'admin'
      };

      try {
        // Fetch the CSRF token from the cookie
        const csrftoken = getCookie('csrftoken');
        const response = await fetch(`${process.env.REACT_APP_API_URL}/leads/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken  // Include the CSRF token here
          },
          body: JSON.stringify(leadData)
        });

        if (response.ok) {
          console.log('Form submitted successfully:', leadData);
          setIsSubmitted(true); 
          toast.success('We will get in touch soon!', {
            onClose: () => {
              setTimeout(() => {
                onClose(); // Close the popup
              },0);
            }
          });
        } else {
          const errorData = await response.json();
          console.error('Error submitting form:', errorData);
          toast.error('There was an error submitting the form. Please try again.');
        }
      } catch (error) {
        console.error('Network error:', error);
        toast.error('Network error. Please check your internet connection.');
      }
    }
  };

  return (
    <div className="popup-form-overlay">
      {!isSubmitted && (
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
              <DynamicButton buttonName="Submit" handleClick={handleSubmit} />
            </center>
          </form>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default PopupForm;
