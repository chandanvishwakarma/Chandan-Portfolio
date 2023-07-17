import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import AWS from "../assets/aws.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Docker from'../assets/Docker.png';
import express from'../assets/expresss-js.png';
import redux from'../assets/redux.jpg';
import Mango from "../assets/mongo.png";

const Skill = () => {
  return (
    <div
      name="SkillS"
      className="w-full h-screen bg-[#0a192f]  text-gray-300 py-4"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skill
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icons" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={CSS} alt="HTML icons" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={Javascript} alt="HTML icons" />
            <p className="my-4">Javascript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={Tailwind} alt="HTML icons" />
            <p className="my-4">TAILWIND</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML icons" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={GitHub} alt="HTML icons" />
            <p className="my-4">GitHub</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={Node} alt="HTML icons" />
            <p className="my-4">NODE</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={AWS} alt="HTML icons" />
            <p className="my-4">AWS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className="w-40 pt-4 mx-auto" src={Docker} alt="HTML icons" />
            <p className="my-4"></p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className="w-20 pt-6 mx-auto" src={express} alt="HTML icons" />
            <p className="my-4"></p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className="mx-auto pt-2 w-40" src={redux} alt="HTML icons" />
            <p className="my-4"></p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={Mango} alt="HTML icons" />
            <p className="my-4">MongoDB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
