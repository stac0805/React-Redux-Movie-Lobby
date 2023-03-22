import React from "react";
import { Link } from "react-router-dom";
import Cards from "../components/card"
import { useSelector } from 'react-redux';

const Favorites = () => {
  
  const favorites = useSelector(state => state.favourites.favourites);
  console.log(favorites)
  return (
    <div className="movie__list">
      <h2 className="list__title">Favorites</h2>
      <div className="list__cards">
        {favorites.length > 0 ? (
          favorites.map((movie) => (<Cards movie={movie} />))
        ) : (
          <div>You have no favorite movies.</div>
        )}
      </div>
      <Link to="/movies/popular" style={{ textDecoration: "none" }}>
        <button className="btn">Go Back</button>
      </Link>
    </div>
  );
};

export default Favorites;