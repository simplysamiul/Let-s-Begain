import React, { useState, useEffect } from 'react';
import TourismPackage from '../TourismPackage/TourismPackage';
import './TourismPackages.css';

const TourismPackages = () => {
    const [packeges, setPackages] = useState([]);
    useEffect(()=>{
        fetch("https://mighty-mesa-36641.herokuapp.com/packages")
        .then(res => res.json())
        .then(data => setPackages(data))
    },[]);
    return (
        <div className="packages-area">
            <h1>Our <span>Packages</span> </h1>
            <div className="packages-container">
                {
                    packeges.map(tourPackage => <TourismPackage 
                        tourPackage={tourPackage}  
                        key={tourPackage._id}
                        /> )
                }
            </div>
        </div>
    );
};

export default TourismPackages;