import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    showSearch: false,
    movieNames: null,
    movieResults: null,
    searchLoading: false,
  },
  reducers: {
    toggleSearchView: (state, action) => {
      state.showSearch = !state.showSearch;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
    searchLoadingState: (state, action) => {
      state.searchLoading = action.payload;
    },
  },
});

export const { toggleSearchView, addGptMovieResult, searchLoadingState } =
  searchSlice.actions;
export default searchSlice.reducer;
