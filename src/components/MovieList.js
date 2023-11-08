import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  (function() {
    function scrollHorizontally(e) {
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        var container = document.getElementById(title);
        var maxScrollLeft = container.scrollWidth - container.clientWidth;
        var newScrollLeft = container.scrollLeft - (delta * 10); // Adjusted scroll amount, multiplied by 20
        container.scrollLeft = Math.max(0, Math.min(maxScrollLeft, newScrollLeft));
        e.preventDefault();
    }
    if (document.getElementById(title)?.addEventListener) {
        // IE9, Chrome, Safari, Opera
        document.getElementById(title)?.addEventListener('mousewheel', scrollHorizontally, false);
        // Firefox
        document.getElementById(title)?.addEventListener('DOMMouseScroll', scrollHorizontally, false);
    } else {
        // IE 6/7/8
        document.getElementById(title)?.attachEvent('onmousewheel', scrollHorizontally);
    }
})();
  return (
    <div className="pl-12 mt-8">
      <h1 className="text-xl font-medium py-2 text-white">{title}</h1>
      <div className="flex overflow-x-hidden scroll-container scrollbar-hide " id={title}>
        <div className="flex gap-2">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} poster_path={movie?.poster_path} backdrop_path={movie?.backdrop_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
