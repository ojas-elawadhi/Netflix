import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import Loader from "./Loader";

const MovieDetailsVideo = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
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
  }, [trailerVideo]);

  if (trailerVideo?.length === 0) return <Loader />;

  return (
    <div className="flex justify-center bg-[#141414]">
      <iframe
        ref={videoFrameRef}
        className="w-2/3 aspect-video "
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=0&mute=1&modestbranding=1&rel=1&showinfo=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default MovieDetailsVideo;
