import React from 'react'
import Navbar from '../Components/Home/Navbar'
import Banner from '../Components/Home/Banner'
import Aboutme from '../Components/Home/Aboutme'
import Projects from '../Components/Home/Projects'
import Skills from '../Components/Home/Skills'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Aboutme/>
    <Projects/>
    <Skills/>
    </>
  )
}

export default Home
