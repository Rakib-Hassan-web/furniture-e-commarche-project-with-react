import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'

const ContactPage = () => {
return (
<>

    <section id='contactPage'>
        <div className="container pt-[98px] bg-white pb-18">
            {/* ---header--- */}
            <h2 className='text-[36px] font-medium font-main text-black text-center'>Get In Touch With Us</h2>
            <div className='flex justify-center'>
                <p className='w-[644px] text-[16px] font-medium font-main text-[#9F9F9F] text-center mt-3.5'>For More
                    Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be
                    There To Help You Out. Do Not Hesitate!</p>
            </div>




            <div>

                {/* -left side--- */}

                <div>

                    {/* address */}
                    <div className='flex gap-4.5  '>
                        <FaLocationDot className='text-black text-2xl mt-1.5' />

                        <div>
                            <h2 className='text-[24px] font-medium font-main text-black'>Address</h2>
                            <p className='text-base font-main font-normal text-black w-[212px]'>236 5th SE Avenue, New
                                York NY10000, United States</p>
                        </div>
                    </div>

                    {/* phone */}
                       <div className='flex gap-4.5  '>
                        <FaPhoneAlt className='text-black text-xl mt-1.5' />

                        <div>
                            <h2 className='text-[24px] font-medium font-main text-black'>Phone</h2>
                            <p className='text-base font-main font-normal text-black w-[212px]'>Mobile: +(84) 546-6789
</p>
                            <p className='text-base font-main font-normal text-black w-[212px]'>Hotline: +(84) 456-6789
</p>
                        </div>
                    </div>






                </div>






            </div>
        </div>
    </section>






</>
)
}

export default ContactPage