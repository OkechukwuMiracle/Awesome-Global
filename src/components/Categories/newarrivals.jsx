import Navbar from "../Navbar/Navbar";
import Category from "./category";
import Notification from "../Notification/notification";
import Footer from "../Footer/footer";
import X521 from "../../assets/x-521.jpg"
import X528 from "../../assets/x-528.jpg"
import X811 from "../../assets/x-811.jpg"
import X822 from "../../assets/x-822.jpg"
import X922 from "../../assets/x-922.jpg"
import { FaStar } from "react-icons/fa";
import HK11 from "../../assets/HK11.png"
import L11 from "../../assets/L11.jpg"

const newarrivals = () => {
        const newArrivals = [
            {id: 1 , name: "X-521", image: X521},
            {id: 2 , name: "X-528", image: X528},
            {id: 3 , name: "X-811", image: X811},
            {id: 4 , name: "X-822", image: X822},
            {id: 5 , name: "X-822", image: X922},
            {id: 5 , name: "Hk11", image: HK11},
            {id: 6 , name: "L11", image: L11},
        
        ]

    return (
        <div className="dark:bg-black">
            <Notification/>
            <Navbar />
            <Category />
            <div className="px-8 pt-5">
                    <h1 className="text-2xl font-bold md:w-1/2 lg:w-1/4 p-2 bg-blue-400 text-center rounded-xl drop-shadow-xl">
                      New Arrivals
                    </h1>
                    <div className="flex flex-wrap gap-5 justify-between w-11/12 my-5 mx-auto">
                      {newArrivals.map((item) => (
                        <div key={item.id} className="w-5/12 sm:w-1/4 md:w-1/4 rounded-lg border-gray-500 drop-shadow-md">
                          <img src={item.image} alt={item.name}  className="w-full object-cover rounded-xl" />
                         <div className="lg:flex items-center justify-between ">
                         <p className="font-bold text-2xl text-white">{item.name} </p>
                         <div className="flex">
                         <FaStar className="text-yellow-500"/>
                         <FaStar className="text-yellow-500"/>
                         <FaStar className="text-yellow-500"/>
                         <FaStar className="text-yellow-500"/>
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

export default newarrivals