// src/pages/About.jsx
import React, { useEffect } from 'react';

const About = () => {
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
    return (
        <div className="About" style={{marginTop:"100px", marginLeft:"30px", padding:"20px"}}>
            <h1>About Us</h1>
            <h2>About HomeSigma Real Estate LLC</h2>
            <p>Welcome to HomeSigma Real Estate LLC, your trusted partner in the dynamic Dubai real estate market. Located in the heart of Saih Shuaib 2, Dubai Industrial City, we specialize in providing comprehensive real estate services tailored to meet the diverse needs of our clients.</p>
            <h2>Our Vision</h2>
            <p>At HomeSigma Real Estate LLC, we envision becoming the leading real estate agency renowned for our integrity, professionalism, and commitment to excellence. We aim to redefine industry standards through innovative solutions and exceptional customer service.</p>
            <h2>What We Offer</h2>
            <p>Whether you are buying, selling, renting, or investing in properties across Dubai, our team of dedicated professionals is here to guide you every step of the way. We offer a wide range of services, including:</p>
            <ul><li><b>Residential Sales and Leasing:</b> Explore a curated selection of residential properties that match your lifestyle and investment goals.</li>
            <li><b>Commercial Real Estate:</b> Find strategic commercial spaces tailored to your business needs, from offices to retail and industrial properties.</li>
            <li><b>Investment Consultancy:</b> Benefit from expert insights and market analysis to make informed investment decisions that yield long-term value.</li>
            <li><b>Property Management:</b> Trust us to manage your properties with utmost care and efficiency, ensuring peace of mind for property owners and tenants alike.</li>
            </ul>
            <b>Why Choose Us</b>
            <p>At HomeSigma Real Estate LLC, we prioritize transparency, reliability, and client satisfaction. Our team is committed to building lasting relationships based on trust and mutual respect. By staying abreast of market trends and leveraging our extensive network, we strive to deliver unparalleled results and exceed expectations.</p>
            <h2>Get in Touch</h2>
            <p>Whether you are a first-time buyer, seasoned investor, or property owner looking to maximize returns, contact HomeSigma Real Estate LLC today. Explore the possibilities with us and experience the difference of working with a dedicated team that puts your needs first.</p>
            <h2>Contact Information:</h2>
            <ul><li><b>Address:</b> Unit 3506 The Burlington Tower Marasi Dr - Business Bay - Dubai - United Arab Emirates</li>
            <li><b>Email:</b> info@homesigma.ae</li>
            <li><b>WhatsApp:</b> +971 50 275 4127</li>
            <li><b>Phone:</b> +971 50 275 4127, +971 56 889 9896</li>
            </ul>
            <p>Let HomeSigma Real Estate LLC be your gateway to exceptional real estate opportunities in Dubai.</p>


        </div>
    );
};

export default About;
