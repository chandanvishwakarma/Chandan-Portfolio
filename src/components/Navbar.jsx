import React, {useState} from "react";
import { FaBars, FaTimes , FaGithub,FaLinkedin } from "react-icons/fa";
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {HiOutlineMail } from 'react-icons/hi'
import Portfolio from "../assets/ℙ𝕠𝕣𝕥𝕗𝕠𝕝𝕚𝕠.png";
import { Link } from "react-scroll";

const Navbar = () => {
    const[nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)


  return (
    <div className="fixed w-full h-[70px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 ">
      <div>
        <img src={Portfolio} alt="chandan" style={{ width: "180px" }} />
      </div>
      {/*  menu  */}
    
        <ul className="hidden md:flex gap-4 cursor-pointer">
          <li>
          <Link to='home' smooth={true} duration={500}>
           Home
          </Link>
          </li>
          <li>
          <Link to='SkillS' smooth={true} duration={500}>
           Skills
          </Link>
          </li>
          <li>
          <Link to='work' smooth={true} duration={500}>
           Work
          </Link>
          </li>
          <li>
          <Link to='about' smooth={true} duration={500}>
           About
          </Link>
          </li>
          <li>
          <Link to='contact' smooth={true} duration={500}>
           Contact
          </Link>
          </li>
        </ul>
     
      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobiles menu */}
      <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <ul>
          <li className="py-6 text-4xl">
          <Link onClick={handleClick}  to='home' smooth={true} duration={500}>
           Home
          </Link>
          </li>
          <li className="py-6 text-4xl">
          <Link onClick={handleClick}  to='SkillS' smooth={true} duration={500}>
           Skills
          </Link>
          </li>
          <li className="py-6 text-4xl">
          <Link onClick={handleClick}  to='work' smooth={true} duration={500}>
           Work
          </Link>
          </li>
          <li className="py-6 text-4xl">
          <Link onClick={handleClick}  to='about' smooth={true} duration={500}>
           About
          </Link>
          </li>
          <li className="py-6 text-4xl">
          <Link onClick={handleClick}  to='contact' smooth={true} duration={500}>
           Contact
          </Link>
          </li>
        </ul>
      </div>
      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0" >
            <ul>
                <li className="w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 ">
                    <a  className="flex justify-around items-center w-full  text-gray-300"
                    href="https://www.linkedin.com/in/chandan-vishwakarma-4838971ab/">
                        Linkedin <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className="w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] ">
                    <a  className="flex justify-around items-center w-full text-gray-300"
                    href="https://github.com/chandanvishwakarma">
                        Github <FaGithub size={30}/>
                    </a>
                </li>
                <li className="w-[160px] h-[50px]  flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 ">
                    <a  className="flex justify-around items-center w-full text-gray-300"
                    href="cvishwakarma068@gmail.com">
                        Email <HiOutlineMail size={30} />
                    </a>
                </li>
                <li className="w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#5656] ">
                    <a  className="flex justify-around items-center w-full text-gray-300"
                    href=" /">
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
      </div>
    </div>
  );
};

export default Navbar;
