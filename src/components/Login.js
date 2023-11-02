import React from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute -z-1 block bg-cover overflow-hidden overflow-clip-margin h-[100vh] w-full">
        <img
          className="concord-img vlv-creative min-h-[100%] min-w-[1800px]  "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          srcset="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
          alt=""
        />
        <div class="inset-0 z-10">
          <div class="absolute inset-0 bg-black opacity-50"></div>
        </div>
      </div>
      <form className="p-16 rounded-lg flex flex-col absolute text-white my-36 mx-auto right-0 left-0 w-[450px] bg-black bg-opacity-80">
        <h2 className="text-3xl font-semibold mb-8">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h2>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 mb-4 bg-[#333333] placeholder:text-[#8C8C8C] rounded-md"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-3 mb-4 bg-[#333333] placeholder:text-[#8C8C8C] rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 mb-10 bg-[#333333] placeholder:text-[#8C8C8C] rounded-md"
        />
        <button className="p-2 mb-3 bg-[#E50914] font-medium text-md rounded-md">
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
