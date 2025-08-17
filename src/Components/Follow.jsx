import React from 'react'
import { Link } from 'react-router'

const Follow = () => {
return (
<>

    <section id='follow' className='bg-[#faf4f4a4]  py-32'>

        <div className="container">

            <h2 className='text-[60px] font-main font-bold text-black text-center'>Our Instagram</h2>
            <h3 className='text-[20px] font-main font-bold text-black text-center mb-9'>Follow our store on Instagram</h3>

<div className='text-center'>
            <Link className='text-[20px] py-[17px] px-[75px]  font-normal font-main text-[#000] text-center border rounded-full bg-pink-100 '>Order
            Now</Link>
            </div>

        </div>




    </section>
</>
)
}

export default Follow