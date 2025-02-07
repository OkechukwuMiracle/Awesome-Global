// import React from 'react'
import Navbar from "../Navbar/Navbar";
import Category from "./category";
import Notification from "../Notification/notification";
import Footer from "../Footer/footer";
import S1 from "../../assets/zealot-S1.jpeg";
import S27 from "../../assets/zealot-S27.jpg";
import S31 from "../../assets/zealot-S31.jpeg";
import S32 from "../../assets/zealot-S32.jpeg";
import S38 from "../../assets/zealot-S38.jpeg";
import S51 from "../../assets/zealot-S51.webp";
import S53 from "../../assets/zealot-S53.jpeg";
import S56 from "../../assets/zealot-S56.webp";
import S61 from "../../assets/zealot-S61bt.png";
import S64 from "../../assets/zealot-S64.webp";
import S67 from "../../assets/zealot-S67bt.png";
import S78 from "../../assets/zealot-S78.jpeg";
import S79 from "../../assets/zealot-S79.jpeg";
import S87 from "../../assets/zealot-S87.jpeg";
import S98 from "../../assets/zealot-S98.webp";
import { FaStar } from "react-icons/fa";

const zealot = () => {
  // data to store images
  const zealotSpeakers = [
    { id: 1, name: "S1", image: S1 },
    { id: 2, name: "S27", image: S27 },
    { id: 3, name: "S31", image: S31 },
    { id: 4, name: "S32", image: S32 },
    { id: 5, name: "S38", image: S38 },
    { id: 6, name: "S51", image: S51 },
    { id: 7, name: "S53", image: S53 },
    { id: 8, name: "S56", image: S56 },
    { id: 9, name: "S61", image: S61 },
    { id: 10, name: "S64", image: S64 },
    { id: 11, name: "S67", image: S67 },
    { id: 12, name: "S78", image: S78 },
    { id: 13, name: "S79", image: S79 },
    { id: 14, name: "S87", image: S87 },
    { id: 15, name: "S98", image: S98 },
  ];

  return (
    <div className="dark:bg-black mb-3 overflow-hidden">
      <Notification />
      <Navbar />
      <Category />
      <div className="px-8 pt-5 mb-5">
        <h1 className="text-2xl font-bold md:w-1/2 lg:w-1/4 p-2 bg-blue-400 text-center rounded-xl drop-shadow-xl">
          Zealot Bluetooth Speaker
        </h1>
        <div className="flex flex-wrap gap-5 justify-between w-11/12 mt-5 mx-auto">
          {zealotSpeakers.map((item) => (
            <div
              key={item.id}
              className="w-5/12 sm:w-1/4 md:w-1/4 rounded-lg border-gray-500 drop-shadow-md"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full object-cover rounded-xl"
              />
              <div className="flex items-center justify-between ">
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

export default zealot;
