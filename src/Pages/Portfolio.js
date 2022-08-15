import React from "react";
import PortfolioCard from "../Components/Portfolio/PortfolioCard";

const Portfolio = () => {
  return (
    <div className="md:py-20 py-5 md:text-center text-start md:mx-10 mx-7">
      <h2 className="md:text-lg text-sm text-[#FF014F] uppercase">
        visit my portfolio and keep your feedback
      </h2>
      <h2 className="md:text-6xl text-4xl text-gray-300 font-medium capitalize pt-3 md:pb-12 pb-5">
        my portfolio
      </h2>
      <PortfolioCard />
    </div>
  );
};

export default Portfolio;
