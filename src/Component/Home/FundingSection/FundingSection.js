import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import fundOne from '../../../resource/funding-img/fund-1.jpg';
import fundTwo from '../../../resource/funding-img/fund-2.jpg';
import fundThree from '../../../resource/funding-img/fund-3.jpg';
import fundFour from '../../../resource/funding-img/fund-4.jpg';
import './FudingSection.css';


const FundingSection = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <div className="funding-container">
            <h1>Let's bring</h1>
            <h2>A change together</h2>
            <Carousel responsive={responsive}>
                <div><img src={fundOne} alt="" /></div>
                <div><img src={fundTwo} alt="" /></div>
                <div><img src={fundThree} alt="" /></div>
                <div><img src={fundFour} alt="" /></div>
                <div><img src={fundOne} alt="" /></div>
                <div><img src={fundTwo} alt="" /></div>
                <div><img src={fundThree} alt="" /></div>
                <div><img src={fundFour} alt="" /></div>
            </Carousel>

        </div>
    );
};

export default FundingSection;