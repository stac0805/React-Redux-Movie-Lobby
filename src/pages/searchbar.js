import React,{useState} from 'react'
import { API_Key } from '../config'
import Cards from '../components/card'
import { Link } from "react-router-dom"
import "./searchbar.css"

function SearchBar() {

    const [movie, setMovies]=useState([]);
    const [query, setQuery]=useState('');

    let dt;
    const searchMovie = async(e)=>{
        e.preventDefault();
        console.log("Searching");
        clearTimeout(dt);
        dt=setTimeout(async()=>{
        try{
          const url=`https://api.themoviedb.org/3/search/movie?api_key=${API_Key}&query=${query}`;
          const res= await fetch(url);
          const data= await res.json();
          console.log(data.results);
          setMovies(data.results);
        }
        catch(e){
          console.log(e);
        }
      },500)}
      const changeHandler=(e)=>{
        setQuery(e.target.value);
      }
      const handleResetSearch = () => {
        setMovies([]);
        setQuery('');
      };
  return (
    <div>
    <div>
    <form onSubmit={searchMovie}>
    <label style={{ color: 'black' }}>
      Movie Search: 
      <input type="text" value={query} onChange={changeHandler} />
    </label>
   
    <button type="submit">Search</button>
    
    <button type="button" onClick={handleResetSearch}>Reset</button>
  </form>
  </div>
  <div className="movie__list">
        <h2 className="list__title">Search Result</h2>
        <div className="list__cards">
          {movie.length > 0 ? (
            movie.map((movie) => <Cards movie={movie} />)
          ) : (
            <div>No movies match your search.</div>
          )}
        </div>
        <Link to="/movies/popular" style={{ textDecoration: "none" }}>
          <button className="btn">Go Back</button>
        </Link>
      </div>
  </div>
  )
}

export default SearchBar