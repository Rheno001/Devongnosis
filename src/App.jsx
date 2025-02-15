import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Footer from './components/Footer.jsx'
import Trainers from './pages/Trainers.jsx'

function App() {

  return (
    <div>
      <Navbar/>
      <Home/>
      <Footer/>
      <Trainers/>
    </div>
      
  )
}

export default App
