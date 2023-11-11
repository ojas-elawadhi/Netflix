import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import usePreviewTrailer from "../hooks/usePreviewTrailer";

const PreviewCardTrailer = ({ movieId }) => {
  usePreviewTrailer(movieId);
  const previewVideo = useSelector((store) => store.movies?.previewVideo);
  const videoFrameRef = React.useRef(null);

  const openFullscreen = () => {
    const videoFrame = videoFrameRef.current;
    if (videoFrame) {
      if (videoFrame.requestFullscreen) {
        videoFrame.requestFullscreen();
      } else if (videoFrame.mozRequestFullScreen) {
        videoFrame.mozRequestFullScreen();
      } else if (videoFrame.webkitRequestFullscreen) {
        videoFrame.webkitRequestFullscreen();
      } else if (videoFrame.msRequestFullscreen) {
        videoFrame.msRequestFullscreen();
      }
    }
  };

  useEffect(() => {
    // Pass the openFullscreen method to the VideoTitle component
    window.triggerFullscreen = openFullscreen;
  }, [openFullscreen]);

  useEffect(() => {
    const videoFrame = videoFrameRef.current;
    if (videoFrame) {
      videoFrame?.contentDocument?.addEventListener("fullscreenchange", () => {
        if (document.fullscreenElement === null) {
          // Exit full screen if the iframe is not in full screen mode
          document.exitFullscreen();
        }
      });
    }
  }, [previewVideo]);
  return (
    <div className=" -mt-4">
      {/* <button onClick={openFullscreen} className="mt-20 text-white bg-blue relative z-50">Fullscreen</button> */}
      <iframe
        ref={videoFrameRef}
        className="w-full aspect-video "
        src={`https://www.youtube.com/embed/${previewVideo?.key}?&autoplay=1&mute=1&modestbranding=1&rel=1&showinfo=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default PreviewCardTrailer;
