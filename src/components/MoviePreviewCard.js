import React from "react";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import PreviewCardTrailer from "./PreviewCardTrailer";
import useGenreName from "../hooks/useGenreName";
const MoviePreviewCard = ({ id, genre }) => {
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
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[220%] h-[44vh] bg-[#181818] rounded-lg z-50 overflow-auto preview-box-shadow">
      <div className="w-full">
        <PreviewCardTrailer movieId={id} />
      </div>
      <div className="p-5">
        <div className="flex gap-2">
          <div
            className="w-9 h-9 bg-white rounded-full flex justify-center items-center cursor-pointer"
            onClick={handlePlayClick}
          >
            <img
              width="34"
              height="24"
              src="https://img.icons8.com/material-sharp/24/play--v1.png"
              alt="play--v1"
            />
          </div>
          <div className="w-9 h-9 border border-slate-400 rounded-full flex justify-center items-center cursor-pointer">
            <div className="text-4xl text-white font-light flex justify-center items-center -mt-2">
              +
            </div>
          </div>
        </div>
        <div className="flex pt-7">
          {genreNames?.map((genre, index) => (
            <div className="flex justify-center items-center">
              <div className="text-white font-semibold text-md">
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
