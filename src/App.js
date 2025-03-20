import React from 'react'
import Navbar from './components/Navbar'
import Project from './components/project'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Footer from './components/Footer'
import SplashCursor from './components/SplashCursor'
import "./App.css"


export default function App() {
  return (
    <div>
      <SplashCursor/>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Project/>
      <Footer/>
    </div>
  )
}
