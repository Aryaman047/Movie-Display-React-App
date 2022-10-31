import React,{useState,useEffect} from 'react';
//4ff907b8

import Moviecard from './Moviecard.jsx';
import './App.css';
import  SearchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=4ff907b8';



const App = () => {

const [movies,setmovies]  = useState([]);  
const [search,setsearch] = useState("");

useEffect ( () => {

    searchmovies("Batman");

}, []);

const searchmovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setmovies(data.Search);
}




return (

<div className='app'>

<h1>Theatreverse</h1>


<div className="search">

<input

placeholder ="Search your movies"
    value =  {search}
    onChange={ (e) => setsearch(e.target.value)}


/>
    <img
    src = {SearchIcon}
    alt = "Search"
    onClick={() => searchmovies(search)}
    />

</div>


{ movies?.length >0
    ?(
        <div className="container">
           {movies.map((movie) => (
               <Moviecard movie={movie}/>
           ) )}
        </div>
    ) : (
       <div className = "empty">
           <h2>No Movies found</h2>
       </div>
    )}

</div>

);
}

export default App;

