import React from 'react'

const Aboutme = () => {
  return (
   <section>
    <div className='container m-auto'>
        <h4 className='font-poppins text-3xl font-bold text-center mt-20'>About Me</h4>
      <div>
          <img src="/about.jpg" alt="" className='mt-[60px] float-left mr-12 rounded-2xl w-[400px] h-[400px]' />
      </div>
        <div className='mt-[109px] ml-5'>
        <p className='text-2xl font-poppins font-bold text-blue-50'>A passionate developer with 1+ years of <br /> experience</p>
        <p className='text-base font-poppins font-normal mt-16 pb-[186px]'>I'm Sadman Muhit, I'm final year student diploma in engineering. i'm a passionate learning and always willing to learn and work across technologies. I love to explore new technologies and try to solve real life problems. Apart form that I also love to guid and mentor newbies. I'm currently into Front end development and working and machine learning.</p>
        </div>
    </div>
   </section>
  )
}

export default Aboutme

