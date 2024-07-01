import React, { useEffect, useState } from 'react';
import Body from '../components/Body';
import Listings from '../components/Listing';
import FloatingButtons from '../components/FloatingButtion';
import axios from 'axios';

const Home = ({ listingType }) => {
    const filterOptions = {
        listingTypes: ["House", "Apartment/Condo", "Townhouse"],
        completionStatuses: ["Completed", "Under Construction", "Planned"],
        bedroom: [1, 2, 3, 4],
        maxPrice: [300000, 400000, 500000, 600000],
        minPrice: [300000, 400000, 500000, 600000]
    };
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(9999999999);
    const [type, setType] = useState("");
    const [searchTerm, setSearchTerm]=useState("");
    const [bedrooms, setBedrooms]=useState("");
    const [listing, setListingType]=useState("");
    const [completionStatus,setCompletionStatus]=useState("");
    const [menuData, setMenuData] = useState([]);
    useEffect(() => {
        const fetchMenuData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/property?type=${type}&q=${searchTerm}&min_price=${minPrice}&max_price=${maxPrice}`);
                console.log("response>>>>", response.data);
                setMenuData(response.data);
            } catch (error) {
                console.error('Failed to fetch menu data:', error);
            }
        };

        fetchMenuData();
    }, [minPrice,maxPrice,type,searchTerm]);
    console.log({
          searchTerm,
          bedrooms,
          listing,
          completionStatus,
          maxPrice,
          minPrice,
          type
        });
    
    return (
        <div className="Home" style={{backgroundColor:'#efefef', marginTop:"150px"}}>
            <Body filterOptions={filterOptions} setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} setSearchTerm={setSearchTerm} setType={setType} setBedrooms={setBedrooms} setListingType={setListingType} setCompletionStatus={setCompletionStatus}/>
            <Listings listingType={listingType} menuData={menuData} />
            <FloatingButtons />
        </div>
    );
    
};

export default Home;
