import React from "react";
import { useState } from "react";
import { format } from "date-fns";
import { useEffect } from "react";
import { categories } from "../utils/categories";

function Form(props) {
  console.log(categories);
  const [type, setType] = useState("Expense");
  const [category, setCategory] = useState(categories[type][0]);
  const [formData, setFormData] = useState({
    amount: 0,

    remarks: "",
    userEmail: props.userEmail,
  });
  const [val, setVal] = useState(new Date().toISOString());
  useEffect(() => setCategory(categories[type][0]), [type]);
  const categoriesOptions = categories[type].map((category) => {
    return <option value={category}>{category}</option>;
  });
  function handleChange(event) {
    if (event.target.name === "amount") {
      setFormData((prevFormData) => {
        return {
          ...prevFormData,
          [event.target.name]: parseInt(event.target.value),
        };
      });
    } else {
      setFormData((prevFormData) => {
        return {
          ...prevFormData,
          [event.target.name]: event.target.value,
        };
      });
    }
  }
  async function handleSubmit(event) {
    event.preventDefault();
    formData["type"] = type;
    formData["category"] = category;
    formData["date"] = new Date(val).toISOString();
    const response1 = fetch("/api/postDB", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setType("Expense");
    setCategory(categories[type][0]);
    setFormData({
      amount: 0,
      remarks: "",
      userEmail: props.userEmail,
    });
    setVal(new Date().toISOString());
  }
  return (
    <div className="my-bg min-h-screen flex flex-col items-center justify-start min-w-xl mt-4 md:mt-6 lg:items-start">
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
          <label
            className="block text-gray-500 font-bold mb-2"
            htmlFor="numberInput"
          >
            Amount
          </label>
          <input
            className="appearance-none bg-gray-700 rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
            id="numberInput"
            type="number"
            placeholder="Enter transcation amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-500 font-bold mb-2"
            htmlFor="dateInput"
          >
            Date
          </label>
          <input
            className="appearance-none bg-gray-700 rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
            id="dateInput"
            type="date"
            name="date"
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
        </div>
        {/* stay below */}
        <div className="mb-4">
          <label
            className="block text-gray-500 font-bold mb-2"
            htmlFor="remarks"
          >
            Remarks
          </label>
          <input
            className="appearance-none bg-gray-700 rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
            id="remarks"
            type="text"
            name="remarks"
            value={formData.remarks}
            onChange={handleChange}
            placeholder="(Optional)"
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

export default Form;
