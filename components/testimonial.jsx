import React from "react";

const TestimonialCard = ({ userName, id, message }) => {
  return (
    <div
      className="my-bg text-white rounded-lg shadow-lg overflow-hidden max-w-sm my-auto border1"
      key={id}
    >
      <div className="px-6 py-8">
        <div className="text-gray-300 mb-4">{message}</div>
      </div>
      <div className="my-bg-but-lighter px-6 py-4">
        <span className="text-xs text-gray-400">{userName}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
