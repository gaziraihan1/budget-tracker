
import React from 'react';
import { HiOutlinePlusCircle, HiOutlineTag, HiOutlineChartPie, HiOutlineCalendar, HiOutlineDeviceMobile } from 'react-icons/hi';
import featureData from '../../assets/feature.json'
import FeatureCard from '../cards/FeatureCard';

const icons = [
    <HiOutlinePlusCircle className="text-4xl text-blue-500 mx-auto mb-3" />,
    <HiOutlineTag className="text-4xl text-green-500 mx-auto mb-3" />,
    <HiOutlineChartPie className="text-4xl text-yellow-500 mx-auto mb-3" />,
    <HiOutlineCalendar className="text-4xl text-purple-500 mx-auto mb-3" />,
    <HiOutlineDeviceMobile className="text-4xl text-indigo-500 mx-auto mb-3" />
]

const Feature = () => {
    return (
        <section className='w-full px-4 lg:w-11/12 2xl:w-10/12 mx-auto'>
            <h2 className='text-center text-2xl lg:text-3xl 2xl:text-4xl font-semibold'>
                What feature available
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-10 2xl:gap-16 max-w-7xl mx-auto mt-6 lg:mt-12'>
               {
                featureData.map((f,i) => (
                    <FeatureCard title={f.title} description={f.description} icon={icons[i]}/>
                ))
               }
            </div>
        </section>
    );
};

export default Feature;