import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";
const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };

  const handleButtonClick = async () => {
    // Validate the form data
    const emailValue = email.current?.value?.trim() || "";
    const passwordValue = password.current?.value?.trim() || "";

    const message = checkValidData(emailValue, passwordValue);
    seterrorMessage(message);
    if (message) return;

    try {
      //  Sign Up
      if (!isSignInForm) {
        // Sign up logic
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          emailValue,
          passwordValue,
        );
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name?.current?.value,
          photoURL: USER_AVATAR,
        })
          .then(() => {
            // Profile updated!
            const { uid, email, displayName, photoURL } = auth.currentUser; // if we use the user here it will fetch the details from the above one it will not give the update values so we will use the auth here
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              }),
            );
            // ...
          })
          .catch((error) => {
            // An error occurred
            seterrorMessage(error.message);
          });
      } else {
        // Sign in logic
        const userCredential = await signInWithEmailAndPassword(
          auth,
          emailValue,
          passwordValue,
        );
        const user = userCredential.user;
        // console.log(user);
      }

      seterrorMessage(null);
    } catch (error) {
      seterrorMessage(getReadableAuthError(error));
      console.error("Firebase Auth Error:", error);
    }
  };

  // Sign / Sign Up

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
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full max-w-md rounded-md bg-black/80 p-10"
        >
          <h1 className="mb-6 text-3xl font-bold text-white">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="mb-4 w-full rounded-sm bg-gray-800 p-3 text-white"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="mb-4 w-full rounded-sm bg-gray-800 p-3 text-white"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="mb-6 w-full rounded-sm bg-gray-800 p-3 mb-1 text-white"
          />
          <p className="text-red-500 p-3 font-bold text-lg">{errorMessage}</p>
          <button
            className="w-full rounded-sm bg-red-600 p-3 font-semibold text-white"
            onClick={handleButtonClick}
          >
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

// ADDED: helper to show clear Firebase/network message
const getReadableAuthError = (error) => {
  if (error?.code === "auth/network-request-failed") {
    return "Network blocked. Check browser VPN/proxy/extensions and try again.";
  }
  return error?.code
    ? `${error.code}: ${error.message}`
    : "Authentication failed";
};

export default Login;
