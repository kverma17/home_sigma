import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import About from './pages/About';
import ListingPage from './pages/ListingPage';
class App extends React.Component {
    render() {
        return (
            <>
                <Header />
                <BrowserRouter>
                
                    <div className="App">
                        <Routes>
                            <Route path="/" element={<Home listingType={"Premium Luxury Developments"}/>} />
                            <Route path="/offplan-apartment" element={<Home listingType={"Latest OFF Plan Apartments in Dubai"}/>} />
                            <Route path="/offplan-villas" element={<Home listingType={"Latest OFF Plan Villas in Dubai"}/>} />
                            <Route path="/luxury-projects" element={<Home listingType={"Latest Luxury Projects in Dubai"}/>} />
                            <Route path="/property/:propertyId" element={<ListingPage />}/>
                            <Route path="/about" element={<About />} />
                        </Routes>
                    </div>
                </BrowserRouter>
            </>
        );
    }
}

export default App;
