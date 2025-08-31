import React, { useState } from 'react'
import { IoCloseCircleSharp, IoCloseSharp } from 'react-icons/io5'

const Cart = ({closecart ,closeDiv}) => {






return (
<section id='cart' className=''>



  <div  onClick={closeDiv} className=" h-screen w-full fixed top-0 right-0 z-10">
   
    

    <div className='w-[417px] h-screen bg-white ml-auto px-[30px] pt-[48px]'>
      <div className='flex items-center justify-between'>
        <h1 className=' font-main text-black text-[24px] font-semibold'>Shopping Cart</h1>

       <div>
        {closecart}
       </div>

      </div>

      <div>
        <div className='w-[287px] border-b  border-1 border-[#D9D9D9] flex  m-auto mt-[26px]'></div>
        <div className='mt-[42px] flex items-center justify-between'>
          <img src="ad" alt="product image" className='w-[104px]  h-[105px] bg-gray-200 rounded-[10px] ' />
          <div>
          <h2 className='text-base text-black  font-normal font-main'>Asgaard sofa</h2>
          <p className='text-[14px] mt-2 font-main text-[#B88E2F] font-medium'>Rs. 250,000.00</p>
          </div>
          <div>
            <IoCloseCircleSharp  className='text-[#9F9F9F] text-4xl cursor-pointer '/>

          </div>
        </div>
      </div>
    </div>
  </div>

</section>
)
}

export default Cart