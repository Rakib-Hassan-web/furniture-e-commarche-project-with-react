import React, { useState } from 'react'
import { BsCart3 } from 'react-icons/bs'
import { FiSearch } from 'react-icons/fi'
import { GoHeart } from 'react-icons/go'
import { LuUserCheck } from 'react-icons/lu'
import { Link } from 'react-router'
import Cart from './Cart'
import { IoCloseSharp } from 'react-icons/io5'
import { RxHamburgerMenu } from 'react-icons/rx'

const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className='bg-[#FBEBB5] py-4 sm:py-6 md:py-9.5'>
        <div className="container mx-auto px-4">
          <div className='flex items-center justify-between'>

            {/* Logo */}
            <div>
              <Link to='/' className="font-main font-bold text-xl sm:text-2xl">Logo</Link>
            </div>

            {/* Desktop Nav Items */}
            <div className='hidden md:flex items-center gap-[40px] lg:gap-[75px]'>
              {['Home','Shop','About','Contact'].map((item, index) => (
                <Link key={index} to={`/${item === 'Home' ? '' : item+'Page'}`} className="relative font-main text-sm sm:text-base font-medium text-black group">
                  {item}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Desktop Icons */}
            <div className='hidden md:flex items-center gap-6 lg:gap-10'>
              <Link to='/Registerpage'>
                <LuUserCheck className='text-black text-xl sm:text-2xl font-bold' />
              </Link>
              <FiSearch className='text-black text-xl sm:text-2xl font-bold cursor-pointer' />
              <GoHeart className='text-black text-xl sm:text-2xl font-bold cursor-pointer' />
              <button onClick={() => setCartOpen(prev => !prev)}>
                <BsCart3 className='text-black text-xl sm:text-2xl font-bold cursor-pointer' />
              </button>
            </div>

            {/* Mobile Hamburger */}
            <div className='md:hidden'>
              <button onClick={() => setMenuOpen(prev => !prev)}>
                {menuOpen ? (
                  <IoCloseSharp className='text-3xl text-black' />
                ) : (
                  <RxHamburgerMenu className='text-3xl text-black' />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-16 right-0 w-64 h-screen bg-white shadow-lg p-6 transform transition-transform duration-300 z-50 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className='mt-10 flex flex-col items-center justify-center gap-6'>
          <div className='w-full bg-[#4B5563] rounded-2xl py-8 flex flex-col items-center gap-6'>
            <Link to='/Registerpage'>
              <LuUserCheck className='text-white text-3xl cursor-pointer' />
            </Link>
            <button onClick={() => setCartOpen(prev => !prev)}>
              <BsCart3 className='text-white text-3xl cursor-pointer' />
            </button>
          </div>
        </div>
      </div>

      {/* Cart Drawer */}
      {cartOpen && (
        <section className="w-full h-screen bg-[#00000055] fixed top-0 right-0 z-40">
          <Cart
            closeDiv={() => setCartOpen(false)}
            closecart={<IoCloseSharp onClick={() => setCartOpen(false)} className='text-3xl sm:text-4xl cursor-pointer text-[#9F9F9F]' />}
          />
        </section>
      )}
    </>
  )
}

export default Navbar
