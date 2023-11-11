import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  // (function () {
  //   function scrollHorizontally(e) {
  //     e = window.event || e;
  //     var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
  //     var container = document.getElementById(title);
  //     var maxScrollLeft = container.scrollWidth - container.clientWidth;
  //     var newScrollLeft = container.scrollLeft - delta * 10; // Adjusted scroll amount, multiplied by 20
  //     container.scrollLeft = Math.max(
  //       0,
  //       Math.min(maxScrollLeft, newScrollLeft)
  //     );
  //     e.preventDefault();
  //   }
  //   if (document.getElementById(title)?.addEventListener) {
  //     // IE9, Chrome, Safari, Opera
  //     document
  //       .getElementById(title)
  //       ?.addEventListener("mousewheel", scrollHorizontally, false);
  //     // Firefox
  //     document
  //       .getElementById(title)
  //       ?.addEventListener("DOMMouseScroll", scrollHorizontally, false);
  //   } else {
  //     // IE 6/7/8
  //     document
  //       .getElementById(title)
  //       ?.attachEvent("onmousewheel", scrollHorizontally);
  //   }
  // })();

  const scrollElement = (scrollWidth) => {
    const scrollContainer = document.getElementById(title);
    if (scrollContainer) {
      scrollContainer.scrollLeft += scrollWidth;
    }
  };

  const handleScroll = () => {
    const scrollContainer = document.getElementById(title);
    if (scrollContainer) {
      setScrollPosition(scrollContainer.scrollLeft);

      // Calculate maxScroll based on the difference between w-screen and w-[90%]
      const screenWidth = window.innerWidth;
      const containerWidth = parseFloat(
        getComputedStyle(scrollContainer).width
      );

      // Adjust the percentage difference as needed
      const percentageDifference = 0.1; // 100% - 90%
      setMaxScroll(containerWidth - screenWidth * percentageDifference);
    }
  };

  useEffect(() => {
    const scrollContainer = document.getElementById(title);
    if (scrollContainer) {
      // Add a scroll event listener to update the scroll position
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    // Cleanup the event listener on component unmount
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="pl-12 pt-8 relative ">
      <h1 className="text-xl font-medium py-2 text-white ">{title}</h1>
      <div className="flex scrollbar-hide  overflow-x-hidden" id={title}>
        {scrollPosition > 0 && (
          <button
            className="left-12 px-6 py-2 bg-[#141414] bg-opacity-70 hover:bg-opacity-90 text-white rounded absolute h-60 z-50"
            onClick={() => scrollElement(0.8 * -window.innerWidth)}
          >
            <img
              width="36"
              height="36"
              src="https://img.icons8.com/android/36/FFFFFF/back.png"
              alt="forward"
            />
          </button>
        )}
        <div className="flex gap-2 ">
          {movies?.map((movie) => (
            <div>
              <MovieCard
                key={movie.id}
                id={movie?.id}
                genre={movie?.genre_ids}
                poster_path={movie?.poster_path}
                backdrop_path={movie?.backdrop_path}
              />
            </div>
          ))}
        </div>
        {scrollPosition <= maxScroll && (
          <button
            className="right-0 px-6 py-2 bg-[#141414] bg-opacity-70 hover:bg-opacity-90 text-white rounded absolute h-60 z-50 "
            onClick={() => scrollElement(0.82 * window.innerWidth)}
          >
            <img
              width="36"
              height="36"
              src="https://img.icons8.com/android/36/FFFFFF/forward.png"
              alt="forward"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieList;
