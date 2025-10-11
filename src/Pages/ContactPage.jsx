import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { IoTime } from 'react-icons/io5'
import { Link } from 'react-router'
import BreadCrumb from '../Components/BreadCrumb'
import bredImg from '../assets/images/Rectangle 1.png'
import bredlogo from '../assets/images/Breadcrumblogo.png'

const ContactPage = () => {
  return (
    <>
      {/* ------------breadcrumb start----------- */}
      <div className='relative w-full h-[316px] sm:h-[220px]'>
        <img src={bredImg} alt="bredbg" className='w-full h-full object-cover' />
        <div className='absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20'>
          <img src={bredlogo} alt="" className='w-20 sm:w-16' />
          <h2 className='text-[48px] sm:text-3xl md:text-4xl font-medium text-black font-main mt-[-10px]'>Contact</h2>
          <BreadCrumb BreadLink={'/ContactPage'} BreadContent={'ContactPage'} />
        </div>
      </div>
      {/* ------------breadcrumb end----------- */}

      <div className="container mx-auto px-4 sm:px-6 md:px-10 pt-24 pb-24 bg-white">

        {/* Header */}
        <h2 className='text-3xl sm:text-2xl md:text-3xl font-medium font-main text-black text-center'>Get In Touch With Us</h2>
        <p className='mt-3.5 text-center text-gray-500 text-base sm:text-sm md:text-base max-w-xl mx-auto'>
          For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>

        {/* Contact Info + Form */}
        <div className='mt-16 flex flex-col lg:flex-row justify-between gap-12'>

          {/* Left Side */}
          <div className='flex flex-col gap-12 lg:w-1/3'>
            {/* Address */}
            <div className='flex gap-4'>
              <FaLocationDot className='text-black text-2xl mt-1.5' />
              <div>
                <h3 className='text-xl font-medium font-main text-black'>Address</h3>
                <p className='text-base font-main text-black'>236 5th SE Avenue, New York NY10000, United States</p>
              </div>
            </div>

            {/* Phone */}
            <div className='flex gap-4'>
              <FaPhoneAlt className='text-black text-xl mt-1.5' />
              <div>
                <h3 className='text-xl font-medium font-main text-black'>Phone</h3>
                <p className='text-base font-main text-black'>Mobile: +(84) 546-6789</p>
                <p className='text-base font-main text-black'>Hotline: +(84) 456-6789</p>
              </div>
            </div>

            {/* Working Time */}
            <div className='flex gap-4'>
              <IoTime className='text-black text-xl mt-1.5' />
              <div>
                <h3 className='text-xl font-medium font-main text-black'>Working Time</h3>
                <p className='text-base font-main text-black'>Monday-Friday: 9:00 - 22:00</p>
                <p className='text-base font-main text-black'>Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>

          {/*------------------ Right Side ------------------ */}
          <div className='lg:w-2/3 flex flex-col gap-6'>
            <div>
              <h3 className='text-base font-main font-medium text-black'>Your Name</h3>
              <input type="text" placeholder="Your Name" 
                className='mt-2 w-full sm:w-full md:w-full lg:w-[528px] py-4 px-5 border border-gray-300 rounded-lg outline-none text-black font-main' />
            </div>

            <div>
              <h3 className='text-base font-main font-medium text-black'>Email Address</h3>
              <input type="email" placeholder="Your Email Address" 
                className='mt-2 w-full sm:w-full md:w-full lg:w-[528px] py-4 px-5 border border-gray-300 rounded-lg outline-none text-black font-main' />
            </div>

            <div>
              <h3 className='text-base font-main font-medium text-black'>Subject</h3>
              <input type="text" placeholder="Optional" 
                className='mt-2 w-full sm:w-full md:w-full lg:w-[528px] py-4 px-5 border border-gray-300 rounded-lg outline-none text-black font-main' />
            </div>

            <div>
              <h3 className='text-base font-main font-medium text-black'>Message</h3>
              <textarea placeholder="Optional" rows={5} 
                className='mt-2 w-full sm:w-full md:w-full lg:w-[528px] py-4 px-5 border border-gray-300 rounded-lg outline-none text-black font-main' />
            </div>

            <div>
              <Link className='inline-block mt-4 py-3 px-10 border border-gray-300 rounded-lg font-main font-medium text-black hover:bg-purple-200 transition duration-300'>
                Submit
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default ContactPage
