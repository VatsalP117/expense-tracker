import { useState } from "react";
import prisma from "../utils/prismaClient";
import { format } from "date-fns";
import { clerkClient, getAuth, buildClerkProps } from "@clerk/nextjs/server";

import { GetServerSideProps } from "next";
export default function Gpt({ allData }) {
  const [pages, setPages] = useState([
    "January 2020",
    "February 2020",
    "March 2020",
    "April 2020",
    "May 2020",
    "June 2020",
    "July 2020",
    "August 2020",
    "September 2020",
    "October 2020",
    "November 2020",
    "December 2020",
    "January 2021",
    "February 2021",
    "March 2021",
    "April 2021",
    "May 2021",
    "June 2021",
    "July 2021",
    "August 2021",
    "September 2021",
    "October 2021",
    "November 2021",
    "December 2021",
    "January 2022",
    "February 2022",
    "March 2022",
    "April 2022",
    "May 2022",
    "June 2022",
    "July 2022",
    "August 2022",
    "September 2022",
    "October 2022",
    "November 2022",
    "December 2022",
    "January 2023",
    "February 2023",
    "March 2023",
    "April 2023",
    "May 2023",
    "June 2023",
    "July 2023",
    "August 2023",
    "September 2023",
    "October 2023",
    "November 2023",
    "December 2023",
    "January 2024",
    "February 2024",
    "March 2024",
    "April 2024",
    "May 2024",
    "June 2024",
    "July 2024",
    "August 2024",
    "September 2024",
    "October 2024",
    "November 2024",
    "December 2024",
  ]);
  // console.log(allData);
  const date = new Date();
  const dateString = date.toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });
  const index = pages.indexOf(dateString);
  const [currentPage, setCurrentPage] = useState(index);
  function handleData(data, month) {
    const filteredTransactions = data.filter((transaction) => {
      const transactionMonth = format(new Date(transaction.date), "MMMM yyyy");
      return transactionMonth === month;
    });
    // console.log(filteredTransactions);
    return filteredTransactions;
  }
  const filteredTransactions = handleData(allData, pages[currentPage]);

  const categoryExpenses = filteredTransactions.reduce((acc, transaction) => {
    if (transaction.type === "Expense") {
      if (acc[transaction.category]) {
        acc[transaction.category] += transaction.amount;
      } else {
        acc[transaction.category] = transaction.amount;
      }
    }
    return acc;
  }, {});
  console.log(filteredTransactions);
  console.log(categoryExpenses);
  // Output: { Food: 500, Rent: 1000 }

  return (
    <div className="max-w-screen-xl mx-auto mt-12 px-4 text-gray-600 md:px-8">
      <div className="flex items-center justify-between text-sm text-gray-600 font-medium">
        <button
          onClick={() => setCurrentPage((currentPage - 1) % pages.length)}
          className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50"
        >
          Previous
        </button>

        <div>{pages[currentPage]}</div>

        <button
          onClick={() => setCurrentPage((currentPage + 1) % pages.length)}
          className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
export async function getServerSideProps() {
  const allData = await prisma.transaction.findMany();
  return {
    props: {
      allData: JSON.parse(JSON.stringify(allData)),
    },
  };
}
