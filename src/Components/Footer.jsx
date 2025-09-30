import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <footer className="w-full bg-white px-4 sm:px-6 md:px-10 py-10 sm:py-12 md:py-16">
      <div className="container mx-auto">

        {/* Footer Grid */}
        <div className="flex flex-col md:flex-row md:justify-between gap-10 md:gap-4 xl:justify-start xl:gap-20">

          {/* Links */}
          <div className='flex-1 xl:pl-[500px]'>
            <h3 className="text-[#9F9F9F] font-main text-base font-medium mb-4 sm:mb-6 md:mb-8">Links</h3>
            <ul>
              <li className='mb-3 sm:mb-4 md:mb-5'>
                <Link className="text-black font-main text-base font-medium">Home</Link>
              </li>
              <li className='mb-3 sm:mb-4 md:mb-5'>
                <Link className="text-black font-main text-base font-medium">Shop</Link>
              </li>
              <li className='mb-3 sm:mb-4 md:mb-5'>
                <Link className="text-black font-main text-base font-medium">About</Link>
              </li>
              <li className='mb-3 sm:mb-4 md:mb-5'>
                <Link className="text-black font-main text-base font-medium">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div className='flex-1'>
            <h3 className="text-[#9F9F9F] font-main text-base font-medium mb-4 sm:mb-6 md:mb-8">Help</h3>
            <ul>
              <li className='mb-3 sm:mb-4 md:mb-5'>
                <Link className="text-black font-main text-base font-medium">Payment Options</Link>
              </li>
              <li className='mb-3 sm:mb-4 md:mb-5'>
                <Link className="text-black font-main text-base font-medium">Returns</Link>
              </li>
              <li className='mb-3 sm:mb-4 md:mb-5'>
                <Link className="text-black font-main text-base font-medium">Privacy Policies</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className='flex-1'>
            <h3 className="text-[#9F9F9F] font-main text-base font-medium mb-4 sm:mb-6 md:mb-8">Newsletter</h3>
            <div className='flex flex-col sm:flex-row items-center gap-3'>
              <div className="flex items-center border-b-2 w-full sm:w-[200px] py-2">
                <input 
                  type="email" 
                  placeholder="Enter Your Email Address"
                  className="border-none w-full text-black font-main font-normal text-base outline-none"
                />
              </div>
              <button className="text-black font-medium text-base font-main py-2 px-4 sm:px-6 border-b-2">
                SUBSCRIBE
              </button>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
