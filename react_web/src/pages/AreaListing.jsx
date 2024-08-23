import React, { useEffect, useState } from 'react';
import Listings from '../components/Listing';
import FloatingButtons from '../components/FloatingButtion';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const AreaListing = ({setLimit, limit}) => {
    const { areaListing } = useParams();
    console.log("builderType>>>",areaListing)
    const search=areaListing.replace('%20', ' ');
    console.log("builderType>>>",search)
    const [menuData, setMenuData] = useState([]);
    useEffect(() => {
        const fetchCategoryMenuData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/property?location=${search}`);
                console.log("response>>>>", response.data);
                setMenuData(response.data);
            } catch (error) {
                console.error('Failed to fetch menu data:', error);
            }
        };
        fetchCategoryMenuData();
    }, [areaListing,limit]);
    return (
        <div className="ListingGrid" style={{backgroundColor:'#efefef', marginTop:"100px"}}>
            <Listings listingType={areaListing} menuData={menuData} limit={limit} setLimit={setLimit}/>
            <FloatingButtons />
        </div>
    );
    
};

export default AreaListing;
