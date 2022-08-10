import React from "react";
import PortfolioCard from "../Components/Portfolio/PortfolioCard";

const Portfolio = () => {
  return (
    <div className="py-20 text-center">
      <h2 className="text-lg text-[#FF014F] uppercase">
        visit my portfolio and keep your feedback
      </h2>
      <h2 className="text-6xl text-gray-300 font-medium capitalize pt-3 pb-12">
        my portfolio
      </h2>
      <PortfolioCard />
    </div>
  );
};

export default Portfolio;
