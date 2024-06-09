import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import './css/ListingPage.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DynamicButton from '../components/Button';
import { FaShareAlt } from 'react-icons/fa';
import { NextArrow, PrevArrow } from '../components/CustomArrows';

const ListingPage = () => {
    const { propertyId } = useParams();
    console.log("propertyId>>>", propertyId)
    const data = {
        id: 3,
        name: "Tonino Lamborghini Residences",
        detail: "Tonino Lamborghini Residences is a high-end development featuring artfully designed apartments with",
        description: "Experience luxury living at Tonino Lamborghini Residences. These meticulously crafted apartments boast stunning design and functionality, seamlessly integrated with cutting-edge technology for a dynamic lifestyle. Residents enjoy a wealth of amenities, including private cinemas, lush landscapes, shopping, and family-friendly parks. Designed for comfort and sustainability, these Meydan City apartments epitomize Dubai’s luxury real estate market.",
        builder: "Gulf Land Property Developers",
        location: "Meydan City",
        category: "Premium Luxury Developments",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvkL4qJtyIqgulLCOgMpwe1nopm5jnWqq_Eg&s",
        gallery: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvkL4qJtyIqgulLCOgMpwe1nopm5jnWqq_Eg&s",
            "https://mybayutcdn.bayut.com/mybayut/wp-content/uploads/Most-famous-buildings-in-Dubai-Cover-08-09-2020.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIIVa8FTTPKSLXO9EKE-HeQMqSV4A0XJDb6Q&s",
            "https://mybayutcdn.bayut.com/mybayut/wp-content/uploads/Most-famous-buildings-in-Dubai-Cover-08-09-2020.jpg",
        ],
        street: "",
        city: "Dubai",
        state: "",
        zip: null,
        country: "UAE",
        brochureLink: "#",
        registerLink: "#",
        listing_types: [2],
        key_features: ["Jogging trails", "Fitness Center", "Swimming pool", "Kids park"],
        community : "Tilal Al Ghaf Community",
        communityDescription:"2wdwd2wd 2ed 2ed ew  dw ed wed we dw ed wed we d wedc wedc edckedfmcmdecmekd,c emdkc ewkdmc wedkmcw demck edkcm",
        details: [
            {
                "Starting Price": "1896000"
            },
            {
                "Payment Plan":"60/40"
            },
            {
                "Hand Over":"Q3 2026"
            },
            {
                "Available Units":"6BR"
            },
            {
                "Developer":"Majid Al Futtaim"
            }
        ]
    };

    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const onDownloadClick = () => {
        // Implement download logic here
        console.log('Downloading brochure...');
    };

    const onRegisterClick = () => {
        // Implement register logic here
        console.log('Registering interest...');
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

    return (
        <div className="serenity-mansions">
            <nav>
                <span>Home &gt; {data.category} &gt; <span>{data.name}</span></span>
                <div className="share-favorite">
                    <button onClick={toggleDropdown}>
                        <FaShareAlt /> Share
                    </button>
                    {dropdownVisible && (
                        <div className="dropdown-menu">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                            <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                        </div>
                    )}
                </div>
            </nav>
            <div className="body">
                <div className="text-content">
                    <h1>{data.name}</h1>
                    <p>{data.detail}</p>
                    <div className="cta-buttons">
                        <DynamicButton buttonName="Download Brochure" handleClick={onDownloadClick} theme='light' width="200px" />
                        <DynamicButton buttonName="Register Interest" handleClick={onRegisterClick} width="200px" />
                    </div>
                </div>
                <div className="image">
                    <img src={data.image} alt={data.name} />
                </div>
            </div>
            <div className="main-content">
                <div className="details">
                    <div className="price"><h6>Starting price</h6>AED {data.price}</div>
                    <div className="plan"><h6>Payment Plan</h6>{data.plan}</div>
                    <div className="handover"><h6>Hand Over</h6>{data.handover}</div>
                    <div className="units"><h6>Available Units</h6>{data.units}</div>
                    <div className="developer"><h6>Developer</h6>{data.developer}</div>
                </div>
                <div className="about-project-container">
                    <div>
                        <h1>About the Project</h1>
                        <hr className="bold-hr" />
                        <h2>{data.name}</h2>
                    </div>
                    <div className="description">
                        <p>{data.description}</p>
                        <div className="cta-buttons">
                            <DynamicButton buttonName="Download Brochure" handleClick={onDownloadClick} theme='light' width="200px" />
                            <DynamicButton buttonName="Register Interest" handleClick={onRegisterClick} width="200px" />
                        </div>
                    </div>
                </div>
                <div className='gallery-container'>
                    <h1>Gallery</h1>
                    <hr className="bold-hr" />
                    <div className="image-gallery-container">
                        <div className="image-gallery">
                            <Slider {...sliderSettings}>
                                {data.gallery.map((imgSrc, index) => (
                                    <div key={index}>
                                        <img src={imgSrc} alt={`Gallery image ${index + 1}`} />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
                <div className="details">
                    {data.key_features.map((feature, index) => (
                        <div key={index} className="price">{feature}</div>
                    ))}
                </div>
                <div className="about-community-container">
                    <div className="image">
                        <img src='https://lh3.googleusercontent.com/p/AF1QipOPmPK5YyRO0SdjnLWuDZtq34n-vGKm12tCX4Fr=s1360-w1360-h1020' />
                        <div className="cta-buttons">
                            <DynamicButton buttonName="Download Brochure" handleClick={onDownloadClick} theme='light' width="200px" />
                            <DynamicButton buttonName="Register Interest" handleClick={onRegisterClick} width="200px" />
                        </div>
                    </div>
                    <div className='detail'>
                        <h1>About the Community</h1>
                        <hr className="bold-hr" />
                        <h2>{data.community}</h2>
                        <p>{data.communityDescription}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListingPage;
