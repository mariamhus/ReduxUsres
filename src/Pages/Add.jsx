import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Add() {
  const navigate = useNavigate();
  // const [addMovie,setAddMovie] = useState('')
  const [newMovieName,setNewMovieName]=useState('')
  const [newMovieRating,setNewMovieRating]=useState(0)
  const addMovie =()=>{
    axios.post(`http://localhost:3000/movies`,{id: Math.floor(Math.random()*10000),movie_name:newMovieName,rating:newMovieRating})
    .then(()=>{
      navigate('/')
    })
    .catch((err)=>console.log(err))
    return;
  }

  return (
    <Card border="success" style={{ width: '100',textAlign:"center", margin:"10px", padding:'10px'}}>
      <Card.Body>
        <Card.Title>Movie Name: <input type="text" value={newMovieName} onChange={(e)=>setNewMovieName(e.target.value)}/></Card.Title>
        <Card.Text>
        Rating: <input type="number" value={newMovieRating} onChange={(e)=>setNewMovieRating(e.target.value)}/>
        </Card.Text>
        <Button variant="danger" onClick={()=>addMovie()}>Add</Button>
      </Card.Body>
    </Card>
  )
}

export default Add
