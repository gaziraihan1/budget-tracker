import React from 'react';


const Card = ({key, title, description, icon }) => {
    return (
        <div key={key} className="p-6 md:p-8 bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out transform hover:-translate-y-1 text-center flex flex-col items-center">
            <span className="text-3xl mb-3 p-2.5 block text-center rounded-full w-14 h-14 text-blue-500 bg-gray-100 ">
                {icon}
            </span>
            <h2 className="text-lg md:text-xl 2xl:text-2xl font-semibold text-gray-800 my-3">
                {title}
            </h2>
            <p className="text-gray-600 text-sm md:text-base 2xl:text-lg">
                {description}
            </p>
        </div>
    );
};

export default Card;
