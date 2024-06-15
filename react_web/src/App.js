import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import About from './pages/About';
import ListingPage from './pages/ListingPage';
import Footer from './components/Footer';

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

    return (
        <>
            <BrowserRouter>
                <Header />
                <ScrollToTop />
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Home listingType={"Premium Luxury Developments"} />} />
                        <Route path="/offplan-apartments" element={<Home listingType={"Latest OFF Plan Apartments in Dubai"} />} />
                        <Route path="/offplan-villas" element={<Home listingType={"Latest OFF Plan Villas in Dubai"} />} />
                        <Route path="/luxury-projects" element={<Home listingType={"Latest Luxury Projects in Dubai"} />} />
                        <Route path="/property/:propertyId" element={<ListingPage />} />
                        <Route path="/about-home-sigma" element={<About />} />
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
