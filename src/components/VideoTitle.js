import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen  aspect-video pt-[20%] px-20 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold py-6">{title}</h1>
      <p className="py-6 text-lg w-2/5">{overview}</p>
      <div className="">
        <button className="bg-white font-semibold text-black p-3 px-10 text-xl rounded-lg hover:bg-opacity-80">
          {" "}
          ▶ Play
        </button>
        <button className="bg-[#6D6D6E] bg-opacity-70 font-semibold text-white p-3 px-10 text-xl rounded-lg mx-2 hover:bg-opacity-40">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
