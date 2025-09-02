import React from 'react';

const Button = ({toolName, buttonName, activeButton, setActiveButton}) => {
    return (
        <button className={`py-2 px-5 rounded text-gray-100 ${activeButton === toolName ? "bg-green-700": 'bg-gray-700' }`} onClick={() => setActiveButton(toolName)}>
            {buttonName}
        </button>
    );
};

export default Button;