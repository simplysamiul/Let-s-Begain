import React from 'react';
import Banner from '../Banner/Banner';
import FundingSection from '../FundingSection/FundingSection';
import TourismPackages from '../TourismPackages/TourismPackages';
import VisaSevices from '../VisaServices/VisaSevices/VisaSevices';

const Home = () => {
    return (
        <div>
            <Banner />
            <TourismPackages />
            <VisaSevices />
            <FundingSection />
        </div>
    );
};

export default Home;