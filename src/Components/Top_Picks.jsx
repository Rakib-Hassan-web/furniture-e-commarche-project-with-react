import React, { useEffect, useState } from 'react'
import Single_picks from './Single_picks'
import { Link } from 'react-router'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
const Top_Picks = () => {







    const [product ,  setproduct ] =useState('')
    


    useEffect(()=>{
      axios.get('https://api.escuelajs.co/api/v1/categories')
      .then((res) => console.log(res.data))  
      .catch((error)=> console.log('error dichhe'))
    },[])

   
return (
<>


    <section id=' Top_Picks' className='py-14 bg-white'>
        <div className="container">
            <h2 className='text-[36px] font-medium font-main text-black text-center'>Top Picks For You</h2>
            <p className='text-[16px] font-medium font-main text-[#9F9F9F] text-center mt-3.5'>Find a bright ideal to
                suit your taste with our great selection of suspension, floor and table lights.</p>


            <div className='flex items-center justify-between'>
                <Single_picks />
                <Single_picks />
                <Single_picks />
                <Single_picks />
            </div>
            <div className='text-center'>
                <Link to={'/Shop'}  className='text-[20px] font-medium font-main text-black border-b-2  '>View More</Link>
            </div>



        </div>
    </section>


</>
)
}

export default Top_Picks