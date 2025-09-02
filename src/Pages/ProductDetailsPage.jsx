import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router";

export default function ProductPage() {
    const [product ,  setproduct ] =useState([])

    const perams =useParams()
  
  const [selectedImage, setSelectedImage] = useState(
    "https://i.ibb.co/6FpmPQ5/sofa1.png"
  );
  const [quantity, setQuantity] = useState(1);

  const images = [
    "https://i.ibb.co/6FpmPQ5/sofa1.png",
    "https://i.ibb.co/Wf1RV4F/sofa2.png",
    "https://i.ibb.co/3kYF5k7/sofa3.png",
    "https://i.ibb.co/Npb4GZc/sofa4.png",
  ];


   useEffect(()=>{
    axios.get('https://api.escuelajs.co/api/v1/products')
    .then((res) =>{setproduct(res.data)})  
    .catch((error)=> console.log('error dichhe'))
  },[])


  console.log(product)

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
        {/* Left Side - Images */}
        <div className="flex gap-4">
          {/* Thumbnails */}
          <div className="flex flex-col gap-4">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt="sofa"
                className={`w-20 h-20 rounded-xl cursor-pointer border ${
                  selectedImage === img ? "border-gray-800" : "border-gray-200"
                }`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
          {/* Main Image */}
          <div className="flex-1">
            <img
              src={selectedImage}
              alt="sofa-main"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Right Side - Product Details */}
        <div className="space-y-5">
          <h1 className="text-3xl font-bold">Asgaard sofa</h1>
          <p className="text-2xl font-semibold text-gray-700">
            Rs. 250,000.00
          </p>

          {/* Review */}
          <div className="flex items-center gap-2">
            {[...Array(4)].map((_, i) => (
              <FaStar key={i} className="text-yellow-500" />
            ))}
            <FaStar className="text-gray-300" />
            <span className="text-sm text-gray-500">5 Customer Review</span>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm">
            Setting the bar as one of the loudest speakers in its class, 
            the Kilburn is a compact, stout-hearted hero with a well-balanced 
            audio which boasts a clear midrange and extended highs for a sound.
          </p>

          {/* Size Options */}
          <div>
            <h2 className="font-semibold mb-2">Size</h2>
            <div className="flex gap-3">
              {["L", "XL", "XS"].map((size) => (
                <button
                  key={size}
                  className="px-4 py-2 border rounded-lg hover:bg-black hover:text-white transition"
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
              <span className="w-7 h-7 bg-purple-400 rounded-full cursor-pointer"></span>
              <span className="w-7 h-7 bg-black rounded-full cursor-pointer"></span>
              <span className="w-7 h-7 bg-yellow-400 rounded-full cursor-pointer"></span>
            </div>
          </div>

          {/* Quantity + Add to Cart */}
          <div className="flex items-center gap-5">
            <div className="flex items-center border rounded-lg">
              <button
                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                className="px-4 py-2"
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2"
              >
                +
              </button>
            </div>

            <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
