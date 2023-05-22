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

import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import LoadUI from "../components/skeleton";

export default function AddTransaction() {
  const router = useRouter();
  const { data: session, error } = useSession();

  if (!session && error) {
    router.push("/");
  }
  function handleChange(event) {
    setNewCat((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  if (!session && !error) {
    return <LoadUI />;
  } else
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
        <Form userEmail={session?.user?.email || "abc"} />
      </div>
    );
}
// const prisma = new PrismaClient();
