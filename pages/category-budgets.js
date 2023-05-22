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

import BackButton from "../components/dashboard-button";
import { useSession } from "next-auth/react";
import LoadUI from "../components/skeleton";
import { useRouter } from "next/router";
export default function SetBudget({ categoryBudgets }) {
  const { data: session, error } = useSession();
  const router = useRouter();
  function handleChange(event) {
    setNewCat((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }
  if (error) router.push("/");
  if (!session && !error) {
    return <LoadUI />;
  } else
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
              Tracking category-wise budget and spending is important as it
              helps in gaining a better understanding of where the money is
              being spent and how much is being saved. Check out our guide on
              how to define monthly budgets for each category here{" "}
            </p>

            <p className=" text-gray-300 text-lg md:text-xl">
              {" "}
              Manage your monthly budgets by updating the preset values for each
              category. Select a category type and update the budget amount to
              reflect your current financial goals.
            </p>
          </div>
        </div>
        <BudgetForm userEmail={session?.user?.email || "abc"} />
      </div>
    );
}
// export async function getServerSideProps({ req }) {
//   const { userId } = getAuth(req);

//   const user = userId ? await clerkClient.users.getUser(userId) : undefined;
//   const userEmail = user.emailAddress;
//   const categoryBudgets = await prisma.catgoryBudgets.findMany({
//     where: {
//       userEmail: userEmail,
//       type: "Expense",
//     },
//   });
//   return {
//     props: {
//       categoryBudgets,
//     },
//   };
// }
