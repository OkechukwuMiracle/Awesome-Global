// import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";

const whatsapp = () => {
  const whatsappLink = "https://wa.me/message/IFKMFWFWIJNXO1";

  return (
    <div className="relative group ">
      <div className=" fixed  right-0 bottom-5 bg-slate-800 rounded-full">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:text-green-600 text-4xl"
        >
          <IoLogoWhatsapp size={40} />
        </a>

        {/* Tooltip */}
        <div className="absolute right-9 -top-14 bg-gray-300 text-neutral font-bold text-sm rounded-md py-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md whitespace-nowrap">
          Hello Dear <br /> Welcome to Awesome Phones and Gadgets. <br /> Kindly
          send a message for more verifications.
        </div>
      </div>
    </div>
  );
};

export default whatsapp;
