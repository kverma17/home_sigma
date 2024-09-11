import Body from '../components/Body';
import Listings from '../components/Listing';
import FloatingButtons from '../components/FloatingButtion';
import { useEffect } from 'react';

const Home = ({ listingType, setSearchTerm,setType,setMinPrice,setMaxPrice,setBedrooms,setListingType,setCompletionStatus,menuData,setLimit, limit }) => {
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
    const filterOptions = {
        listingTypes: ["House", "Apartment/Condo", "Townhouse"],
        completionStatuses: ["Completed", "Under Construction", "Planned"],
        bedroom: [1, 2, 3, 4],
        maxPrice: [300000, 400000, 500000, 600000],
        minPrice: [300000, 400000, 500000, 600000]
    };
    
    return (
        <div className="Home" style={{backgroundColor:'#efefef', marginTop:"100px"}}>
            <Body filterOptions={filterOptions} setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} setSearchTerm={setSearchTerm} setType={setType} setBedrooms={setBedrooms} setListingType={setListingType} setCompletionStatus={setCompletionStatus}/>
            <Listings listingType={listingType} menuData={menuData} setLimit={setLimit} limit={limit} />
            <FloatingButtons />
        </div>
    );
    
};

export default Home;
