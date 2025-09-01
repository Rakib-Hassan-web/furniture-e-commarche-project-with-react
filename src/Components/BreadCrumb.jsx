import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router'

const BreadCrumb = ({BreadLink ,BreadContent}) => {
  return (
    <>


    <div>
        <Link to={'/'} >Home</Link>
        <FaArrowRightLong />
     
     <Link  to={BreadLink}>{BreadContent}</Link>


    </div>
    </>
  )
}

export default BreadCrumb