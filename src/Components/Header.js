import React, { useState, useEffect } from "react";
import Img from "../images/awlad.jpg";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [stickyClass, setStickyClass] = useState("relative");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 80
        ? setStickyClass(
            "fixed top-0 left-0 w-full bg-[#212428] text-white shadow-lg"
          )
        : setStickyClass("");
    }
  };
  return (
    <div>
      <div
        className={`flex justify-between items-center md:px-10 px-7 ${stickyClass}`}
      >
        <div className="font-bold text-3xl cursor-pointer flex items-center gap-5 font-[Poppins] py-2 text-white">
          <img className="w-16 h-16 rounded-full" src={Img} alt="" />
          <h2>Awlad</h2>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer lg:hidden"
        >
          {open ? <AiOutlineMenu /> : <AiOutlineClose />}
        </div>
        <ul
          className={`lg:flex lg:items-center absolute lg:static lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 md:px-2 px-7 transition-all duration-500 ease-in ${
            !open
              ? "top-20 opacity-100 py-2"
              : "top-[-490px] md:opacity-100 opacity-0"
          }`}
        >
          <li className="md:ml-8 text-base lg:my-0 my-2 lg:space-y-0 md:space-y-3 space-y-3">
            <NavLink
              to=""
              className="text-white  duration-500 uppercase mx-3 md:block block lg:inline-block"
            >
              home
            </NavLink>
            <NavLink
              to=""
              className="text-white  duration-500 uppercase mx-3 md:block block lg:inline-block"
            >
              feature
            </NavLink>
            <NavLink
              to=""
              className="text-white  duration-500 uppercase mx-3 md:block block lg:inline-block"
            >
              portfolio
            </NavLink>
            <NavLink
              to=""
              className="text-white  duration-500 uppercase mx-3 md:block block lg:inline-block"
            >
              resume
            </NavLink>
            <NavLink
              to=""
              className="text-white  duration-500 uppercase mx-3 md:block block lg:inline-block"
            >
              clients
            </NavLink>
            <NavLink
              to=""
              className="text-white  duration-500 uppercase mx-3 md:block block lg:inline-block"
            >
              pricing
            </NavLink>
            <NavLink
              to=""
              className="text-white  duration-500 uppercase mx-3 md:block block lg:inline-block"
            >
              blog
            </NavLink>
            <NavLink
              to=""
              className="text-white  duration-500 uppercase mx-3 md:block block lg:inline-block"
            >
              contact
            </NavLink>
          </li>

          <button className="bg-pink-600 text-white font-[Poppins] my-2 py-2 px-6 rounded lg:ml-20 md:ml-9 hover:indigo-400 duration-500">
            Login
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
