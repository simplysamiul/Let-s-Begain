import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './VisaSevices.css';

const VisaSevices = () => {
    const [countries, setCountries] = useState([]);
    const allCountries = countries.slice(0,20);
    useEffect(()=>{
        fetch("https://restcountries.com/v2/all")
        .then(res => res.json())
        .then(data=> setCountries(data))
    },[]);
    return (
        <div className="visa-area">
          <h1>Visa <span>Service</span></h1>
            <div className="countries-container">
              {
                  allCountries.map(country => <Country 
                    country={country} 
                    key={country.name} 
                    /> )
              }
            </div>  
        </div>
    );
};

export default VisaSevices;