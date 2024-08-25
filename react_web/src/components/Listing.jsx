import React from 'react';
import ListingCard from './ListingCard';
import './css/Listings.css';
import { Link } from 'react-router-dom';

const Listings = ({ listingType, menuData, setLimit,limit }) => {
    const handleClick = () => {
        setLimit(limit+8)
    };

    console.log("listing>>>>>", menuData);

    return (
        <div>
            <div>
                <h1 style={{ margin: '30px' }}>{listingType}</h1>
                <div className="allListings">
                    <div className="listings">
                        {Array.isArray(menuData) && menuData.map(listing => (
                                <ListingCard
                                    image={listing?.thumbnail}
                                    labels={listing?.label?.split(", ")}
                                    location={listing.location}
                                    name={listing.name}
                                    price={listing.price}
                                    redirectTo={listing.id}
                                    agentName={listing?.agent_details?.name} 
                                    agentRole={listing?.agent_details?.role} 
                                    agentImage={listing?.agent_details?.photo}
                                    agentPhoneNumber = {listing?.agent_details?.contact_no}
                                />
                        ))}
                    </div>
                    <div className='load-more-button'>
                        <button
                            onClick={handleClick}
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
