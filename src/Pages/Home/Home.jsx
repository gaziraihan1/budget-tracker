import React from 'react';
import Banner from '../../Components/Home/Banner';
import ForWhat from '../../Components/Home/ForWhat';
import Feature from '../../Components/Home/Feature';
import Guidelines from '../../Components/Home/Guidelines';

const Home = () => {
    return (
        <div className='flex flex-col gap-12 lg:gap-18 w-full lg:w-11/12 2xl:w-10/12 mx-auto'>
            <Banner />
            <ForWhat />
            <Feature />
            <Guidelines />
        </div>
    );
};

export default Home;