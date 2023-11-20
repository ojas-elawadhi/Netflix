import React from "react";
import { useSelector } from "react-redux";
import PreviewCardTrailer from "./PreviewCardTrailer";
import useGenreName from "../hooks/useGenreName";
import { useNavigate } from "react-router-dom";
const MoviePreviewCard = ({ id, genre }) => {
  const navigate = useNavigate();
  useGenreName();
  const genreObj = useSelector((store) => store.movies?.genre);

  function getGenreNamesByIds(genreIds, genresList) {
    if (!genreIds || !genresList) {
      console.log("Genre IDs or genres list not provided");
      return [];
    }

    const genreNames = genreIds.map((id) => {
      const foundGenre = genresList.find((genre) => genre.id === id);
      return foundGenre ? foundGenre.name : "Genre not found";
    });
    return genreNames;
  }

  const genreNames = getGenreNamesByIds(genre, genreObj);

  const handlePlayClick = () => {
    window.triggerFullscreen(); // Invoking openFullscreen method
  };
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[190%]  bg-[#181818] rounded-lg z-50 preview-box-shadow">
      <div className="w-full">
        <PreviewCardTrailer movieId={id} />
      </div>
      <div className="p-3 grid gap-3">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <div
              className="w-7 h-7 bg-white hover:opacity-80 rounded-full flex justify-center items-center cursor-pointer"
              onClick={handlePlayClick}
            >
              <img
                width="34"
                height="24"
                src="https://img.icons8.com/material-sharp/24/play--v1.png"
                alt="play--v1"
              />
            </div>
            <div className="w-7 h-7 border border-slate-400 hover:border-white rounded-full flex justify-center items-center cursor-pointer">
              <div className="text-2xl text-white font-light flex justify-center items-center -mt-1">
                +
              </div>
            </div>
          </div>
          <div>
            <div
              className="w-7 h-7 border border-slate-400 hover:border-white rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => navigate(`/browse/${id}`)}
            >
              <div className="text-xs text-white font-light flex justify-center items-center">
                ᐯ
              </div>
            </div>
          </div>
        </div>
        <div className="flex ">
          {genreNames?.map((genre, index) => (
            <div className="flex justify-center items-center whitespace-nowrap truncate">
              <div className="text-white font-semibold text-sm">
                {genre} &nbsp;
              </div>
              {index !== genreNames.length - 1 && (
                <div className="w-1.5 h-1.5 bg-slate-600 rounded-full flex "></div>
              )}
              &nbsp;&nbsp;
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviePreviewCard;
