import React from 'react'
import Navbar from './components/Navbar'
import Project from './components/project'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Project/>
      <Footer/>
    </div>
  )
}
