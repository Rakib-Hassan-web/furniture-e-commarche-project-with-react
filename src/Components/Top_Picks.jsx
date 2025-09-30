import React, { useEffect, useState } from 'react'
import Single_picks from './Single_picks'
import { Link, useNavigate } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import Slider from 'react-slick';

const Top_Picks = () => {
  const navigate = useNavigate()
  const [product, setProduct] = useState([])

  useEffect(() => {
    axios.get('https://api.escuelajs.co/api/v1/products')
      .then((res) => setProduct(res.data))
      .catch((error) => console.log('error dichhe'))
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // autoplayspeed typo fix
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768, // tablet breakpoint
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480, // mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const handleDetails = (ProInfo) => {
    navigate(`/ProductDetailsPage/${ProInfo.id}`)
  }

  return (
    <section id='Top_Picks' className='py-14 bg-white'>
      <div className="container mx-auto px-4">
        <h2 className='text-[28px] sm:text-[32px] md:text-[36px] font-medium font-main text-black text-center'>
          Top Picks For You
        </h2>
        <p className='text-[14px] sm:text-[16px] font-medium font-main text-[#9F9F9F] text-center mt-3.5'>
          Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.
        </p>

        {/* Slider container */}
        <div className="slider-container mt-8">
          <Slider {...settings}>
            {
              product.map((item, i) => (
                <Single_picks
                  CartClick={() => handleDetails(item)}
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
          <Link to={'/Shop'} className='text-[16px] sm:text-[20px] font-medium font-main text-black border-b-2'>
            View More
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Top_Picks
