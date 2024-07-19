import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Regiter() {
  const navigate =useNavigate();

  const [flag, setFlag] = useState(0);
      const [username, setUsername] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
    
      const handleCreate = async ()=>{
      await axios.post('http://localhost:5555/register', {username: username, email: email, password: password}).then (()=>{
          // setUsername('');
          // setEmail('');
          // setPassword('');
          console.log("hello")
          navigate('/');
        }).catch((err)=>{
        console.log(err);
        })
      }

  return (

    <>
    <form onSubmit={handleCreate}>
        <input type="text" onChange={(e)=>setUsername(e.target.value)} name="username" id="" placeholder='Username'/>
        <input type="email" onChange={(e)=>setEmail(e.target.value)} name="email" id="" placeholder='Email'/>
        <input type="password" onChange={(e)=>setPassword(e.target.value)} name="password" id="" placeholder='Password'/>

        <button type='submit'> Register</button>
    </form>
    </>
  )
}
