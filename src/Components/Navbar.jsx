import React, { useState } from 'react'
import { BsCart3 } from 'react-icons/bs'
import { FiSearch } from 'react-icons/fi'
import { GoHeart } from 'react-icons/go'
import { LuUserCheck } from 'react-icons/lu'
import { Link } from 'react-router'
import Cart from './Cart'
import { IoCloseSharp } from 'react-icons/io5'

const Navbar = () => {
const [cart ,setcart] =useState(true)

console.log(cart)
return (
<>



    <nav id='navbar' className='bg-[#FBEBB5] py-9.5'>
        <div className="container">
            <div>
                <Link to={'/'}> RAKIB</Link> </div> <div className=' flex items-center justify-between'>
                {/* -----items--- */}
                <div className='pl-[450px] flex items-center gap-[75px]  '>
                    <Link className="relative font-main text-base font-medium text-black group">
                    Home
                    <span
                        className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                    </Link>


                    <Link className="relative font-main text-base font-medium text-black group">
                    Shop
                    <span
                        className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                    </Link>


                    <Link className="relative font-main text-base font-medium text-black group">
                    About
                    <span
                        className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                    </Link>


                    <Link to={'/ContactPage'} className="relative font-main text-base font-medium text-black group">
                    Contact
                    <span
                        className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
                    </Link>







                </div>

                {/* -----icons */}

                <div className='flex items-center gap-10'>
                    <Link to={'/Registerpage'}> <LuUserCheck className='text-black text-2xl font-main font-bold' />
                    </Link>
                    <Link >
                        <FiSearch className='text-black text-2xl font-main font-bold' />
                    </Link>
                    <Link>
                    <GoHeart className='text-black text-2xl font-main font-bold' />
                    </Link>
                    <button onClick={()=>setcart(!cart)} >
                        <BsCart3 className='text-black text-2xl font-main font-bold cursor-pointer' />
                    </button>

                </div>



                
            </div>


        </div>

    </nav>

    {/* -------cart---- */}


    <section id='cart' className={`${cart? 'hidden' :'visible' } w-full h-screen bg-[#00000055] absolute top-0 right-0
        z-20`}>
        <Cart closeDiv={()=>setcart(!cart)} closecart={ <IoCloseSharp onClick={()=>setcart(!cart)} className=' text-4xl
                cursor-pointer text-[#9F9F9F]' />} />
    </section>



    {/* <div className={` ${cart? 'visible' : 'hidden' }`}>
        <Cart closecart={ <IoCloseSharp onClick={()=>setcart(!cart)}/>}></Cart>
    </div> */}
</>
)
}

export default Navbar