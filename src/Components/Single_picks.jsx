import React from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';

const Single_picks = ({ proimage, protitle, proprice, CartClick, CartButton }) => {
  return (
    <section className='mt-[65px] mb-[26px]'>
      <div
        onClick={CartClick}
        className="group w-full max-w-[287px] pb-3 shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)] 
                   rounded-xl cursor-pointer mx-auto"
      >
        {/* -------------image wrapper------------ */}
        <div className="relative w-full h-[287px] overflow-hidden rounded-xl">
          <img
            src={proimage}
            alt="Product"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* ---------------overlay + icons ----------*/}
          <div
            className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 
                       transition-opacity duration-300 flex flex-col justify-end gap-3 items-end p-3"
          >
            {/* ------cart icon------- */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                CartButton?.(); // optional external function if provided
              }}
              className="bg-white p-2 rounded-full shadow hover:bg-gray-200 transition"
            >
              <FaShoppingCart className="text-black text-lg" />
            </button>

            {/* -------love icon------- */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                console.log('❤️ Love button clicked');
              }}
              className="bg-white p-2 rounded-full shadow hover:bg-gray-200 transition"
            >
              <FaHeart className="text-red-500 text-lg" />
            </button>
          </div>
        </div>

        {/* ------- Title & Price ------- */}
        <h3 className="text-[16px] font-medium font-main text-black mt-3.5 pl-2 truncate w-[260px]">
          {protitle}
        </h3>

        <p className="text-[24px] font-medium font-main text-black mt-1 pl-2">
          ${proprice}
        </p>
      </div>
    </section>
  );
};

export default Single_picks;
