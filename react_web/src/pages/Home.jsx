import React, { useEffect, useState } from 'react';
import Body from '../components/Body';
import Listings from '../components/Listing';
import FloatingButtons from '../components/FloatingButtion';
import axios from 'axios';

const Home = ({ listingType, setSearchTerm,setType,setMinPrice,setMaxPrice,setBedrooms,setListingType,setCompletionStatus,menuData }) => {
    const filterOptions = {
        listingTypes: ["House", "Apartment/Condo", "Townhouse"],
        completionStatuses: ["Completed", "Under Construction", "Planned"],
        bedroom: [1, 2, 3, 4],
        maxPrice: [300000, 400000, 500000, 600000],
        minPrice: [300000, 400000, 500000, 600000]
    };
    
    return (
        <div className="Home" style={{backgroundColor:'#efefef', marginTop:"120px"}}>
            <Body filterOptions={filterOptions} setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} setSearchTerm={setSearchTerm} setType={setType} setBedrooms={setBedrooms} setListingType={setListingType} setCompletionStatus={setCompletionStatus}/>
            <Listings listingType={listingType} menuData={menuData} />
            <FloatingButtons />
        </div>
    );
    
};

export default Home;
