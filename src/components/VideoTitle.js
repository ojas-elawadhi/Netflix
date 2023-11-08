import React from "react";

const VideoTitle = ({ title, overview }) => {
  const handlePlayClick = () => {
    window.triggerFullscreen(); // Invoking openFullscreen method
  };
  return (
    <div className="w-screen aspect-video pt-[28dvh] px-12 absolute text-white bg-gradient-to-r from-[#141414] z-20">
      <h1 className="text-5xl font-bold py-6">{title}</h1>
      <p className="py-6 text-lg w-2/5">{overview}</p>
      <div className="flex">
        <button
          onClick={handlePlayClick}
          className="bg-white flex font-semibold text-black p-2 px-10 text-xl rounded-lg hover:bg-opacity-80"
        >
          {" "}
          <img width="34" height="24" src="https://img.icons8.com/material-sharp/24/play--v1.png" alt="play--v1"/> Play
        </button>
        <button className="bg-[#6D6D6E] bg-opacity-70 font-semibold text-white p-2 px-10 text-xl rounded-lg mx-2 hover:bg-opacity-40">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
