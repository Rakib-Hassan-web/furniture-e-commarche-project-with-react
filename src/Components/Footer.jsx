import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
return (
<>


    <footer className="w-full bg-white px-10 py-16">
        <div className="container">
            <div className="flex   justify-between">



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
                    <ul className="">
                        <li className='mb-11'>
                            <Link className="text-black  font-main  text-base font-medium mb-11 ">Payment Options</Link>
                        </li>
                        <li className='mb-11'>
                            <Link className="text-black  font-main  text-base font-medium mb-11 ">Returns</Link>
                        </li>
                        <li className=''>
                            <Link className="text-black  font-main  text-base font-medium mb-11 ">Privacy Policies
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-[#9F9F9F] font-main  text-base font-medium mb-8">Newsletter</h3>
                    <div className='flex items-center gap-2.5'>
                        <div className="flex items-center border-b-2 w-[200px] py-2 ">
                            <input type="email" placeholder="Enter Your Email Address"
                                className="border-none w-[200px] border-black outline-none text-black font-main font-normal text-base" />
                        </div>
                        <button className="text-black font-medium  text-base font-main ml-3 border-b-2 w-[90px] py-2 ">
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