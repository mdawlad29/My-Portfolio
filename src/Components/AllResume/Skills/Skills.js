import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";
import { Zoom } from "react-reveal";

const Skill = () => {
  const CompletedOne = 70;
  const maxCompletedOne = 100;
  const reactSkill = Math.round((CompletedOne / maxCompletedOne) * 100);

  const CompletedTwo = 60;
  const maxCompletedTwo = 100;
  const nextSkill = Math.round((CompletedTwo / maxCompletedTwo) * 100);

  const CompletedThree = 50;
  const maxCompletedThree = 100;
  const jsSkill = Math.round((CompletedThree / maxCompletedThree) * 100);

  const CompletedFour = 80;
  const maxCompletedFour = 100;
  const muiSkill = Math.round((CompletedFour / maxCompletedFour) * 100);

  const CompletedFive = 90;
  const maxCompletedFive = 100;
  const tailwindSkill = Math.round((CompletedFive / maxCompletedFive) * 100);

  const CompletedSix = 40;
  const maxCompletedSix = 100;
  const nodeSkill = Math.round((CompletedSix / maxCompletedSix) * 100);

  const CompletedSeven = 80;
  const maxCompletedSeven = 100;
  const monSkill = Math.round((CompletedSeven / maxCompletedFive) * 100);

  const CompletedEight = 40;
  const maxCompletedEight = 100;
  const natSkill = Math.round((CompletedEight / maxCompletedEight) * 100);

  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-16 md:gap-8 gap-4">
        {/* --left-- */}
        <div>
          <h2 className="md:text-lg text-sm text-[#FF014F] uppercase md:pt-10 py-4">
            skills
          </h2>
          <h2 className="md:text-3xl text-2xl font-medium text-white capitalize py-3">
            preferable
          </h2>
          {/* --react-- */}
          <div>
            <h2 className="text-sm flex justify-between items-end text-gray-300">
              React.Js
              <span className="text-xs font-semibold">
                {CompletedOne}/{maxCompletedOne}
              </span>
            </h2>
            <ProgressBar
              bgColor={
                reactSkill >= 80
                  ? "#FF014F"
                  : reactSkill >= 50
                  ? "#FF014F"
                  : "#FF0000"
              }
              height="5px"
              maxCompleted={maxCompletedOne}
              className="inline-block w-full h-2 "
              isLabelVisible={false}
              completed={`${CompletedOne}`}
              type="number"
            />
          </div>
          {/* --next-- */}
          <div>
            <h2 className="text-sm flex justify-between items-end text-gray-300">
              Next.Js
              <span className="text-xs font-semibold">
                {CompletedTwo}/{maxCompletedTwo}
              </span>
            </h2>
            <ProgressBar
              bgColor={
                nextSkill >= 80
                  ? "#FF014F"
                  : nextSkill >= 50
                  ? "#FF014F"
                  : "#FF0000"
              }
              height="5px"
              maxCompleted={maxCompletedTwo}
              className="inline-block w-full h-2 "
              isLabelVisible={false}
              completed={`${CompletedTwo}`}
              type="number"
            />
          </div>
          {/* --js-- */}
          <div>
            <h2 className="text-sm flex justify-between items-end text-gray-300">
              JavaScript
              <span className="text-xs font-semibold">
                {CompletedThree}/{maxCompletedThree}
              </span>
            </h2>
            <ProgressBar
              bgColor={
                jsSkill >= 80
                  ? "#FF014F"
                  : jsSkill >= 50
                  ? "#FF014F"
                  : "#FF0000"
              }
              height="5px"
              maxCompleted={maxCompletedThree}
              className="inline-block w-full h-2 "
              isLabelVisible={false}
              completed={`${CompletedThree}`}
              type="number"
            />
          </div>
          {/* --mui-- */}
          <div>
            <h2 className="text-sm flex justify-between items-end text-gray-300">
              Material Ui
              <span className="text-xs font-semibold">
                {CompletedFour}/{maxCompletedFour}
              </span>
            </h2>
            <ProgressBar
              bgColor={
                muiSkill >= 80
                  ? "#FF014F"
                  : muiSkill >= 50
                  ? "#FF014F"
                  : "#FF0000"
              }
              height="5px"
              maxCompleted={maxCompletedFour}
              className="inline-block w-full h-2 "
              isLabelVisible={false}
              completed={`${CompletedFour}`}
              type="number"
            />
          </div>
          {/* --tailwind-- */}
          <div>
            <h2 className="text-sm flex justify-between items-end text-gray-300">
              Tailwind.css
              <span className="text-xs font-semibold">
                {CompletedFive}/{maxCompletedFive}
              </span>
            </h2>
            <ProgressBar
              bgColor={
                tailwindSkill >= 80
                  ? "#FF014F"
                  : tailwindSkill >= 50
                  ? "#FF014F"
                  : "#FF0000"
              }
              height="5px"
              maxCompleted={maxCompletedFive}
              className="inline-block w-full h-2"
              isLabelVisible={false}
              completed={`${CompletedFive}`}
              type="number"
            />
          </div>
        </div>
        {/* --right-- */}
        <div>
          <h2 className="md:text-lg text-sm text-[#FF014F] uppercase md:pt-10 py-4">
            skills
          </h2>
          <h2 className="md:text-3xl text-2xl font-medium text-white capitalize py-3">
            comfortable
          </h2>
          {/* --node-- */}
          <div>
            <h2 className="text-sm flex justify-between items-end text-gray-300">
              Node.Js
              <span className="text-xs font-semibold">
                {CompletedSix}/{maxCompletedSix}
              </span>
            </h2>
            <ProgressBar
              bgColor={
                nodeSkill >= 80
                  ? "#FF014F"
                  : nodeSkill >= 50
                  ? "#FF014F"
                  : "#FF0000"
              }
              height="5px"
              maxCompleted={maxCompletedSix}
              className="inline-block w-full h-2"
              isLabelVisible={false}
              completed={`${CompletedSix}`}
              type="number"
            />
          </div>
          {/* --mongo-- */}
          <div>
            <h2 className="text-sm flex justify-between items-end text-gray-300">
              MongoDB
              <span className="text-xs font-semibold">
                {CompletedSeven}/{maxCompletedSeven}
              </span>
            </h2>
            <ProgressBar
              bgColor={
                monSkill >= 80
                  ? "#FF014F"
                  : monSkill >= 50
                  ? "#FF014F"
                  : "#FF0000"
              }
              height="5px"
              maxCompleted={maxCompletedSeven}
              className="inline-block w-full h-2"
              isLabelVisible={false}
              completed={`${CompletedSeven}`}
              type="number"
            />
          </div>
          {/* --react native-- */}
          <div>
            <h2 className="text-sm flex justify-between items-end text-gray-300">
              React Native
              <span className="text-xs font-semibold">
                {CompletedEight}/{maxCompletedEight}
              </span>
            </h2>
            <ProgressBar
              bgColor={
                natSkill >= 80
                  ? "#FF014F"
                  : natSkill >= 50
                  ? "#FF014F"
                  : "#FF0000"
              }
              height="5px"
              maxCompleted={maxCompletedEight}
              className="inline-block w-full h-2"
              isLabelVisible={false}
              completed={`${CompletedEight}`}
              type="number"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
