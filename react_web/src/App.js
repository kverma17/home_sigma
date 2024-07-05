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
        <>
            <BrowserRouter>
                <Header />
                <ScrollToTop />
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Home listingType={"Premium Luxury Developments"} setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} setSearchTerm={setSearchTerm} setType={setType} setBedrooms={setBedrooms} setListingType={setListingType} setCompletionStatus={setCompletionStatus} menuData={menuData}/>} />
                        <Route path='/category/:categoryType' element={<CategoryPage />}/>
                        <Route path="/property/:propertyId" element={<ListingPage />} />
                        <Route path="/about-home-sigma" element={<About />} />
                        <Route path="/our-team" element={<Team />} />
                        <Route path="/faq" element={<Faq />} />


                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
