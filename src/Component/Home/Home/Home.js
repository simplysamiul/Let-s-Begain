import React from 'react';
import Banner from '../Banner/Banner';
import FundingSection from '../FundingSection/FundingSection';
import VisaSevices from '../VisaServices/VisaSevices/VisaSevices';

const Home = () => {
    return (
        <div>
            <Banner />
            <VisaSevices />
            <FundingSection />
        </div>
    );
};

export default Home;