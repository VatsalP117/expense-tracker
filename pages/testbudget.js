import React from "react";
import { format } from "date-fns";
import prisma from "../utils/prismaClient";
const BudgetTracking = ({ data }) => {
  const categories = [
    { name: "Groceries", budget: 500, spent: 350 },
    { name: "Entertainment", budget: 200, spent: 150 },
    { name: "Transportation", budget: 100, spent: 80 },
  ];
  console.log(data);
  function handleData(data, month) {
    const filteredTransactions = data.filter((transaction) => {
      const transactionMonth = format(new Date(transaction.date), "MMMM yyyy");
      return transactionMonth === month;
    });
    // console.log(filteredTransactions);
    return filteredTransactions;
  }
  const filteredTransactions = handleData(data, "March 2023");

  const categoryExpenses = filteredTransactions.reduce((acc, transaction) => {
    if (transaction.type === "Expense") {
      if (acc[transaction.category]) {
        acc[transaction.category] += transaction.amount;
      } else {
        acc[transaction.category] = transaction.amount;
      }
    }
    return acc;
  }, {});
  console.log(filteredTransactions);
  console.log(categoryExpenses);
  // Output: { Food: 500, Rent: 1000 }

  return (
    <div className="bg-gray-800 p-4 rounded-md shadow-md">
      <h2 className="text-lg font-medium text-white mb-4">Budget Tracking</h2>
      <ul>
        {categories.map((category) => (
          <li
            key={category.name}
            className="flex justify-between items-center py-2"
          >
            <div className="flex items-center">
              <span className="text-white mr-4">{category.name}</span>
              <div className="bg-gray-700 rounded-full h-4 w-32 overflow-hidden">
                <div
                  className="bg-blue-500 h-full"
                  style={{
                    width: `${(category.spent / category.budget) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
            <span className="text-blue-500">{`$${category.spent} / $${category.budget}`}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export async function getServerSideProps() {
  const data = await prisma.transaction.findMany();
  // console.log(data);
  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    },
  };
}
export default BudgetTracking;
