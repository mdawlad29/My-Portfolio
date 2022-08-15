import React from "react";
import Banner from "../Components/Banner";
import Blogs from "./Blogs";
import Contact from "./Contact";
import Features from "./Features";
import Portfolio from "./Portfolio";
import Pricing from "./Pricing";
import Resume from "./Resume";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <Features />
      <Portfolio />
      <Resume />
      <Pricing/>
      <Blogs />
      <Contact/>
    </div>
  );
};

export default Home;
