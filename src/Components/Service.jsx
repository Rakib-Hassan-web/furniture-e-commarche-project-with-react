import React from 'react'

const Service = () => {
  return (
    <section id='services' className='py-[60px] sm:py-[80px] md:py-[96px] bg-[#FAF4F4]'>
      <div className="container mx-auto px-4">

        <div className="flex flex-col sm:flex-col md:flex-row md:justify-between gap-8 md:gap-6 xl:gap-12">

          {/* -----------single-------------- */}
          <div className='w-full md:w-[376px] text-center md:text-left'>
            <h2 className='text-[28px] sm:text-[30px] md:text-[32px] font-main font-medium text-black mb-2'>
              Free Delivery
            </h2>
            <p className='text-[16px] sm:text-[18px] md:text-[20px] font-main font-medium text-[#9F9F9F]'>
              For all orders over $50, consectetur adipim scing elit.
            </p>
          </div>
          
          {/* single */}
          <div className='w-full md:w-[376px] text-center md:text-left'>
            <h2 className='text-[28px] sm:text-[30px] md:text-[32px] font-main font-medium text-black mb-2'>
              90 Days Return
            </h2>
            <p className='text-[16px] sm:text-[18px] md:text-[20px] font-main font-medium text-[#9F9F9F]'>
              If goods have problems, consectetur adipim scing elit.
            </p>
          </div>

          {/* single */}
          <div className='w-full md:w-[376px] text-center md:text-left'>
            <h2 className='text-[28px] sm:text-[30px] md:text-[32px] font-main font-medium text-black mb-2'>
              Secure Payment
            </h2>
            <p className='text-[16px] sm:text-[18px] md:text-[20px] font-main font-medium text-[#9F9F9F]'>
              100% secure payment, consectetur adipim scing elit.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Service
