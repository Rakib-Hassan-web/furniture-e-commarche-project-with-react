import React from 'react'

const Singleshop = ({proImg , proTitle , proPrice}) => {
  return (
    <>
      <section className='my-20'>
        <div className="container">

        <div className='w-[287px] h-[372px] shadow-2xl'>
            {/* ------image------------- */}
            <div>
                <img src='' alt="product image" className='w-full h-[287px] bg-gray-200' />
            </div >

            {/* ---title and price---- */}
            <div className='pl-2'>
            <h2 className='text-base text-black font-main font-normal mt-4'>suna</h2>
            <p className='text-[24px] font-medium font-main text-black mt-3'>kola</p>
            </div>
        </div>
        </div>
    </section>
</>
  )
}

export default Singleshop