import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Login() {

  const [data, setData] = useState([]);
  const [todos, setTodos] = useState([]) 
  const [flag, setFlag] = useState(0);

  const getData = async()=>{
    const response = await axios.get('http://localhost:5555/login').then((res)=>{
      const data = res.data.data
      setTodos(data)
    
    }) 
  }
  console.log(todos)
  
  useEffect (()=>{
    getData()
  
  },[])



  return (
    <>
    <form action="">
      <input type="text" name="email" id="" placeholder='Email'/>
      <input type="text" name="password" id="" placeholder='Password'/>

        <button>Login</button>
    </form>

    </>
  )
}
