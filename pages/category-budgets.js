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
import prisma from "../utils/prismaClient";
import { ClerkProvider, useUser, SignIn, SignedOut } from "@clerk/nextjs";
import { clerkClient, getAuth, buildClerkProps } from "@clerk/nextjs/server";
import BackButton from "../components/dashboard-button";
export default function SetBudget({ categoryBudgets }) {
  // const categories = [
  //   "Food",
  //   "Snacks",
  //   "Travel",
  //   "Home",
  //   "Groceries",
  //   "Medicines",
  // ];
  // console.log(categoryBudgets);
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }
  // console.log(user);

  const userEmail = user.emailAddresses[0].emailAddress; //will be fetched by auth, TO BE UPDATED

  function handleChange(event) {
    setNewCat((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <div className=" max-w-5xl mx-auto flex flex-col py-12 px-6 md:gap-6 gap-3">
      <div className="mb-8">
        <BackButton />
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
export async function getServerSideProps({ req }) {
  // console.log(userEmail);
  const { userId } = getAuth(req);

  const user = userId ? await clerkClient.users.getUser(userId) : undefined;
  const userEmail = user.emailAddress;
  const categoryBudgets = await prisma.catgoryBudgets.findMany({
    where: {
      userEmail: userEmail,
      type: "Expense",
    },
    // include: {
    //   category: true,
    //   budget: true,
    // },
  });
  return {
    props: {
      categoryBudgets,
    },
  };
}
