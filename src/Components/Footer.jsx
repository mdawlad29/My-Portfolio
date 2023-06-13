import React from "react";
import Img from "../images/awlad.jpg";

const Footer = () => {
  return (
    <div className="border-t border-[#BB1619]">
      <div className="font-bold text-xl cursor-pointer flex items-center justify-center gap-5 font-[Poppins] py-7 text-white">
        <img className="w-12 h-12 rounded-full" src={Img} alt="" />
        <h2>Awlad</h2>
      </div>
      <h3 className="text-lg text-white text-center">© 2022 Design By Mohammad Awlad.</h3>
    </div>
  );
};

export default Footer;
