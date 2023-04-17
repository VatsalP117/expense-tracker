import ResponsiveAppBar from "../components/navbar";
import Form from "../components/form";
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
import useSwr from "swr";
import BackButton from "../components/dashboard-button";
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
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { isLoaded, isSignedIn, user } = useUser();
  const { data, error } = useSwr(
    "/api/handletransactions/vatsal4011@gmail.com",
    fetcher
  );

  console.log(data);
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
        {/* <Link
          className="bg-indigo-600 shadow-xl hover:bg-indigo-500 text-white font-bold rounded-full p-4 w-48"
          href="/dashboard"
        >
          ⬅️ Dashboard
        </Link> */}
        <BackButton />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-white text-5xl md:text-7xl font-bold sm:text-center lg:text-left">
          Add Transaction
        </h1>
      </div>
      <Form userEmail={userEmail} />
    </div>
  );
}
// const prisma = new PrismaClient();
