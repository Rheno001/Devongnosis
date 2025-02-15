import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Footer from './components/Footer.jsx'
import Trainers from './pages/Trainers.jsx'
import Carousel from './components/Carousel.jsx'

function App() {

  return (
    <div>
      <Navbar/>
      <Home/>
      <Trainers/>
      <Carousel/>
      <Footer/>
      
    </div>
      
  )
}

export default App
