import Notification from '../Notification/notification'
import Navbar from '../Navbar/Navbar'
import Category from './category'
import Footer from '../Footer/footer'
import Tg_148 from "../../assets/tg-148.jpg"
import Tg_179 from "../../assets/TG-179.jpg"
import Tg_392 from "../../assets/tg-392.avif"
import Tg_421 from "../../assets/tg-421.avif"
import Tg_113 from "../../assets/tg113.webp"
import Tg_115 from "../../assets/tg115.jpg"
import Tg_120 from "../../assets/tg120.jpg"
import Tg_145 from "../../assets/tg145.jpg"
import Tg_152 from "../../assets/tg152.jpg"
import Tg_184 from "../../assets/tg184.jpg"
import Tg_373 from "../../assets/tg373.jpg"
import Tg_509 from "../../assets/tg509.jpg"
import Tg_527 from "../../assets/tg527.jpg"
import Tg_531 from "../../assets/tg531.jpg"
import Tg_656 from "../../assets/tg656.jpg"
import Tg_657 from "../../assets/tg657.jpg"
import Tg_672 from "../../assets/tg672.jpg"
import { FaStar } from "react-icons/fa";


const tg = () => {
    const Tg = [
        { id: 1, name: "Tg_148", image: Tg_148},
        { id: 2, name: "Tg_179", image: Tg_179},
        { id: 3, name: "Tg_392", image: Tg_392},
        { id: 4, name: "Tg_421", image: Tg_421},
        { id: 5, name: "Tg_113", image: Tg_113},
        { id: 6, name: "Tg_115", image: Tg_115},
        { id: 7, name: "Tg_120", image: Tg_120},
        { id: 8, name: "Tg_145", image: Tg_145},
        { id: 9, name: "Tg_152", image: Tg_152},
        { id: 10, name: "Tg_184", image: Tg_184},
        { id: 11, name: "Tg_373", image: Tg_373},
        { id: 12, name: "Tg_509", image: Tg_509},
        { id: 13, name: "Tg_527", image: Tg_527},
        { id: 14, name: "Tg_531", image: Tg_531},
        { id: 15, name: "Tg_656", image: Tg_656},
        { id: 16, name: "Tg_657", image: Tg_657},
        { id: 17, name: "Tg_115", image: Tg_115},
        { id: 18, name: "Tg_672", image: Tg_672},
    ]


  return (
    <div className='dark:bg-black overflow-hidden'>
      <Notification />
        <Navbar />
        <Category />
        <div className="px-8 pt-5 ">
                        <h1 className="text-2xl font-bold md:w-1/2 lg:w-1/4 p-2 bg-blue-400 text-center rounded-xl drop-shadow-xl">
                          Tg Bluetooth Speaker
                        </h1>
                        <div className="flex flex-wrap gap-5 justify-between w-11/12 mt-5 mx-auto mb-5">
                          {Tg.map((item) => (
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

export default tg
