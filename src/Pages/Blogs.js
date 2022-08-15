import React from "react";
import blog1 from "../images/blog1.png";
import blog2 from "../images/blog2.png";
import blog3 from "../images/blog3.png";
import { FiClock } from "react-icons/fi";

const Blogs = () => {
  return (
    <div className="md:py-20 py-5 md:mx-10 mx-7">
      <h2 className="text-lg md:text-center text-start text-[#FF014F] uppercase">
        visit my blog and keep your feedback
      </h2>
      <h2 className="md:text-6xl text-4xl md:text-center text-start text-gray-300 font-medium capitalize pt-3 md:pb-12 pb-5">
        my blog
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {/* --serviceOne-- */}
        <div className="bg-[#102750] text-gray-300 px-8 py-10 space-y-6 rounded-lg shadow-2xl">
          <img className="w-full h-56 rounded-lg" src={blog1} alt="" />
          <div className="flex justify-between">
            <p className="uppercase text-[#FF014F]">development</p>
            <p className="text-gray-400 font-bold">
              <FiClock className="inline mr-3" />
              <span>2 min read</span>
            </p>
          </div>
          <h2 className="text-3xl text-start font-medium">
            The service provide for design
          </h2>
        </div>
        {/* --serviceTwo-- */}
        <div className="bg-[#102750] text-gray-300 px-8 py-10 space-y-6 rounded-lg shadow-2xl">
          <img className="w-full h-56 rounded-lg" src={blog2} alt="" />
          <div className="flex justify-between">
            <p className="uppercase text-[#FF014F]">development</p>
            <p className="text-gray-400 font-bold">
              <FiClock className="inline mr-3" />
              <span>2 min read</span>
            </p>
          </div>
          <h2 className="text-3xl text-start font-medium">
            The service provide for design
          </h2>
        </div>
        {/* --serviceThree-- */}
        <div className="bg-[#102750] text-gray-300 px-8 py-10 space-y-6 rounded-lg shadow-2xl">
          <img className="w-full h-56 rounded-lg" src={blog3} alt="" />
          <div className="flex justify-between">
            <p className="uppercase text-[#FF014F]">development</p>
            <p className="text-gray-400 font-bold">
              <FiClock className="inline mr-3" />
              <span>2 min read</span>
            </p>
          </div>
          <h2 className="text-3xl text-start font-medium">
            The service provide for design
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
