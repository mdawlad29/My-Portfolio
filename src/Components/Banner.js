import React from "react";
import Typical from "react-typical";
import { IoLogoFacebook } from "react-icons/io";
import { FaLinkedin, FaReact } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import Img from "../images/banner_image.png";
import { FiFigma } from "react-icons/fi";
import { SiMaterialui } from "react-icons/si";
import { Fade } from "react-reveal";

const Banner = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-col-2 grid-cols-1 md:gap-10 gap-5 md:my-20 my-6 md:mx-10 mx-7">
      {/* --left textInfo-- */}
      <Fade right>
        <div className="lg:col-span-2 col-span-1 text-gray-300 md:space-y-8 space-y-3 lg:order-1 order-2">
          <p className="md:text-lg text-md uppercase">welcome to my website</p>
          <h2 className="md:text-6xl text-5xl font-semibold text-white">
            Hi, I'm <span className="text-[#BB1619]">Awlad</span>
          </h2>
          <h2 className="md:text-5xl text-2xl font-semibold text-white">
            <Typical
              steps={[
                "Front End Developer",
                3000,
                "MERN Stack Developer",
                3000,
                "React JS Developer",
                3000,
                "Web Designer",
                3000,
              ]}
            />
          </h2>
          <p className="md:text-lg text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
            dolores enim voluptatum odio. Cum, saepe molestias corporis
            architecto voluptates dolorem quas quos culpa est aliquid atque
            minima deleniti amet.
          </p>
          {/* --skill-- */}
          <div className="flex justify-between flex-wrap md:gap-5 items-center">
            <div>
              <h2 className="text-gray-300 text-lg uppercase py-4">
                find with me
              </h2>
              <div className="flex items-center md:gap-3 gap-2">
                <a href="https://www.facebook.com/awlads" target="_blank">
                  <IoLogoFacebook className="md:w-10 md:h-10 w-8 h-8 bg-[#1F2125] inline text-lg p-1 rounded-md text-white shadow-2xl" />
                </a>
                <a href="https://www.linkedin.com/in/mdawlad/" target="_blank">
                  <FaLinkedin className="md:w-10 md:h-10 w-8 h-8 bg-[#1F2125] inline text-lg p-1 rounded-md text-white shadow-2xl" />
                </a>
                <a href="https://github.com/Md-Awlad" target="_blank">
                  <ImGithub className="md:w-10 md:h-10 w-8 h-8 bg-[#1F2125] inline text-lg p-1 rounded-md text-white shadow-2xl" />
                </a>
              </div>
            </div>
            <div>
              <h2 className="text-gray-300 text-lg uppercase py-4">
                best skill on
              </h2>
              <div className="flex items-center md:gap-3 gap-5">
                <FaReact className="md:w-10 md:h-10 w-8 h-8 bg-[#1F2125] inline text-lg p-1 rounded-md text-white shadow-2xl cursor-pointer" />
                <FiFigma className="md:w-10 md:h-10 w-8 h-8 bg-[#1F2125] inline text-lg p-1 rounded-md text-white shadow-2xl cursor-pointer" />
                <SiMaterialui className="md:w-10 md:h-10 w-8 h-8 bg-[#1F2125] inline text-lg p-1 rounded-md text-white shadow-2xl cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </Fade>
      {/* --right Img-- */}
      <Fade left>
        <div className="lg:cl-span-1 col-span-1 lg:order-2 order-1">
          <div className="bg-[#1F2125] h-full rounded-2xl">
            <img className="w-full h-full object-cover" src={Img} alt="" />
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Banner;
