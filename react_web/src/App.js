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

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

const App = () => {
    useEffect(() => {
        const addGtagScript = () => {
            const script = document.createElement('script');
            script.async = true;
            script.src = 'https://www.googletagmanager.com/gtag/js?id=G-P5WOMGNNSS'; 
            document.head.appendChild(script);

            const scriptContent = document.createElement('script');
            scriptContent.innerHTML = `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-P5WOMGNNSS');
            `;
            document.head.appendChild(scriptContent);
        };

        addGtagScript();
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
                const response = await axios.get(
                    `${process.env.REACT_APP_API_URL}/property?type=${type}&q=${searchTerm}&min_price=${minPrice}&max_price=${maxPrice}&limit=${limit}`
                );
                console.log('response>>>>', response.data);
                setMenuData(response.data);
            } catch (error) {
                console.error('Failed to fetch menu data:', error);
            }
        };

        fetchMenuData();
    }, [minPrice, maxPrice, type, searchTerm, limit]);

    console.log({
        searchTerm,
        bedrooms,
        listing,
        completionStatus,
        maxPrice,
        minPrice,
        type,
        limit,
    });

    return (
        <BrowserRouter>
            <ScrollToTop />
            <Header setLimit={setLimit} />
            <div className="App">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home
                                listingType={'Premium Luxury Developments'}
                                setMinPrice={setMinPrice}
                                setMaxPrice={setMaxPrice}
                                setSearchTerm={setSearchTerm}
                                setType={setType}
                                setBedrooms={setBedrooms}
                                setListingType={setListingType}
                                setCompletionStatus={setCompletionStatus}
                                menuData={menuData}
                                setLimit={setLimit}
                                limit={limit}
                            />
                        }
                    />
                    <Route path='/category/:categoryType' element={<CategoryPage setLimit={setLimit} limit={limit} />} />
                    <Route path='/builders/:builderType' element={<BuilderListing setLimit={setLimit} limit={limit} />} />
                    <Route path='/areas/:areaListing' element={<AreaListing setLimit={setLimit} limit={limit} />} />
                    <Route
                        path="/property/:propertyId"
                        element={<ListingPage />}
                    />
                    <Route path="/about-home-sigma" element={<About />} />
                    <Route path="/our-team" element={<Team />} />
                    <Route path="/faq" element={<Faq />} />
                    <Route path="/terms-of-service" element={<TermsOfService />} />
                    <Route path="/areas" element={<DubaiAreas />} />
                    <Route path="/developers" element={<Developers />} />
                </Routes>
            </div>
            <Footer setLimit={setLimit} />
        </BrowserRouter>
    );
};

export default App;
