import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Profile from "../assets/prof.jpg";
import { Link } from "react-scroll";

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
          I'm a Software Engineer
        </h2>
        <div className="flex h-1/3">
          <p className="text-[#8892b0] py-4 max-w-[700px] text-lg font-bold flex justify-center gap-20">
            Highly  motivated  and  versatile  Software  Engineer  with  2  years  of  industry  experience,  a  passion  for  innovation  and  problem-solving.
            Skilled in bridging front-end and back-end technologies, I continuously strive for excellence by staying updated with the latest industry
            trends. A natural leader and team player, I excel in fostering collaboration and delivering creative solutions to complex challenges.
          </p>
          <img
            src={Profile}
            className="mx-auto shadow  w-auto rounded-full h-auto align-middle border-none"
            alt="Profile"
          />
        </div>
        <div className="flex ">
          <Link to="work" smooth={true} duration={500}>
            <button className="text-[#ccd6f6] font-bold group border-2 px px-6 py-3 my-2 flex items-center hover:bg-red-800 hover:border-red-800">
              View My Work
              <span className="group-hover:rotate-90 group-hover:mb-4 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
          <a href="https://drive.google.com/uc?export=download&id=1_aS2I5U-y_XYTHoGD5n-I6KASHj1CRcA">
            <button className="text-[#ccd6f6] font-bold group border-2 px px-6 py-3 ml-5 my-2 flex items-center hover:bg-red-800 hover:border-red-800">
              Download My Resume
              <span className="group-hover:rotate-90 group-hover:mb-4 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </a>
        </div>
      </div>
    </div >
  );
};

export default Home;
