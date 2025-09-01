import React from 'react';
import Banner from '../../Components/Home/Banner';
import ForWhat from '../../Components/Home/ForWhat';
import Feature from '../../Components/Home/Feature';
import Guidelines from '../../Components/Home/Guidelines';
import Benefit from '../../Components/Home/Benefit';
import FuturePlan from '../../Components/Home/FuturePlan';

const Home = () => {
    return (
        <div className='flex flex-col gap-12 lg:gap-18 2xl:gap-24'>
            <Banner />
            <ForWhat />
            <Feature />
            <Benefit />
            <FuturePlan />
            <Guidelines />
        </div>
    );
};

export default Home;