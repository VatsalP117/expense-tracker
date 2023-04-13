import React from "react";

const Card = ({ title, value }) => {
  return (
    <div className="bg-gray-900 shadow-lg rounded-md p-6">
      <h3 className="text-white text-lg font-semibold">{title}</h3>
      <p className="text-gray-400 mt-2 text-sm">{value}</p>
    </div>
  );
};

export default Card;
