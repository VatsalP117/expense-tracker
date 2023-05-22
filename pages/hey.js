import React from "react";
import GoogleButton from "react-google-button";
function Hey() {
  return (
    <>
      <h1 className="font-bold text-6xl text-white mx-20 mt-64 md:mx-64 ">
        Coming Soon
      </h1>
      <GoogleButton />
      <button className="bg-black text-white py-2 px-4 rounded inline-flex items-center">
        <img src="/apple-logo.png" alt="Apple logo" className="mr-2" />
        <span>Sign in with Apple</span>
      </button>
      );
    </>
  );
}

export default Hey;
