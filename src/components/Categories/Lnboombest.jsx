// import React from 'react'
import Notification from "../Notification/notification";
import Navbar from "../Navbar/Navbar";
import Category from "./category";
import Footer from "../Footer/footer";
import Ln_24 from "../../assets/Ln-24.jpg";
import Ln_816baba from "../../assets/LN-816baba.jpg";
import Ln_826 from "../../assets/Ln-826.jpg";
import Ln_836 from "../../assets/Ln-836.jpg";
import Ln_856 from "../../assets/LN-856BT.jpg";
import Ln_1007 from "../../assets/LN-1007BT.jpg";
import Ln_1008 from "../../assets/LN-1008BT.jpg";
import Ln_1009 from "../../assets/Ln-1009.jpg";
import Ln_1016 from "../../assets/LN-1016BT.jpg";
import Ln_1016mini from "../../assets/LN-1016mini.jpg";
import Ln_1028 from "../../assets/Ln-1028.jpg";
import Ln_1316 from "../../assets/LN-1316BT.jpg";
import Ln_A168 from "../../assets/Ln-a168.webp";
import { FaStar } from "react-icons/fa";

const Lnboombest = () => {
  const boombest = [
    { id: 1, name: "Ln_24", image: Ln_24 },
    { id: 2, name: "Ln_816baba", image: Ln_816baba },
    { id: 3, name: "Ln_826", image: Ln_826 },
    { id: 4, name: "Ln_836", image: Ln_836 },
    { id: 5, name: "Ln_856", image: Ln_856 },
    { id: 6, name: "Ln_1007", image: Ln_1007 },
    { id: 7, name: "Ln_1008", image: Ln_1008 },
    { id: 8, name: "Ln_1009", image: Ln_1009 },
    { id: 9, name: "Ln_1016", image: Ln_1016 },
    { id: 10, name: "Ln_1016mini", image: Ln_1016mini },
    { id: 11, name: "Ln_1028", image: Ln_1028 },
    { id: 12, name: "Ln_1316", image: Ln_1316 },
    { id: 13, name: "Ln_A168", image: Ln_A168 },
  ];

  return (
    <div className="dark:bg-black mb-3 overflow-hidden">
      <Notification />
      <Navbar />
      <Category />
      <div className="px-8 pt-5 ">
        <h1 className="text-2xl font-bold md:w-1/2 lg:w-1/4 p-2 bg-blue-400 text-center rounded-xl drop-shadow-xl">
          Ln Bluetooth Speaker
        </h1>
        <div className="flex flex-wrap gap-5 justify-between w-11/12 mt-5 mx-auto mb-5">
          {boombest.map((item) => (
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

export default Lnboombest;
