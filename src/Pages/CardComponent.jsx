import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function CardComponent({movie,updateMovie,deleteMovie}) {
    const [movieName,setMovieName] = useState('')
    const [movieRating,setMovieRating] = useState(0)

  return (
    <Card border="primary"style={{ width: '100',textAlign:"center", margin:"10px", padding:'10px'}}>
      <Card.Body>
        <Card.Title>Movie Name: {movie.movie_name}</Card.Title>
        <Card.Text>
        Rating: {movie.rating}
        </Card.Text>
        <Button variant="primary" onClick={()=>updateMovie(movie.id,{movie_name:movieName,rating:movieRating})} >Update</Button>
        <Button variant="danger" onClick={()=>deleteMovie(movie.id)}>Delete</Button>
        <div><input value={movieName} type="text" onChange={(e)=>setMovieName(e.target.value)}/>
        <input value={movieRating} type="number" onChange={(e)=>setMovieRating(e.target.value)}/></div>
      </Card.Body>
    </Card>
  )
}

export default CardComponent
