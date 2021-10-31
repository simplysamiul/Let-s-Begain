import React from 'react';
import { useParams } from 'react-router';
import './PackageDetails.css';

const PackageDetails = () => {
    const { id } = useParams();
    return (
        <div>
            <h1>This is Package details</h1>
            <h3>{id}</h3>
        </div>
    );
};

export default PackageDetails;