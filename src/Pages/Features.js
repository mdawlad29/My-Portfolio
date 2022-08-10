import React from "react";
import FeaturesCard from "../Components/Features/FeaturesCard";

const Features = () => {
  return (
    <div className="md:py-20 py-5">
      <h2 className="text-lg text-[#FF014F] uppercase">features</h2>
      <h2 className="md:text-6xl text-4xl text-gray-300 font-medium capitalize pt-3 md:pb-12 pb-5">
        what i do
      </h2>
        <FeaturesCard />
    </div>
  );
};

export default Features;
