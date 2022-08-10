import React from "react";
import { FaPaintBrush, FaCode, FaEdit, FaArrowRight } from "react-icons/fa";
import { ImMakeGroup } from "react-icons/im";
import { TbBrandReactNative } from "react-icons/tb";
import { AiOutlineLineChart } from "react-icons/ai";

const FeaturesCard = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
      {/* --design-- */}
      <div className="bg-[#212428] text-gray-300 px-8 py-10 space-y-6 rounded-lg shadow-2xl hover:bg-[#1C1E22] hover:scale-75">
        <FaPaintBrush className="text-4xl text-[#FF014F]" />
        <h2 className="text-3xl font-medium capitalize">web design</h2>
        <p className="text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima,
          aperiam.
        </p>
        <FaArrowRight className="text-lg text-[#FF014F]" />
      </div>
      {/* --frontend-- */}
      <div className="bg-[#212428] text-gray-300 rounded-lg shadow-2xl px-8 py-10 space-y-6 hover:bg-[#1C1E22] hover:scale-75">
        <FaCode className="text-4xl text-[#FF014F]"/>
        <h2 className="text-3xl font-medium capitalize">front-end developer</h2>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
          voluptas.
        </p>
        <FaArrowRight className="text-lg text-[#FF014F]" />
      </div>
      {/* --portfolio-- */}
      <div className="bg-[#212428] text-gray-300  rounded-lg shadow-2xl  px-8 py-10 space-y-6 hover:bg-[#1C1E22] hover:scale-75">
        <ImMakeGroup className="text-4xl text-[#FF014F]"/>
        <h2 className="text-3xl font-medium capitalize">personal portfolio</h2>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime,
          laboriosam.
        </p>
        <FaArrowRight className="text-lg text-[#FF014F]" />
      </div>
      {/* --customize-- */}
      <div className="bg-[#212428] text-gray-300  rounded-lg shadow-2xl  px-8 py-10 space-y-6 hover:bg-[#1C1E22] hover:scale-75">
        <FaEdit className="text-4xl text-[#FF014F]"/>
        <h2 className="text-3xl font-medium capitalize">customize website</h2>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,
          praesentium.
        </p>
        <FaArrowRight className="text-lg text-[#FF014F]" />
      </div>
      {/* --app-- */}
      <div className="bg-[#212428] text-gray-300  rounded-lg shadow-2xl  px-8 py-10 space-y-6 hover:bg-[#1C1E22] hover:scale-75">
        <TbBrandReactNative className="text-4xl text-[#FF014F]"/>
        <h2 className="text-3xl font-medium capitalize">mobile app</h2>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum,
          facilis.
        </p>
        <FaArrowRight className="text-lg text-[#FF014F]" />
      </div>
      {/* --wordpress-- */}
      <div className="bg-[#212428] text-gray-300  rounded-lg shadow-2xl  px-8 py-10 space-y-6 hover:bg-[#1C1E22] hover:scale-75">
        <AiOutlineLineChart className="text-4xl text-[#FF014F]"/>
        <h2 className="text-3xl font-medium capitalize">wordpress</h2>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, vel.
        </p>
        <FaArrowRight className="text-lg text-[#FF014F]" />
      </div>
    </div>
  );
};

export default FeaturesCard;
