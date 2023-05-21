import React from "react";
import { useState } from "react";
import { format } from "date-fns";
import { useEffect } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useRouter } from "next/router";
import useSWR, { useSWRConfig } from "swr";

function BudgetForm(props) {
  const { mutate } = useSWRConfig();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
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
    const formData = {
      type: type,
      category: category,
      budget: newBudget,
      userEmail: props.userEmail,
    };
    console.log(formData);
    const response1 = fetch("/api/postCat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    setType("Expense");
    setCategory(categories[type][0]);
    setNewBudget(1000);
    setIsOpen(true);
    mutate("api/categorybudgets/" + props.userEmail);
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
          {/* <label className="block text-gray-500 font-bold mb-2">
            Current Budget: $1000
          </label> */}
          <input
            className="appearance-none bg-gray-700 rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
            id="newBudget"
            type="number"
            min="1"
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
      <AlertDialog open={isOpen} onClose={setIsOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Do you wish to set budget for any more categories?
            </AlertDialogTitle>
            <AlertDialogDescription>
              Clicking on No will take you back to the dashboard page
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              onClick={() => {
                setIsOpen(false);
                router.push("/dashboard");
              }}
            >
              No
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Yes
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default BudgetForm;
