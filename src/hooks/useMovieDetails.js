import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addDetails } from "../utils/slices/moviesSlice";
import { useDispatch } from "react-redux";

const useMovieDetails = (movieId) => {
  const dispatch = useDispatch();

  const getDetails = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId?.movieId}?language=en-US`,
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addDetails(json));
  };

  useEffect(() => {
    getDetails();
  }, []);
};
export default useMovieDetails;
