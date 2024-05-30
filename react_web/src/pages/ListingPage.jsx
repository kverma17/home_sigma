import React from 'react';
import { useParams } from 'react-router-dom';

const ListingPage = () => {
    const { propertyId } = useParams(); 

    const propertyData = {
        'maha-villas': {
            name: 'Maha Villas',
            description: 'A luxurious villa with all modern amenities.',
        },
        'other-villa': {
            name: 'Other Villa',
            description: 'A cozy villa located near the beach.',
        },
    };

    const property = propertyData[propertyId];

    if (!property) {
        return <p>Property not found</p>;
    }

    return (
        <div>
            <h1>{property.name}</h1>
            <p>{property.description}</p>
        </div>
    );
};

export default ListingPage;
