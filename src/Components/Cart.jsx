import React from 'react'
import { IoCloseSharp } from 'react-icons/io5'

const Cart = () => {
  return (
    <section id='cart'>



<div className="bg-[#0000008f] h-screen w-full fixed top-0 right-0 z-10">

  <div className='w-[500px] h-screen bg-white ml-auto px-[30px] pt-[48px]'>
    <div className='flex items-center justify-between'>
    <h1 className=' font-main text-black text-[24px] font-semibold'>Shopping Cart</h1>
    
    <IoCloseSharp className=' text-4xl cursor-pointer'  />

    </div>
  </div>
</div>

    </section>
  )
}

export default Cart