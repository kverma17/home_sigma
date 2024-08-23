import React, { useEffect, useState } from 'react';
import Listings from '../components/Listing';
import FloatingButtons from '../components/FloatingButtion';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BuilderListing = ({setLimit, limit}) => {
    const { builderType } = useParams();
    console.log("builderType>>>",builderType)
    const search=builderType.replace('%20', ' ');
    console.log("builderType>>>",search)
    const [menuData, setMenuData] = useState([]);
    useEffect(() => {
        const fetchCategoryMenuData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/property?builder=${search}`);
                console.log("response>>>>", response.data);
                setMenuData(response.data);
            } catch (error) {
                console.error('Failed to fetch menu data:', error);
            }
        };
        fetchCategoryMenuData();
    }, [builderType,limit]);
    return (
        <div className="ListingGrid" style={{backgroundColor:'#efefef', marginTop:"100px"}}>
            <Listings listingType={builderType} menuData={menuData} limit={limit} setLimit={setLimit}/>
            <FloatingButtons />
        </div>
    );
    
};

export default BuilderListing;
