import React, { useEffect, useState } from 'react';
import Body from '../components/Body';
import Listings from '../components/Listing';
import FloatingButtons from '../components/FloatingButtion';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CategoryPage = () => {
    const { categoryType } = useParams();
    console.log("categoryType>>>",categoryType)
    const [menuData, setMenuData] = useState([]);
    useEffect(() => {
        const fetchCategoryMenuData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/property?category=${categoryType}`);
                console.log("response>>>>", response.data);
                setMenuData(response.data);
            } catch (error) {
                console.error('Failed to fetch menu data:', error);
            }
        };
        const fetchBuyMenuData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/property?type=Buy`);
                console.log("response>>>>", response.data);
                setMenuData(response.data);
            } catch (error) {
                console.error('Failed to fetch menu data:', error);
            }
        };
        const fetchRentMenuData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/property?type=Rent`);
                console.log("response>>>>", response.data);
                setMenuData(response.data);
            } catch (error) {
                console.error('Failed to fetch menu data:', error);
            }
        };
        if(categoryType==="Buy a Property"){
            fetchBuyMenuData();
        }
        else if(categoryType==="Sell a Property"){
            fetchRentMenuData();
        }
        else{
            fetchCategoryMenuData();
        }
    }, [categoryType]);
    return (
        <div className="CategoryPage" style={{backgroundColor:'#efefef', marginTop:"120px"}}>
            {/* <Body filterOptions={filterOptions} setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} setSearchTerm={setSearchTerm} setType={setType} setBedrooms={setBedrooms} setListingType={setListingType} setCompletionStatus={setCompletionStatus}/> */}
            <Listings listingType={categoryType} menuData={menuData} />
            <FloatingButtons />
        </div>
    );
    
};

export default CategoryPage;
