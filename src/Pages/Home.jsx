import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import User from '../components/User';

function Home() {
  const dispatch = useDispatch();
  const users=useSelector((store)=>{
    return store.user
  })
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then((data)=>{
      dispatch({type:"ADDUSERS",payload:data.data})
    })
  },[])
  
  return <div>
    {users.map((user)=>{
      return <User user={user}></User>
    })}
  </div>
  
}

export default Home