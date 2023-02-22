import React, { useEffect,useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
function Movies() {
    const [movies, setMovies] = useState([])
    const url='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7';
    useEffect(()=>{
        axios.get(url).then((res)=>{setMovies(
                        res.data.results);
                        console.log(res.data.results)
                        // console.log(this.state.Movie)
                })
                    .catch((err)=>{console.log(err)});
    },[])
  return (
    <div className='wrapper'>
      {movies.map((movie)=><Link to={`/movie/${movie.id}`} key={movie.id}>{movie.original_title}</Link>)}
    </div>
  )
}

export default Movies

