import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };
  return (
    <div className="relative min-h-screen">
      <Header />

      {/* Full-screen background image */}
      <div className="absolute inset-0 -z-10">
        <img
          className="h-full w-full object-cover"
          alt="netflix-background"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/5eb03855-b753-4788-b9b3-0cc29e3d2891/web/IN-en-20260223-TRIFECTA-perspective_7bcba0fc-d5a5-42f6-b4ed-2ca56a458c61_large.jpg"
        />
      </div>

      {/* Centered the form in the page, with top padding so it doesn't clash with logo */}
      <div className="flex min-h-screen items-center justify-center px-4 pt-24">
        <form className="w-full max-w-md rounded-md bg-black/80 p-10">
          <h1 className="mb-6 text-3xl font-bold text-white">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="mb-4 w-full rounded-sm bg-gray-800 p-3 text-white"
            />
          )}
          <input
            type="text"
            placeholder="Email Address"
            className="mb-4 w-full rounded-sm bg-gray-800 p-3 text-white"
          />

          <input
            type="password"
            placeholder="Password"
            className="mb-6 w-full rounded-sm bg-gray-800 p-3 text-white"
          />
          <button className="w-full rounded-sm bg-red-600 p-3 font-semibold text-white">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p
            className="text-cyan-50 p-3 cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm
              ? "Are You New to Netflix ? SignUp Now "
              : "Already a User -> Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
