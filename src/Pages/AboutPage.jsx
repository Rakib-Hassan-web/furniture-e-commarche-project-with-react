import React from "react";
import { FaBullseye, FaEye, FaHeart } from "react-icons/fa";
import BreadCrumb from "../Components/BreadCrumb";
import bredImg from '../assets/images/Rectangle 1.png'
import bredlogo from '../assets/images/Breadcrumblogo.png'
import { Link } from "react-router";

export default function AboutPage() {
  return (
<>

{/* ------------breadcrumb st----------- */}
    <div className='w-[2000px] h-[316px]'>
            <img src={bredImg} alt="bredbg" className=' w-[2000px] h-[316px] relative' />
            <div className=' absolute top-[20%] right-[45%] flex flex-col items-center  z-20'>

                <div>
                    <img src={bredlogo} alt="" />
                </div>
                <h2 className='text-[48px] font-medium text-black font-main mt-[-20px]'>About</h2>

            <BreadCrumb BreadLink={'/AboutPage'} BreadContent={'AboutPage'} />
            </div>
        </div>
{/* ------------breadcrumb end----------- */}

    <div className="bg-gray-50 min-h-screen">

      <div className="flex items-center justify-around pl-25">
      {/* Hero Section */}
      <section className="text-center py-16 px-6  text-black">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-main">About Us</h1>
        <p className="max-w-2xl mx-auto text-lg font-main">
          We are passionate about crafting beautiful designs and building
          products that inspire people around the world.
        </p>
      </section>

      {/* About Text */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center mt-5">
        <h2 className="text-4xl font-semibold mb-4 font-main">Who We Are</h2>
        <p className="text-gray-600 font-main">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
          accusantium fugiat natus repellat magnam sint error eos, quibusdam
          autem veritatis necessitatibus dignissimos, earum, repellendus
          reiciendis. Our mission is to create meaningful digital experiences.
        </p>
      </section>
</div>
      {/* Mission - Vision - Values */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition">
          <FaBullseye className="mx-auto text-4xl text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2 font-main">Our Mission</h3>
          <p className="text-gray-600 font-main">
            To provide high-quality products and services that bring value to
            our customers.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition">
          <FaEye className="mx-auto text-4xl text-indigo-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2 font-main">Our Vision</h3>
          <p className="text-gray-600 font-main">
            To become a global leader in design and innovation by 2030.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition">
          <FaHeart className="mx-auto text-4xl text-pink-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2 font-main">Our Values</h3>
          <p className="text-gray-600 font-main">
            Creativity, transparency, and customer satisfaction are our
            priorities.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-2xl font-semibold text-center mb-10 font-main">Meet Our Team</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
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

      {/* Call to Action */}
      <section className="text-center py-12 px-6">
        <h2 className="text-2xl font-semibold mb-4 font-main">Want to know more?</h2>
        <p className="text-gray-600 mb-6 font-main">
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
