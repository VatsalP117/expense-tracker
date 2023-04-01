import Head from "next/head";
import ResponsiveAppBar from "../components/navbar";
import SquigglyLines from "../components/SquigglyLines";
import { useState } from "react";
import Transaction from "../components/transaction";
import { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
// import { PrismaClient } from "@prisma/client";
import prisma from "../utils/prismaClient";
import { format } from "date-fns";
import Image from "next/legacy/image";
import { clerkClient, getAuth, buildClerkProps } from "@clerk/nextjs/server";
export default function Dashboard(props) {
  const user = props.user;
  console.log(user);
  const categoryBudgets = [
    { name: "Groceries", budget: 500, spent: 350 },
    { name: "Entertainment", budget: 200, spent: 150 },
    { name: "Transportation", budget: 100, spent: 80 },
  ];
  const [timeline, setTimeline] = useState("This month");
  const [data, setData] = useState([]);
  const [budgetModal, setBudgetModal] = useState(false);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [categoryExpenses, setCategoryExpenses] = useState([]);
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
  const index = pages.indexOf(dateString) - 1;
  const [currentPage, setCurrentPage] = useState(index);

  useEffect(() => {
    if (props.data.length !== 0) setData(props.data);
  }, [props.data]);

  // console.log(realData);
  function handleData() {
    const month = pages[currentPage];
    const filteredData = data.filter((transaction) => {
      const transactionMonth = format(new Date(transaction.date), "MMMM yyyy");
      return transactionMonth === month;
    });
    setFilteredTransactions(filteredData);
    console.log("filter done");
    console.log(filteredTransactions);
    const categoryData = filteredData.reduce((acc, transaction) => {
      if (transaction.type != "Income") {
        if (acc[transaction.category]) {
          acc[transaction.category] += transaction.amount;
        } else {
          acc[transaction.category] = transaction.amount;
        }
      }
      return acc;
    }, {});
    // console.log(filteredTransactions);

    setCategoryExpenses(categoryData);
  }
  useEffect(handleData, [currentPage, data]);
  // console.log(filteredTransactions);

  console.log(categoryExpenses);
  let transactionCards;
  if (filteredTransactions.length > 0) {
    transactionCards = filteredTransactions.map((transaction) => {
      return (
        <Transaction
          key={transaction.id}
          type={transaction.type}
          date={transaction.date}
          category={transaction.category}
          amount={transaction.amount}
          remarks={transaction.remarks}
        />
      );
    });
  }

  return (
    <div className="dashboard-page flex flex-col items-center gap-5">
      <ResponsiveAppBar setTimeline={setTimeline} user={user} />
      <div className="max-w-screen-xl mx-auto mt-5 px-4 text-gray-600 md:px-4">
        <div className="flex items-center justify-between text-sm text-gray-600 font-medium gap-4">
          {/* <button
            onClick={() => setCurrentPage((currentPage - 1) % pages.length)}
            className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50"
          >
            Previous
          </button> */}
          <Image
            src="/back-button.png"
            alt="Picture of the author"
            width={32}
            height={32}
            onClick={() => setCurrentPage((currentPage - 1) % pages.length)}
          />

          {/* <div>{pages[currentPage]}</div> */}
          <h3 className=" font-bold text-base text-gray-400">
            {pages[currentPage]}
          </h3>

          {/* <button
            onClick={() => setCurrentPage((currentPage + 1) % pages.length)}
            className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50"
          >
            Next
          </button> */}
          <Image
            src="/next-button.png"
            alt="Picture of the author"
            width={32}
            height={32}
            onClick={() => setCurrentPage((currentPage + 1) % pages.length)}
          />
        </div>
      </div>
      <main className="dashboard-content p-5 max-w-6xl w-full  flex flex-col items-start lg:px-12 gap-6 md:gap-8 ">
        <div className="dashboard-heading flex flex-col gap-2 items-start justify-start border-yellow-400">
          <h1 className="text-blue-500 text-5xl md:text-7xl font-bold sm:text-center md:text-left">
            Overview
          </h1>
          {/* <h1 className="mx-auto max-w-3xl font-display text-6xl font-bold tracking-normal text-gray-300 sm:text-7xl">
            <span className="relative whitespace-nowrap text-blue-600">
              <SquigglyLines />
              <span className="relative">Overview</span>
            </span>{" "}
          </h1> */}
          <h3 className="text-lg md:text-xl text-gray-400 leading-5">
            Stay up-to-date: Here are your most recent transcations
          </h3>
        </div>

        <div className="dashboard-data w-full">
          {/* <Transaction />
          <Transaction />
          <Transaction /> */}
          {filteredTransactions.length === 0 && (
            <p className="text-md md:text-lg text-gray-300 font-bold  -mt-4">
              No transactions found. Add one to get started
            </p>
          )}
          {filteredTransactions.length != 0 && (
            <div className="  max-h-96 overflow-auto scrollbar-w-2 scrollbar-track-gray-100 scrollbar-thumb-gray-500">
              {transactionCards}
            </div>
          )}
        </div>
      </main>
      <main className="budget-constraint max-w-6xl w-full flex flex-col items-start lg:px-12 gap-6 md:gap-8">
        <div className="dashboard-heading flex flex-col gap-2 items-start justify-start border-yellow-400">
          <h1 className="text-blue-500 text-4xl md:text-6xl font-bold sm:text-center md:text-left">
            Budget Constraints
          </h1>

          <h3 className="text-md md:text-lg text-gray-400 leading-5">
            By default, every category is given a random monthly budget of 1000.
            You are free (and encouraged) to change them as per your will.{" "}
            <button onClick={() => setBudgetModal(true)}>
              <span className="text-blue-700 font-bold">
                Click to modify category budget
              </span>
            </button>
          </h3>
        </div>
        <Dialog open={budgetModal} onOpenChange={setBudgetModal} modal={true}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Set Category Budget</DialogTitle>
            </DialogHeader>
            <div>Lol hi</div>
          </DialogContent>
        </Dialog>
        {filteredTransactions.length === 0 && (
          <p className="text-md md:text-lg text-gray-300 font-bold  -mt-4">
            No transactions found. Add one to get started
          </p>
        )}
        {filteredTransactions.length != 0 && (
          <div className="dashboard-data w-full">
            <ul>
              {Object.entries(categoryExpenses).map(([key, value]) => (
                <li
                  key={key}
                  className="flex justify-between items-center py-2"
                >
                  <div className="flex items-center">
                    <span className="text-white mr-4">{key}</span>
                    <div className="bg-gray-700 rounded-full h-4 w-32 overflow-hidden">
                      <div
                        className="bg-blue-500 h-full"
                        style={{
                          width: `${(value / 1000) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                  <span className="text-blue-500">{`$${value} / $${1000}`}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>
    </div>
  );
}
// const prisma = new PrismaClient();
export async function getServerSideProps({ req, resolvedUrl }) {
  //user-auth
  const { userId } = getAuth(req);

  const user = userId ? await clerkClient.users.getUser(userId) : undefined;
  console.log(user);
  // ...
  if (!user) {
    return {
      redirect: {
        destination: "/sign-in?redirect_url=" + resolvedUrl,

        permanent: false,
      },
    };
  }
  const userEmail = user.emailAddresses[0].emailAddress;
  const data = await prisma.transaction.findMany({
    where: {
      userEmail: userEmail, //hard-coded, to be changed
    },
  });
  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
      user: JSON.parse(JSON.stringify(user)),
    },
  };
}
