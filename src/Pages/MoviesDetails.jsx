import React, { useEffect,useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function MoviesDetails() {
    const {movieId}=useParams()
    console.log(movieId)
    const [movie, setMovie] = useState({})
    const url='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7';
    useEffect(()=>{
        axios.get(url).then((res)=>{
            const mov = res.data.results.filter((m)=>m.id==movieId)[0]
            setMovie(mov);
                        console.log(movie)
                        // console.log(this.state.Movie)
                })
                    .catch((err)=>{console.log(err)});
    },[])
  return (
    <div style={{border: "5px solid",
        margin: "50px auto",
        width: "50%",
        padding: "10px",
        textAlign:"center"}}>
      <h3>{movie?.original_title}</h3>
      <div className='w-full h-96'>
            <img style={{width:"250px"}}
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt=''
              className='w-full h-full object-cover object-top '
            />
        </div>
    </div>
  )
}

export default MoviesDetails
