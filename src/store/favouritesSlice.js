import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favourites: [],
  selectedFavourites: [],
};

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addFavouriteMovie: (state, action) => {
      const movie = action.payload;
      const movieExists = state.favourites.some(fav => fav.id === movie.id);
      if (!movieExists) {
        state.favourites.push(movie);
      }
    },
    removeFavouriteMovie: (state, action) => {
      const movieId = action.payload;
      state.favourites = state.favourites.filter(fav => fav.id !== movieId);
      state.selectedFavourites = state.selectedFavourites.filter(fav => fav.id !== movieId);
    },
    selectFavourites: (state, action) => {
      const movieIds = action.payload;
      state.selectedFavourites = state.favourites.filter(fav => movieIds.includes(fav.id));
    },
  },
});

export const { addFavouriteMovie, removeFavouriteMovie, selectFavourites } = favouritesSlice.actions;

export default favouritesSlice.reducer;
