import React from 'react';
import './css/Developers.css'; // Ensure you create this CSS file

const developers = [
    {
      name: 'Downtown Dubai',
      image: 'https://do84cgvgcm805.cloudfront.net/area/22/1180/bda7f0f8ac5ef30f72d9020b70f05465353997b3669436b29102245d004df73b.jpg', // Replace with your image path
      logo: 'https://reviveestate.com/wp-content/uploads/2022/11/ggg-removebg-preview.png',
      description: 'Located strategically in the city center and developed by...',
    },
    {
      name: 'Dubai Marina',
      image: 'https://www.propertyfinder.ae/blog/wp-content/uploads/2017/05/shutterstock_641429341.jpg', // Replace with your image path
      logo: 'https://reviveestate.com/wp-content/uploads/2022/11/ggg-removebg-preview.png',
      description: 'Dubai Marina is a man-made miracle in the heart of Dubai...',
    },
    {
      name: 'Business Bay',
      image: 'https://www.almajidproperty.com/public/uploads/ckfinder/images/Top%2010%20Areas%20to%20Live%20in%20Dubai%20(1).jpg', // Replace with your image path
      logo: 'https://reviveestate.com/wp-content/uploads/2022/11/ggg-removebg-preview.png',
      description: 'Business Bay District is a mixed commercial-residential area...',
    },
    {
      name: 'Palm Jumeirah',
      image: 'https://cdn.britannica.com/27/178627-050-AF162D33/Palm-Jumeirah-Dubai-United-Arab-Emirates-International-2005.jpg', // Replace with your image path
      logo: 'https://reviveestate.com/wp-content/uploads/2022/11/ggg-removebg-preview.png',
      description: 'Palm Jumeirah is the biggest artificial island in the world...',
    },
    {
      name: 'Jumeirah Village Circle (JVC)',
      image: 'https://static.wanderon.in/wp-content/uploads/2023/06/feature-dubai-marina-skyline-2c8f1708f2a1.jpg', // Replace with your image path
      logo: 'https://reviveestate.com/wp-content/uploads/2022/11/ggg-removebg-preview.png',
      description: 'Created by one of the leading developers Nakheel...',
    },
    {
      name: 'Dubai Hills Estate',
      image: 'https://www.99acres.com/microsite/articles/files/2022/09/livedubai.jpg', // Replace with your image path
      logo: 'https://reviveestate.com/wp-content/uploads/2022/11/ggg-removebg-preview.png',
      description: 'Dubai Hills Estate is located in the heart of Dubai...',
    },
  ];
  

const Developers = () => {
  return (
    <div className="developers-container" style={{marginTop:"100px", padding:"30px"}}>
      <div className="developers-header">
        <h1>Developers</h1>
      </div>
      <div className="developers-grid">
        {developers.map((developer, index) => (
          <div className="developers-card" key={index}>
            <img src={developer.image} alt={developer.name} className="developers-image" />
            <div className="developers-logo">
                <img src={developer.logo} alt={developer.name} className="developers" style={{height:30, width:50}}/>
              </div>
            <div className="developers-info">
              <h2>{developer.name}</h2>
              {/* <p>{developer.description}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Developers;