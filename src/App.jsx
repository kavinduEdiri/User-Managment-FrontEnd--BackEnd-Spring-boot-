import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useNavigate } from 'react-router-dom'

function App() {
  
  const navigate = useNavigate();

  return (
    <>
      <div class="container">
        <h1>WELCOME TO USER MANAGMENT SYSTEM</h1>
        <button class='users-button' onClick={()=>{navigate('/users')}}>Users</button>
    </div>
    </>
  )
}

export default App
