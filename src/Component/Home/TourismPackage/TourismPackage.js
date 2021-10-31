import React from 'react';
import { Link } from 'react-router-dom';
import './TourismPackage.css';

const TourismPackage = (props) => {
    console.log(props);
    const { name, price, img, short_desk, _id } = props.tourPackage;
    return (
        <div className="package-container">
            <img src={img} alt="" />
           <div className="cart-body">
                <h3>{name}</h3>
                <p>{short_desk}</p>
                <h4>Starts From BDT-{price}/Per Person</h4>
                <Link className="mx-auto" to={`/packages/${_id}`}>Booking</Link>
           </div>
        </div>
    );
};

export default TourismPackage;