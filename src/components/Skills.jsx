import React from "react";
import C from "../assets/C.png";
import TailWind from "../assets/tailwind.png";
import Java from "../assets/java.png";
import Mongo from "../assets/mongo.png";
import Node from "../assets/node.png";
import Python from "../assets/python.png";
import ReactImg from "../assets/react.png";
import MySQL from "../assets/mysql.png";
import JavaScript from "../assets/javascript.png";
import GitHub from "../assets/github.png";
import Linux from "../assets/Linux.png";
import AWS from "../assets/AWS.png";

const Skills = () => {
  return (
    <div>
    <div name="skills" className="w-full md:h-screen bg-[#0a192f] text-gray-300 py-40  md:pt-3.5">
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center h-screen'>
        <div className="flex items-center flex-col justify-center">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <p className="my-4">Java</p>
            <img className="w-20 md:w-40 mx-auto" src={Java} alt="Java Icon" />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <p className="my-4">Python</p>
            <img className="w-20 md:w-40 mx-auto" src={Python} alt="Python Icon" />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <p className="my-4">JavaScript</p>
            <img
              className="w-20 md:w-40 mx-auto"
              src={JavaScript}
              alt="JavaScript Icon"
            />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <p className="my-4">Node.JS</p>
            <img className="w-20 md:w-40 mx-auto" src={Node} alt="Node Icon" />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <p className="my-4">C</p>
            <img className="w-20 md:w-40 mx-auto" src={C} alt="C Icon" />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <p className="my-4">React</p>
            <img className="w-20 md:w-40 mx-auto" src={ReactImg} alt="React Icon" />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <p className="my-4">TailWind</p>
            <img className="w-20 md:w-40 mx-auto" src={TailWind} alt="TailWind Icon" />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <p className="my-4">Mongo</p>
            <img className="w-20 md:w-40 mx-auto" src={Mongo} alt="Mongo Icon" />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <p className="my-4">MySQL</p>
            <img className="w-20 md:w-40 mx-auto" src={MySQL} alt="MySQL Icon" />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <p className="my-4">GitHub</p>
            <img className="w-20 md:w-40 mx-auto" src={GitHub} alt="GitHub Icon" />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <p className="my-4">Linux</p>
            <img className="w-20 md:w-40 mx-auto" src={Linux} alt="Linux Icon" />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <p className="my-4">AWS</p>
            <img className="w-20 md:w-40 mx-auto" src={AWS} alt="AWS Icon" />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Skills;
