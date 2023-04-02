import React from "react";
import { useState } from "react";
import { format } from "date-fns";
import { useEffect } from "react";
// import categories from "../utils/categories";
function BudgetForm(props) {
  const categories = {
    Expense: [
      "Food",
      "Transportation",
      "Rent",
      "Groceries",
      "Entertainment",
      "Travel",

      "Shopping",
      "Other",
    ],
    Income: [
      "Salary",
      "Bonus",
      "Freelance",
      "Rental Income",
      "Dividends",
      "Capital Gains",
      "Interest Income",
      "Other",
    ],
    Investment: [
      "Stocks",
      "Mutual Funds",
      "Real Estate",
      "Cryptocurrency",
      "Bonds",
      "Retirement Accounts",
      "Other",
    ],
    EMI: [
      "Home Loan",
      "Car Loan",
      "Personal Loan",
      "Student Loan",
      "Credit Card Payment",
      "Other",
    ],
  };
  const [type, setType] = useState("Expense");
  const [category, setCategory] = useState(categories[type][0]);
  const [newBudget, setNewBudget] = useState(1000);
  const categoriesOptions = categories[type].map((category) => {
    return <option value={category}>{category}</option>;
  });
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(category, newBudget);
  }
  return (
    <div className="my-bg min-h-screen flex flex-col items-center justify-start min-w-xl mt-4 md:mt-6 md:items-start">
      <form
        className="my-form form-bg p-8 rounded-lg shadow-lg flex flex-col items-start justify-center w-xl md:w-1/2 gap-3 text-lg lg:w-2/3"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block text-gray-500 font-bold mb-2">Type</label>

          <select
            onChange={(event) => setType(event.target.value)}
            name="type"
            value={type}
          >
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
            <option value="Investment">Investment</option>
            <option value="EMI">EMI (Debt Repayement)</option>
          </select>
        </div>
        {/* stay up */}
        <div className="mb-4">
          <label className="block text-gray-500 font-bold mb-2">Category</label>

          <select
            onChange={(event) => setCategory(event.target.value)}
            name="category"
            value={category}
          >
            {categoriesOptions}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-500 font-bold mb-2">
            Current Budget: $1000
          </label>
          <input
            className="appearance-none bg-gray-700 rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
            id="newBudget"
            type="number"
            placeholder="Enter new budget"
            name="newBudget"
            value={newBudget}
            onChange={(event) => setNewBudget(Number(event.target.value))}
          />
        </div>
        <button
          id="button"
          type="submit"
          className="bg-blue-600 shadow-xl hover:bg-blue-500 text-white font-bold rounded-full p-4 w-48"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default BudgetForm;
