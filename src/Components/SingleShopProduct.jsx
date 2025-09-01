import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Singleshop from './Singleshop'

const SingleShopProduct = () => {
    const [currentproduct , setcurrentproduct ] =useState([])

useEffect(()=>{
axios.get('https://api.escuelajs.co/api/v1/products')
.then((res) =>{setcurrentproduct(res.data)})
.catch((error)=> console.log('error dichhe'))
},[])
  return (
    <>
    
    
    
    
  

    
  <section>

    {
    currentproduct.slice(0,9).map((item ,i)=>{
      

      // console.log(item)
    <Singleshop key={i} proImg={item.images[0]} proTitle={item.title} proPrice={item.price} />
    })
    }



  </section>
    
    
    
    
    
    
    </>
  )
}

export default SingleShopProduct