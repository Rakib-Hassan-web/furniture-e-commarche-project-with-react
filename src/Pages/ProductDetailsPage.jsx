import axios from "axios";
import React, { useEffect, useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FiPlusCircle } from "react-icons/fi";
import { GoPlusCircle } from "react-icons/go";
import { HiOutlineMinusCircle } from "react-icons/hi";
import { useParams } from "react-router";
import Top_Picks from "../Components/Top_Picks";

export default function ProductPage() {
  const [product, setproduct] = useState({});
  const perams = useParams();

  const [selectedImage, setSelectedImage] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products/${perams.proIds}`)
      .then((res) => {
        setproduct(res.data);
        setSelectedImage(res.data.images[0]); 
      })
      .catch((error) => console.log("error dichhe", error));
  }, [perams.proIds]);

  console.log(product);

  return (
    <>
    <div className="min- bg-white flex  justify-center py-30 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
        {/* Left Side - Images */}
        <div className="flex gap-4">
          {/* Thumbnails */}
          <div className="flex flex-col gap-4">
            {product.images &&
              product.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt="sofa"
                  className={`w-20 h-20 rounded-xl cursor-pointer border ${
                    selectedImage === img
                      ? "border-gray-800"
                      : "border-gray-200"
                  }`}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
          </div>
          {/* Main Image */}
          <div className="flex-1">
            {selectedImage && (
              <img
                src={selectedImage}
                alt="sofa-main"
                className="rounded-2xl shadow-lg"
              />
            )}
          </div>
        </div>

        {/* Right Side - Product Details */}
        <div className="space-y-5">
          <h1 className="text-3xl font-bold font-main">{product.title}</h1>
          <p className="text-2xl font-semibold text-gray-700 font-main">
            Price : {product.price}$
          </p>

          {/* Review */}
          <div className="flex items-center gap-2">
            <div className="flex gap-1 font-main">
              <FaStar  className="text-yellow-400" />
              <FaStar  className="text-yellow-400" />
              <FaStar  className="text-yellow-400" />
              <FaStar  className="text-yellow-400" />
            <FaStar className="text-gray-300" />
              </div>
            
            <span className="text-sm text-gray-500 font-main">5 Customer Review</span>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm  font-main">{product.description}</p>

          {/* Size Options */}
          <div>
            <h2 className="font-semibold mb-2 font-main">Size</h2>
            <div className="flex gap-3">
              {["L", "XL", "XS"].map((size) => (
                <button
                  key={size}
                  className="px-4 py-2 border border-[#9F9F9F] rounded-lg hover:bg-black hover:text-white transition duration-300 font-main cursor-pointer"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Options */}
          <div>
            <h2 className="font-semibold mb-2">Color</h2>
            <div className="flex gap-3">
              <span className="w-9 h-9 bg-purple-400 rounded-full cursor-pointer"></span>
              <span className="w-9 h-9 bg-black rounded-full cursor-pointer"></span>
              <span className="w-9 h-9 bg-yellow-400 rounded-full cursor-pointer"></span>
            </div>
          </div>

          {/* Quantity + Add to Cart */}
          <div className="flex items-center gap-5">
            <div className="flex items-center border  border-[#9F9F9F] rounded-lg">
              <button
                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                className="px-4 py-2 font-main text-lg "
              >
             <CiCircleMinus  className=" text-3xl font-main  hover:text-red-500 rounded-full duration-300 cursor-pointer" />
   
              </button>
              <span className="px-4 font-main text-lg ">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2"
              >
               <CiCirclePlus    className=" text-3xl font-main  hover:text-green-500 rounded-full duration-300 cursor-pointer"/>
              </button>
            </div>

            <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-green-400  hover:scale-[1.1]  cursor-pointer hover:text-black transition font-main">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
      <Top_Picks/>
      </>
  );
}
