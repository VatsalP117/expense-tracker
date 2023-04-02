import React from "react";
import { Button } from "@/components/ui/button";

const Transaction = ({ date, amount, category, type, remarks }) => {
  // const dateParts = date.split("-");
  // const dateObject = new Date(dateParts[2], dateParts[1], dateParts[0]);

  const dateObject = new Date(date);

  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-800 px-4 md:w-full">
      <div className="flex items-center">
        <div className="bg-gray-700 rounded-full h-8 w-8 flex items-center justify-center mr-4">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M22 12h-4l-3 9L9 3l-3 9H2"
            ></path>
          </svg>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-400">{`${dateObject.getDate()}-${
            dateObject.getMonth() + 1
          }-${dateObject.getFullYear()}`}</h3>
          <p className=" text-base md:text-lg font-semibold text-white">
            {category.length > 0 ? <p>{category}</p> : <p>{type}</p>}
          </p>
        </div>
      </div>
      <div className="amount-and-remarks flex flex-row justify-between gap-3">
        {(type == "Expense" || type == "EMI") && (
          <p className=" text-base md:text-lg font-semibold text-red-600 flex items-center">
            {amount}
          </p>
        )}
        {type == "Income" && (
          <p className=" text-base md:text-lg font-semibold text-green-500 flex items-center">
            {amount}
          </p>
        )}
        {type == "Investment" && (
          <p className=" text-base md:text-lg font-semibold text-white flex items-center">
            {amount}
          </p>
        )}

        <Button type="outline">Remarks</Button>
      </div>
    </div>
  );
};

export default Transaction;
