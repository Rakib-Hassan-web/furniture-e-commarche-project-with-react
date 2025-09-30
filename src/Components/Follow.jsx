import React from 'react'
import { Link } from 'react-router'

const Follow = () => {
  return (
    <section id='follow' className='bg-[#faf4f4a4] py-20 sm:py-28 md:py-32'>
      <div className="container mx-auto px-4 text-center">

        {/* Title */}
        <h2 className='text-[36px] sm:text-[48px] md:text-[60px] font-main font-bold text-black'>
          Our Instagram
        </h2>

        <h3 className='text-[16px] sm:text-[18px] md:text-[20px] font-main font-bold text-black mb-6 sm:mb-8 md:mb-9'>
          Follow our store on Instagram
        </h3>

        {/* Button */}
        <Link 
          className='text-[14px] sm:text-[16px] md:text-[20px] py-3 sm:py-4 md:py-5 px-6 sm:px-12 md:px-20 font-normal font-main text-[#000] rounded-full bg-pink-100 shadow-[5px_5px_15px_-3px_rgba(0,_0,_0,_0.15)] inline-block'
        >
          Follow Us
        </Link>

      </div>
    </section>
  )
}

export default Follow
