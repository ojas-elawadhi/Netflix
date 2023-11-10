import React from "react";

const LoaderCard = () => {
  const blinkStyle = {
    animation: "blink 1s infinite alternate",
  };
  return (
    <div style={blinkStyle} className="">
      <div style={blinkStyle}>
        <div className="w-40 h-60 mx-auto bg-gray-500 shadow-md rounded-md p-4"></div>
      </div>
    </div>
  );
};

export default LoaderCard;
