// src/pages/About.jsx
import React, { useEffect } from 'react';

const Faq = () => {
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
        <div className="About" style={{marginTop:"100px", padding:"30px"}}>
            <h1>FAQ</h1>
            <h3>What is the range of property prices in the area?</h3>
            <p>By asking this question, you will be able to distinguish immediately between someone who specializes in the community and someone who does not. Brokers who are not familiar with the communicate will not be able to provide you with an accurate answer. As a result of their lack of knowledge, they will be unable to negotiate effectively, which may result in the deal not going through. As a result, it is essential to deal with with an expert in a specific area in order to obtain the most accurate advice.</p>
            <h3>Why is the owner selling and how long is the property under their possession?</h3>
            <p>The answer to this question will provide you with some insight into the owner’s situation. Although you might not always get an honest response, asking questions can still be beneficial. It’s possible that the seller is in a difficult financial situation and desperately needs to sell the property as soon as possible. Alternatively, there could be an issue with the home itself. It’s possible that, depending on the circumstances, it could leave open for bargaining, which the buyer could use to their advantage.</p>
            <h3>How long has the property been in the market for?</h3>
            <p>Always make sure you are aware of how long a property has been on the market before making a purchase decision. If a home has been on the market for a considerable amount of time, this implies that it was initially listed at an excessive price, which is typically the result of an ineffective marketing plan. Because of this, the buyer will have more leeway to bargain with the seller on the price, as the seller may be more motivated and willing to negotiate.</p>
            <h3>What is the cost of the service charge on the property?</h3>
            <p>It is common for purchasers to forget to inquire about the service charges associated with the property. Building service charges in Dubai can be anywhere from a few thousand to up to one hundred thousand dirhams per year. Because this can have a significant impact on annual costs, it is essential that these fees be factored in during price negotitations.</p>
            <h3>Are there any hidden costs if I buy a property?</h3>
            <p>In addition to the purchase price, there are various other charges that customers are responsible for paying; however, we would not consider these to be hidden costs because they are addressed during the process of purchasing the property. In most cases, the sum of these fees might equal approximately seven percent of the overall value of the property. As a result, they must not to be ignored, but rather integrated into the costs associated with purchasing a house.<br/><br/>
                Additional Costs:<br/><br/>
                • DLD Transfer Fees amounting to 4% of the property’s net selling price.<br/><br/>

                • DLD Trustee Fee of AED 4,200 and Admin Charges of AED 580 (approximate prices)<br/><br/>

                • Real Estate Brokerage Agency Fees amounting to 2% of the property’s net selling price + 5% VAT<br/><br/>

                • Conveyancing Fee charged by the Real Estate Brokerage Agency (if applicable)<br/></p>
            <h3>What is the potential return on investment?</h3>
            <p>When you buy a piece of real estate, the last thing you want is for its value to decrease over the course of time.  Is there a possibility that the value of the property will decrease over time? Do you intend to retain this for the rest of your life or sell it after a certain number of years? Depending on your use of the property, you should never forget to ask this question to the real estate broker you are working with to set your expectations before your purchase.</p>
            <h3>Are there any facilities in the building or community?</h3>
            <p>If you are buying an apartment, you will most likely have access to all of the amenities that are located inside building. These amenities may include the fitness center, the swimming pool, and the parks. If, on the other hand, you are renting a townhouse or a villa within a community, there is a possibility that you may not have access to some community facilities unless you pay an additional charge.</p>
            <h3>What rental income can a homeowner expect to collect?</h3>
            <p>The type of property, location, market condition, and cost of the service charge all have an impact on the annual net income of a property, which ranges from 5% to 10% on average after deducting the cost of the service charge. Even though the rent is higher, the rental income from the more expensive and exclusive residences is typically lower in proportion.</p>
            <h3>Are foreigners permitted to have 100% ownership of property in Dubai?</h3>
            <p>In the past, only citizens of the United Arab Emirates were allowed to legally own property in Dubai. On the other hand, in 2006 the government approved Regulation No. 3, which established defined regions in which non-citizens are permitted to own property. In these places, the purchase of property with freehold ownership by non-locals is permissible. Major freehold estates may be found in most areas of “new Dubai,” including Dubai Marina, Palm Jumeirah, Jumeirah Lakes Towers, and Emirates Hills, amongst others.</p>

        </div>
    );
};

export default Faq;
