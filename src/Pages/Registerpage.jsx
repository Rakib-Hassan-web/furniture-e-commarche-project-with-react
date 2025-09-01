import React from "react";
import { Link } from "react-router";
import bredImg from '../assets/images/Rectangle 1.png'
import bredlogo from '../assets/images/Breadcrumblogo.png'
import BreadCrumb from "../Components/BreadCrumb";

export default function RegisterPage() {
  return (
    <> 

    {/* ------------breadcrumb st----------- */}

    
          <div className='w-[2000px] h-[316px]'>
            <img src={bredImg} alt="bredbg" className=' w-[2000px] h-[316px] relative' />
            <div className=' absolute top-[20%] right-[45%] flex flex-col items-center  z-20'>

                <div>
                    <img src={bredlogo} alt="" />
                </div>
                <h2 className='text-[48px] font-medium text-black font-main mt-[-20px]'>Register</h2>

            <BreadCrumb BreadLink={'/Registerpage'} BreadContent={'RegisterPage'} />
            </div>
        </div>


        {/* ------------breadcrumb end----------- */}

    <div className="flex justify-center items-center py-15 bg-gray-50">
      <div className="w-full max-w-sm  p-8 rounded-lg ">
        {/* Title */}
        <h2 className="text-[32px]  font-main font-bold text-black mb-6 ">Register</h2>

        {/* Email Address */}
        <div className="mb-4">
          <label className="block text-sm font-main font-medium text-black mb-2">
            Email address
          </label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>

        {/* Info Text */}
        <p className="text-sm text-gray-600 font-main mb-3">
          A link to set a new password will be sent to your email address.
        </p>
        <p className="text-sm text-gray-600 font-main mb-6">
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our{" "}
          <span className="font-semibold">privacy policy</span>.
        </p>

        {/* Register Button */}
        <button className="w-full py-2 border font-main border-gray-300 rounded-md text-black font-medium hover:bg-gray-200 cursor-pointer duration-300">
          Register
        </button>
        
        <h2 className="text-center text-base mt-6 font-main text-black mb-2">or</h2>
        <div className="text-center">
        <Link to={'/LoginPage'}  className=" text-base font-main text-blue-500 font-bold" >Login</Link>
        </div>
      </div>
    </div>
    </>

  );
}
