// import React from 'react'
import Notification from '../Notification/notification'
import Navbar from '../Navbar/Navbar'
import Category from './category'
import Footer from '../Footer/footer'
import F_9j from "../../assets/f-9j.webp"
import F_26 from "../../assets/f-26.webp"
import F_98 from "../../assets/f-98.jpg"
import F_119 from "../../assets/f-119.jpg"
import F_126 from "../../assets/f-126.jpg"
import F_311 from "../../assets/f-311.jpg"
import F_1068 from "../../assets/f-1068.jpeg"
import F_3008 from "../../assets/f-3008.jpg"
import F_4206 from "../../assets/f-4206.avif"
import F_8288 from "../../assets/f-8288.webp"
import F_magixx from "../../assets/f-magixx.jpg"
import F_Q3 from "../../assets/f-q3.avif"
import F_Qlason from "../../assets/f-qlason.jpg"
import F_S291 from "../../assets/f-s291.jpg"
import F_U6 from "../../assets/f-u6.jpg"
import F_X5 from "../../assets/f-x5.jpg"
import F_39 from "../../assets/f-39.jpg"
import F_82 from "../../assets/HF-F82.jpg"
import F_96 from "../../assets/hf-f96.jpg"
import F_101 from "../../assets/HF-F101.jpg"
import HK11 from "../../assets/HK11.png"
import HK12 from "../../assets/HK12.jpg"
import { FaStar } from "react-icons/fa";

const h_f = () => {
    const H_F = [
      {name: "F-9J", image: F_9j},
      {name: "F-26", image: F_26},
      {name: "F-98", image: F_98},
      {name: "F-119", image: F_119},
      {name: "F-126", image: F_126},
      {name: "F-311", image: F_311},
      {name: "F-1068", image: F_1068},
      {name: "F-3008", image: F_3008},
      {name: "F-4206", image: F_4206},
      {name: "F-8288", image: F_8288},
      {name: "F-Magixx", image: F_magixx},
      {name: "F-Q3", image: F_Q3},
      {name: "F-Qlason", image: F_Qlason},
      {name: "F-S291", image: F_S291},
      {name: "F-U6", image: F_U6},
      {name: "F-X5", image: F_X5},
      {name: "HF-F39", image: F_39},
      {name: "HF-F82", image: F_82},
      {name: "HF-F96", image: F_96},
      {name: "HF-F101", image: F_101},
      {name: "HK11", image: HK11},
      {name: "HK12", image: HK12},
    ]



  return (
    <div className='dark:bg-black mb-3 overflow-hidden'>
       <Notification />
      <Navbar />
      <Category />
      <div className="px-8 pt-5 ">
        <h1 className="text-2xl font-bold md:w-1/2 lg:w-1/4 p-2 bg-blue-400 text-center rounded-xl drop-shadow-xl">
          HF Bluetooth Speaker
        </h1>
        <div className="flex flex-wrap gap-5 justify-between w-11/12 mt-5 mx-auto mb-3">
          {H_F.map((item) => (
            <div key={item.id} className="w-5/12 sm:w-1/4 md:w-1/4 rounded-lg border-gray-500 drop-shadow-md">
              <img src={item.image} alt={item.name}  className="w-full h-36 md:h-56 object-cover rounded-xl" />
              <div className="lg:flex items-center justify-between ">
                <p className="font-bold text-2xl text-white">
                  {item.name}{" "}
                </p>
                <div className="flex">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      
      
    </div>
  )
}

export default h_f

