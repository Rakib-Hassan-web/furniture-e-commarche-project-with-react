import React from 'react'
import { Link } from 'react-router'
import image from '../assets/images/banner img.png'

const Banner = () => {
  return (
    <section
      id='banner'
      className='bg-[#FBEBB5] relative py-[120px] sm:py-[130px] md:py-[296px] xl:pb-[0px]' 
    >
      <div className="container mx-auto px-4 flex flex-col-reverse sm:flex-col md:flex-row items-center md:items-start justify-between">

        {/* Text */}
        <div className='w-full md:w-1/2 text-center md:text-left'>
          <h2 className='text-[32px] sm:text-[48px] md:text-[64px] font-medium font-main text-black mb-4 sm:mb-6 md:mb-9'>
            Rocket single seater
          </h2>
          <Link to={'/Shop'} className='text-[18px] sm:text-[20px] md:text-[24px] font-medium font-main text-black border-b-2'>
            Shop Now
          </Link>
        </div>

        {/* Image */}
        <div className='w-full md:w-1/2 flex justify-center md:justify-end mb-6 md:mb-0 relative xl:-top-[200px]'>
          <img
            src={image}
            alt="BannerImg"
            className='w-[300px] sm:w-[300px] md:w-[700px] h-auto'
          />
        </div>

      </div>
    </section>
  )
}

export default Banner
