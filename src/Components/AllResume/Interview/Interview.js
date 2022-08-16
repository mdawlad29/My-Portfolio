import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";
import { Fade } from "react-reveal";

const Interview = () => {
  const CompletedOne = 70;
  const maxCompletedOne = 100;
  const interviewOne = Math.round((CompletedOne / maxCompletedOne) * 100);

  const CompletedTwo = 100;
  const maxCompletedTwo = 100;
  const interviewTwo = Math.round((CompletedTwo / maxCompletedTwo) * 100);
  return (
    <Fade left>
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-16 md:gap-8 gap-4">
        {/* --left_interview-- */}
        <div>
          <h2 className="text-lg text-[#FF014F] uppercase md:pt-10 py-4">
            15-11-2021
          </h2>
          <h2 className="md:text-3xl text-2xl font-medium text-white capitalize py-3">
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
          <h2 className="md:text-3xl text-2xl font-medium text-white md:py-10 uppercase">
            nexis limited
          </h2>
          <div className="border-l-8 border-white relative">
            <div className="md:ml-12 ml-7 my-3 shadow-2xl md:px-8 p-4 md:py-10 rounded-tr-3xl rounded-bl-3xl bg-white divide-y divide-[#BB1916] md:space-y-10 space-y-3">
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
      </div>
    </Fade>
  );
};

export default Interview;
