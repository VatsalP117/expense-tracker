import { useState } from "react";

export default function Calender() {
  const [val, setVal] = useState(new Date().toISOString());
  const dd = new Date();
  console.log(val, typeof val);

  async function handleChange(e) {
    e.preventDefault();
    setVal(e.target.value);
    console.log(val, typeof val);
    const formData = {
      amount: 100,
      type: "Expense",
      category: "Other",
      remarks: "testing",
      date: new Date(val).toISOString(),
      userEmail: "nonsense@gmail.com",
    };
    const response1 = fetch("/api/postDB", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
  }
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-white text-3xl">Calender Component</h1>
      <input
        type="date"
        value={val}
        onChange={handleChange}
        default={dd}
      ></input>
    </div>
  );
}
