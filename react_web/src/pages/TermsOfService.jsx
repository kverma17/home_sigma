// src/pages/About.jsx
import React, { useEffect } from 'react';

const TermsOfService = () => {
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
        <div className="About" style={{marginTop:"100px"}}>
            <h1>Terms of Service</h1>
            <p>This is the Terms of Service page.</p>
        </div>
    );
};

export default TermsOfService;
