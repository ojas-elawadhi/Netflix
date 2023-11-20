import React from "react";
import MovieDetailsVideo from "./MovieDetailsVideo";
import MovieDetails from "./MovieDetails";
import Header from "./Header";
const MovieInfo = (id) => {
  return (
    <div>
      <Header />
      <MovieDetailsVideo movieId={id.id} />
      <MovieDetails movieId={id.id} />
    </div>
  );
};

export default MovieInfo;
