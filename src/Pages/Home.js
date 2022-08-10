import React from "react";
import Banner from "../Components/Banner";
import Blogs from "./Blogs";
import Features from "./Features";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div className="divide-y divide-black md:mx-10 mx-7">
      <Banner />
      <Features />
      <Portfolio />
      <Resume />
      <Testimonial />
      <Blogs />
    </div>
  );
};

export default Home;
