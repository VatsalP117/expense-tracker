import React from "react";

const Overview = ({
  totalExpenses,
  totalIncome,
  totalInvestment,
  totalEMI,
}) => {
  const netInOrOut = totalIncome - totalExpenses - totalInvestment - totalEMI;

  return (
    <div className="my-bg p-4 rounded-md shadow-md w-3/4 md:w-2/3 ">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-300 font-semibold">Total Expenses:</p>
          <h3 className="text-gray-100 text-2xl font-semibold">
            {totalExpenses}
          </h3>
        </div>
        <div>
          <p className="text-gray-300  font-semibold">Total Income:</p>
          <h3 className="text-gray-100 text-2xl font-semibold">
            {totalIncome}
          </h3>
        </div>
        <div>
          <p className="text-gray-300 font-semibold">Total Investment:</p>
          <h3 className="text-gray-100 text-2xl font-semibold">
            {totalInvestment}
          </h3>
        </div>
        <div>
          <p className="text-gray-300  font-semibold">Total EMI:</p>
          <h3 className="text-gray-100 text-2xl font-semibold">{totalEMI}</h3>
        </div>
      </div>
      <hr className="border-gray-200 my-4" />
      <div>
        <p className="text-gray-500">Net In/Out:</p>
        <h3
          className={`text-2xl font-semibold ${
            netInOrOut >= 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {netInOrOut >= 0 ? "+" : "-"}
          {Math.abs(netInOrOut)}
        </h3>
      </div>
    </div>
  );
};

export default Overview;
