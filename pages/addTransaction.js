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
import BackButton from "../components/dashboard-button";
import useSWR, { useSWRConfig } from "swr";
import { ClerkProvider, useUser, SignIn, SignedOut } from "@clerk/nextjs";
export default function AddTransaction() {
  const { mutate } = useSWRConfig();
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
      <div className="flex flex-col gap-2">
        <h1 className="text-white text-5xl md:text-7xl font-bold sm:text-center lg:text-left">
          Add Transaction
        </h1>
      </div>
      <Form userEmail={userEmail} mutate={mutate} />
    </div>
  );
}
// const prisma = new PrismaClient();
