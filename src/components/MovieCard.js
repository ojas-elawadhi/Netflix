import React, { useState } from "react";
import { IMG_CDN_URL } from "../utils/constants";
import MoviePreviewCard from "./MoviePreviewCard";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ poster_path, backdrop_path, id, genre }) => {
  const navigate = useNavigate();
  const [showMovie, setShowMovie] = useState(false);
  let enterTimer;

  const handleMouseEnter = () => {
    enterTimer = setTimeout(() => {
      setShowMovie(true);
    }, 1000); // 1000 milliseconds = 1 second
  };

  const handleMouseLeave = () => {
    clearTimeout(enterTimer);
    setShowMovie(false);
  };

  const handlePlayClick = () => {
    window.triggerFullscreen(); // Invoking openFullscreen method
  };
  return (
    <div
      className="w-28 sm:w-40 relative "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        className="rounded-md cursor-pointer"
        alt="Movie Card"
        src={IMG_CDN_URL + poster_path}
        onClick={() => navigate(`/browse/${id}`)}
      />
      {showMovie && <MoviePreviewCard id={id} genre={genre} />}
    </div>
  );
};

export default MovieCard;
