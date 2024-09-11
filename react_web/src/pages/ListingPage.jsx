import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import './css/ListingPage.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DynamicButton from '../components/Button';
import { FaEnvelope, FaPhone, FaShareAlt } from 'react-icons/fa';
import { NextArrow, PrevArrow } from '../components/CustomArrows';
import { FaWhatsapp, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import axios from 'axios';
import PopupForm from '../components/PopupForm';

const ListingPage = () => {
    useEffect(() => {
        const addGtagScript = () => {
            const script = document.createElement('script');
            script.async = true;
            script.src = 'https://www.googletagmanager.com/gtag/js?id=G-P5WOMGNNSS'; 
            document.head.appendChild(script);

            const scriptContent = document.createElement('script');
            scriptContent.innerHTML = `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-P5WOMGNNSS');
            `;
            document.head.appendChild(scriptContent);
        };

        addGtagScript();
    }, []);
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
                            <a href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}&t=Have+a+look+at+this+property`} target="_blank" rel="noopener noreferrer"><FaFacebook/>Facebook</a>
                            <a href={`https://x.com/intent/post?text=TEXT_TO_TWEET&url=${currentUrl}`} target="_blank" rel="noopener noreferrer"><FaTwitter />X</a>
                            <a href={`https://api.whatsapp.com/send/?text=Hello%2C+I+am+interested+in+learning+more+about+a+project+I+found+on+Home+Sigma.+Project%3A+${currentUrl}&type=phone_number&app_absent=0&media=${menuData?.thumbnail}`} target="_blank" rel="noopener noreferrer"><FaWhatsapp/>WhatsApp</a>
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
                        <p style={{ whiteSpace: 'pre-line' }}>{menuData.description || "To add"}</p>
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
                    <iframe  src={menuData.video_link} style={{marginTop:"60px", marginBottom:60}} className='youtube' title="YouTube video player"></iframe>

                </div>
                <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <div class="container">
                        <div class="qr-code">
                            <h1 style={{marginLeft:30}}>Map View</h1>
                            <iframe src={menuData.map_link} width="90%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className="profile-page-container">
                            <div className="profile-container">
                                <h1 className="profile-heading">Listing by</h1>
                                <div className="profile-info-container">
                                    <img 
                                    src={menuData?.agent_details?.photo}
                                    alt="Profile"
                                    className="profile-image"
                                    />
                                    <div className="profile-info">
                                    <h3 className="profile-name">{menuData?.agent_details?.name}</h3>
                                    <p className="profile-title">{menuData?.agent_details?.role}</p>
                                    </div>
                                </div>
                                <button className="contact-button">Contact Me</button>
                                <div className="icon-container">
                                    <a href={`https://wa.me/${menuData?.agent_details?.contact_no}`} className="icon-link">
                                        <FaWhatsapp style={{ zIndex: 1000,width: "24px", height: "24px", color:"black", scale:"1.2"}}/>
                                    </a>
                                    <a href={`tel:+${menuData?.agent_details?.contact_no}`} className="icon-link">
                                        <FaPhone style={{ transform: 'rotate(90deg)', zIndex: 1000, width: 24, height: 24, color:"black"}}/>
                                    </a>
                                    <a href={`mailto:${menuData?.agent_details?.email||"leads@homesigma.ae"}`} className="icon-link">
                                        <FaEnvelope style={{ zIndex: 1000,width: "24px", height: "24px", color:"black", scale:"1.2"}}/>
                                    </a>
                                </div>
                            </div>
                            <div className="qr-code-container">
                                <img src={menuData.qr_code} alt="QR Code" style={{height:120, width:120}}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-community-container" style={{marginTop:60}}>
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
