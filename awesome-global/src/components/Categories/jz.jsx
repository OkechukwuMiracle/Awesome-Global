// import React from 'react'
import Notification from "../Notification/notification";
import Navbar from "../Navbar/Navbar";
import Category from "./category";
import Footer from "../Footer/footer";
import Jz_002 from "../../assets/jz-002.avif";
import Jz_004 from "../../assets/jz-004.jpg";
import Jz_005 from "../../assets/jz-005.jpg";
import Jz_006 from "../../assets/jz-006.jpg";
import Jz_9 from "../../assets/jz-9.jpg";
import Jz_012 from "../../assets/jz-012.jpg";
import Jz_111 from "../../assets/JZ-111.jpg";
import Jz_139 from "../../assets/jz-139.jpg";
import Jz_200 from "../../assets/jz-200.avif";
import Jz_333 from "../../assets/jz-333.jpg";
import Jz_380 from "../../assets/jz-380.jpg";
import Jz_400 from "../../assets/jz-400.jpg";
import Jz_888 from "../../assets/jz-888.jpg";
import Jz_1000 from "../../assets/jz-1000.jpg";
import Jz_1130 from "../../assets/jz-1130.jpg";
import { FaStar } from "react-icons/fa";

const jz = () => {
  const jz = [
    { name: "Jz-002", image: Jz_002 },
    { name: "Jz-004", image: Jz_004 },
    { name: "Jz-005", image: Jz_005 },
    { name: "Jz-006", image: Jz_006 },
    { name: "Jz-9", image: Jz_9 },
    { name: "Jz-012", image: Jz_012 },
    { name: "Jz-111", image: Jz_111 },
    { name: "Jz-139", image: Jz_139 },
    { name: "Jz-200", image: Jz_200 },
    { name: "Jz-333", image: Jz_333 },
    { name: "Jz-380", image: Jz_380 },
    { name: "Jz-400", image: Jz_400 },
    { name: "Jz-888", image: Jz_888 },
    { name: "Jz-1000", image: Jz_1000 },
    { name: "Jz-1130", image: Jz_1130 },
  ];

  return (
    <div className="dark:bg-black mb-3 overflow-hidden">
      <Notification />
      <Navbar />
      <Category />
      <div className="px-8 pt-5 ">
        <h1 className="text-2xl font-bold md:w-1/2 lg:w-1/4 p-2 bg-blue-400 text-center rounded-xl drop-shadow-xl">
          Jz Bluetooth Speaker
        </h1>
        <div className="flex flex-wrap gap-5 justify-between w-11/12 mt-5 mx-auto mb-5">
          {jz.map((item) => (
            <div
              key={item.name}
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
  );
};

export default jz;
