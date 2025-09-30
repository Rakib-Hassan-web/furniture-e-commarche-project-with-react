import React from 'react'
import image1 from '../assets/images/Rectangle 13.png'
import image2 from '../assets/images/Rectangle 14.png'
import image3 from '../assets/images/Rectangle 15.png'
import { Link } from 'react-router'
import { IoTimeOutline } from 'react-icons/io5'
import { CiCalendar } from 'react-icons/ci'

const Blogs = () => {
  const blogData = [
    { img: image1, title: "Going all-in with millennial design", time: "5 min", date: "12th Oct 2022" },
    { img: image2, title: "Going all-in with millennial design", time: "5 min", date: "12th Oct 2022" },
    { img: image3, title: "Going all-in with millennial design", time: "5 min", date: "12th Oct 2022" },
  ];

  return (
    <section id='blog' className='py-14 bg-white'>
      <div className="container mx-auto px-4">
        <h2 className='text-[28px] sm:text-[32px] md:text-[36px] font-medium font-main text-black text-center'>
          Our Blogs
        </h2>
        <p className='text-[14px] sm:text-[16px] font-medium font-main text-[#9F9F9F] text-center mt-3.5'>
          Find a bright ideal to suit your taste with our great selection
        </p>

        {/* Blogs Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>
          {blogData.map((blog, index) => (
            <div key={index} className='w-full pb-5 shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)] rounded-xl'>
              <img src={blog.img} alt="Blogs" className='w-full h-[287px] bg-gray-100 object-cover rounded-t-xl' />
              <h3 className='text-[16px] font-normal font-main text-[#000] mt-3.5 text-center px-2'>
                {blog.title}
              </h3>
              <div className='flex justify-center'>
                <Link className='text-[18px] sm:text-[20px] font-medium font-main text-[#000] mt-3.5 border-b'>
                  Read More
                </Link>
              </div>
              <div className='flex items-center gap-4 justify-center mt-5 text-[12px]'>
                <div className='flex gap-1.5 items-center'>
                  <IoTimeOutline />
                  <p className='font-normal font-main text-[#000]'>{blog.time}</p>
                </div>
                <div className='flex gap-1.5 items-center'>
                  <CiCalendar />
                  <p className='font-normal font-main text-[#000]'>{blog.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='text-center mt-10'>
          <Link to={'/BlogPage'} className='text-[16px] sm:text-[20px] font-medium font-main text-black border-b-2'>
            View More
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Blogs
