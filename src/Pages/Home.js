import React from "react";
import Banner from "../Components/Banner";
import Features from "./Features";
import Portfolio from "./Portfolio";
import Resume from "./Resume";

const Home = () => {
  return (
    <div className="divide-y divide-black md:mx-10 mx-7">
      <Banner />
      <Features />
      <Portfolio />
      <Resume />
    </div>
  );
};

export default Home;
