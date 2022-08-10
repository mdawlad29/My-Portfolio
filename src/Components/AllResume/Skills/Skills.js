import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";

const Skill = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-16 md:gap-8 gap-4">
        <div>
          <h2 className="text-3xl font-medium text-white py-10 uppercase">
            nexis limited
          </h2>
          <ProgressBar completed={80} maxCompleted={100} />
        </div>
        <div>
          <h2 className="text-3xl font-medium text-white py-10 uppercase">
            nexis limited
          </h2>
          <ProgressBar completed={80} maxCompleted={100} />
        </div>
      </div>
    </div>
  );
};

export default Skill;
