import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Profile from "../assets/prof.jpg";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]  ">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-screen">
        <p className="text-red-800 font-bold text-2xl">Hi, My Name Is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] ">
          Matan Fridlis
        </h1>
        <h2 className="text-4xl sm:text-6xl font-bold text-[#8892b0] ">
          I'm a Junior Software Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px] text-lg font-bold">
          I'm currently working as a Software Developer specializing in building
          advanced ETL processes, Data Integration, Big Data and Data Bases.
        </p>
        <p className="text-[#8892b0] py-4 max-w-[700px] text-lg font-bold flex justify-center ">
          I'm Highly Motivated, Team Player, Leader, Fast Learner, Creative,
          Problem Solver, Passionate about programming and learning, Reliable,
          Independent, self learner. Bringing forth a motivated attitude and
          variety of IT competences.{" "}
          <img
            src={Profile}
            className="w-40 mx-auto shadow rounded-full h-auto align-middle border-none"
            alt="Profile"
          />
        </p>
        <div className="flex ">
          <button className="text-[#ccd6f6] font-bold group border-2 px px-6 py-3 my-2 flex items-center hover:bg-red-800 hover:border-red-800">
            View My Work
            <span className="group-hover:rotate-90 group-hover:mb-4 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
          <a href="https://drive.google.com/uc?export=download&id=1Ws1kS3k8oc9n8lUCZ9MSPXqY-IGZ6l3k">
            <button className="text-[#ccd6f6] font-bold group border-2 px px-6 py-3 ml-5 my-2 flex items-center hover:bg-red-800 hover:border-red-800">
              Download My Resume
              <span className="group-hover:rotate-90 group-hover:mb-4 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
