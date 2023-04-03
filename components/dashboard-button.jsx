import React from "react";
import Link from "next/link";
function BackButton() {
  return (
    <Link
      className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded lg:text-lg"
      href="/dashboard"
    >
      <svg
        className="h-4 w-4 inline-block mr-2 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M7.41 10H18a1 1 0 1 1 0 2H7.41l4.3 4.29a1 1 0 1 1-1.42 1.42l-6-6a1 1 0 0 1 0-1.42l6-6a1 1 0 0 1 1.42 1.42L7.41 10z" />
      </svg>
      Dashboard
    </Link>
  );
}

export default BackButton;
