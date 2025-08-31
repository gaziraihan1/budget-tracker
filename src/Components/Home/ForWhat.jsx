import React from 'react';
import forWhat from '../../assets/whyThis.json'
import ForWhatCard from '../cards/ForWhatCard';
import { HiOutlineChartBar, HiOutlineCash, HiOutlineClipboardList, HiOutlineExclamationCircle, HiOutlinePresentationChartLine, HiOutlineDeviceMobile } from 'react-icons/hi';

const icons = [
    <HiOutlineCash className="text-4xl text-blue-500 mx-auto mb-3" />,
    <HiOutlineClipboardList className="text-4xl text-green-500 mx-auto mb-3" />,
    <HiOutlineChartBar className="text-4xl text-yellow-500 mx-auto mb-3" />,
    <HiOutlineExclamationCircle className="text-4xl text-red-500 mx-auto mb-3" />,
    <HiOutlinePresentationChartLine className="text-4xl text-purple-500 mx-auto mb-3" />,
    <HiOutlineDeviceMobile className="text-4xl text-indigo-500 mx-auto mb-3" />,
];

const ForWhat = () => {
    console.log(forWhat)
    return (
        <section className='w-full lg:w-11/12 2xl:w-10/12 mx-auto px-4'>
            <h2 className='text-center text-2xl lg:text-3xl 2xl:text-4xl font-semibold'>
                Why This is for you?
            </h2>
            <div className='mt-6 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 2xl:gap-16 max-w-6xl mx-auto'>
                {
                    forWhat.map((card, index) => (
                        <ForWhatCard title={card.title} icon={icons[index]} description={card.description}/>
                    ))
                }
            </div>
        </section>
    );
};

export default ForWhat;