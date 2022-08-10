import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";

const Interview = () => {
  const CompletedOne = 70;
  const maxCompletedOne = 100;
  const interviewOne = Math.round((CompletedOne / maxCompletedOne) * 100);

  const CompletedTwo = 100;
  const maxCompletedTwo = 100;
  const interviewTwo = Math.round((CompletedTwo / maxCompletedTwo) * 100);
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-16 md:gap-8 gap-4">
      {/* --left_interview-- */}
      <div>
        <h2 className="text-lg text-[#FF014F] uppercase pt-10">15-11-2021</h2>
        <h2 className="text-3xl font-medium text-white capitalize py-3">
          company experience
        </h2>
        {/* --interview1-- */}
        <div>
          <h2 className="text-sm flex justify-between items-end text-gray-300">
            iBOS Limited
            <span className="text-xs font-semibold">
              {CompletedOne}/{maxCompletedOne}
            </span>
          </h2>
          <ProgressBar
            bgColor={
              interviewOne >= 80
                ? "#FF014F"
                : interviewOne >= 50
                ? "#FF014F"
                : "#FF0000"
            }
            height="5px"
            maxCompleted={maxCompletedOne}
            className="inline-block w-full h-2"
            isLabelVisible={false}
            completed={`${CompletedOne}`}
            type="number"
          />
        </div>
        {/* --interview2-- */}
        <div>
          <h2 className="text-sm flex justify-between items-end text-gray-300">
            selected by Nexis Limited
            <span className="text-xs font-semibold">
              {CompletedTwo}/{maxCompletedTwo}
            </span>
          </h2>
          <ProgressBar
            bgColor={
              interviewTwo >= 80
                ? "#FF014F"
                : interviewTwo >= 50
                ? "#FF014F"
                : "#FF0000"
            }
            height="5px"
            maxCompleted={maxCompletedTwo}
            className="inline-block w-full h-2"
            isLabelVisible={false}
            completed={`${CompletedTwo}`}
            type="number"
          />
        </div>
      </div>
      {/* --right_job-- */}
      <div>
        <h2 className="text-3xl font-medium text-white py-10 uppercase">
          nexis limited
        </h2>
        <div className="bg-[#212428] border-l-8 border-[#141414] relative"
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
    </div>
  );
};

export default Interview;
