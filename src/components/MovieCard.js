import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ poster_path, backdrop_path }) => {
  return (
    <div className="w-40 ">
      <img className="rounded-md" alt="Movie Card" src={IMG_CDN_URL + poster_path} />
    </div>
  );
};

export default MovieCard;
