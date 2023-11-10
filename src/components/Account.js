import React, { useEffect, useState } from "react";
import Header from "./Header";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser } from "../utils/slices/userSlice";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
const Account = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentLocation = window.location.pathname;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div>
      <Header />
      {/* Background Image */}
      <div className="fixed -z-10 block bg-cover overflow-hidden overflow-clip-margin h-[100dvh] w-full">
        <img
          className="concord-img vlv-creative min-h-[100dvh] min-w-[1800px] w-[100vw] xl:w-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
          alt=""
        />
        <div className="inset-0 z-10">
          <div className="absolute inset-0 bg-[#141414] opacity-60"></div>
        </div>
      </div>
      {/* Account Details */}
      <div className="p-4 py-8 sm:p-16 rounded-lg flex flex-col absolute text-white my-36 mx-auto right-0 left-0 w-11/12 sm:w-[450px] bg-[#141414] bg-opacity-80">
        <h2 className="text-3xl font-semibold mb-8">Account Details</h2>
        <div className="grid grid-cols-2 gap-3">
          <div className="font-bold">Full Name:</div>
          <div className="">{user.displayName}</div>
          <div className="font-bold">Email:</div>
          <div className="">{user.email}</div>
          <div className="font-bold">Password:</div>
          <div className="">********</div>
        </div>
        <button
          className="p-3 mt-12 bg-[#E50914] font-medium text-md rounded-md"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Account;
