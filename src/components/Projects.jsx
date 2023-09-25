import React from "react";
import { data } from "../data/data.js";

const Projects = () => {
  const project = data;

  return (
    <div
      name="work"
      className="w-full md:h-screen text-[#ccd6f6] bg-[#0a192f] md:pt-40 py-20"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 flex items-center flex-col justify-center">
          <p className="text-4xl font-bold inline border-b-4 border-red-800">
            Projects
          </p>
          <p className="py-6">Recent Projects I've Done</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-20 mx-auto  gap-x-60">
          {project.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div"
            >
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-wider">
                  {item.name}
                </span>
                <p className="font-bold text-md">{item.desc}</p>
                <p className="font-bold text-md">{item.desc2}</p>
                <div className="pt-8 text-center">
                  <a href={item.github} target="_blank" rel="noreferrer">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-red-800 font-bold text-lg hover:bg-red-800 hover:text-white">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
