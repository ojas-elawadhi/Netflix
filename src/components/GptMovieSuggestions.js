import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import LoaderCard from "./LoaderCard";

const GptMovieSuggestions = () => {
  const gpt = useSelector((store) => store?.search);
  const { movieResults } = gpt;
  const searchLoading = useSelector((store) => store?.search?.searchLoading);
  const cardArray = new Array(20).fill(null);

  return (
    <div className="max-w-[95%]  sm:max-w-[90%] mx-auto bg-[#141414]  bg-opacity-90 ">
      <div className="text-white justify-items-center items-center mx-auto sm:p-6 py-6 my-8 z-40 grid-container ">
        {!searchLoading ? (
          movieResults ? (
            movieResults.map((movie) => (
              <div
                className="justify-items-center items-center align-middle"
                key={movie[0]?.id}
              >
                {movie[0]?.poster_path && (
                  <MovieCard
                    id={movie[0]?.id}
                    genre={movie[0]?.genre_ids}
                    poster_path={movie[0]?.poster_path}
                    backdrop_path={movie[0]?.backdrop_path}
                  />
                )}
              </div>
            ))
          ) : (
            <p>No movie results found</p>
          )
        ) : (
          cardArray.map((_, index) => <LoaderCard key={index} />)
        )}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
