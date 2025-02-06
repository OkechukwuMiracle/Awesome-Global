// import React from 'react'
import Navbar from "../Navbar/Navbar";
import Zealot from "../../assets/zealot-S67bt.png";
import Category from "../Categories/category";
import X922 from "../../assets/x-811.jpg"
import Notification from "../Notification/notification"
import Footer from "../Footer/footer"
import { FaShippingFast } from "react-icons/fa";
import { RiCustomerServiceLine } from "react-icons/ri";
import { SiAdguard } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import Menu from "../Menu/menu"
import Whatsapp from "../WhatsappLink/whatsapp";


const home = () => {
  const navigate = useNavigate()

  return (
    <div className="pb-5 bg-black overflow-hidden">
      <Notification />
      <Navbar />
      <Menu />
      <div className="bg-black w-full h-full lg:flex border-b-2 border-b-gray-200 pb-5">
        <div className="lg:pt-48 md:pt-14 pt-8 text-center lg:text-start px-8 w-ful">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight lg:text-start text-center text-white ">
            Portable Wireless <br /> Speaker
          </h1>
          <p className="font-bold text-lg md:w-full lg:w-2/3 pt-3 text-center lg:text-start text-pretty text-gray-500">
            Setting the bar as one of the loudest speakers in its class, the
            model Zealot-S67 is a compact, stout-hearted hero with a well
            balanced audience which boasts a clear midrange and extended highs
            for a sound.
          </p>
          <button onClick={()=> navigate('/products')} className=" mt-6 border-b-2 border-red-500 font-bold m-auto text-red-500 hover:text-gray-600 dark:text-yellow-600 dark:border-yellow-600">
            View More
          </button>
        </div>
        <div className=" w-full flex items-center justify-center mt-5 lg:mt-0">
          <img src={Zealot} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
      <Category/>
      <div className="w-11/12 sm:h-96  sm:flex  m-auto bg-red-100">
        <div className="sm:w-2/5">
          <img src={X922} alt="" className="w-full h-full " />
        </div>
        <div className="sm:w-3/5 sm:pt-24 pb-4">
            <h3 className="text-center text-xl font-bold pt-5">New arrivals</h3>
            <p className="text-center text-4xl font-bold pt-2">Model: X-811</p>
            <p onClick={()=> navigate("/newarrivals")} className="w-2/6 lg:w-1/6 py-3 px-2 m-auto mt-8  text-center font-bold text-lg bg-green-400 rounded-xl drop-shadow-lg cursor-pointer hover:bg-green-300">View More</p>
        </div>
      </div>
      <div className="md:flex justify-between items-center gap-5 text-center w-full px-20 py-16">
        <div className="mb-4">
        <div className="bg-white w-14 h-14 m-auto rounded-full items-center flex  pb-2 mb-3"><FaShippingFast className="w-16 m-auto mb-3 text-black" /></div>
        <h5 className="font-bold text-white">FREE AND FAST DELIVERY</h5>
        <p className="font-bold text-gray-500" >Free delivery for all others over #500k</p>
        </div>
        <div className="mb-4">
        <div className="bg-white w-14 h-14 m-auto rounded-full items-center flex  pb-2  mb-3"><RiCustomerServiceLine className="w-16 m-auto mb-3 text-black"/></div>
        <h5 className="font-bold text-white">24/7 CUSTOMER SERVICE</h5>
        <p className="font-bold text-gray-500" >Friendly 24/7 customer support</p>
        </div>
        <div className="mb-4">
        <div className="bg-white w-14 h-14 m-auto rounded-full items-center flex  pb-2  mb-3"><SiAdguard className="w-16 m-auto mb-3 text-black"/></div>
        <h5 className="font-bold text-white">MONEY BANK GUARANTEE</h5>
        <p className="font-bold text-gray-500" >Free delivery for all others over #500k</p>
        </div>
      </div>
      <Whatsapp />
      <Footer/>
    </div>
  );
};

export default home;
