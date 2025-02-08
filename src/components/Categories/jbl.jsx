// import React from 'react'
import Notification from '../Notification/notification'
import Navbar from '../Navbar/Navbar'
import Category from './category'
import Footer from '../Footer/footer'
import jbl_1 from "../../assets/jbl-1.jpg"
import jbl_boombox from "../../assets/jbl-boombox.jpg"
import jbl_clip_4 from "../../assets/jbl-clip-4.jpg"
import jbl_clip_3 from "../../assets/jbl-clip3.jpg"
import jbl_flip_5 from "../../assets/jbl-flip-5.jpg"
import jbl_flip_6 from "../../assets/JBL-flip6.jpg"
import jbl_go_2 from "../../assets/jbl-go-2.webp"
import jbl_partybox  from "../../assets/JBL-party-box.jpg"
import jbl_partybox_310 from "../../assets/jbl-partybox-310.jpg"
import jbl_pulse_4 from "../../assets/jbl-pulse-4.jpg"
import jbl_pulse_5 from "../../assets/jbl-pulse-5.webp"
import { FaStar } from "react-icons/fa";

const jbl = () => {
    const jbl = [
        { id: 1, name: "JBL 1", image: jbl_1 },
        // { id: 2, name: "JBL Boombox 2", image: jbl_boombox_2 },
        { id: 3, name: "JBL Boombox", image: jbl_boombox },
        { id: 4, name: "JBL Clip 4", image: jbl_clip_4 },
        { id: 5, name: "JBL Clip 3", image: jbl_clip_3 },
        { id: 6, name: "JBL Flip 5", image: jbl_flip_5 },
        { id: 7, name: "JBL Flip 6", image: jbl_flip_6 },
        { id: 8, name: "JBL Go 2", image: jbl_go_2 },
        { id: 9, name: "JBL Party Box", image: jbl_partybox },
        { id: 10, name: "JBL Party Box 310", image: jbl_partybox_310 },
        { id: 11, name: "JBL Pulse 4", image: jbl_pulse_4 },
        { id: 4, name: "JBL Clip 5", image: jbl_clip_4 },
        { id: 12, name: "JBL Pulse 5", image: jbl_pulse_5 },
    ]


  return (
    <div className='dark:bg-black mb-3 overflow-hidden'>
      <Notification/>
      <Navbar/>
      <Category/>
      <div className="px-8 pt-5 ">
        <h1 className="text-2xl font-bold md:w-1/2 lg:w-1/4 p-2 bg-blue-400 text-center rounded-xl drop-shadow-xl">
          JBL Bluetooth Speaker
        </h1>
        <div className="flex flex-wrap gap-5 justify-between w-11/12 mt-5 mx-auto mb-3">
          {jbl.map((item) => (
            <div key={item.id} className="w-5/12 sm:w-1/4 md:w-1/4 rounded-lg border-gray-500 drop-shadow-md">
              <img src={item.image} alt={item.name}  className="w-full object-cover rounded-xl" />
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
      <Footer/> 
    </div>
  )
}

export default jbl
