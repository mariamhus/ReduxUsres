import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
const User = ({user}) => {
    const [userr,setUser] = useState('');
    const dispatch =useDispatch();
        return (
        <div>
        <h5>user: {user.name}</h5>
        <button onClick={(e)=>{dispatch({type:"DELETEUSER",payload:user.id})}}>Delete</button>
        <input type="text" value={userr} onChange={(e)=>{setUser(e.target.value)}}/>
        <button onClick={(e)=>{dispatch({type:"UPDATEUSERNAME",payload:{id:user.id,userr}})}}>Update</button>
      </div>
    );
};

export default User;