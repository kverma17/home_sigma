import React, { useEffect, useState } from 'react';
import Listings from '../components/Listing';
import FloatingButtons from '../components/FloatingButtion';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CategoryPage = ({setLimit, limit}) => {
    const { categoryType } = useParams();
    console.log("categoryType>>>",categoryType)
    const [menuData, setMenuData] = useState([]);
    useEffect(() => {
        const fetchCategoryMenuData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/property?category=${categoryType}&limit=${limit}`);
                console.log("response>>>>", response.data);
                setMenuData(response.data);
            } catch (error) {
                console.error('Failed to fetch menu data:', error);
            }
        };
        const fetchBuyMenuData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/property?type=Buy&limit=${limit}`);
                console.log("response>>>>", response.data);
                setMenuData(response.data);
            } catch (error) {
                console.error('Failed to fetch menu data:', error);
            }
        };
        const fetchRentMenuData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/property?type=Rent&limit=${limit}`);
                console.log("response>>>>", response.data);
                setMenuData(response.data);
            } catch (error) {
                console.error('Failed to fetch menu data:', error);
            }
        };
        if(categoryType==="Buy a Property"){
            fetchBuyMenuData();
        }
        else if(categoryType==="Rent a Property"){
            fetchRentMenuData();
        }
        else{
            fetchCategoryMenuData();
        }
    }, [categoryType,limit]);
    return (
        <div className="CategoryPage" style={{backgroundColor:'#efefef', marginTop:"100px"}}>
            <Listings listingType={categoryType} menuData={menuData} limit={limit} setLimit={setLimit}/>
            <FloatingButtons />
        </div>
    );
    
};

export default CategoryPage;
