// src/Listings.js
import React, { useEffect, useState } from 'react';
import ListingCard from './ListingCard';
import './css/Listings.css'; // Create CSS for your component if needed
import { Link } from 'react-router-dom';
import axios from 'axios';

const Listings = ({ listingType, menuData }) => {
    const [isHovered, setIsHovered] = useState(false);
    // const [menuData, setMenuData] = useState([]);

    const handleClick = () => {
        // Implement the functionality for loading more listings
    };

    // useEffect(() => {
    //     const fetchMenuData = async () => {
    //         try {
    //             const response = await axios.get(`${process.env.REACT_APP_API_URL}/property?min_price=1&max_price=1111111&location=`);
    //             console.log("response>>>>", response.data);
    //             setMenuData(response.data);
    //         } catch (error) {
    //             console.error('Failed to fetch menu data:', error);
    //         }
    //     };

    //     fetchMenuData();
    // }, []);

    console.log("listing>>>>>", menuData);

    return (
        <div className="container">
            <div>
                <h1 style={{ margin: '30px' }}>{listingType}</h1>
                <div className="allListings">
                    <div className="listings">
                        {Array.isArray(menuData) && menuData.map(listing => (
                            <Link to={`/property/${listing.id}`} key={listing.name} className="listing-link">
                                <ListingCard
                                    image={listing.community_image_url}
                                    labels={listing?.label?.split(", ")}
                                    location={listing.location}
                                    name={listing.name}
                                    price={listing.price}
                                />
                            </Link>
                        ))}
                    </div>
                    <div className='load-more-button'>
                        <button
                            onClick={handleClick}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            className='load-more'
                        >
                            Load More Listings
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Listings;
