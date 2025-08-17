import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
return (
<>


    <footer className="w-full bg-white px-10 py-16">
        <div className="container">
            <div className="flex items-center justify-between">



                {/* Links */}
                <div className='pl-[500px]'>
                    <h3 className="text-[#9F9F9F] font-main  text-base font-medium mb-8">Links</h3>
                    <ul className="">
                        <li className='mb-11'>
                            <Link className="text-black  font-main  text-base font-medium mb-11 ">Home</Link>
                        </li>
                        <li className='mb-11'>
                            <Link className="text-black  font-main  text-base font-medium mb-11  ">Shop</Link>
                        </li>
                        <li className='mb-11'>
                            <Link className="text-black  font-main  text-base font-medium mb-11 ">About</Link>
                        </li>
                        <li className=''>
                            <Link className="text-black  font-main  text-base font-medium ">Contact</Link>
                        </li>
                    </ul>
                </div>

                {/* Help */}
                <div>
                    <h3 className="text-[#9F9F9F] font-main  text-base font-medium mb-8">Help</h3>
                    <ul className="space-y-3">
                        <li>
                            <Link className="text-black font-medium hover:underline">Payment Options</Link>
                        </li>
                        <li>
                            <Link className="text-black font-medium hover:underline">Returns</Link>
                        </li>
                        <li>
                            <Link className="text-black font-medium hover:underline">Privacy Policies</Link>
                        </li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-gray-400 font-medium mb-4">Newsletter</h3>
                    <div className="flex items-center border-b border-black">
                        <input type="email" placeholder="Enter Your Email Address"
                            className="flex-1 outline-none py-2 text-sm text-gray-600 placeholder-gray-400" />
                        <button className="text-black font-semibold text-sm ml-3">
                            SUBSCRIBE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </footer>


















</>
)
}

export default Footer