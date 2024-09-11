import React, { useEffect, useState } from 'react';
import './css/Developers.css'; // Ensure you create this CSS file
import { Link } from 'react-router-dom';
import axios from 'axios';

// const developers = [
//     {
//       name: 'DAMAC',
//       image: 'https://do84cgvgcm805.cloudfront.net/area/22/1180/bda7f0f8ac5ef30f72d9020b70f05465353997b3669436b29102245d004df73b.jpg', // Replace with your image path
//     },
//     {
//       name: 'Azizi Developments',
//       image: 'https://www.propertyfinder.ae/blog/wp-content/uploads/2017/05/shutterstock_641429341.jpg', // Replace with your image path
//     },
//     {
//       name: 'SOBHA',
//       image: 'https://www.almajidproperty.com/public/uploads/ckfinder/images/Top%2010%20Areas%20to%20Live%20in%20Dubai%20(1).jpg',  
//     },
//     {
//       name: 'Palm Jumeirah',
//       image: 'https://cdn.britannica.com/27/178627-050-AF162D33/Palm-Jumeirah-Dubai-United-Arab-Emirates-International-2005.jpg',   
//     },
//     {
//       name: 'Jumeirah Village Circle (JVC)',
//       image: 'https://static.wanderon.in/wp-content/uploads/2023/06/feature-dubai-marina-skyline-2c8f1708f2a1.jpg',     
//     },
//     {
//       name: 'Dubai Hills Estate',
//       image: 'https://www.99acres.com/microsite/articles/files/2022/09/livedubai.jpg',  
//     },
//   ];
  
const Developers = () => {
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
    const [menuData, setMenuData] = useState([]);

    useEffect(() => {
        const fetchMenuData = async () => {
          try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/builders/`);
    
                console.log("response>>>>",process.env.REACT_APP_API_URL)
                setMenuData(response.data)
          } catch (error) {
            console.error('Failed to fetch menu data:', error);
          }
        };
        
        fetchMenuData();
      }, []);
  return (
    <div className="developers-container" style={{marginTop:"100px", padding:"30px"}}>
      <div className="developers-header">
        <h1>Developers</h1>
      </div>
      <div className="developers-grid">
        {menuData.map((developer, index) => (
            <Link to={`/builders/${developer.name}`} className="listing-link">
            <div className="developers-card" key={index}>
                <img src={developer.photo} alt={developer.name} className="developers-image" />
                <div className="developers-info">
                <h2>{developer.name}</h2>
                </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Developers;