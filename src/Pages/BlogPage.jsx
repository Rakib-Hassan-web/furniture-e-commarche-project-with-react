import React from "react";
import { FaUser, FaCalendarAlt, FaTags } from "react-icons/fa";

import bredImg from '../assets/images/Rectangle 1.png'
import bredlogo from '../assets/images/Breadcrumblogo.png'
import BreadCrumb from "../Components/BreadCrumb";
import { Link } from "react-router";

const blogs = [
  {
    id: 1,
    img: "https://picsum.photos/600/400?random=1",
    author: "Admin",
    date: "16 Oct 2025",
    category: "Wood",
    title: "Going all-in with millennial design",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat saepe incidunt labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae placeat voluptas.",
  },
  {
    id: 2,
    img: "https://picsum.photos/600/400?random=2",
    author: "Admin",
    date: "16 Oct 2025",
    category: "Handmade",
    title: "Exploring new ways of decorating",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat saepe incidunt labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae placeat voluptas.",
  },
  {
    id: 3,
    img: "https://picsum.photos/600/400?random=3",
    author: "Admin",
    date: "16 Oct 2025",
    category: "Wood",
    title: "Handmade pieces that took time to make",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat saepe incidunt labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae placeat voluptas.",
  },
];

export default function BlogPage() {
  return (
<>
{/* ------------breadcrumb st----------- */}

       <div className='w-[2000px] h-[316px]'>
            <img src={bredImg} alt="bredbg" className=' w-[2000px] h-[316px] relative' />
            <div className=' absolute top-[20%] right-[45%] flex flex-col items-center  z-20'>

                <div>
                    <img src={bredlogo} alt="" />
                </div>
                <h2 className='text-[48px] font-medium text-black font-main mt-[-20px]'>Blogs</h2>

            <BreadCrumb BreadLink={'/BlogPage'} BreadContent={'BlogPage'} />
            </div>
        </div>

        {/* ------------breadcrumb end----------- */}


    <div className="max-w-4xl mx-auto px-4 py-10 space-y-10">
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="bg-white rounded-2xl shadow-md overflow-hidden"
        >
          <img
            src={blog.img}
            alt={blog.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-6 space-y-4">
            {/* Meta info */}
            <div className="flex items-center gap-6 text-sm text-gray-500 font-main">
              <span className="flex items-center gap-2">
                <FaUser /> {blog.author}
              </span>
              <span className="flex items-center gap-2">
                <FaCalendarAlt /> {blog.date}
              </span>
              <span className="flex items-center gap-2">
                <FaTags /> {blog.category}
              </span>
            </div>

            {/* --------Title----------- */}
            <h2 className="text-xl font-semibold font-main">{blog.title}</h2>

            {/*-------- Description ----------*/}
            <p className="text-gray-600 font-main">{blog.desc}</p>

            {/*------------ Button ----------*/}
            <Link  className="text-blue-600 hover:underline font-medium font-main">
              Read more
            </Link>
          </div>
        </div>
      ))}
     
    </div>
    </>
  );
}
