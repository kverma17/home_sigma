import React, { useEffect, useState } from 'react';
import './css/DubaiAreas.css'; // Ensure you create this CSS file
import { Link } from 'react-router-dom';
import axios from 'axios';
// const areas = [
//     {
//       name: 'Downtown Dubai',
//       image: 'https://do84cgvgcm805.cloudfront.net/area/22/1180/bda7f0f8ac5ef30f72d9020b70f05465353997b3669436b29102245d004df73b.jpg', // Replace with your image path
//       price: 'From $1 050 000',
//       description: 'Located strategically in the city center and developed by...',
//     },
//     {
//       name: 'Dubai Marina',
//       image: 'https://www.propertyfinder.ae/blog/wp-content/uploads/2017/05/shutterstock_641429341.jpg', // Replace with your image path
//       price: 'From $850 000',
//       description: 'Dubai Marina is a man-made miracle in the heart of Dubai...',
//     },
//     {
//       name: 'Business Bay',
//       image: 'https://www.almajidproperty.com/public/uploads/ckfinder/images/Top%2010%20Areas%20to%20Live%20in%20Dubai%20(1).jpg', // Replace with your image path
//       price: 'From $650 000',
//       description: 'Business Bay District is a mixed commercial-residential area...',
//     },
//     {
//       name: 'Palm Jumeirah',
//       image: 'https://cdn.britannica.com/27/178627-050-AF162D33/Palm-Jumeirah-Dubai-United-Arab-Emirates-International-2005.jpg', // Replace with your image path
//       price: 'From $1 080 000',
//       description: 'Palm Jumeirah is the biggest artificial island in the world...',
//     },
//     {
//       name: 'Jumeirah Village Circle (JVC)',
//       image: 'https://static.wanderon.in/wp-content/uploads/2023/06/feature-dubai-marina-skyline-2c8f1708f2a1.jpg', // Replace with your image path
//       price: 'From $490 000',
//       description: 'Created by one of the leading developers Nakheel...',
//     },
//     {
//       name: 'Dubai Hills Estate',
//       image: 'https://www.99acres.com/microsite/articles/files/2022/09/livedubai.jpg', // Replace with your image path
//       price: 'From $1 600 000',
//       description: 'Dubai Hills Estate is located in the heart of Dubai...',
//     },
//   ];


const DubaiAreas = () => {
    const [menuData, setMenuData] = useState([]);
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

    useEffect(() => {
        const fetchMenuData = async () => {
          try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/locations/`);
    
                console.log("response>>>>",process.env.REACT_APP_API_URL)
                setMenuData(response.data)
          } catch (error) {
            console.error('Failed to fetch menu data:', error);
          }
        };
        
        fetchMenuData();
      }, []);
  return (
    <div className="dubai-areas-container" style={{marginTop:"100px", padding:"30px"}}>
      <div className="dubai-areas-header">
        <h1>Areas</h1>
      </div>
      <div className="areas-grid">
        {menuData.map((area, index) => (
            <Link to={`/areas/${area.name}`} className="listing-link">
                <div className="area-card" key={index}>
                    <img src={area.photo} alt={area.name} className="area-image" />
                    <div className="area-info">
                    {/* <div className="area-price">{area.price}</div> */}
                    <h2>{area.name}</h2>
                    <p>{area.description}</p>
                    </div>
                </div>
            </Link>
        ))}
      </div>
    </div>
  );
};

export default DubaiAreas;