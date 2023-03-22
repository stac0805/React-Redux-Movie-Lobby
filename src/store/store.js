// import { createStore, combineReducers } from "redux";
// import favoritesReducer from "./reducers";
// const rootReducer = combineReducers({
//   favorites: favoritesReducer
// });

// const store = createStore(rootReducer);

import { configureStore } from '@reduxjs/toolkit';
import favouritesReducer from './favouritesSlice';

const store = configureStore({
  reducer: {
    favourites: favouritesReducer,
  },
});

export default store;