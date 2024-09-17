import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import About from './pages/About';
import ListingPage from './pages/ListingPage';
import Footer from './components/Footer';
import axios from 'axios';
import CategoryPage from './pages/CategoryPage';
import Team from './pages/OurTeam';
import Faq from './pages/Faq';
import TermsOfService from './pages/TermsOfService';
import DubaiAreas from './pages/DubaiAreas';
import Developers from './pages/Developers';
import BuilderListing from './pages/BuildersListing';
import AreaListing from './pages/AreaListing';

const App = () => {
    function ScrollToTop() {
        const { pathname } = useLocation();

        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);

        return null;
    }

    useEffect(() => {
        console.log('API URL:', process.env.REACT_APP_API_URL);
        console.log('Environment:', process.env.NODE_ENV);

        if (process.env.NODE_ENV === 'development') {
            console.log('Running in development mode');
        } else if (process.env.NODE_ENV === 'production') {
            console.log('Running in production mode');
        }
    }, []);

    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(9999999999);
    const [type, setType] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [bedrooms, setBedrooms] = useState("");
    const [listing, setListingType] = useState("");
    const [completionStatus, setCompletionStatus] = useState("");
    const [menuData, setMenuData] = useState([]);
    const [limit, setLimit] = useState(16);

    useEffect(() => {
        const fetchMenuData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/property?type=${type}&q=${searchTerm}&min_price=${minPrice}&max_price=${maxPrice}&limit=${limit}`);
                setMenuData(response.data);
            } catch (error) {
                console.error('Failed to fetch menu data:', error);
            }
        };

        fetchMenuData();
    }, [minPrice,maxPrice,type,searchTerm,limit]);
    console.log({
          searchTerm,
          bedrooms,
          listing,
          completionStatus,
          maxPrice,
          minPrice,
          type,
          limit
        });

    return (
        <>
            <BrowserRouter>
                <Header setLimit={setLimit}/>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Home listingType={"Premium Luxury Developments"} setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} setSearchTerm={setSearchTerm} setType={setType} setBedrooms={setBedrooms} setListingType={setListingType} setCompletionStatus={setCompletionStatus} menuData={menuData} setLimit={setLimit} limit={limit}/>} />
                        <Route path='/category/:categoryType' element={<CategoryPage setLimit={setLimit} limit={limit}/>}/>
                        <Route path='/builders/:builderType' element={<BuilderListing setLimit={setLimit} limit={limit}/>}/>
                        <Route path='/areas/:areaListing' element={<AreaListing setLimit={setLimit} limit={limit}/>}/>
                        <Route path="/property/:propertyId" element={<div><ScrollToTop/><ListingPage /></div>} />
                        <Route path="/about-home-sigma" element={<div><ScrollToTop/><About /></div>} />
                        <Route path="/our-team" element={<div><ScrollToTop/><Team /></div>} />
                        <Route path="/faq" element={<div><ScrollToTop/><Faq /></div>} />
                        <Route path="/terms-of-service" element={<div><ScrollToTop/><TermsOfService /></div>} />
                        <Route path="/areas" element={<div><ScrollToTop/><DubaiAreas /></div>} />
                        <Route path='/developers' element={<div><ScrollToTop /><Developers /></div>} />
                    </Routes>
                </div>
                <Footer setLimit={setLimit}/>
            </BrowserRouter>
        </>
    );
}

export default App;
