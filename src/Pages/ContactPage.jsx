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

    <section id='contactPage'>
        <div className='w-[2000px] h-[316px]'>
            <img src={bredImg} alt="bredbg" className=' w-[2000px] h-[316px] relative' />
            <div className=' absolute top-[20%] right-[45%] flex flex-col items-center  z-20'>

                <div>
                    <img src={bredlogo} alt="" />
                </div>
                <h2 className='text-[48px] font-medium text-black font-main mt-[-20px]'>Contact</h2>

            <BreadCrumb BreadLink={'/ContactPage'} BreadContent={'ContactPage'} />
            </div>
        </div>
        <div className="container pt-[98px] bg-white pb-18">
            {/* ---header--- */}
            <h2 className='text-[36px] font-medium font-main text-black text-center'>Get In Touch With Us</h2>
            <div className='flex justify-center'>
                <p className='w-[644px] text-[16px] font-medium font-main text-[#9F9F9F] text-center mt-3.5'>For More
                    Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be
                    There To Help You Out. Do Not Hesitate!</p>
            </div>




            <div className='flex justify-around mt-[130px]'>

                {/* -left side--- */}

                <div>

                    {/* address */}
                    <div className='flex gap-4.5  '>
                        <FaLocationDot className='text-black text-2xl mt-1.5' />

                        <div>
                            <h2 className='text-[24px] font-medium font-main text-black'>Address</h2>
                            <p className='text-base font-main font-normal text-black w-[212px]'>236 5th SE Avenue, New
                                York NY10000, United States</p>
                        </div>
                    </div>

                    {/* phone */}
                    <div className='flex gap-4.5 mt-11  '>
                        <FaPhoneAlt className='text-black text-xl mt-1.5' />

                        <div>
                            <h2 className='text-[24px] font-medium font-main text-black'>Phone</h2>
                            <p className='text-base font-main font-normal text-black w-[212px]'>Mobile: +(84) 546-6789
                            </p>
                            <p className='text-base font-main font-normal text-black w-[212px]'>Hotline: +(84) 456-6789
                            </p>
                        </div>
                    </div>
                    {/* timee */}

                    <div className='flex gap-4.5 mt-11  '>
                        <IoTime className='text-black text-xl mt-1.5' />

                        <div>
                            <h2 className='text-[24px] font-medium font-main text-black'>Working Time</h2>
                            <p className='text-base font-main font-normal text-black w-[212px]'>Monday-Friday: 9:00 -
                                22:00

                            </p>
                            <p className='text-base font-main font-normal text-black w-[212px]'>Saturday-Sunday: 9:00 -
                                21:00
                            </p>
                        </div>
                    </div>





                </div>


                {/* -right side--- */}
                <div>

                    {/* -name */}
                    <div>
                        <h2 className='text-base text-black font-main font-medium '>Your name</h2>
                        <input type="text"
                            className='py-5  border border-[#9f9f9fc3] w-[528px] rounded-[10px] mt-6 outline-none text-[#000000cd] text-base font-main font-medium pl-5 '
                            placeholder='Your Name' />
                    </div>


                    {/* -email-- */}

                    <div className='mt-9'>
                        <h2 className='text-base text-black font-main font-medium '>Email address</h2>
                        <input type="text"
                            className='py-5  border border-[#9f9f9fc3] w-[528px] rounded-[10px] mt-6 outline-none text-[#000000cd] text-base font-main font-medium pl-5 '
                            placeholder='Your Email Address' />
                    </div>

                    {/* subjecttt */}


                    <div className='mt-9'>
                        <h2 className='text-base text-black font-main font-medium '>Subject</h2>
                        <input type="text"
                            className='py-5  border border-[#9f9f9fc3] w-[528px] rounded-[10px] mt-6 outline-none text-[#000000cd] text-base font-main font-medium pl-5 '
                            placeholder='This is an optional' />
                    </div>


                    {/* --masseg-- */}


                    <div className='mt-9 mb-13'>
                        <h2 className='text-base text-black font-main font-medium '>Message</h2>
                        <input type="text"
                            className='pt-5 pb-23 border border-[#9f9f9fc3] w-[528px] rounded-[10px] mt-6 outline-none text-[#000000cd] text-base font-main font-medium pl-5 '
                            placeholder='This is an optional' />
                    </div>




                    {/* ---sub btn-- */}
                    <div>
                        <Link
                            className='py-[12px] px-[89px] border border-[#9f9f9fc3] rounded-[15px] text-base text-black font-main font-medium  hover:bg-purple-200 duration-300'>
                        Sbumit</Link>
                    </div>




                </div>






            </div>
        </div>
    </section>






</>
)
}

export default ContactPage