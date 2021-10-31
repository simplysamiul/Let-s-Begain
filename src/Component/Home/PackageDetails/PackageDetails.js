import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './PackageDetails.css';

const PackageDetails = () => {
    const { id } = useParams();
    const [details, setDetails] = useState([]);
    const {banner_img, packages, name, price} = details;
    useEffect(()=>{
        const url = `https://mighty-mesa-36641.herokuapp.com/packages/${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data => setDetails(data))
    },[]);

    const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
      fetch("https://mighty-mesa-36641.herokuapp.com/mybooking", {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                alert("Are Your Sure For This Booking ?")
                reset();
            }
        })
  };
    return (
        <div className="details-container">
            <img src={banner_img} alt="" />
            <div className="details-body">
                <h1>{name}</h1>
                <h3>Starts From BDT-{price}/Per Person</h3>
            </div>
            <div className="details-content">
               <div className="details-area">
               <h4>Packages Includes</h4>
                <ul>
                    <li>Air Tickets with all taxes.</li>
                    <li>Transportation Service</li>
                    <li>Health Insurance</li>
                    <li>Daily buffet breakfast at hotel</li>
                    <li>Bangla Speking Dedicated Moyallem.</li>
                    <li>Umrah Visa Fee.</li>
                    <li>Umrah Hajj Guid.</li>
                    <li>Ziyarah : Mina, Arafar, Jabal-e-Noor.</li>
                </ul>
               </div>
               <div className="confirm-form">
               <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("Name")} placeholder="Name*" required />
                    <input {...register("Address")} placeholder="Address*" required />
                    <input {...register("package-name*")} placeholder="package-name*" required />
                    <input type="number" {...register("phone-number*")} placeholder="phone-number*" required />
                    <input type="submit" value="Place-Order" />
                </form>
               </div>
            </div>
        </div>
    );
};

export default PackageDetails;