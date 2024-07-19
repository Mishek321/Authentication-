import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import axios from 'axios'
import Regiter from './Regiter'
import Login from './Login'
import Home from './Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={<Regiter/>} />
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>

     
    </>
  )
}

export default App
