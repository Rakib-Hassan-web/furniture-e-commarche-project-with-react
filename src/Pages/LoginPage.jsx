import React, { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { Link } from "react-router";
import bredImg from '../assets/images/Rectangle 1.png'
import bredlogo from '../assets/images/Breadcrumblogo.png'
import BreadCrumb from "../Components/BreadCrumb";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
       <div className='w-[2000px] h-[316px]'>
            <img src={bredImg} alt="bredbg" className=' w-[2000px] h-[316px] relative' />
            <div className=' absolute top-[20%] right-[45%] flex flex-col items-center  z-20'>

                <div>
                    <img src={bredlogo} alt="" />
                </div>
                <h2 className='text-[48px] font-medium text-black font-main mt-[-20px]'>Login</h2>

            <BreadCrumb BreadLink={'/LoginPage'} BreadContent={'LoginPage'} />
            </div>
        </div>
        
    <div className="flex justify-center items-center py-30">
      <div className="w-full max-w-sm bg-white p-12 rounded-lg shadow-sm">
        {/* Title */}
        <h2 className="text-[30px]  font-main font-bold text-black mb-6">Log In</h2>

        {/* Username */}
        <div className="mb-4">
          <label className="block  text-sm font-main font-medium text-black mb-2">
            Username or email address
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-sm font-main font-medium text-black mb-2">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2.5 text-gray-500"
            >
              {showPassword ? <LuEyeOff size={20} /> : <LuEye size={20} />}
            </button>
          </div>
        </div>

        {/* Remember Me */}
        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            className="w-4 h-4 border-gray-300 rounded mr-2"
          />
          <span className="text-sm font-main text-gray-600">Remember me</span>
        </div>

        {/* Login Button & Forgot Password */}
        <div className="flex items-center justify-between">
          <button  className="px-6 py-2 font-main bg-white border border-gray-300 rounded-md text-black font-medium hover:bg-gray-200 duration-300 cursor-pointer">
            Log In
          </button>
          <Link to={'/Registerpage'} className="text-base text-blue-600 font-medium font-main ">
            Register Here
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}
