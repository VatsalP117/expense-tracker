import ResponsiveAppBar from "../components/navbar";
import BudgetForm from "../components/budget-form";
import Link from "next/link";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { ClerkProvider, useUser, SignIn, SignedOut } from "@clerk/nextjs";
export default function AddTransaction() {
  // const categories = [
  //   "Food",
  //   "Snacks",
  //   "Travel",
  //   "Home",
  //   "Groceries",
  //   "Medicines",
  // ];
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }
  console.log(user);

  const userEmail = user.emailAddresses[0].emailAddress; //will be fetched by auth, TO BE UPDATED

  function handleChange(event) {
    setNewCat((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }
  // async function handleSubmit(e) {
  //   e.preventDefault();

  //   setCategoryOpen(false);
  //   setNewCat({});
  //   const response1 = fetch("/api/postCat", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(newCat),
  //   });

  //   setNewCat({
  //     cateory: "",
  //     budget: "1000",
  //     userEmail: "vatsal4011@gmail.com",
  //   });
  // }
  return (
    <div className=" max-w-5xl mx-auto flex flex-col py-12 px-6 md:gap-6 gap-3">
      <div className="mb-8">
        <Link
          className="bg-indigo-600 shadow-xl hover:bg-indigo-500 text-white font-bold rounded-full p-4 w-48"
          href="/dashboard"
        >
          ⬅️ Dashboard
        </Link>
      </div>
      <div className="flex flex-col gap-8">
        <h1 className="text-white text-5xl md:text-7xl font-bold sm:text-center md:text-left">
          Modify Monthly Budgets
        </h1>
        <div className="flex flex-col gap-2">
          <p className=" text-gray-300 text-lg md:text-xl">
            Tracking category-wise budget and spending is important as it helps
            in gaining a better understanding of where the money is being spent
            and how much is being saved. By keeping track of expenses across
            various categories, one can identify areas where they can cut back
            on spending and allocate more resources to areas that require more
            attention. This not only helps in maintaining a balanced financial
            plan but also helps in achieving long-term financial goals.Check out
            our guide on how to define monthly budgets for each category here{" "}
          </p>

          <p className=" text-gray-300 text-lg md:text-xl">
            {" "}
            Manage your monthly budgets by updating the preset values for each
            category. Select a category type and update the budget amount to
            reflect your current financial goals.
          </p>
        </div>
      </div>
      <BudgetForm userEmail={userEmail} />
    </div>
  );
}
// const prisma = new PrismaClient();
