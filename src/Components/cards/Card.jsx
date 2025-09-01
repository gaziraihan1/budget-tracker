import React from 'react';

const Card = ({ title, description, icon, bgColor }) => {
    return (
        <div className={`p-6 md:p-8 ${bgColor} border border-gray-200 rounded-xl shadow-md hover:shadow-2xl transition-transform duration-300 ease-in-out transform hover:-translate-y-2 text-center flex flex-col items-center relative overflow-hidden`}>
            
            <span className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-full opacity-20 -translate-x-6 -translate-y-6"></span>
            <span className="absolute bottom-0 left-0 w-24 h-24 bg-purple-100 rounded-full opacity-20 translate-x-6 translate-y-6"></span>
            <span className="text-2xl mb-3 p-3 block text-center rounded-full w-12 h-12 lg:w-14 lg:h-14 text-white bg-gradient-to-br from-blue-200 to-indigo-300 shadow-lg transform transition-transform duration-300 hover:scale-110">
                {icon}
            </span>
            <h2 className="text-lg md:text-xl 2xl:text-2xl font-semibold my-3 text-gray-900">
                {title}
            </h2>
            <p className="text-sm md:text-base text-gray-800">
                {description}
            </p>
        </div>
    );
};

export default Card;
