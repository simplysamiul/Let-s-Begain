import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import slideOne from '../../../resource/banner-img/slide-1.jpg';
import slideTwo from '../../../resource/banner-img/slide-2.jpg';
import slideThree from '../../../resource/banner-img/slide-5.jpg';

const Banner = () => {
    return (
        <Carousel>
                <div>
                    <img src={slideOne} />
                </div>
                <div>
                    <img src={slideTwo} />
                </div>
                <div>
                    <img src={slideThree} />
                </div>
            </Carousel>
    );
};

export default Banner;