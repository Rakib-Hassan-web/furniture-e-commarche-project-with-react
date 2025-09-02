import React from 'react'
import { FaHeart, FaShoppingCart } from 'react-icons/fa'

const Single_picks = ({proimage ,protitle ,proprice ,CartClick}) => {
return (
<>

    <section className='mt-[65px] mb-26'>

   <div
      onClick={CartClick}
      className="group w-[287px] pb-3 shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)] rounded-xl"
    >
      {/* image wrapper */}
      <div className="relative w-full h-[287px] overflow-hidden rounded-xl">
        <img
          src={proimage}
          alt="Products"
          className="w-full h-full object-cover"
        />

        {/* overlay + icons */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3">
          {/* cart icon top-right */}
          <div className="flex justify-end">
            <button className="bg-white p-2 rounded-full shadow hover:bg-gray-200 transition">
              <FaShoppingCart className="text-black text-lg" />
            </button>
          </div>

          {/* love icon bottom-center */}
          <div className="flex justify-center">
            <button className="bg-white p-2 rounded-full shadow hover:bg-gray-200 transition">
              <FaHeart className="text-red-500 text-lg" />
            </button>
          </div>
        </div>
      </div>

      <h3 className="text-[16px] font-medium font-main text-[#000] mt-3.5 pl-2 w-[260px] truncate overflow-hidden whitespace-nowrap">
        {protitle}
      </h3>

      <p className="text-[24px] font-medium font-main text-[#000] mt-3.5 pl-2">
        {proprice}$
      </p>
    </div>




    </section>







</>
)
}

export default Single_picks