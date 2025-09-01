import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router'

const BreadCrumb = ({BreadLink ,BreadContent}) => {
  return (
    <>


    <div className='flex items-center gap-2.5 mb-'>
        <Link to={'/'} className='text-base text-black font-medium font-main' >Home</Link>
        <FaArrowRightLong  className='text-base'/>
     
     <Link   className='text-base text-black font-medium font-main' to={BreadLink}>{BreadContent}</Link>


    </div>
    </>
  )
}

export default BreadCrumb