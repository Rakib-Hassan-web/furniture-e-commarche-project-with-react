import React from 'react'
import image1 from '../assets/images/sidetable1.png'
import image2 from '../assets/images/sidetable2.png'
import { Link } from 'react-router'

const SideTables = () => {
return (
<>


    <section id='tables' className='bg-[#FAF4F4] py-14'>
        <div className="container">

            <div className='flex items-center justify-around'>
                {/* ---------single side table--- */}
                <div>

                    <div>
                        <img src={image1} alt="Table1" className='w-[500px]' />
                        <h2 className='text-[36px] font-medium font-main text-black mb-5'>Side table</h2>
                        <Link to={'/Shop'} className='text-[20px] font-medium font-main text-black border-b-2 '>View More</Link>

                    </div>
                </div>
                 {/* ---------single side table--- */}
                <div>

                    <div>
                        <img src={image2} alt="Table1" className='w-[600px]' />
                        <h2 className='text-[36px] font-medium font-main text-black mb-5'>Side table</h2>
                        <Link to={'/Shop'} className='text-[20px] font-medium font-main text-black border-b-2 '>View More</Link>

                    </div>
                </div>
            </div>
        </div>
    </section>



</>
)
}

export default SideTables