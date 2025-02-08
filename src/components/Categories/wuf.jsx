// import React from 'react'
import Notification from "../Notification/notification";
import Navbar from "../Navbar/Navbar";
import Category from "./category";
import Footer from "../Footer/footer";
import W2 from "../../assets/W2.jpg";
import W15 from "../../assets/w15.jpg";
import W18 from "../../assets/W18.jpg";
import W21 from "../../assets/W21.jpg";
import W22 from "../../assets/W22.jpg";
import W32 from "../../assets/W32.jpg";
import W33 from "../../assets/W33.jpg";
import W35 from "../../assets/W35.jpg";
import W37 from "../../assets/W37.jpg";
import WUF_F1 from "../../assets/WUF-F1.jpg";
import W15sun from "../../assets/W15sun.jpeg";
import WUF_F05s from "../../assets/WUF-F05s.jpg";
import { FaStar } from "react-icons/fa";

const wuf = () => {
  const wuf = [
    { id: 1, name: "W2", image: W2 },
    { id: 2, name: "W15", image: W15 },
    { id: 3, name: "W18", image: W18 },
    { id: 4, name: "W21", image: W21 },
    { id: 5, name: "W22", image: W22 },
    { id: 6, name: "W32", image: W32 },
    { id: 7, name: "W33", image: W33 },
    { id: 8, name: "W35", image: W35 },
    { id: 9, name: "W37", image: W37 },
    { id: 10, name: "WUF_F1", image: WUF_F1 },
    { id: 10, name: "W15sun", image: W15sun },
    { id: 11, name: "WUF_F05s", image: WUF_F05s },
  ];

  return (
    <div className="dark:bg-black overflow-hidden">
      <Notification />
      <Navbar />
      <Category />
      <div className="px-8 pt-5 ">
        <h1 className="text-2xl font-bold md:w-1/2 lg:w-1/4 p-2 bg-blue-400 text-center rounded-xl drop-shadow-xl">
          WUF Bluetooth Speaker
        </h1>
        <div className="flex flex-wrap gap-5 justify-between w-11/12 mt-5 mx-auto mb-5">
          {wuf.map((item) => (
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
  );
};

export default wuf;
