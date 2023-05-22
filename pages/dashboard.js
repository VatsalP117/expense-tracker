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
import Hey from "./hey";
import useSwr from "swr";
import LoadUI from "../components/skeleton";
import { format } from "date-fns";
import Image from "next/legacy/image";
// import { clerkClient, getAuth, buildClerkProps } from "@clerk/nextjs/server";
import { allCategories } from "../utils/categories";
import { useRouter } from "next/router";
import Card from "../components/experiment";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Dashboard(props) {
  // const user = props.user;
  const {
    data: session,
    error: userError,
    loading: userLoading,
  } = useSession();
  // console.log(session);
  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const [userEmail, setUserEmail] = useState(null);
  const [categoryBudgets, setCategoryBudgets] = useState([]);
  const [timeline, setTimeline] = useState("This month");
  const [data1, setData] = useState([]);
  const [budgetModal, setBudgetModal] = useState(false);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [categoryExpenses, setCategoryExpenses] = useState([]);
  useEffect(() => {
    if (session) {
      setUserEmail(session?.user?.email);
      // console.log(session.user);
    }
    if (!session && !userLoading && error) router.push("/login");
  }, [session]);
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

  const [finalCategoryBudgets, setFinalCategoryBudgets] = useState([]);
  const date = new Date();
  const dateString = date.toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  const index = pages.indexOf(dateString);
  const [currentPage, setCurrentPage] = useState(index);

  const { data, error } = useSwr(
    "/api/handletransactions/" + userEmail,
    fetcher,
    {
      refreshWhenHidden: true,
      revalidateOnFocus: true,
      revalidateIfStale: true,
    }
  );
  const isLoading = !error && !data;

  useEffect(() => {
    if (data) {
      setData(data);
    }
  }, [data]);
  const { data: categorySWR, error: catError } = useSwr(
    "/api/categorybudgets/" + userEmail,
    fetcher,
    {
      refreshWhenHidden: true,
      revalidateOnFocus: true,
      revalidateIfStale: true,
    }
  );
  useEffect(() => {
    if (categorySWR) {
      setCategoryBudgets(categorySWR);
    }
  }, [categorySWR]);

  function handleData() {
    const month = pages[currentPage];
    const filteredData = data1.filter((transaction) => {
      const transactionMonth = format(new Date(transaction.date), "MMMM yyyy");
      return transactionMonth === month;
    });

    setFilteredTransactions(filteredData);

    const categoryData = filteredData.reduce((acc, transaction) => {
      if (transaction.type === "Expense" || transaction.type === "EMI") {
        if (acc[transaction.category]) {
          acc[transaction.category] += transaction.amount;
        } else {
          acc[transaction.category] = transaction.amount;
        }
      }
      return acc;
    }, {});

    setCategoryExpenses(categoryData);
  }
  useEffect(handleData, [currentPage, data1]);
  console.log(userEmail);
  let overviewData = filteredTransactions.reduce(
    (acc, currentVal) => {
      acc[currentVal.type] += currentVal.amount;

      return acc;
    },
    {
      Expense: 0,
      Income: 0,
      Investment: 0,
      EMI: 0,
    }
  );

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
          id={transaction.id}
          userEmail={userEmail}
          setData={setData}
        />
      );
    });
  }
  const categoryBudgetsFinal = allCategories.map((category) => {
    const budgetObj = categoryBudgets.find(
      (budget) =>
        budget.type === category.type && budget.category === category.category
    );
    const budget = budgetObj ? budgetObj.budget : 1000;
    return { type: category.type, category: category.category, budget: budget };
  });

  if (isLoading || userLoading || !session) {
    return <LoadUI />;
  }

  return (
    <div className="dashboard-page flex flex-col items-center gap-5 pb-10 md:pb-24">
      <ResponsiveAppBar userImg={session?.user?.image} signOut={signOut} />
      <div className="max-w-screen-xl mx-auto mt-5 px-4 text-gray-600 md:px-4">
        <div className="flex items-center justify-between text-sm text-gray-600 font-medium gap-4">
          <Image
            src="/back-button.png"
            alt="back"
            width={32}
            height={32}
            onClick={() => setCurrentPage((currentPage - 1) % pages.length)}
          />

          <h3 className=" font-bold text-base text-gray-400">
            {pages[currentPage]}
          </h3>

          <Image
            src="/next-button.png"
            alt="next"
            width={32}
            height={32}
            onClick={() => setCurrentPage((currentPage + 1) % pages.length)}
          />
        </div>
      </div>
      <main className="dashboard-content py-6 px-7 max-w-6xl w-full  flex flex-col items-start lg:px-12 gap-6 md:gap-8 ">
        <div className="dashboard-heading flex flex-col gap-2 items-start justify-start">
          <h1 className="text-white text-4xl md:text-6xl font-bold sm:text-center md:text-left">
            Overview
          </h1>

          <div className="bg-[#17181c] flex flex-col md:flex-row items-center justify-center mt-2 md:mt-6">
            <div className="grid grid-cols-3 gap-6 md:gap-12 w-full lg:flex lg:flex-row lg:gap-12">
              <Card title="Expenses" amount={-overviewData.Expense || 0} />
              <Card
                title="Investments"
                amount={-overviewData.Investment || 0}
              />
              <Card title="Income" amount={overviewData.Income || 0} />
              <Card title="EMI" amount={-overviewData.EMI || 0} />

              <Card
                title="Net In/Out"
                amount={
                  overviewData.Income -
                  overviewData.Expense -
                  overviewData.EMI -
                  overviewData.Investment
                }
              />
            </div>
          </div>
        </div>

        <div className="dashboard-data w-full">
          {filteredTransactions.length === 0 && (
            <p className="text-base md:text-md lg:text-lg text-gray-300 font-bold  -mt-2 mx-auto">
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
      <main className="budget-constraint max-w-6xl w-full flex flex-col items-start justify-start gap-6 md:gap-8 px-6 lg:px-12">
        <div className="dashboard-heading flex flex-col gap-2 items-start justify-start ">
          <h1 className="text-white text-4xl md:text-6xl font-bold sm:text-center md:text-left">
            Budget Constraints
          </h1>

          <h3 className="text-sm md:text-base lg:text-lg text-gray-400 leading-5">
            By default, every category is given a random monthly budget of 1000.
            You are free (and encouraged) to change them as per your will.{" "}
          </h3>
        </div>

        {filteredTransactions.length === 0 && (
          <p className="text-base md:text-md lg:text-lg text-gray-300 font-bold w-full  -mt-2 mx-auto">
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
                  <div className="flex items-center asthetic justify-between lg:pl-3">
                    <span className="text-white mr-4">{key}</span>
                    <div className="bg-gray-700 rounded-full h-4 w-24 md:w-32 overflow-hidden">
                      {categoryBudgetsFinal.length > 0 && (
                        <div
                          className="bg-blue-500 h-full"
                          style={{
                            width: `${
                              (value /
                                categoryBudgetsFinal.find(
                                  (item) => item.category === key
                                ).budget) *
                              100
                            }%`,
                          }}
                        ></div>
                      )}
                      {categoryBudgetsFinal.length === 0 && (
                        <div
                          className="bg-blue-500 h-full"
                          style={{
                            width: `${value / 1000}%`,
                          }}
                        ></div>
                      )}
                    </div>
                  </div>
                  {categoryBudgetsFinal.length > 0 && (
                    <span className="text-blue-500">{`$${value} / ${
                      categoryBudgetsFinal.find((item) => item.category === key)
                        .budget
                    }`}</span>
                  )}
                  {categoryBudgetsFinal.length === 0 && (
                    <span className="text-blue-500">{`$${value} /1000
                  }`}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>
    </div>
  );
}
