import React from "react";
import Banner from "../Components/Banner";
import Blogs from "./Blogs";
import Contact from "./Contact";
import Features from "./Features";
import Portfolio from "./Portfolio";
import Pricing from "./Pricing";
import Resume from "./Resume";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div className="md:mx-10 mx-7">
      <Banner />
      <Features />
      <Portfolio />
      <Resume />
      <Testimonial />
      <Pricing/>
      <Blogs />
      <Contact/>
    </div>
  );
};

export default Home;
