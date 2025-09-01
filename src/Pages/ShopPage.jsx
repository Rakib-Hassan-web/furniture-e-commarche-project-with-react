import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SingleShopProduct from '../Components/SingleShopProduct'
import Single_picks from '../Components/Single_picks'
import Pagination from '../Components/Pagination'
import ProductDetailsPage from './ProductDetailsPage'

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const start = (page - 1) * itemsPerPage;
  const currentItems = products.slice(start, start + itemsPerPage);
  const totalPages = Math.ceil(products.length / itemsPerPage);
return (
<>

  <section>
    <div className="container">
      <div className='flex items-center flex-wrap  justify-around  '>
        {
        currentItems.map((item ,i )=>(
        <Single_picks key={i} proimage={item.images[0]} protitle={item.title} proprice={item.price} />
        ))
        }
      </div>
      <Pagination totalPages={totalPages} currentPage={page} setPage={setPage} className=" ml-auto" />
    </div>

  </section>


<ProductDetailsPage/>



</>
)
}

export default ShopPage