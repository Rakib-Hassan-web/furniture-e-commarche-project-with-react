import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SingleShopProduct from '../Components/SingleShopProduct'
import Single_picks from '../Components/Single_picks'
import Pagination from '../Components/Pagination'
import ProductDetailsPage from './ProductDetailsPage'
import BreadCrumb from '../Components/BreadCrumb'
import bredImg from '../assets/images/Rectangle 1.png'
import bredlogo from '../assets/images/Breadcrumblogo.png'
import { useNavigate, useParams } from 'react-router'

const ShopPage = () => {
  const perams = useParams();
  const navigate =useNavigate()
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products/`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const hanldeDetails =(ProInfo)=>{
    console.log('kaj kore')
 

    
  }



  //   useEffect(() => {
  //   axios
  //     .get(`https://api.escuelajs.co/api/v1/products/${perams.proIds}`)
  //     .then((res) => { console.log(res.data); })
  //     .catch((error) => console.log("error dichhe", error));
  // }, []);

  // console.log(products)
  

  const start = (page - 1) * itemsPerPage;
  const currentItems = products.slice(start, start + itemsPerPage);
  const totalPages = Math.ceil(products.length / itemsPerPage);
return (
<>

  <section>
    {/* ------------breadcrumb st----------- */}

     <div className='w-[2000px] h-[316px]'>
            <img src={bredImg} alt="bredbg" className=' w-[2000px] h-[316px] relative' />
            <div className=' absolute top-[20%] right-[45%] flex flex-col items-center  z-20'>

                <div>
                    <img src={bredlogo} alt="" />
                </div>
                <h2 className='text-[48px] font-medium text-black font-main mt-[-20px]'>Shop</h2>

            <BreadCrumb BreadLink={'/Shop'} BreadContent={'AllProducts'} />
            </div>
        </div>

        {/* ------------breadcrumb end----------- */}

    <div className="container">
      <div className='flex items-center flex-wrap  justify-around  '>
        {
        currentItems.map((item ,i )=>(
        <Single_picks key={i}  CartClick={()=>hanldeDetails(item)} proimage={item.images[0]} protitle={item.title} proprice={item.price} />
        ))
        }
      </div>
      <Pagination totalPages={totalPages} currentPage={page} setPage={setPage} className=" ml-auto" />
    </div>

  </section>


{/* <ProductDetailsPage/> */}



</>
)
}

export default ShopPage