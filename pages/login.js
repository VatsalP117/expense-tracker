import { Button } from "@/components/ui/button";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import GoogleLogo from "../public/g-logo.png";
import React, { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
export default function LoginPage() {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      router.push("/dashboard");
    }
  }, [session]);
  return (
    <div className="h-screen bg-slate-300 w-full flex flex-col items-center justify-center">
      <div className="border p-2 rounded-full shadow-md ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
          />
        </svg>
      </div>

      <div className="flex flex-col justify-center items-center gap-2 py-5 w-3/4 md:w-1/2">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          Welcome back
        </h3>
        <span className=" text-xs md:text-sm lg:text-base text-gray-800 md:px-12 lg:px-20 text-center font-serif">
          Sign in with any of the below options to continue.Rest assured that
          your personal information is stored securely, providing you with a
          safe and reliable platform to manage your expenses
        </span>
      </div>

      <div className="flex flex-col items-center gap-4 w-full md:w-8/12 lg:w-5/12">
        <Button
          className="text-md w-1/2 flex flex-row py-2  md:py-4 lg:py-6"
          onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
        >
          <p className="text-sm md:text-base lg:text-base font-serif">
            {" "}
            Sign in with Google
          </p>
          {/* <Image src={GoogleLogo} /> */}
        </Button>
        <Button className="text-md w-1/2 flex flex-row py-2 md:py-4 lg:py-6">
          <p className="text-sm md:text-base lg:text-base font-serif">
            {" "}
            Sign in with Apple
          </p>
          {/* <Image src={"/a-logo.png"} width={48} height={48} /> */}
        </Button>
      </div>
    </div>
  );
}
