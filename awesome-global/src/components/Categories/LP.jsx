import Notification from "../Notification/notification";
import Navbar from "../Navbar/Navbar";
import Category from "./category";
import Footer from "../Footer/footer";
import Lp_V8 from "../../assets/v8.jpg";
import Lp_V9 from "../../assets/v9.jpg";
import Lp_V13 from "../../assets/v13.jpg";
import Lp_V20 from "../../assets/v20.jpg";
import Lp_V35 from "../../assets/v35.jpg";
import Lp_V38 from "../../assets/v38.jpg";
import Lp_V39 from "../../assets/v39.jpg";
import Lp_V50 from "../../assets/v50.jpg";
import Lp_V57 from "../../assets/v57.jpg";
import Lp_V70 from "../../assets/v70.jpg";
import Lp_V83 from "../../assets/v83.jpg";
import { FaStar } from "react-icons/fa";

const Lp = () => {
  const Lp = [
    { id: 1, name: "V8", image: Lp_V8 },
    { id: 2, name: "V9", image: Lp_V9 },
    { id: 3, name: "V13", image: Lp_V13 },
    { id: 4, name: "V20", image: Lp_V20 },
    { id: 5, name: "V35", image: Lp_V35 },
    { id: 6, name: "V38", image: Lp_V38 },
    { id: 7, name: "V39", image: Lp_V39 },
    { id: 8, name: "V50", image: Lp_V50 },
    { id: 9, name: "V57", image: Lp_V57 },
    { id: 10, name: "V70", image: Lp_V70 },
    { id: 11, name: "V13", image: Lp_V13 },
    { id: 12, name: "V83", image: Lp_V83 },
  ];

  return (
    <div className="dark:bg-black overflow-hidden">
      <Notification />
      <Navbar />
      <Category />
      <div className="px-8 pt-5 ">
        <h1 className="text-2xl font-bold md:w-1/2 lg:w-1/4 p-2 bg-blue-400 text-center rounded-xl drop-shadow-xl">
          Lp Bluetooth Speaker
        </h1>
        <div className="flex flex-wrap gap-5 justify-between w-11/12 mt-5 mx-auto mb-5">
          {Lp.map((item) => (
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

export default Lp;
