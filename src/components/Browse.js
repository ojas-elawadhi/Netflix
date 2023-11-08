import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainVideoContainer from "./MainVideoContainer";
import SecondaryContainer from "./SecondaryContainer";
import Search from "./Search";
import { useSelector } from "react-redux";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  const showSearch = useSelector((store) => store.search.showSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

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
