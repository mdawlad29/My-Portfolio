import React from "react";
import FeaturesCard from "../Components/Features/FeaturesCard";

const Features = () => {
  return (
    <div className="py-20">
      <h2 className="text-lg text-[#FF014F] uppercase">features</h2>
      <h2 className="text-6xl text-gray-300 font-medium capitalize pt-3 pb-12">
        what i do
      </h2>
        <FeaturesCard />
    </div>
  );
};

export default Features;
