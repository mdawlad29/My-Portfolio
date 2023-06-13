import React from "react";
import {
  AiOutlineCheck,
  AiOutlineClose,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { Fade } from "react-reveal";

const Premium = () => {
  return (
    <Fade top cascade>
      <div className="space-y-10 bg-white md:px-8 px-4 py-5">
        {/* --tittle-- */}
        <div className="flex justify-between items-center flex-wrap gap-3">
          <div>
            <h2 className="md:text-2xl font-bold capitalize">
              customize your single page
            </h2>
            <p className="text-sm text-gray-400 font-bold">Elementor</p>
          </div>
          <p className="bg-[#102750] text-white font-bold text-2xl py-2 px-10 shadow-2xl rounded-lg">
            $ 90.0
          </p>
        </div>
        <p className="text-lg text-gray-400 font-bold">
          I will install your desire theme and made like Theme demo and
          customize your single page( homepage)
        </p>
        {/* --category-- */}
        <div className="flex justify-between items-center flex-wrap gap-3">
          <div className="md:text-lg text-gray-700 font-semibold">
            <h2>
              <AiOutlineCheck className="inline mr-2" /> 1 Page with Elementor
            </h2>
            <h2>
              <AiOutlineCheck className="inline mr-2" /> Design Customization
            </h2>
            <h2>
              <AiOutlineCheck className="inline mr-2" /> Responsive Design
            </h2>
            <h2>
              <AiOutlineCheck className="inline mr-2" /> Content Upload
            </h2>
            <h2>
              <AiOutlineCheck className="inline mr-2" /> Design Customization
            </h2>
            <h2>
              <AiOutlineCheck className="inline mr-2" /> 2 Plugins/Extensions
            </h2>
          </div>
          <div className="md:text-lg text-gray-700 font-semibold">
            <h2>
              <AiOutlineCheck className="inline mr-2" /> multipage Elementor
            </h2>
            <h2>
              <AiOutlineCheck className="inline mr-2" /> Design Figma
            </h2>
            <h2>
              <AiOutlineCheck className="inline mr-2" /> MAintaine Design
            </h2>
            <h2>
              <AiOutlineCheck className="inline mr-2" /> Content Upload
            </h2>
            <h2>
              <AiOutlineClose className="inline mr-2" />
              Design With XD
            </h2>
            <h2>
              <AiOutlineCheck className="inline mr-2" /> 8 Plugins/Extensions
            </h2>
          </div>
        </div>
        {/* --order-- */}
        <button className="bg-[#BB1916] hover:bg-[#102750] text-xl text-white font-semibold w-full text-center uppercase py-2 rounded-full shadow-xl">
          order now <AiOutlineArrowRight className="inline ml-3" />
        </button>
      </div>
    </Fade>
  );
};

export default Premium;
