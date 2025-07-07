import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
// import Movies from './data.json';
// https://www.omdbapi.com/?s=harry&apikey=27b38043
function Movie () {
    const [movies,setMovies] = useState()
    const [filter,setFilter] = useState("")
    useEffect(()=>{
        axios.get('http://localhost:9000/movies')
        .then((res)=>{
            // console.log(res.data)
            setMovies(res.data)
        })
        .catch((err)=>{console.log(err)})
    },[])

    // console.log(movies)
  return (
    <>

<div className="container">
  <input placeholder='Enter your Product' onChange={(e)=>setFilter(e.target.value)} />
<div className="row row-cols-1 row-cols-md-3 g-4">
  {
    movies && 
    movies.filter(movie=>{
            if(filter===''){
                return movie;
            } else if (movie.Title.toLowerCase().includes(filter.toLowerCase())) {
                return movie
            }
        })
    .map((movie)=>{
        return (
            <div key={movie.id} className="col">
            <div className="card"> 
            <img src={movie.Poster} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{movie.Title}</h5>
                <p className="card-text">{movie.Year}</p>
                <Link to={`/watch/${movie.id}`}>Watch</Link>
            </div>
            </div>
        </div>
        )
    })
  }
  
</div>
</div>
    </>
)
}

export default Movie