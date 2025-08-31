import React from 'react';


const ForWhatCard = ({ title, description, icon }) => {
    return (
        <div className="p-6 md:p-8 bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out transform hover:-translate-y-1 text-center">
            {icon}
            <h2 className="text-lg md:text-xl 2xl:text-2xl font-semibold text-gray-800 mb-3">
                {title}
            </h2>
            <p className="text-gray-600 text-sm md:text-base 2xl:text-lg">
                {description}
            </p>
        </div>
    );
};

export default ForWhatCard;
