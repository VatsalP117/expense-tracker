import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import SquigglyLines from "../components/SquigglyLines";
import { Button } from "../components/ui/button";
import Link from "next/link";
import Card from "../components/card";
import Footer from "../components/Footer";
import TestimonialCard from "../components/testimonial";
import Hey from "./hey";
import { useRouter } from "next/router";

import { useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });
const testimonials = [
  {
    cardId: 1,
    content:
      "Every month, I would overspend and have no idea where my money was going. Butever since I started using this expense tracker website, everything has changed. It's so easy to use and helps me keep track of my expenses in real-time. ",
    userName: "Piyush Priya",
    userProfile: "Student at BITS Pilani",
  },
  {
    cardId: 2,
    content:
      "Being a freelancer, keeping track of my business expenses was a constant challenge until I found the expense tracker website. It has made it so simple for me to track my business expenses and set budgets for different expense categories",
    userName: "Dhruv Parashar",
    userProfile: "Student at BITS Pilani",
  },
  {
    cardId: 3,
    content:
      "As a busy professional, keeping track of my expenses used to be a daunting task. But ever since I started using the expense tracker website, it has become incredibly easy and convenient. I can easily input my expenses on-the-go, categorize them, and generate reports for my budgeting needs ",
    userName: "Reny Shah",
    userProfile: "Student at BITS Pilani",
  },
];

const testimonialData = testimonials.map((testimonial) => {
  return (
    <TestimonialCard
      key={testimonial.cardId}
      message={testimonial.content}
      userName={testimonial.userName}
      userProfile={testimonial.userProfile}
    />
  );
});
export default function Home() {
  const router = useRouter();

  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-4 min-h-screen">
      <Head>
        <title>Expense Tracker</title>
        <meta
          name="description"
          content="Track your expenses and take control of your finances with our easy-to-use expense tracker. Our tool helps you keep tabs on your spending and make smarter financial decisions. Sign up now and start managing your money today!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="landing-page flex flex-col max-w-full items-center justify-center md:mt-16 mt-4">
        <h1 className="mx-auto max-w-3xl font-display text-6xl font-bold tracking-normal text-gray-300 sm:text-7xl text-center">
          Track your{" "}
          <span className="relative whitespace-nowrap text-blue-600">
            <SquigglyLines />
            <span className="relative">Expenses</span>
          </span>{" "}
          with Ease
        </h1>
        <div className="px-10">
          <h2 className="mx-auto max-w-sm max-w md:max-w-xl mt-10  text-base md:text-lg leading-5 text-gray-400 text-center sm:px-4 md:px-6">
            Take control of your finances and achieve your goals with our sleek
            expense tracker - track spending, set budgets and save money
            effortlessly.
          </h2>
        </div>

        <Link
          href="/login"
          className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full shadow-lg mt-4 md:mt-6 md:text-lg"
        >
          Get Started
        </Link>
        <video
          src="/landing-video-blended.mp4"
          className="w-full md:w-1/2 lg:w-2/3"
          autoPlay
          muted
          loop
        />
      </main>
      <section className="testimonials-page flex flex-col py-4 md:py-7 max-w-full md:gap-8 gap-6 pb-12 px-10">
        <h1 className="text-gray-200 mx-auto md:text-5xl font-bold text-3xl w-3/4 text-center md:max-w-none">
          Hear What Our Users Have to Say
        </h1>
        <div className="flex flex-col md:flex-row gap-6 md:flex-nowrap flex-wrap md:items-stretch">
          {testimonialData}
        </div>
      </section>
      <Footer />
    </div>
  );
}
