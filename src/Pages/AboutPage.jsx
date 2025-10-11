import React from "react";
import { FaBullseye, FaEye, FaHeart } from "react-icons/fa";
import BreadCrumb from "../Components/BreadCrumb";
import bredImg from '../assets/images/Rectangle 1.png'
import bredlogo from '../assets/images/Breadcrumblogo.png'
import { Link } from "react-router";

export default function AboutPage() {
  return (
    <>
      {/* ------------breadcrumb start----------- */}
      <div className='relative w-full h-[316px] sm:h-[250px]'>
        <img src={bredImg} alt="bredbg" className='w-full h-full object-cover' />
        <div className='absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20'>
          <img src={bredlogo} alt="" className='w-20 sm:w-16 md:w-20' />
          <h2 className='text-[48px] sm:text-3xl md:text-4xl font-medium text-black font-main mt-[-10px]'>About</h2>
          <BreadCrumb BreadLink={'/AboutPage'} BreadContent={'AboutPage'} />
        </div>
      </div>
      {/* ------------breadcrumb end----------- */}

      <div className="bg-gray-50 min-h-screen px-4 sm:px-6 md:px-10">

        {/* Hero Section */}
        <section className="text-center py-16 px-2 sm:px-6 text-black">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-main">About Us</h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg font-main">
            We are passionate about crafting beautiful designs and building
            products that inspire people around the world.
          </p>
        </section>

        {/* About Text */}
        <section className="max-w-4xl mx-auto px-2 sm:px-6 py-12 text-center mt-5">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-semibold mb-4 font-main">Who We Are</h2>
          <p className="text-gray-600 text-base sm:text-lg font-main">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
            accusantium fugiat natus repellat magnam sint error eos, quibusdam
            autem veritatis necessitatibus dignissimos, earum, repellendus
            reiciendis. Our mission is to create meaningful digital experiences.
          </p>
        </section>

        {/* Mission - Vision - Values */}
        <section className="max-w-6xl mx-auto px-2 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition">
            <FaBullseye className="mx-auto text-4xl text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 font-main">Our Mission</h3>
            <p className="text-gray-600 text-base sm:text-sm md:text-base font-main">
              To provide high-quality products and services that bring value to
              our customers.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition">
            <FaEye className="mx-auto text-4xl text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 font-main">Our Vision</h3>
            <p className="text-gray-600 text-base sm:text-sm md:text-base font-main">
              To become a global leader in design and innovation by 2030.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition">
            <FaHeart className="mx-auto text-4xl text-pink-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2 font-main">Our Values</h3>
            <p className="text-gray-600 text-base sm:text-sm md:text-base font-main">
              Creativity, transparency, and customer satisfaction are our
              priorities.
            </p>
          </div>
        </section>

        {/* ------------------Team Section -------------*/}
        <section className="bg-gray-100 py-16 px-2 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-10 font-main">Meet Our Team</h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: "Rakibul Hasan", role: "Founder & CEO", img: "https://picsum.photos/200?random=1" },
              { name: "Jannatul Ferdous", role: "Lead Designer", img: "https://picsum.photos/200?random=2" },
              { name: "Mahmudul Karim", role: "Developer", img: "https://picsum.photos/200?random=3" },
            ].map((person, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition"
              >
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold font-main">{person.name}</h3>
                <p className="text-gray-500 font-main">{person.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* -------------------Call to Action ----------------*/}
        <section className="text-center py-12 px-2 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 font-main">Want to know more?</h2>
          <p className="text-gray-600 mb-6 text-base sm:text-lg font-main">
            Get in touch with us to explore how we can work together.
          </p>
          <Link to={'/ContactPage'} className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition font-main">
            Contact Us
          </Link>
        </section>

      </div>
    </>
  );
}
