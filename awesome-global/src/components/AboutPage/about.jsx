// import React from 'react'
// @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
import Notification from "../Notification/notification";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/footer";
import Ceo from "../../assets/awesome-ceo.jpg";
import { FaShippingFast } from "react-icons/fa";
import { RiCustomerServiceLine } from "react-icons/ri";
import { SiAdguard } from "react-icons/si";
import Menu from "../Menu/menu";
import Whatsapp from "../WhatsappLink/whatsapp";

const about = () => {
  return (
    <div className="pb-5 dark:bg-black overflow-hidden">
      <Notification />
      <Navbar />
      <Menu />
      <div className="w-full h-40 m-auto px-5 bg-[url('/assets/s819.webp')] bg-cover bg-center bg-no-repeat brightness-7">
        <div className="">
          <h1 className="text-5xl font-bold text-center text-red-700 pt-14 font-poppins">
            About Us
          </h1>
        </div>
      </div>
      <div className="lg:flex w-full p-4">
        <div className="lg:w-1/2 text-center pt-16">
          <h1 className="text-white pb-2 text-2xl font-bold">
            Awesome Phones And Gadgets
          </h1>
          <p className="text-sm text-gray-400">
            Your trusted destination for high-quality MP3 speakers! For the past
            three years, we’ve been on a mission to revolutionize the way people
            experience music. What began as a small idea has grown into a
            thriving business, thanks to our dedication to innovation, quality,
            and customer satisfaction. At Awesome Phones And Gadgets, we believe
            that great sound transforms everyday moments into extraordinary
            experiences. Whether it’s your favorite playlist, an inspiring
            podcast, or a movie night at home, our MP3 speakers are designed to
            deliver rich, immersive audio that amplifies every moment.{" "}
          </p>
          <p className="text-sm text-gray-400">
            What sets us apart is our unwavering focus on creating a brand that
            values trust, community, and innovation. As we’ve grown, we’ve also
            remained true to our vision of making high-performance audio
            accessible to everyone.
          </p>
        </div>
        <div className="lg:w-1/2 text-center pt-5 font-bold">
          <h1 className="text-white pb-2 text-2xl">Okechukwu C. Emmanuel</h1>
          <p className="text-blue-400 text-sm mb-6">
            CEO, Awesome Phones and Gadgets.
          </p>
          <img
            src={Ceo}
            alt=""
            className="w-96 m-auto h-96 object-cover rounded-full"
          />
        </div>
      </div>
      <div className="md:flex justify-between items-center gap-5 text-center w-full px-20 py-16">
        <div className="mb-4">
          <div className="bg-white w-14 h-14 m-auto rounded-full items-center flex  pb-2 mb-3">
            <FaShippingFast className="w-16 m-auto mb-3 text-black" />
          </div>
          <h5 className="font-bold text-white">FREE AND FAST DELIVERY</h5>
          <p className="font-bold text-gray-500">
            Free delivery for all others over #500k
          </p>
        </div>
        <div className="mb-4">
          <div className="bg-white w-14 h-14 m-auto rounded-full items-center flex  pb-2  mb-3">
            <RiCustomerServiceLine className="w-16 m-auto mb-3 text-black" />
          </div>
          <h5 className="font-bold text-white">24/7 CUSTOMER SERVICE</h5>
          <p className="font-bold text-gray-500">
            Friendly 24/7 customer support
          </p>
        </div>
        <div className="mb-4">
          <div className="bg-white w-14 h-14 m-auto rounded-full items-center flex  pb-2  mb-3">
            <SiAdguard className="w-16 m-auto mb-3 text-black" />
          </div>
          <h5 className="font-bold text-white">MONEY BANK GUARANTEE</h5>
          <p className="font-bold text-gray-500">
            Free delivery for all others over #500k
          </p>
        </div>
      </div>
      <Whatsapp />
      <Footer />
    </div>
  );
};

export default about;
