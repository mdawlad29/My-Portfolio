import React from 'react'
import loginImg from "../images/login_image.png";

const Login = () => {
  return (
      <div className='grid lg:grid-cols-2 grid-cols-1 md:py-20 py-5 md:mx-10 mx-7'>
          {/* --left-- */}
          <div>
             <img className='m-auto' src={loginImg} alt="" />
          </div>
          {/* --right-- */}
           <div className="bg-white shadow-2xl md:px-8 px-4 md:py-24 py-5 rounded-lg md:space-y-12 space-y-4">
          {/* ---name--- */}
            <input
              className="text-gray-500 font-semibold border border-gray-400 w-full p-3 rounded-md focus:outline-none"
              type="text"
              name=""
              id=""
              placeholder="User name..."
              />
              {/* ---email--- */}
            <input
              className="text-gray-500 font-semibold border border-gray-400 w-full p-3 rounded-md focus:outline-none"
              type="email"
              name=""
              id=""
              placeholder="example@gmail.com"
            />
              {/* ---pass--- */}
            <input
              className="text-gray-500 font-semibold border border-gray-400 w-full p-3 rounded-md focus:outline-none"
              type="password"
              name=""
              id=""
              placeholder="Password"
            />
          
          {/* --send-- */}
          <button className="bg-[#BB1619] hover:bg-[#102750] text-xl text-white font-semibold w-full text-center uppercase py-2 rounded-full">
            login
          </button>
        </div>
    </div>
  )
}

export default Login