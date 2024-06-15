import React, { useEffect, useState } from 'react';
import Body from '../components/Body';
import Listings from '../components/Listing';
import FloatingButtons from '../components/FloatingButtion';
import axios from 'axios';

const Home = ({ listingType }) => {
    const filterOptions = {
        listingTypes: ["House", "Apartment", "Condo", "Townhouse"],
        completionStatuses: ["Completed", "Under Construction", "Planned"],
        bedroom: [1, 2, 3, 4],
        maxPrice: [300000, 400000, 500000, 600000],
        minPrice: [300000, 400000, 500000, 600000]
    };
    const [minPrice, setMinPrice] = useState(1);
    const [maxPrice, setMaxPrice] = useState(99999999);
    const [location, setLocation] = useState("");
    const [menuData, setMenuData] = useState([]);
    useEffect(() => {
        const fetchMenuData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/property?min_price=${minPrice}&max_price=${maxPrice}&location=${location}`);
                console.log("response>>>>", response.data);
                setMenuData(response.data);
            } catch (error) {
                console.error('Failed to fetch menu data:', error);
            }
        };

        fetchMenuData();
    }, []);

    
    return (
        <div className="Home" style={{backgroundColor:'#efefef'}}>
            <Body filterOptions={filterOptions} />
            <Listings listingType={listingType} menuData={menuData} setMenuData={setMenuData}/>
            <FloatingButtons />
        </div>
    );
    
};

export default Home;
