import React from 'react'
import { FaCode } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
const Skills = () => {
  return (
    <section>
        <div className='container m-auto'>
            <h3 className='text-3xl font-bold font-poppins text-center mt-[75px] mb-[60px]'>Skills & Expertise</h3>
            <div className='grid grid-cols-2'>
                <div className='flex gap-8'>
                    <div className='bg-skill p-6 w-full'>
                    <span className=' text-text text-[30px]'><FaCode /></span>
                    <p className='font-poppins text-xl font-bold mt-4 mb-4'>Frontend Development</p>
                   <div className='font-poppins text-[16px] text-p'>
                   <p>HTML5 & CSS3</p>
                    <p>JAVASCRIPT (ES6+)</p>
                    <p>React.js</p>
                    <p>Tailwind CSS</p>
                   </div>
                    </div> 
                    <div className='bg-skill p-6 w-full'>
                    <span className=' text-text text-[30px]'><FaTools /></span>
                    <p className='font-poppins text-xl font-bold mt-4 mb-4'>Tools & Others</p>
                   <div className='font-poppins text-[16px] text-p'>
                   <p>Git & GitHub</p>
                    <p>Docker</p>
                    <p>AWS</p>
                    <p>CI/CD</p>
                    <p>Agile/Scrum</p>
                   </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
