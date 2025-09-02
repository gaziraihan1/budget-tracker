import React from 'react';

const Button = ({toolName, buttonName, activeButton, setActiveButton}) => {
    return (
        <button className={`py-2 px-5 rounded text-gray-100 ${activeButton === toolName ? "bg-green-700 hover:bg-green-800": 'bg-gray-700 hover:bg-gray-800' } border-2 border-gray-200 cursor-pointer transition`} onClick={() => setActiveButton(toolName)}>
            {buttonName}
        </button>
    );
};

export default Button;