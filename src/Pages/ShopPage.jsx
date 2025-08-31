import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SingleShopProduct from '../Components/SingleShopProduct'

const ShopPage = () => {
    const [product ,  setproduct ] =useState([])
  
    useEffect(()=>{
      axios.get('https://api.escuelajs.co/api/v1/products')
      .then((res) =>{setproduct(res.data)})  
      .catch((error)=> console.log('error dichhe'))
    },[])

  return (
    <>
    
    
    
    
    <section>

      {
        product.slice( 0,9).map((item)=>{
          console.log(item)
        })
      }

<SingleShopProduct/>

    </section>
    
    
    
    
    
    </>
  )
}

export default ShopPage