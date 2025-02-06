// import React from 'react'
import Notification from '../Notification/notification'
import Navbar from '../Navbar/Navbar'
import Category from './category'
import Footer from '../Footer/footer'
import S25 from "../../assets/s25.jpg"
import S26 from "../../assets/s26.jpeg"
import S29 from "../../assets/S29.jpg"
import S31 from "../../assets/s31.jpg"
import S36 from "../../assets/s36.jpg"
import S39 from "../../assets/s39.jpg"
import S158 from "../../assets/s158.jpg"
import S813 from "../../assets/s813.jpg"
import S816 from "../../assets/s816.jpg"
import S818 from "../../assets/s818.jpg"
import S819 from "../../assets/s819.webp"
import S881 from "../../assets/s881.jpg"
import S882 from "../../assets/s882.jpg"
import S918 from "../../assets/s918.jpg"
import S1000 from "../../assets/s1000.webp"
import S2035 from "../../assets/s2035.jpg"
import Su_H5 from "../../assets/su-h5.jpg"
import { FaStar } from "react-icons/fa";

const koleer = () => {
    const koleer = [
        { id: 1, name: "S25", image: S25},
        { id: 2, name: "S26", image: S26},
        { id: 3, name: "S29", image: S29},
        { id: 4, name: "S31", image: S31},
        { id: 5, name: "S36", image: S36},
        { id: 6, name: "S39", image: S39},
        { id: 7, name: "S158", image: S158},
        { id: 8, name: "S813", image: S813},
        { id: 9, name: "S816", image: S816},
        { id: 10, name: "S818", image: S818},
        { id: 11, name: "S819", image: S819},
        { id: 12, name: "S881", image: S881},
        { id: 13, name: "S882", image: S882},
        { id: 14, name: "S918", image: S918},
        { id: 15, name: "S1000", image: S1000},
        { id: 16, name: "S2035", image: S2035},
        { id: 17, name: "Su-H5", image: Su_H5},
        { id: 18, name: "S26", image: S26}
    ]



  return (
    <div className='dark:bg-black overflow-hidden'>
        <Notification />
        <Navbar />
        <Category />
         <div className="px-8 pt-5 ">
                <h1 className="text-2xl font-bold md:w-1/2 lg:w-1/4 p-2 bg-blue-400 text-center rounded-xl drop-shadow-xl">
                  Koleer Bluetooth Speaker
                </h1>
                <div className="flex flex-wrap gap-5 justify-between w-11/12 mt-5 mx-auto mb-5">
                  {koleer.map((item) => (
                    <div
                      key={item.id}
                      className="w-5/12 sm:w-1/4 md:w-1/4 rounded-lg border-gray-500 drop-shadow-md"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-36 md:h-56 object-cover rounded-xl"
                      />
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

export default koleer
