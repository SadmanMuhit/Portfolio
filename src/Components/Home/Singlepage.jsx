import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaCode } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { HashLink as Link } from "react-router-hash-link";
const Singlepage = () => {
  return (
    <>
      {/* Navbar start */}
      <nav>
        <div className="container m-auto flex justify-between items-center p-[26px]">
          <Link to="/" className="text-blue-50 font-poppins text-2xl font-bold">
            SSMuhit
          </Link>
          <ul className="gap-8 font-poppins font-normal text-[14px] hidden md:flex">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="#About">About</Link>
            </li>
            <li>
              <Link to="#Project">Projects</Link>
            </li>
            <li>
              <Link to="#Skill">Skills</Link>
            </li>
            <li>
              <Link to="#Getintouch">Contact</Link>
            </li>
          </ul>
          <button className="bg-bg pt-2 pb-2 pr-5 pl-5 rounded-full text-white text-[16px] md:block hidden"> 
            Hire Me
          </button>
          <div className="md:hidden">
            <button id="menu-btn" onClick={toggleMenu} className="text-black focus:outline-none">
            <FaBars id="icon-show"/>
            <IoMdClose id="icon-close" className="hidden"/>
              </button> 
          </div>
        </div>
        <ul className="md:hidden fixed text-black bg-white w-full space-y-2 hidden pb-2" id="menu">
          <li><Link to="/" onClick={toggleMenu} className="block px-4 py-2 text-black hover:bg-gray-100">Home</Link></li>
          <li><Link to="#About" onClick={toggleMenu} className="block px-4 py-2 text-black hover:bg-gray-100">About</Link></li>
          <li><Link to="#Project" onClick={toggleMenu} className="block px-4 py-2 text-black hover:bg-gray-100">Projects</Link></li>
          <li><Link to="#Skill" onClick={toggleMenu} className="block px-4 py-2 text-black hover:bg-gray-100">Skills</Link></li>
          <li><Link to="#Getintouch" onClick={toggleMenu} className="block px-4 py-2 text-black hover:bg-gray-100">Contact</Link></li>
          <button className="bg-bg pt-2 pb-2 pr-5 pl-5 rounded-full text-white text-[16px]">
            Hire Me
          </button>
        </ul>
      </nav>
      {/* Navbar end */}

      {/* Banner start */}
      <section className="bg-banbg p-[60px] sm:px-[60px] px-4" id="Banner">
        <div className="container m-auto text-left">
          <div className=" justify-between items-center">
            <img
              src="/banner.jpg"
              alt="banner-image"
              className="float-right rounded-2xl bg-imagebg p-3  h-[400px] w-[400px]"
            />
          </div>
          <div className="w-full"> 
          <h1 className="font-poppins text-4xl">
            Hi,i'm Muhit
            <span className="block text-text font-bold text-6xl">
              Front End
            </span>
            <span className="text-text font-bold text-6xl">Developer</span>
          </h1>
          </div>
          <p className="font-normal text-[20px] text-p mt-6 md:mt-10">
            I create beautiful and functional websites that help <br />
            businesses grow and succeed online.
          </p>
          <div className="flex gap-4 mt-10">
            <button className="hover:bg-bg text-[16px] border border-border font-normal py-2 px-6 rounded-full hover:text-white shadow duration-300">
              Contact Me
            </button>
            <button className=" hover:bg-bg duration-300 hover:text-white border-2 border-border py-2 px-6  rounded-full">
              View Work
            </button>
          </div>
          <div className="mt-8 flex gap-6 text-2xl ">
            <Link target="_blank" to="https://github.com/SadmanMuhit">
              <FaGithub />
            </Link>
            <Link
              target="_blank"
              to="https://www.linkedin.com/in/sadman-muhit-bb354a346/"
            >
              <FaLinkedin />
            </Link>
            <Link target="_blank" to="https://x.com/sadman_muhit">
              <BsTwitterX />
            </Link>
          </div>
        </div>
      </section>
      {/* Banner end */}

      {/* About start */}
      <section id="About" className="md:px-[60px] sm:px-[60px] px-4">
        <div className="container m-auto">
          <div>
          <h4 className="font-poppins text-3xl font-bold text-center mt-20">
            About Me
          </h4>
          <div>
            <img
              src="/about.jpg"
              alt=""
              className="mt-[60px] float-left mr-12 rounded-2xl w-[400px] h-[400px]"
            />
          </div>
          <div className="mt-[109px] ml-5 ">
            <p className="text-2xl font-poppins font-bold text-blue-50">
              A passionate developer with 1+ years of <br /> experience
            </p>
            <p className="text-base font-poppins font-normal mt-16 pb-[186px]">
              I'm Sadman Muhit, I'm final year student diploma in engineering.
              i'm Link passionate learning and always willing to learn and work
              across technologies. I love to explore new technologies and try to
              solve real life problems. Apart form that I also love to guid and
              mentor newbies. I'm currently into Front end development and
              working and machine learning.
            </p>
          </div>
          </div>
        </div>
      </section>
      {/* About end */}

      {/* Project start */}
      <section className="bg-banbg sm:px-[60px] px-4" id="Project">
        <div className="container m-auto">
          <div>
            <h2 className="font-poppins text-3xl font-bold text-center pt-[75px]">
              Featured Projects
            </h2>
          </div>
            <div className="gap-8 mt-[60px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-20">
              <div className="image4 ">
                <img
                  src="/project.png"
                  alt=""
                  className=" rounded-tr-[60px] rounded-tl-[60px]"
                />
                <div className="bg-white p-6 rounded-b-2xl rounded-bl-2xl ">
                  <h6 className="text-[20px] font-bold font-poppins">
                    kraft project
                  </h6>
                  <p className="text-base font-normal font-poppins mt-3">
                    A creative studio Product website and home page
                  </p>
                  <div className="flex text-[12px] text-text mt-7 gap-2 mb-4">
                    <p className="bg-textbg py-1 px-3 rounded-full">
                      HTML & CSS
                    </p>
                    <p className="bg-textbg py-1 px-3 rounded-full">
                      Tailwind Css
                    </p>
                    <p className="bg-textbg py-1 px-3 rounded-full">React</p>
                  </div>
                  <div>
                    <Link
                      to="#"
                      className="text-text inline-flex items-center hover:underline"
                    >
                      View Project
                      <span className="ml-1">
                        <IoIosArrowRoundForward />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="image4">
                <img
                  src="/project.png"
                  alt=""
                  className="rounded-tr-[60px] rounded-tl-[60px]"
                />
                <div className="bg-white p-6 rounded-b-2xl rounded-bl-2xl">
                  <h6 className="text-[20px] font-bold font-poppins">
                    kraft project
                  </h6>
                  <p className="text-base font-normal font-poppins mt-3">
                    A creative studio Product website and home page
                  </p>
                  <div className="flex text-[12px] text-text mt-7 gap-2 mb-4">
                    <p className="bg-textbg py-1 px-3 rounded-full">
                      HTML & CSS
                    </p>
                    <p className="bg-textbg py-1 px-3 rounded-full">
                      Tailwind Css
                    </p>
                    <p className="bg-textbg py-1 px-3 rounded-full">React</p>
                  </div>
                  <div>
                    <Link
                      to="#"
                      className="text-text inline-flex items-center hover:underline"
                    >
                      View Project
                      <span className="ml-1">
                        <IoIosArrowRoundForward />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="image4">
                <img
                  src="/project.png"
                  alt=""
                  className=" rounded-tr-[60px] rounded-tl-[60px]"
                />
                <div className="bg-white p-6 rounded-b-2xl rounded-bl-2xl">
                  <h6 className="text-[20px] font-bold font-poppins">
                    kraft project
                  </h6>
                  <p className="text-base font-normal font-poppins mt-3">
                    A creative studio Product website and home page
                  </p>
                  <div className="flex text-[12px] text-text mt-7 gap-2 mb-4">
                    <p className="bg-textbg py-1 px-3 rounded-full">
                      HTML & CSS
                    </p>
                    <p className="bg-textbg py-1 px-3 rounded-full">
                      Tailwind Css
                    </p>
                    <p className="bg-textbg py-1 px-3 rounded-full">React</p>
                  </div>
                  <div>
                    <Link
                      to="#"
                      className="text-text inline-flex items-center hover:underline"
                    >
                      View Project
                      <span className="ml-1">
                        <IoIosArrowRoundForward />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>  
              <div className="image4 pb-4">
                <img
                  src="/project.png"
                  alt=""
                  className=" rounded-tr-[60px] rounded-tl-[60px]"
                />
                <div className="bg-white p-6 rounded-b-2xl rounded-bl-2xl">
                  <h6 className="text-[20px] font-bold font-poppins">
                    kraft project
                  </h6>
                  <p className="text-base font-normal font-poppins mt-3">
                    A creative studio Product website and home page
                  </p>
                  <div className="flex text-[12px] text-text mt-7 gap-2 mb-4">
                    <p className="bg-textbg py-1 px-3 rounded-full">
                      HTML & CSS
                    </p>
                    <p className="bg-textbg py-1 px-3 rounded-full">
                      Tailwind Css
                    </p>
                    <p className="bg-textbg py-1 px-3 rounded-full">React</p>
                  </div>
                  <div>
                    <Link
                      to="#"
                      className="text-text inline-flex items-center hover:underline"
                    >
                      View Project
                      <span className="ml-1">
                        <IoIosArrowRoundForward />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>
      {/* Project end */}

      {/* Skill start */}
      <section id="Skill" className="sm:px-[60px] px-4"> 
        <div className="container m-auto mb-20">
          <h3 className="text-3xl font-bold font-poppins text-center mt-[75px] mb-[60px]">
            Skills & Expertise
          </h3>
            <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <div className="bg-skill p-6 w-full">
                <span className=" text-text text-[30px]">
                  <FaCode />
                </span>
                <p className="font-poppins text-xl font-bold mt-4 mb-4">
                  Frontend Development
                </p>
                <div className="font-poppins text-[16px] text-p">
                  <p>HTML5 & CSS3</p>
                  <p>JAVASCRIPT (ES6+)</p>
                  <p>React.js</p>
                  <p>Tailwind CSS</p>
                </div>
              </div>
              <div className="bg-skill p-6 w-full">
                <span className=" text-text text-[30px]">
                  <FaTools />
                </span>
                <p className="font-poppins text-xl font-bold mt-4 mb-4">
                  Tools & Others
                </p>
                <div className="font-poppins text-[16px] text-p">
                  <p>Git & GitHub</p>
                  <p>Docker</p>
                  <p>AWS</p>
                  <p>CI/CD</p>
                  <p>Agile/Scrum</p>
                </div>
              </div>
            </div>
        </div>
      </section>
      {/* Skill end */}

      {/* Get in touch start */}
      <section id="Getintouch">
        <div className="container m-auto">
          <div className="bg-skill flex items-center justify-center py-12 px-4">
            <div className="bg-white rounded-2xl shadow-lg w-full max-w-2xl p-8 space-y-6">
              <h2 className="text-center font-bold font-poppins text-3xl">
                Get In Touch
              </h2>
              <form action="#" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="#" className="block">
                      Name
                    </label>
                    <input
                      type="text"
                      className="mt-2 w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                  <div>
                    <label htmlFor="#" className="block">
                      Email
                    </label>
                    <input
                      type="email"
                      className="mt-2 w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="#" className="block">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="mt-2 w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label htmlFor="#" className="block">
                    Message
                  </label>
                  <textarea className="w-full py-10 px-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 mt-2"></textarea>
                </div>
                <div>
                  <button className="w-full bg-bg rounded-lg py-2 text-white text-base font-poppins font-normal mt-6">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Get in touch end */}

      {/* Footer start */}
      <footer className="bg-footer py-16">
        <div className="container m-auto justify-between grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div>
            <Link to="/" className="font-poppins font-bold text-2xl text-white">
              SSMuhit
            </Link>
            <p className="font-poppins text-base text-textfooter mt-5 ">
              Creating innovative web solutions that help businesses <br />
              thrive in the digital world.
            </p>
          </div>
          <div>
            <div className="flex gap-6 text-2xl text-white justify-end">
              <Link target="_blank" to="https://github.com/SadmanMuhit">
                <FaGithub />
              </Link>
              <Link
                target="_blank"
                to="https://www.linkedin.com/in/sadman-muhit-bb354a346/"
              >
                <FaLinkedin />
              </Link>
              <Link target="_blank" to="https://x.com/sadman_muhit">
                <BsTwitterX />
              </Link>
              <Link target="_blank" to="https://x.com/sadman_muhit">
              <FaInstagram />
              </Link>
            </div>
            <p className="font-poppins font-normal text-base text-textfooter mt-6">
              © 2025 James.dev. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Footer end */}
    </>
  );
};

export default Singlepage;
