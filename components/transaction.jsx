import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
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
import { useState } from "react";
import useSWR, { useSWRConfig } from "swr";
const Transaction = ({
  date,
  amount,
  category,
  type,
  remarks,
  id,
  userEmail,
  setData,
}) => {
  const dateObject = new Date(date);
  const { mutate } = useSWRConfig();
  function handleClose() {
    setIsOpen(false);
  }
  function deleteTransaction() {
    const details = {
      id: id,
    };

    const response1 = fetch("/api/deleteDB", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(details),
    });
    mutate("api/handletransactions/" + userEmail, { revalidate: true });
    mutate("/api/categorybudgets" + userEmail, { revalidate: true });
    setData((prevData) => {
      const filteredArr = prevData.filter((obj) => obj.id !== id);
      return filteredArr;
    });
    setIsOpen(false);
  }
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-800 px-4 md:w-full">
      <div className="flex items-center">
        <div className="bg-gray-700 rounded-full h-8 w-8 flex items-center justify-center mr-4">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M22 12h-4l-3 9L9 3l-3 9H2"
            ></path>
          </svg>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-400">{`${dateObject.getDate()}-${
            dateObject.getMonth() + 1
          }-${dateObject.getFullYear()}`}</h3>
          <p className=" text-base md:text-lg font-semibold text-white">
            {category.length > 0 ? <p>{category}</p> : <p>{type}</p>}
          </p>
        </div>
      </div>
      <div className="amount-and-remarks flex flex-row justify-between gap-3 items-center">
        {(type == "Expense" || type == "EMI") && (
          <p className=" text-base md:text-lg font-semibold text-red-500 flex items-center">
            -{amount} $
          </p>
        )}
        {type == "Income" && (
          <p className=" text-base md:text-lg font-semibold text-green-500 flex items-center">
            +{amount} $
          </p>
        )}
        {type == "Investment" && (
          <p className=" text-base md:text-lg font-semibold text-white flex items-center">
            -{amount} $
          </p>
        )}

        <AlertDialog>
          <AlertDialogTrigger>
            {" "}
            <Image
              src="/more.png"
              alt="more-icon"
              width={24}
              height={16}
            ></Image>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Remarks</AlertDialogTitle>
              <AlertDialogDescription>
                {remarks || "No remarks found for this transaction"}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={() => setIsOpen(true)}>
                Delete Transaction
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <AlertDialog open={isOpen} onClose={handleClose}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers. Please note that
                it might take a few seconds to reflect the changes
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={handleClose}>
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction onClick={deleteTransaction}>
                I'm Sure
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default Transaction;
