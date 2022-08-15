import React from "react";
import { FaPaintBrush, FaCode, FaEdit, FaArrowRight } from "react-icons/fa";
import { ImMakeGroup } from "react-icons/im";
import { TbBrandReactNative } from "react-icons/tb";
import { AiOutlineLineChart } from "react-icons/ai";

const FeaturesCard = () => {
  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-10 gap-5">
        {/* --design-- */}
        <div className="bg-white hover:bg-[#BB1916] px-8 py-10 space-y-6 rounded-bl-[4rem] rounded-tr-[4rem] shadow-2xl text-[#BB1916] hover:text-white">
          <FaPaintBrush className="text-6xl m-auto" />
          <h2 className="text-3xl font-medium capitalize">web design</h2>
          <p className="text-lg ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima,
            aperiam.
          </p>
          <FaArrowRight className="text-lg" />
        </div>
        {/* --frontend-- */}
        <div className="bg-white hover:bg-[#BB1916] px-8 py-10 space-y-6 rounded-bl-[4rem] rounded-tr-[4rem] shadow-2xl text-[#BB1916] hover:text-white">
          <FaCode className="text-6xl m-auto" />
          <h2 className="text-3xl font-medium capitalize">
            front-end developer
          </h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
            voluptas.
          </p>
          <FaArrowRight className="text-lg" />
        </div>
        {/* --portfolio-- */}
        <div className="bg-white hover:bg-[#BB1916] px-8 py-10 space-y-6 rounded-bl-[4rem] rounded-tr-[4rem] shadow-2xl text-[#BB1916] hover:text-white">
          <ImMakeGroup className="text-6xl m-auto" />
          <h2 className="text-3xl font-medium capitalize">
            personal portfolio
          </h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime,
            laboriosam.
          </p>
          <FaArrowRight className="text-lg" />
        </div>
        {/* --customize-- */}
        <div className="bg-white hover:bg-[#BB1916] px-8 py-10 space-y-6 rounded-bl-[4rem] rounded-tr-[4rem] shadow-2xl text-[#BB1916] hover:text-white">
          <FaEdit className="text-6xl m-auto" />
          <h2 className="text-3xl font-medium capitalize">customize website</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,
            praesentium.
          </p>
          <FaArrowRight className="text-lg" />
        </div>
        {/* --app-- */}
        <div className="bg-white hover:bg-[#BB1916] px-8 py-10 space-y-6 rounded-bl-[4rem] rounded-tr-[4rem] shadow-2xl text-[#BB1916] hover:text-white">
          <TbBrandReactNative className="text-6xl m-auto" />
          <h2 className="text-3xl font-medium capitalize">mobile app</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum,
            facilis.
          </p>
          <FaArrowRight className="text-lg" />
        </div>
        {/* --wordpress-- */}
        <div className="bg-white hover:bg-[#BB1916] px-8 py-10 space-y-6 rounded-bl-[4rem] rounded-tr-[4rem] shadow-2xl text-[#BB1916] hover:text-white">
          <AiOutlineLineChart className="text-6xl m-auto" />
          <h2 className="text-3xl font-medium capitalize">wordpress</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            vel.
          </p>
          <FaArrowRight className="text-lg" />
        </div>
      </div>
    </>
  );
};

export default FeaturesCard;
