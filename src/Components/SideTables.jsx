import React from 'react'
import image1 from '../assets/images/sidetable1.png'
import image2 from '../assets/images/sidetable2.png'
import { Link } from 'react-router'

const SideTables = () => {
  return (
    <>
      <section id='tables' className='bg-[#FAF4F4] py-14'>
        <div className="container mx-auto px-4">

          <div className='flex flex-col sm:flex-col md:flex-row items-center md:justify-around gap-10'>
            
            {/* ---------single side table--- */}
            <div className='w-full md:w-[500px] text-center md:text-left'>
              <img src={image1} alt="Table1" className='w-full sm:w-[300px] md:w-[500px] mx-auto md:mx-0' />
              <h2 className='text-[28px] sm:text-[32px] md:text-[36px] font-medium font-main text-black mb-5 mt-4'>
                Side table
              </h2>
              <Link to={'/Shop'} className='text-[16px] sm:text-[18px] md:text-[20px] font-medium font-main text-black border-b-2'>
                View More
              </Link>
            </div>

            {/* ---------single side table--- */}
            <div className='w-full md:w-[600px] text-center md:text-left'>
              <img src={image2} alt="Table2" className='w-full sm:w-[300px] md:w-[600px] mx-auto md:mx-0' />
              <h2 className='text-[28px] sm:text-[32px] md:text-[36px] font-medium font-main text-black mb-5 mt-4'>
                Side table
              </h2>
              <Link to={'/Shop'} className='text-[16px] sm:text-[18px] md:text-[20px] font-medium font-main text-black border-b-2'>
                View More
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default SideTables
