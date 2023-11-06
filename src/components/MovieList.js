import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="pl-12">
      <h1 className="text-xl font-medium- py-2 text-white">{title}</h1>
      <div className="flex overflow-x-scroll ">
        <div className="flex gap-2">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} poster_path={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
