import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addGenre } from "../utils/slices/moviesSlice";
import { useDispatch } from "react-redux";

const useGenreName = (movieId) => {
  const dispatch = useDispatch();

  const getGenre = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/genre/movie/list?language=en",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addGenre(json.genres));
  };

  useEffect(() => {
    getGenre();
  }, []);
};
export default useGenreName;
