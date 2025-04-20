import React from 'react'
import Navbar from '../Components/Home/Navbar'
import Banner from '../Components/Home/Banner'
import Aboutme from '../Components/Home/Aboutme'
import Projects from '../Components/Home/Projects'
import Skills from '../Components/Home/Skills'
import Getintouch from '../Components/Home/Getintouch'
import Footer from '../Components/Home/Footer'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Aboutme/>
    <Projects/>
    <Skills/>
    <Getintouch/>
    <Footer/>
    </>
  )
}

export default Home
