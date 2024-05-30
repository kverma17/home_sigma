import React from 'react';
import Body from '../components/Body';
import Listings from '../components/Listing';

const Home = ({ listingType }) => {
    const filterOptions = {
        listingTypes: ["House", "Apartment", "Condo", "Townhouse"],
        completionStatuses: ["Completed", "Under Construction", "Planned"],
        bedroom: [1, 2, 3, 4],
        maxPrice: [300000, 400000, 500000, 600000],
        minPrice: [300000, 400000, 500000, 600000]
    };

    return (
        <div className="Home">
            <Body filterOptions={filterOptions} />
            <Listings listingType={listingType} />
        </div>
    );
};

export default Home;
