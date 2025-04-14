import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
const Banner = () => {
  return (
    <section className='bg-banbg p-[60px]'>
        <div className="container m-auto text-left">
          <div>
            <img src="/banner.jpg" alt="banner-image" className='float-right rounded-2xl bg-imagebg p-3 w-[400px] h-[400px]'/>
          </div>
            <h1 className='font-poppins text-6xl'>Hi,i'm Muhit
           <span className='block text-text font-bold text-6xl'>Front End</span>
           <span className='text-text font-bold text-6xl'>Developer</span>
           </h1>
           <p className='font-normal text-[20px] text-p mt-10'>I create beautiful and functional websites that help <br /> businesses grow and succeed online.</p>
           <div className='flex gap-4 mt-14'>
           <button className='hover:bg-bg text-[16px] border border-border font-normal py-2 px-6 rounded-full hover:text-white shadow duration-300'>Contact Me</button>
           <button className=' hover:bg-bg duration-300 hover:text-white border-2 border-border py-2 px-6  rounded-full'>View Work</button> 
           </div>
           <div className='mt-8 flex gap-6 text-2xl'>
              <FaGithub />
              <FaLinkedin />
              <BsTwitterX />
           </div>
        </div>
    </section>
  )
}

export default Banner
