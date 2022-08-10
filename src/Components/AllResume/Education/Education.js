import React from "react";

const Education = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
      {/* --diploma-- */}
      <div>
        <h2 className="md:text-3xl text-2xl font-medium text-white md:py-10">
          Education Quality
        </h2>
        <div
          className="bg-[#212428] border-l-8 
      border-[#141414] relative"
        >
          <div className="md:ml-12 ml-7 my-3 shadow-2xl md:px-8 p-4 md:py-10 rounded-lg hover:bg-[#141414] divide-y divide-[#141414] hover:divide-[#1F2425] md:space-y-10 space-y-3">
            <div className="flex flex-wrap md:gap-5 items-center justify-between">
              <div>
                <h2 className="md:text-xl text-white">
                  Diploma in Web Development
                </h2>
                <p className="text-xs text-gray-400 font-bold">
                  CSE at Computer Science & Engineering (2017-2022)
                </p>
              </div>
              <p className="bg-[#1F2425] text-[#FF014F] md:p-2 pt-2 shadow-2xl rounded-lg">
                3.68 / 4
              </p>
            </div>
            <p className="md:pt-10 pt-3 text-gray-400 font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              assumenda!
            </p>
          </div>
          <div className="absolute w-5 h-5 rounded-full -left-[14px] top-10 bg-[#FF014F] border-4 border-[#141414]"></div>
          <div className="absolute md:w-12 h-2 w-6 left-[0.2rem] top-[2.9rem] bg-[#141414]"></div>
        </div>
      </div>
      {/* --school-- */}
      <div>
        <h2 className="md:text-3xl text-2xl font-medium text-white md:py-10">
          Education Quality
        </h2>
        <div
          className="bg-[#212428] border-l-8 
      border-[#141414] relative"
        >
          <div className="md:ml-12 ml-7 my-3 shadow-2xl md:px-8 p-4 md:py-10 rounded-lg hover:bg-[#141414] divide-y divide-[#141414] hover:divide-[#1F2425] md:space-y-10 space-y-3">
            <div className="flex flex-wrap md:gap-5 items-center justify-between">
              <div>
                <h2 className="md:text-xl text-white">
                  Secondary School Certificate
                </h2>
                <p className="text-xs text-gray-400 font-bold">
                  School of Studies (2012-2017)
                </p>
              </div>
              <p className="bg-[#1F2425] text-[#FF014F] md:p-2 pt-2 shadow-2xl rounded-lg">
                4.23 / 5
              </p>
            </div>
            <p className="md:pt-10 pt-3 text-gray-400 font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              assumenda!
            </p>
          </div>
          <div className="absolute w-5 h-5 rounded-full -left-[14px] top-10 bg-[#FF014F] border-4 border-[#141414]"></div>
          <div className="absolute md:w-12 h-2 w-6 left-[0.2rem] top-[2.9rem] bg-[#141414]"></div>
        </div>
      </div>
    </div>
  );
};

export default Education;
