import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div className='container m-auto flex justify-between items-center p-[26px]'>
        <Link to="/" smooth={true} duration={500} className='text-blue-50 font-poppins text-2xl font-bold'>SSMuhit</Link>
        <ul className='flex gap-8 font-poppins font-normal text-[14px]'> 
          <li><Link to="/" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="/" smooth={true} duration={500}>About</Link></li>
          <li><Link to="/" smooth={true} duration={500}>Projects</Link></li>
          <li><Link to="/" smooth={true} duration={500}>Skills</Link></li>
          <li><Link to="/" smooth={true} duration={500}>Contact</Link></li>
        </ul>
        <button className='bg-bg pt-2 pb-2 pr-5 pl-5 rounded-full text-white text-[16px]'>Hire Me</button>
      </div>
    </nav>
  )
}
export default Navbar
