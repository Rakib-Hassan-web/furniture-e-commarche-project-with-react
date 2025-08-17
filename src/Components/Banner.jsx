import React from 'react'
import { Link } from 'react-router'
import image from '../assets/images/banner img.png'

const Banner = () => {
return (
<>

    <section id='banner' className='pt-[328px] pb-[296px] bg-[#FBEBB5] relative'>

        <div className="container">

            <div className=' absolute top-0 right-20'><img src={image} alt="BannerImg" /></div>
            <div className=' relative'>
                <h2 className='text-[64px] font-medium font-main text-black w-[440px]  mb-9'>Rocket single seater</h2>

                <Link className='text-[24px] font-medium font-main text-black border-b-2 '>Shop Now</Link>
            </div>
        </div>
    </section>




</>
)
}

export default Banner