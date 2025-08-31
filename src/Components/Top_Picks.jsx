import React, { useEffect, useState } from 'react'
import Single_picks from './Single_picks'
import { Link } from 'react-router-dom'   // ✅ এখানে ঠিক করলাম
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import Slider from 'react-slick';

const Top_Picks = () => {
  const [product ,  setproduct ] =useState([])

  useEffect(()=>{
    axios.get('https://api.escuelajs.co/api/v1/products')
    .then((res) =>{setproduct(res.data)})  
    .catch((error)=> console.log('error dichhe'))
  },[])

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay:true,
    autoplayspeed:100,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section id='Top_Picks' className='py-14 bg-white'>
      <div className="container">
        <h2 className='text-[36px] font-medium font-main text-black text-center'>
          Top Picks For You
        </h2>
        <p className='text-[16px] font-medium font-main text-[#9F9F9F] text-center mt-3.5'>
          Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.
        </p>

        {/* ✅ শুধু slider container */}
        <div className="slider-container mt-8">
          <Slider {...settings}>
            {
              product.map((item ,i )=>(
                <Single_picks 
                  key={i} 
                  proimage={item.images[0]} 
                  protitle={item.title} 
                  proprice={item.price}
                />
              ))
            }
          </Slider>
        </div>

        <div className='text-center mt-16'>
          <Link to={'/Shop'} className='text-[20px] font-medium font-main text-black border-b-2'>
            View More
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Top_Picks
