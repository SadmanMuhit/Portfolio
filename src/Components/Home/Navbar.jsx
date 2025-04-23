import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <div className='container m-auto flex justify-between items-center p-[26px]'>
        <a to="#" className='text-blue-50 font-poppins text-2xl font-bold'>SSMuhit</a>
        <ul className='flex gap-8 font-poppins font-normal text-[14px]'> 
          <li><a to="#">Home</a></li>
          <li><a to="#">About</a></li>
          <li><a to="#">Projects</a></li>
          <li><a to="#">Skills</a></li>
          <li><a to="#">Contact</a></li>
        </ul>
        <button className='bg-bg pt-2 pb-2 pr-5 pl-5 rounded-full text-white text-[16px]'>Hire Me</button>
      </div>
    </nav>
  )
}
export default Navbar
