import React from 'react'
import image from '../assets/images/Asgaard sofa 1.png'
import { Link } from 'react-router'

const NewArrival = () => {
return (
<>



    <section id='NewArrival' className='bg-[#FFF9E5]'>
        <div className="container">
            <div className='flex items-center justify-between'>

                {/* image */}
                <div>
                    <img src={image} alt="Sofa Iamge" />
                </div>

                {/* ----texts-- */}
                <div>
                    <h3  className='text-[24px] font-medium font-main text-[#000] text-center '>New Arrivals</h3>
                    <h2 className='text-[48px] font-bold font-main text-[#000] text-center mb-13 '>Asgaard sofa</h2>
                    <div></div>
                    <Link className='text-[20px] py-[17px] px-[75px]  font-bold font-main text-[#000] text-center border '>Order Now</Link>
                </div>
            </div>
        </div>
    </section>









</>
)
}

export default NewArrival