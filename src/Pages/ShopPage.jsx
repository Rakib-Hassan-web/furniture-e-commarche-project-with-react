import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SingleShopProduct from '../Components/SingleShopProduct'
import Single_picks from '../Components/Single_picks'

const ShopPage = () => {
const [product , setproduct ] =useState([])


useEffect(()=>{
axios.get('https://api.escuelajs.co/api/v1/products')
.then((res) =>{setproduct(res.data)})
.catch((error)=> console.log('error dichhe'))
},[])

return (
<>

  <section>
    <div className="container">
      <div className='flex items-center flex-wrap  justify-around  '>
        {
        product.map((item ,i )=>(
        <Single_picks key={i} proimage={item.images[0]} protitle={item.title} proprice={item.price} />
        ))
        }
      </div>
    </div>

  </section>






</>
)
}

export default ShopPage