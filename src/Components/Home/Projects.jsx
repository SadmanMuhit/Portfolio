import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
const Projects = () => {
  return (
    <section className='bg-banbg'>
        <div className='container m-auto'>
             <div>
             <h2 className='font-poppins text-3xl font-bold text-center pt-[75px]'>Featured Projects</h2>
             </div>
             <div className='grid grid-cols-3'>
                <div className='flex gap-8 mt-[60px] mb-20'>
                    <div className='image4'>
                        <img src="/project.png" alt="" className='w-[395px] rounded-tr-[60px] rounded-tl-[60px]'/>
                        <div className='bg-white w-[395px] p-6 rounded-b-2xl rounded-bl-2xl'>
                            <h6 className='text-[20px] font-bold font-poppins'>kraft project</h6>
                            <p className='text-base font-normal font-poppins mt-3'>A creative studio Product website and home page</p>
                            <div className='flex text-sm text-text mt-7 gap-2 mb-4'>
                              <p className='bg-textbg py-1 px-3 rounded-full'>HTML & CSS</p>
                              <p className='bg-textbg py-1 px-3 rounded-full'>Tailwind Css</p>
                              <p className='bg-textbg py-1 px-3 rounded-full'>React</p>
                            </div>
                            <div>
                            <a href="#" className='text-text inline-flex items-center hover:underline'>View Project <span className='ml-1'><IoIosArrowRoundForward /></span></a>
                            </div>
                        </div>
                    </div><div className='image4'>
                        <img src="/project.png" alt="" className='w-[395px] rounded-tr-[60px] rounded-tl-[60px]'/>
                        <div className='bg-white w-[395px] p-6 rounded-b-2xl rounded-bl-2xl'>
                            <h6 className='text-[20px] font-bold font-poppins'>kraft project</h6>
                            <p className='text-base font-normal font-poppins mt-3'>A creative studio Product website and home page</p>
                            <div className='flex text-sm text-text mt-7 gap-2 mb-4'>
                              <p className='bg-textbg py-1 px-3 rounded-full'>HTML & CSS</p>
                              <p className='bg-textbg py-1 px-3 rounded-full'>Tailwind Css</p>
                              <p className='bg-textbg py-1 px-3 rounded-full'>React</p>
                            </div>
                            <div>
                            <a href="#" className='text-text inline-flex items-center hover:underline'>View Project <span className='ml-1'><IoIosArrowRoundForward /></span></a>
                            </div>
                        </div>
                    </div><div className='image4'>
                        <img src="/project.png" alt="" className='w-[395px] rounded-tr-[60px] rounded-tl-[60px]'/>
                        <div className='bg-white w-[395px] p-6 rounded-b-2xl rounded-bl-2xl'>
                            <h6 className='text-[20px] font-bold font-poppins'>kraft project</h6>
                            <p className='text-base font-normal font-poppins mt-3'>A creative studio Product website and home page</p>
                            <div className='flex text-sm text-text mt-7 gap-2 mb-4'>
                              <p className='bg-textbg py-1 px-3 rounded-full'>HTML & CSS</p>
                              <p className='bg-textbg py-1 px-3 rounded-full'>Tailwind Css</p>
                              <p className='bg-textbg py-1 px-3 rounded-full'>React</p>
                            </div>
                            <div>
                            <a href="#" className='text-text inline-flex items-center hover:underline'>View Project <span className='ml-1'><IoIosArrowRoundForward /></span></a>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    </section>
  )
}

export default Projects
