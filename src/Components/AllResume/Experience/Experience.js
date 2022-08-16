import React from "react";
import { Fade } from "react-reveal";

const Experience = () => {
  return (
    <Fade bottom>
      <div className="grid lg:grid-cols-2 grid-cols-1 md:gap-8 gap-4">
        {/* --companyOne-- */}
        <div>
          <h2 className="md:text-3xl text-2xl font-medium text-white md:py-10 py-4 uppercase">
            nexis limited
          </h2>
          <div
            className="border-l-8 border-white relative"
          >
            <div className="md:ml-12 ml-7 my-3 shadow-2xl hover:bg-[#BB1916] md:px-8 p-4 md:py-10 rounded-tr-3xl rounded-bl-3xl bg-white divide-y divide-[#BB1916] md:space-y-10 space-y-3">
              <div>
                <h2 className="md:text-xl">
                  Junior Frontend Developer with React.Js
                </h2>
                <p className="text-xs text-gray-400 font-bold">
                  Present (Joining Date: 01-03-2022)
                </p>
              </div>
              <p className="md:pt-10 pt-3 text-gray-400 font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, assumenda!
              </p>
            </div>
            <div className="absolute w-5 h-5 rounded-full -left-[14px] top-10 bg-[#FF014F] border-4 border-[#141414]"></div>
            <div className="absolute md:w-[2.8rem] h-2 w-6 left-[0.2rem] top-[2.9rem] bg-[#141414]"></div>
          </div>
        </div>
        {/* --companyTwo-- */}
        <div>
          <h2 className="md:text-3xl text-2xl font-medium text-white md:py-10 uppercase">
            izoom limited
          </h2>
          <div
            className="border-l-8 border-white relative"
          >
            <div className="md:ml-12 ml-7 my-3 shadow-2xl hover:bg-[#BB1916] md:px-8 p-4 md:py-10 rounded-tr-3xl rounded-bl-3xl bg-white divide-y divide-[#BB1916] md:space-y-10 space-y-3">
              <div>
                <h2 className="md:text-xl">
                  Frontend Developer with React.Js (Intern)
                </h2>
                <p className="text-xs text-gray-400 font-bold">
                  01/12/2021 - 28/02/2022
                </p>
              </div>
              <p className="md:pt-10 pt-3 text-gray-400 font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, assumenda!
              </p>
            </div>
            <div className="absolute w-5 h-5 rounded-full -left-[14px] top-10 bg-[#BB1916] border-4 border-[#141414]"></div>
            <div className="absolute md:w-[2.8rem] h-2 w-6 left-[0.2rem] top-[2.9rem] bg-[#141414]"></div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Experience;
