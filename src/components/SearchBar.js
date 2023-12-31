import React, { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import {
  addGptMovieResult,
  searchLoadingState,
} from "../utils/slices/searchSlice";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();
  // Search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    dispatch(searchLoadingState(true)); // Set loading to true when starting the search

    const gptQuery =
      "Act as a Movie Recommendation System and suggest 20 movies for the query:" +
      searchText.current.value +
      " in this comma-separated format only- Movie1, Movie2, Movie3, Movie4, Movie5 ";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(", ");
    const data = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbData = await Promise.all(data);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbData })
    );

    dispatch(searchLoadingState(false)); // Set loading to false when the search is complete
  };

  return (
    <div className="pt-[17%] sm:pt-[6.9%] flex justify-center z-40">
      <form
        className="w-5/6 sm:w-1/2 bg-[#141414] grid grid-cols-12 "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="search"
          placeholder="What would you like to watch today?"
          className="pl-2 sm:p-4 m-4  col-span-9"
        />

        <button
          className="py-2 col-span-3 m-4 ml-0 mr-2 sm:m-4 sm:px-4 bg-red-600 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
