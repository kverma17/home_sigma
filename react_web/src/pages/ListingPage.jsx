import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import './css/ListingPage.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DynamicButton from '../components/Button';
import { FaShareAlt } from 'react-icons/fa';
import { NextArrow, PrevArrow } from '../components/CustomArrows';
import { FaWhatsapp, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import axios from 'axios';
import PopupForm from '../components/PopupForm';

const ListingPage = () => {
    const { propertyId } = useParams();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [menuData, setMenuData] = useState({});
    console.log("propertyId>>>", propertyId)
    useEffect(() => {
        const fetchMenuData = async () => {
          try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/property/${propertyId}/`);

                console.log("response>>>>",process.env.REACT_APP_API_URL)
                setMenuData(response.data)
          } catch (error) {
            console.error('Failed to fetch menu data:', error);
          }
        };
        
        fetchMenuData();
      }, []);

    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const onDownloadClick = () => {
    const url = menuData?.brochure_link;
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sobha-waves-grande-brochure.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    console.log('Downloading brochure...');
    };

    const onRegisterClick = () => {
        // Implement register logic here
    setIsPopupOpen(true);
        console.log('Registering interest...');
    };
    const handleClosePopup = () => {
        setIsPopupOpen(false);
      };

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        arrows: true,
    };
    const currentUrl = window.location.href;


    return (
        <div className="serenity-mansions">
            <nav>
                <span>Home &gt; {menuData?.category || "ABC (To be changed)"} &gt; <span>{menuData?.name || "To add"}</span></span>
                <div className="share-favorite">
                    <button onClick={toggleDropdown}>
                        <FaShareAlt /> Share
                    </button>
                    {dropdownVisible && (
                        <div className="dropdown-menu">
                            <a href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}&t=Your+Custom+Title`} target="_blank" rel="noopener noreferrer"><FaFacebook/>Facebook</a>
                            <a href={`https://x.com/intent/post?text=TEXT_TO_TWEET&url=${currentUrl}`} target="_blank" rel="noopener noreferrer"><FaTwitter />X</a>
                            <a href={`https://api.whatsapp.com/send/?text=Hello%2C+I+am+interested+in+learning+more+about+a+project+I+found+on+Home+Sigma.+Project%3A+${currentUrl}&type=phone_number&app_absent=0`} target="_blank" rel="noopener noreferrer"><FaWhatsapp/>WhatsApp</a>
                        </div>
                    )}
                </div>
            </nav>
            <div className="body">
                <div className="text-content">
                    <h1>{menuData?.name || "To add"}</h1>
                    <p>{menuData?.detail||"To add"}</p>
                    <div className="cta-buttons">
                        <DynamicButton buttonName="Download Brochure" handleClick={onDownloadClick} theme='light' width="200px" />
                        <DynamicButton buttonName="Register Interest" handleClick={onRegisterClick} width="200px" />
                        {isPopupOpen && <PopupForm onClose={handleClosePopup} />}
                    </div>
                </div>
                <div className="image">
                    <img src={menuData?.thumbnail} alt={'Add Project image'} />
                </div>
            </div>
            <div className="main-content">
                <div className="details">
                    <div className="price"><h6>Starting price</h6>AED {menuData?.price || "To add"}</div>
                    <div className="plan"><h6>Payment Plan</h6>{menuData?.payment_plan || "To add"}</div>
                    <div className="handover"><h6>Hand Over</h6>{menuData?.hand_over||"To add"}</div>
                    <div className="units"><h6>Available Units</h6>{menuData?.available_units||"To add"}</div>
                    <div className="developer"><h6>Developer</h6>{menuData?.builder||"To add"}</div>
                </div>
                <div className="about-project-container">
                    <div>
                        <h1>About the Project</h1>
                        <hr className="bold-hr" />
                        <h2>{menuData.name || "To add"}</h2>
                    </div>
                    <div className="description">
                        <p>{menuData.description || "To add"}</p>
                        <div className="cta-buttons">
                            <DynamicButton buttonName="Download Brochure" handleClick={onDownloadClick} theme='light' width="200px" />
                            <DynamicButton buttonName="Register Interest" handleClick={onRegisterClick} width="200px" />
                            {isPopupOpen && <PopupForm onClose={handleClosePopup} />}
                        </div>
                    </div>
                </div>
                <div className='gallery-container'>
                    <h1>Gallery</h1>
                    {/* <hr className="bold-hr" /> */}
                    <div className="image-gallery-container">
                        <div className="image-gallery">
                            <Slider {...sliderSettings}>
                                {menuData?.images?.map((imgSrc, index) => (
                                    <div key={index}>
                                        <img src={imgSrc} alt={`Gallery image ${index + 1}`} />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
                <div className="details">
                    {menuData.features?.split(", ")?.map((feature, index) => (
                        <div key={index} className="price">{feature}</div>
                    ))}
                </div>
                <div>
                    <h1>Location on Map</h1>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1786534495045!2d55.27437639999999!3d25.197197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sBurj%20Khalifa!5e0!3m2!1sen!2sin!4v1724093312377!5m2!1sen!2sin" width="60%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div>
                    <h1>QR Code</h1>
                    <img src='https://static.vecteezy.com/system/resources/thumbnails/017/441/744/small/qr-code-icon-qr-code-sample-for-smartphone-scanning-isolated-illustration-vector.jpg'></img>
                </div>
                <div className="about-community-container">
                    <div className="image">
                        <img src={menuData.community_image_url||"https://lh3.googleusercontent.com/p/AF1QipOPmPK5YyRO0SdjnLWuDZtq34n-vGKm12tCX4Fr=s1360-w1360-h1020"} />
                        <div className="cta-buttons">
                            <DynamicButton buttonName="Download Brochure" handleClick={onDownloadClick} theme='light' width="200px" />
                            <DynamicButton buttonName="Register Interest" handleClick={onRegisterClick} width="200px" />
                            {isPopupOpen && <PopupForm onClose={handleClosePopup} />}
                        </div>
                    </div>
                    <div className='detail'>
                        <h1>About the Community</h1>
                        <hr className="bold-hr" />
                        <h2>{menuData?.community|| "add community"}</h2>
                        <p>{menuData?.community_description||"add community Description 2kewdnk2edjnkwendk 2jkendjk2nedkjn2e kej3ndjkn3ekjdn3 kj3endjk3nedkj3ne e3kjndjk3endjk"}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListingPage;
