import React from 'react'
import BreadCrumb from '../Components/BreadCrumb'
import bredImg from '../assets/images/Rectangle 1.png'
import bredlogo from '../assets/images/Breadcrumblogo.png'

const CheckOutPage = () => {
  return (
    <>
      {/* ------------breadcrumb start----------- */}
      <div className='relative w-full h-[316px] sm:h-[220px]'>
        <img src={bredImg} alt="bredbg" className='w-full h-full object-cover' />
        <div className='absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20'>
          <img src={bredlogo} alt="" className='w-20 sm:w-16' />
          <h2 className='text-[48px] sm:text-3xl md:text-4xl font-medium text-black font-main mt-[-10px]'>CheckOut</h2>
          <BreadCrumb BreadLink={'/CheckOutPage'} BreadContent={'CheckOutPage'} />
        </div>
      </div>
      {/* ------------breadcrumb end----------- */}

      <div className="container mx-auto px-4 sm:px-6 md:px-10 py-12">

        <div className='flex flex-col lg:flex-row gap-12 lg:gap-8'>

          {/* Left Side - Billing Details */}
          <div className='flex-1 flex flex-col gap-6'>
            <h2 className='text-2xl md:text-3xl font-semibold font-main text-black'>Billing Details</h2>

            <div className='flex flex-col md:flex-row gap-4'>
              <div className='flex-1'>
                <label className='text-sm font-medium font-main text-black'>First Name</label>
                <input className='w-full h-16 mt-2 rounded-lg border border-gray-300 px-4 outline-none' type="text" />
              </div>
              <div className='flex-1'>
                <label className='text-sm font-medium font-main text-black'>Last Name</label>
                <input className='w-full h-16 mt-2 rounded-lg border border-gray-300 px-4 outline-none' type="text" />
              </div>
            </div>

            <div className='flex flex-col gap-4'>
              {[
                "Company Name (Optional)",
                "Country / Region",
                "Street Address",
                "Town / City",
                "Province",
                "ZIP Code",
                "Phone",
                "Email Address",
              ].map((item, index) => (
                <div key={index}>
                  <label className='text-sm font-medium font-main text-black'>{item}</label>
                  <input className='w-full h-16 mt-2 rounded-lg border border-gray-300 px-4 outline-none' type="text" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Order Summary */}
          <div className='flex-1 flex flex-col gap-6'>
            <div className='border-b pb-4'>
              <div className='flex justify-between items-center mb-2'>
                <h3 className='text-lg font-medium font-main text-black'>Product</h3>
                <h3 className='text-lg font-medium font-main text-black'>Subtotal</h3>
              </div>
              <div className='flex justify-between items-center mb-2'>
                <p className='text-gray-500 text-sm font-main'>Asgaard sofa <span className='text-black font-medium text-xs'>x 1</span></p>
                <p className='text-black font-light text-sm'>Rs. 250,000.00</p>
              </div>
              <div className='flex justify-between items-center mb-2'>
                <p className='text-black text-sm font-main'>Subtotal</p>
                <p className='text-black text-sm font-light'>Rs. 250,000.00</p>
              </div>
              <div className='flex justify-between items-center'>
                <p className='text-black text-sm font-main'>Total</p>
                <h3 className='text-lg md:text-xl font-bold text-amber-500'>Rs. 250,000.00</h3>
              </div>
            </div>

            <div className='flex flex-col gap-3'>
              {["Direct Bank Transfer", "Check Payments", "PayPal"].map((item, idx) => (
                <label key={idx} className='flex items-center gap-3 text-gray-700 text-sm font-main'>
                  <input type="checkbox" />
                  {item}
                </label>
              ))}
            </div>

            <p className='text-gray-500 text-sm'>
              Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='font-semibold'>privacy policy.</span>
            </p>

            <button className='w-full md:w-auto py-4 px-8 text-base font-main text-black border rounded-lg hover:bg-amber-100 hover:scale-105 transition duration-300'>
              Place Order
            </button>

          </div>

        </div>

      </div>
    </>
  )
}

export default CheckOutPage
