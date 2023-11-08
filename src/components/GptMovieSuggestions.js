import React from 'react'
import { useSelector } from 'react-redux';

const GptMovieSuggestions = () => {
  const gpt = useSelector(store=>store?.search)
  const {movieResults, movieNames} = gpt;

  if(!movieNames) return null;

  return (
    <div className='text-white p-4 m-4 bg-[#141414] z-40'>
      {movieNames}
    </div>
  )
}

export default GptMovieSuggestions