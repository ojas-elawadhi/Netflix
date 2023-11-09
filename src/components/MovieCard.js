import React, { useState } from "react";
import { IMG_CDN_URL } from "../utils/constants";
import MoviePreviewCard from "./MoviePreviewCard";

const MovieCard = ({ poster_path, backdrop_path, id, genre }) => {
  const [showMovie, setShowMovie] = useState(false);

  return (
    <div
      className="w-40 relative"
      onMouseEnter={() => setShowMovie(true)}
      onMouseLeave={() => setShowMovie(false)}
    >
      <img
        className="rounded-md"
        alt="Movie Card"
        src={IMG_CDN_URL + poster_path}
      />
      {showMovie && <MoviePreviewCard id={id} genre={genre}/>}
    </div>
  );
};

export default MovieCard;
