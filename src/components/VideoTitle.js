import React from "react";

const VideoTitle = ({ title, overview }) => {
  const handlePlayClick = () => {
    window.triggerFullscreen(); // Invoking openFullscreen method
  };
  return (
    <div className="w-screen aspect-video sm:pt-[28dvh] px-4 sm:px-12 absolute text-white bg-gradient-to-r from-[#141414] z-20">
      <h1 className="sm:text-5xl font-bold py-14 sm:py-6 ">{title}</h1>
      <p className="py-6 text-lg w-2/5 hidden sm:block">{overview}</p>
      <div className="flex mt-4 sm:mt-0">
        <button
          onClick={handlePlayClick}
          className="bg-white flex font-semibold items-center text-black p-2 pl-0 sm:px-10 sm:text-xl  rounded-md hover:bg-opacity-80"
        >
          {" "}
          <img width="34" height="24" src="https://img.icons8.com/material-sharp/24/play--v1.png" alt="play--v1"/> Play
        </button>
        <button className="hidden sm:block bg-[#6D6D6E] bg-opacity-70 font-semibold text-white p-2 px-10 text-xl rounded-md mx-2 hover:bg-opacity-40">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
