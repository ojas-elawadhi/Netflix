import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainVideoContainer from "./MainVideoContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div className="bg-black">
      <Header />
      <MainVideoContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
