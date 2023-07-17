import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { TypeAnimation } from "react-type-animation";

function Home() {
  return (
    <div name="home" className="w-full h-screen  bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-2xl text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] ">
          Chandan Vishwakarma
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold">
          <span className="text-[#8892b0]">I'm </span>
          <TypeAnimation
            sequence={["MERN Developer.", 2000, "UIUX Designer.", 2000]}
            speed={50}
            className="text-pink-600"
            wrapper="span"
            repeat={Infinity}
          />
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          To pursue a highly rewarding career in challenging and healthy work
          environment where I can utilize my skills and knowledge efficiently to
          enhance my career and for organizational growth.
        </p>
        <div>
          <a href="#work">
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              View Works
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-4 hover:" />
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
