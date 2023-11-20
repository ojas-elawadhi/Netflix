import React from "react";
import { useSelector } from "react-redux";
import useMovieDetails from "../hooks/useMovieDetails";

const MovieDetails = (movieId) => {
  useMovieDetails(movieId);
  const movies = useSelector((store) => store.movies?.details);
  return (
    <div className="bg-[#141414] flex justify-center">
      <div className=" w-2/3  text-white py-6 grid gap-3">
        <h1 className="text-3xl font-bold">{movies?.title}</h1>
        <p className="text-slate-300">{movies?.overview}</p>
        <div className="flex gap-2">
          <span className="font-bold text-lg">Rating:</span>
          <span className="text-slate-300">
            {" "}
            {movies?.vote_average.toFixed(2)} ⭐
          </span>
        </div>
        <div className="flex gap-2">
          <span className="font-bold text-lg">Tagline:</span>
          <span className="text-slate-300">{movies?.tagline}</span>
        </div>
        <div className="flex gap-2">
          <span className="font-bold text-lg">Release Date:</span>
          <span className="text-slate-300">{movies?.release_date}</span>
        </div>
        <div className="flex gap-2">
          <span className="font-bold text-lg">Genres:</span>
          <span className="text-slate-300 flex">
            {movies?.genres.map((genre, index) => (
              <span className="flex">
                {genre.name}
                {index !== movies?.genres.length - 1 && (
                  <div className="">,</div>
                )}
                &nbsp;{" "}
              </span>
            ))}{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
