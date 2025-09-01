import React from 'react'
import SingleBlogs from './singleBlogs'
import image1 from '../assets/images/Rectangle 13.png'
import image2 from '../assets/images/Rectangle 14.png'
import image3 from '../assets/images/Rectangle 15.png'
import { Link } from 'react-router'
import { IoTimeOutline } from 'react-icons/io5'
import { CiCalendar } from 'react-icons/ci'

const Blogs = () => {
return (
<>


    <section id='blog' className='py-14 bg-white'>
        <div className="container">
            <h2 className='text-[36px] font-medium font-main text-black text-center'>Our Blogs</h2>
            <p className='text-[16px] font-medium font-main text-[#9F9F9F] text-center mt-3.5'>Find a bright ideal to
                suit your taste with our great selection</p>


            <div className='flex items-center justify-around mb-26'>


                {/* -single- */}
                <div className='w-[339px] pb-5 shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)] rounded-xl mt-15'>
                    <img src={image1} alt="Blogs" className='w-full h-[287px] bg-gray-100' />
                    <h3 className='text-[16px] font-normal font-main text-[#000]  mt-3.5  text-center'>Going all-in with
                        millennial design</h3>
                    <div className='flex justify-center'>
                        <Link className='text-[24px] font-medium font-main text-[#000]  mt-3.5 border-b'>Read More
                        </Link>
                    </div>
                    <div className='flex items-center gap-4 justify-center mt-5'>
                        {/* time */}
                        <div className='flex gap-1.5 items-center'>
                            <IoTimeOutline />
                            <p className='text-[12px] font-normal font-main text-[#000]'>5 min</p>
                        </div>
                        {/* calender-- */}
                        <div className='flex gap-1.5 items-center'>
                            <CiCalendar />
                            <p className='text-[12px] font-normal font-main text-[#000]'>12th Oct 2022</p>


                        </div>
                    </div>
                </div>


                {/* -single- */}
                <div className='w-[339px] pb-5 shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)] rounded-xl mt-15'>
                    <img src={image2} alt="Blogs" className='w-full h-[287px] bg-gray-100' />
                    <h3 className='text-[16px] font-normal font-main text-[#000]  mt-3.5  text-center'>Going all-in with
                        millennial design</h3>
                    <div className='flex justify-center'>
                        <Link className='text-[24px] font-medium font-main text-[#000]  mt-3.5 border-b'>Read More
                        </Link>
                    </div>
                    <div className='flex items-center gap-4 justify-center mt-5'>
                        {/* time */}
                        <div className='flex gap-1.5 items-center'>
                            <IoTimeOutline />
                            <p className='text-[12px] font-normal font-main text-[#000]'>5 min</p>
                        </div>
                        {/* calender-- */}
                        <div className='flex gap-1.5 items-center'>
                            <CiCalendar />
                            <p className='text-[12px] font-normal font-main text-[#000]'>12th Oct 2022</p>


                        </div>
                    </div>
                </div>



                {/* -single- */}
                <div className='w-[339px] pb-5 shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)] rounded-xl mt-15'>
                    <img src={image3} alt="Blogs" className='w-full h-[287px] bg-gray-100' />
                    <h3 className='text-[16px] font-normal font-main text-[#000]  mt-3.5  text-center'>Going all-in with
                        millennial design</h3>
                    <div className='flex justify-center'>
                        <Link className='text-[24px] font-medium font-main text-[#000]  mt-3.5 border-b'>Read More
                        </Link>
                    </div>
                    <div className='flex items-center gap-4 justify-center mt-5'>
                        {/* time */}
                        <div className='flex gap-1.5 items-center'>
                            <IoTimeOutline />
                            <p className='text-[12px] font-normal font-main text-[#000]'>5 min</p>
                        </div>
                        {/* calender-- */}
                        <div className='flex gap-1.5 items-center'>
                            <CiCalendar />
                            <p className='text-[12px] font-normal font-main text-[#000]'>12th Oct 2022</p>


                        </div>
                    </div>
                </div>

            </div>



            <div className='text-center'>
                <Link to={'/BlogPage'} className='text-[20px] font-medium font-main text-black border-b-2  '>View More</Link>
            </div>


        </div>
    </section>









</>
)
}

export default Blogs