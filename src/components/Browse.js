import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainVideoContainer from "./MainVideoContainer";
import SecondaryContainer from "./SecondaryContainer";
import Search from "./Search";
import { useSelector } from "react-redux";
const Browse = () => {
  const showSearch = useSelector((store) => store.search.showSearch);
  useNowPlayingMovies();

  return (
    <div className="">
      <Header />
      {showSearch ? (
        <Search />
      ) : (
        <>
          <MainVideoContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
