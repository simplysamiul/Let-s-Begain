import React from 'react';
import './Country.css';

const Country = (props) => {
    console.log(props);
    const {name, flag} = props.country;
    return (
        <div className="country-container">
            <img src={flag} alt="" />
            <div className="country-name">
                <h4>{name}</h4>
            </div>
        </div>
    );
};

export default Country;