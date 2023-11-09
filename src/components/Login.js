import React, { useRef } from "react";
import Header from "./Header";
import { useState } from "react";
import { chaeckValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/slices/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // Validate the form data
    const message = chaeckValidData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      //Sign Up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(
            errorCode == "auth/email-already-in-use" && "User Already Exists!"
          );
        });
    } else {
      //Sign In
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(
            errorCode == "auth/invalid-login-credentials" &&
              "Error: Invalid Id or Password"
          );
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute -z-10 block bg-cover overflow-hidden overflow-clip-margin h-[100dvh] w-full">
        <img
          className="concord-img vlv-creative min-h-[100dvh] min-w-[1800px] w-[100vw] xl:w-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
          alt=""
        />
        <div className="inset-0 z-10">
          <div className="absolute inset-0 bg-[#141414] opacity-50"></div>
        </div>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="p-4 py-8 sm:p-16 rounded-lg flex flex-col absolute text-white my-36 mx-auto right-0 left-0 w-11/12 sm:w-[450px] bg-[#141414] bg-opacity-80"
      >
        <h2 className="text-3xl font-semibold mb-8">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h2>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-3 mb-4 bg-[#333333] focus:bg-[#494949] placeholder:text-[#8C8C8C] rounded-md"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className={`${
            errorMessage == "Please enter a valid email address"
              ? "border-b-[#e87c03]  border-b-2"
              : ""
          } focus:outline-none p-3 mb-4 bg-[#333333] focus:bg-[#494949] placeholder:text-[#8C8C8C] rounded-md`}
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className={`${
            errorMessage == "Password must have atleast 8 characters"
              ? "border-b-[#e87c03]  border-b-2"
              : ""
          } focus:outline-none p-3 mb-5 bg-[#333333] focus:bg-[#494949] placeholder:text-[#8C8C8C] rounded-md`}
        />

        <p className="text-[#e87c03] font-semibold">{errorMessage}</p>

        <button
          className="p-3 mb-6 mt-5 bg-[#E50914] font-medium text-md rounded-md"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <div className="flex">
          <p className="text-[#737373]">
            {isSignInForm ? "New to Netflix?" : "Already a user?"}&nbsp;
          </p>
          <p
            className="cursor-pointer hover:underline"
            onClick={() => {
              toggleSignInForm();
            }}
          >
            {" "}
            {isSignInForm ? "Sign Up now" : "Sign In"}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
