import React, {useEffect, useState} from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "./card.css"
import { Link } from "react-router-dom"
import {
  addFavouriteMovie,
  removeFavouriteMovie,
  selectFavourites,
} from "../store/favouritesSlice";
import { useDispatch, useSelector } from "react-redux";

const Cards = ({movie}) => {

    const [isLoading, setIsLoading] = useState(true)
    const dispatch = useDispatch();
    const favourites = useSelector(state => state.favourites.favourites);

    // console.log(favourites)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, []) 

    const toggleFavourite = (movie) => {
        console.log(movie.id)
      if (favourites.some((favmovie) => favmovie.id === movie.id)) {
        dispatch(removeFavouriteMovie(movie.id));
      } else {
        dispatch(addFavouriteMovie(movie));
      }
    };


    return <>
    {
        isLoading
        ?
        <div className="cards">
            <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton height={300} duration={2} />
            </SkeletonTheme>
        </div>
        :
        <div className="card-container">
        <Link to={`/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
            <div className="cards">
                <img className="cards__img" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} />
                <div className="cards__overlay">
                    <div className="card__title">{movie?movie.original_title:""}</div>
                    <div className="card__runtime">
                        {movie?movie.release_date:""}
                        <span className="card__rating">{movie?movie.vote_average:""}<i className="fas fa-star" /></span>
                    </div>
                    <div className="card__description">{movie ? movie.overview.slice(0,118)+"..." : ""}</div>
                </div>
            </div>
        </Link>
        <div className="favorite-btn" >
            <button onClick={()=>toggleFavourite(movie)}>
			<span className='mr-2'>+/- to Fav</span>
			<svg
				width='1em'
				height='1em'
				viewBox='0 0 16 16'
				className='bi bi-heart-fill'
				fill='red'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					fillRule='evenodd'
					d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
				/>
			</svg>
		</button>

          </div>
          
          </div>
    }
    </>
}

export default Cards