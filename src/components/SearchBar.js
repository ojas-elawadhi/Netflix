import React, { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/slices/searchSlice";
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
    // console.log(searchText.current.value);

    const gptQuery =
      "Act as a Movie Recomendation System and suggest 20 movies for the query:" +
      searchText.current.value +
      " in this comma seperated format only- Movie1, Movie2, Movie3, Movie4, Movie5 ";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResults.choices?.[0]?.message?.content.split(", "));

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(", ");

    const data = gptMovies.map((movie) => searchMovieTMDB(movie));
    //[Promise, Promise, Promise, Promise, Promise,]

    const tmdbData = await Promise.all(data);
    console.log(tmdbData, "tmdb search");

    dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbData}));
  };
  return (
    <div className="pt-[6.9%] flex justify-center z-40">
      <form
        className=" w-1/2 bg-[#141414] grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder="What would you like to watch today?"
          className="p-4 m-4  col-span-9"
        />
        <button
          className="py-2 col-span-3 m-4 px-4 bg-red-600 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
