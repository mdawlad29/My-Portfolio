import React from "react";
import { GiSelfLove } from "react-icons/gi";
import { Bounce, Fade } from "react-reveal";
import blog1 from "../../images/blog1.png";
import blog2 from "../../images/blog2.png";
import blog3 from "../../images/blog3.png";
import blog4 from "../../images/blog4.png";
import blog5 from "../../images/blog5.png";
import blog6 from "../../images/blog6.png";

const PortfolioCard = () => {
  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {/* --serviceOne-- */}
        <div className="bg-[#102750] text-gray-300 px-8 py-10 space-y-6 rounded-lg shadow-2xl">
          <img className="w-full h-56 rounded-lg" src={blog1} alt="" />
          <div className="flex justify-between">
            <p className="uppercase text-[#FF014F]">development</p>
            <p className="text-gray-400 font-bold">
              <GiSelfLove className="inline mr-3" />
              <span>750</span>
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
              <GiSelfLove className="inline mr-3" />
              <span>750</span>
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
              <GiSelfLove className="inline mr-3" />
              <span>750</span>
            </p>
          </div>
          <h2 className="text-3xl text-start font-medium">
            The service provide for design
          </h2>
        </div>
        {/* --serviceFour-- */}
        <div className="bg-[#102750] text-gray-300 px-8 py-10 space-y-6 rounded-lg shadow-2xl">
          <img className="w-full h-56 rounded-lg" src={blog4} alt="" />
          <div className="flex justify-between">
            <p className="uppercase text-[#FF014F]">development</p>
            <p className="text-gray-400 font-bold">
              <GiSelfLove className="inline mr-3" />
              <span>750</span>
            </p>
          </div>
          <h2 className="text-3xl text-start font-medium">
            The service provide for design
          </h2>
        </div>
        {/* --serviceFive-- */}
        <div className="bg-[#102750] text-gray-300 px-8 py-10 space-y-6 rounded-lg shadow-2xl">
          <img className="w-full h-56 rounded-lg" src={blog5} alt="" />
          <div className="flex justify-between">
            <p className="uppercase text-[#FF014F]">development</p>
            <p className="text-gray-400 font-bold">
              <GiSelfLove className="inline mr-3" />
              <span>750</span>
            </p>
          </div>
          <h2 className="text-3xl text-start font-medium">
            The service provide for design
          </h2>
        </div>
        {/* --serviceSix-- */}
        <div className="bg-[#102750] text-gray-300 px-8 py-10 space-y-6 rounded-lg shadow-2xl">
          <img className="w-full h-56 rounded-lg" src={blog6} alt="" />
          <div className="flex justify-between">
            <p className="uppercase text-[#FF014F]">development</p>
            <p className="text-gray-400 font-bold">
              <GiSelfLove className="inline mr-3" />
              <span>750</span>
            </p>
          </div>
          <h2 className="text-3xl text-start font-medium">
            The service provide for design
          </h2>
        </div>
      </div>
    </>
  );
};

export default PortfolioCard;
