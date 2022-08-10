import React from "react";
import { Link } from "react-router-dom";
import Typical from "react-typical";
import {IoLogoFacebook} from "react-icons/io"
import {FaLinkedin} from "react-icons/fa"
import {ImGithub} from "react-icons/im"
import Img from "../images/awlad.png";

const Banner = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 my-20">
      {/* --left textInfo-- */}
      <div className="col-span-2 text-gray-300 space-y-8 lg:order-1 order-2">
        <p className="text-lg uppercase">welcome to my website</p>
        <h2 className="text-6xl font-semibold text-white">
          Hi, I'm <span className="text-[#FF014F]">Awlad</span>
        </h2>
        <h2 className="text-5xl font-semibold text-white">
          <Typical
            steps={[
              "Front End Developer",
              2000,
              "MERN Stack Developer",
              2000,
              "React JS Developer",
              2000,
              "Web Designer",
              2000,
            ]}
          />
        </h2>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt dolores
          enim voluptatum odio. Cum, saepe molestias corporis architecto
          voluptates dolorem quas quos culpa est aliquid atque minima deleniti
          amet repellat?s
        </p>
        {/* --skill-- */}
        <div className="flex justify-between flex-wrap gap-5 items-center">
          <div>
            <h2 className="text-gray-300 text-lg uppercase py-4">
              find with me
            </h2>
            <div className="flex items-center gap-3">
              <a href="https://www.facebook.com/awlads" target="_blank"><IoLogoFacebook className="w-16 h-16 bg-[#1F2125] inline text-lg p-2 py-3 rounded-md text-white"/></a>
              <a href="https://www.linkedin.com/in/mdawlad/" target="_blank"><FaLinkedin className="w-16 h-16 bg-[#1F2125] inline text-lg p-2 py-3 rounded-md text-white"/></a>
              <a href="https://github.com/Md-Awlad" target="_blank"><ImGithub className="w-16 h-16 bg-[#1F2125] inline text-lg p-2 py-3 rounded-md text-white"/></a>
            </div>
          </div>
          <div>
            <h2 className="text-gray-300 text-lg uppercase py-4">
              best skill on
            </h2>
            <div className="flex items-center gap-3">
            <a href="https://github.com/Md-Awlad" target="_blank"><ImGithub className="w-16 h-16 bg-[#1F2125] inline text-lg p-2 py-3 rounded-md text-white"/></a>
            <a href="https://github.com/Md-Awlad" target="_blank"><ImGithub className="w-16 h-16 bg-[#1F2125] inline text-lg p-2 py-3 rounded-md text-white"/></a>
            <a href="https://github.com/Md-Awlad" target="_blank"><ImGithub className="w-16 h-16 bg-[#1F2125] inline text-lg p-2 py-3 rounded-md text-white"/></a>
            </div>
          </div>
        </div>
      </div>
      {/* --right Img-- */}
      <div className="col-span-1 bg-[#1C1E22] lg:order-2 rounded-md order-1">
        <div>
          <img className="w-full object-cover" src={Img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;