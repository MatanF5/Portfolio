import React from "react";
import { skills_1, skills_2, skills_3 } from "../data/skills.js"
const Skills = () => {
  return (
    <div>
      <div name="skills" className="w-full bg-[#0a192f] text-gray-300 py-40  md:pt-3.5 h-1/6">
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center h-screen'>
          <div className="flex items-center flex-col justify-center">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
              Skills
            </p>
            <p className="py-4">These are the technologies I've worked with</p>
            <div className="flex w-full h-48 mt-10">
              <div className="w-1/3">
                {skills_1.map(s =>
                  <li className="font-bold cursor-default" key={s.id}>{s.name}</li>
                )}
              </div>
              <div className="w-1/3">

                {skills_2.map(s =>
                  <li className="font-bold cursor-default" key={s.id}>{s.name}</li>
                )}
              </div>
              <div className="w-1/3">
                {skills_3.map(s =>
                  <li className="font-bold cursor-default" key={s.id}>{s.name}</li>
                )}
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
