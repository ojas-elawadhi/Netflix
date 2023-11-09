import React from 'react'
import { useSelector } from 'react-redux';
import MovieCard from "./MovieCard";

const GptMovieSuggestions = () => {
  const gpt = useSelector(store=>store?.search)
  const {movieResults, movieNames} = gpt;
console.log(movieResults,"results")
  if(!movieNames) return null;

  return (
    <div className='text-white p-8 m-4 bg-[#141414] bg-opacity-90 z-40 flex flex-wrap gap-5 overflow-x-clip'>
     
      {movieResults?.map((movie) => (
            <div className='flex'>
             {movie[0]?.poster_path && <MovieCard
                key={movie[0]?.id}
                id={movie[0]?.id}
                genre={movie[0]?.genre_ids}
                poster_path={movie[0]?.poster_path}
                backdrop_path={movie[0]?.backdrop_path}
              />}
            </div>
          ))}
    </div>
  )
}

export default GptMovieSuggestions