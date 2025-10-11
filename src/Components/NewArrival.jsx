import React from 'react'
import image from '../assets/images/Asgaard sofa 1.png'
import { Link } from 'react-router'

const NewArrival = () => {
  return (
    <section id='NewArrival' className='bg-[#FFF9E5] py-14'>
      <div className="container mx-auto px-4">
        <div className='flex flex-col md:flex-row xl:flex-row items-center justify-between gap-8 md:gap-8 xl:gap-12'>

          {/* Image */}
          <div className='w-full md:w-1/2 xl:w-1/2 flex justify-center md:justify-start'>
            <img 
              src={image} 
              alt="Sofa Image" 
              className='w-full max-w-[500px] sm:max-w-[600px] xl:max-w-[700px] object-contain' 
            />
          </div>

          {/* Texts */}
          <div className='w-full md:w-1/2 xl:w-1/2 flex flex-col items-center md:items-start text-center md:text-left'>
            <h3 className='text-[20px] sm:text-[24px] font-medium font-main text-[#000]'>New Arrivals</h3>
            <h2 className='text-[32px] sm:text-[48px] font-bold font-main text-[#000] mb-6 sm:mb-8'>
              Asgaard sofa
            </h2>
            <Link to={'/CheckOutPage'}
              className='text-[16px] sm:text-[20px] py-3 sm:py-4 px-8 sm:px-20 font-bold font-main text-[#000] border hover:bg-amber-300 duration-300'
            >
              Order Now
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}

export default NewArrival
