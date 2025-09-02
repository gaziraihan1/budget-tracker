import React from "react";

const Alert = ({ message, type, onClose }) => {
  const colors = {
    success: "bg-green-100 text-green-800",
    error: "bg-red-100 text-red-800",
    info: "bg-blue-100 text-blue-800",
  };

  return (
    <div
      className={`fixed top-5 right-5 px-4 py-3 rounded shadow ${colors[type]} flex items-center justify-between w-80`}
    >
      <span>{message}</span>
      <button onClick={onClose} className="font-bold ml-4">&times;</button>
    </div>
  );
};

export default Alert;
