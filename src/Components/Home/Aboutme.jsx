import React from 'react'

const Aboutme = () => {
  return (
   <section>
    <div className='container m-auto'>
        <h3 className='text-3xl font-bold font-poppins text-black mt-20 text-center mb-[60px]'>About Me</h3>
        <div className='float-left'>
            <img src="/Muhit.jpeg" alt="" className='w-[400px] h-[400px]' />
        </div>
        <div className='text-right'>
            <p className='font-poppins font-bold text-2xl text-blue-50 mt-28'>A passionate developer with 5+ years of experience</p>
            <p className='font-poppins leading-relaxed mr-12'>I specialize in building exceptional digital experiences that are fast, accessible, and visually appealing. With expertise in both frontend and backend development, I create scalable solutions that drive business growth.</p>
        </div>
    </div>
   </section>
  )
}

export default Aboutme

