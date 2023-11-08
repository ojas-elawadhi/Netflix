import React from "react";
import SearchBar from "./SearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";

const Search = () => {
  return (
    <div className="">
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
      <SearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default Search;
