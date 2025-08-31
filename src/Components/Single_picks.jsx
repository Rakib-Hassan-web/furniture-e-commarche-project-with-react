import React from 'react'

const Single_picks = ({proimage ,protitle ,proprice}) => {
return (
<>

    <section className='mt-[65px] mb-26'>


        <div className='w-[287px] pb-3 shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)]'>
            <img src={proimage} alt="Products" className='w-full h-[287px] bg-gray-100' />
           <h3 className='text-[16px] font-medium font-main text-[#000] mt-3.5 pl-2 w-[260px] truncate overflow-hidden whitespace-nowrap'>
  {protitle}
</h3>

            <p className='text-[24px] font-medium font-main text-[#000]  mt-3.5 pl-2'>{proprice}$ </p>

        </div>





    </section>







</>
)
}

export default Single_picks