import React from "react";

const Experience = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
      {/* --companyOne-- */}
      <div>
        <h2 className="text-3xl font-medium text-white py-10 uppercase">
          nexis limited
        </h2>
        <div
          className="bg-[#212428] border-l-8 
      border-[#141414] relative"
        >
          <div className="md:mx-12 mx-7 my-3 shadow-2xl px-8 py-10 rounded-lg hover:bg-[#141414] divide-y divide-[#141414] hover:divide-[#1F2425] space-y-10">
            <div>
              <h2 className="text-xl text-white">
                Junior Frontend Developer with React.Js
              </h2>
              <p className="text-xs text-gray-400 font-bold">
                Present (Joining Date: 01-03-2022)
              </p>
            </div>
            <p className="pt-10 text-gray-400 font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              assumenda!
            </p>
          </div>
          <div className="absolute w-5 h-5 rounded-full -left-[14px] top-10 bg-[#FF014F] border-4 border-[#141414]"></div>
          <div className="absolute md:w-12 h-2 w-6 left-[0.2rem] top-[2.9rem] bg-[#141414]"></div>
        </div>
      </div>
      {/* --companyTwo-- */}
      <div>
        <h2 className="text-3xl font-medium text-white py-10 uppercase">
          izoom limited
        </h2>
        <div
          className="bg-[#212428] border-l-8 
      border-[#141414] relative"
        >
          <div className="md:mx-12 mx-7 my-3 shadow-2xl px-8 py-10 rounded-lg hover:bg-[#141414] divide-y divide-[#141414] hover:divide-[#1F2425] space-y-10">
            <div>
              <h2 className="text-xl text-white">
                Frontend Developer with React.Js (Intern)
              </h2>
              <p className="text-xs text-gray-400 font-bold">
                01/12/2021 - 28/02/2022
              </p>
            </div>
            <p className="pt-10 text-gray-400 font-bold">
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

export default Experience;
