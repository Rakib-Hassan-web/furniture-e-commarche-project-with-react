import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Service from '../Components/Service'

const LayOutOne = () => {
  return (
    <>
    
    <Navbar/>
    
    <Outlet/>

<Service/>
    <Footer/>
    
    
    
    
    </>
  )
}

export default LayOutOne