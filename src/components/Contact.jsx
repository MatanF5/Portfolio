import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
const Contact = () => {
  return (
    <div name='contact' className="w-full h-[60vh] bg-[#0a192f] flex items-center flex-col justify-center text-[#ccd6f6]  text-center">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-red-800">
          Contact Me
        </p>
        <p className="py-5 font-bold text-2xl">My Phone Number Is: +972526894140</p>
      </div>
      <div className="grid grid-cols-4 gap-8  h-12">
        <div className=" bg-[#0884c7] h-8 hover:py-2 hover:h-12 hover:scale-110 duration-500">
          <a
            className='flex mx-3'
            href="https://www.linkedin.com/in/matan-fridlis-b184a2208/"
            target="popup"
          >
            Linkedin
            <FaLinkedin className="ml-3" size={30} />
          </a>
        </div>
        <div className="bg-[#171515] h-8 hover:py-2  hover:h-12 hover:scale-110 duration-500">
          <a className='flex mx-3'
            href="https://github.com/MatanF5" target="popup">
            GitHub  <FaGithub className="ml-3" size={30} />
          </a>
        </div>
        <div className="bg-[#6fc2b0] h-8  mb-0 hover:py-2 hover:h-12 hover:scale-110 duration-500">
          <a className='flex mx-5'
            href="mailto:matanfridlis5@gmail.com">
            Email<HiOutlineMail className="ml-3" size={30} />
          </a>
        </div>
        <div className="bg-[#565f69] h-8 hover:py-2  hover:h-12 hover:scale-110 duration-500">
          <a className='flex mx-3 '
            href="https://drive.google.com/uc?export=download&id=1Ws1kS3k8oc9n8lUCZ9MSPXqY-IGZ6l3k">
            Resume<BsFillPersonLinesFill className="ml-3" size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
