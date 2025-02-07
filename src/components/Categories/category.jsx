// import React from 'react'
import zealot from "../../assets/zealot-S61bt.png";
import Jbl_1 from "../../assets/jbl-1bt.png";
import HFbt from "../../assets/f-98.jpg";
import Jz_bass from "../../assets/jz-200.avif"
import Ln_boombest from "../../assets/Ln-1028.jpg"
import Koleer from "../../assets/S29.jpg"
import Lp from "../../assets/v35.jpg"
import TG from "../../assets/tg115.jpg"
import Wuf from "../../assets/W18.jpg"
import { useNavigate } from "react-router-dom";

const category = () => {
    const navigate = useNavigate();

  return (
    <div className="w-full px-8 py-4 bg-black">
        <div className="">
          <div className="flex gap-4">
            <span className="w-5 h-6 bg-red-600"></span>
            <p className="font-bold text-red-600 ">Categories</p>
          </div>
          <h3 className="font-bold text-3xl mt-3 text-white">
            Browse By Category
          </h3>
        </div>
        <div className="scroll overflow-x-auto whitespace-nowrap scrollabar-hide">
          <div className="inline-flex">
            <div className="flex justify-between items-center gap-5 mt-7">
              <div onClick={()=> navigate("/zealot")} className=" hover:bg-gray-300 border-gray-500 drop-shadow-md w-1/4 text-center bg-zinc-200 rounded-xl cursor-pointer">
                <div className="w-full flex items-center justify-center">
                  <img src={zealot} alt="" className="w-full" />
                </div>
                <p className="font-bold text-sm px-14 py-2 text-blue-600">Zealot</p>
              </div>

              <div className=" hover:bg-gray-300 border-gray-500 drop-shadow-md w-1/4 text-center bg-zinc-200 rounded-xl cursor-pointer">
                <div onClick={()=> navigate("/jbl")} className="w-full flex items-center justify-center">
                  <img src={Jbl_1 } alt="" className="w-full" />
                </div>
                <p className="font-bold text-lg px-16 py-2 text-blue-600">Jbl</p>
              </div>

              <div className=" hover:bg-gray-300 border-gray-500 drop-shadow-md w-1/4 text-center bg-zinc-200 rounded-xl cursor-pointer">
                <div onClick={()=> navigate("/h-f")} className="w-full flex items-center justify-center">
                  <img src={HFbt} alt="" className="w-full rounded-lg" />
                </div>
                <p className="font-bold text-md px-14 py-2 text-blue-600">H@F</p>
              </div>

              <div className=" hover:bg-gray-300 border-gray-500 drop-shadow-md w-1/4 text-center bg-zinc-200 rounded-xl cursor-pointer">
                <div onClick={()=> navigate("/jz")} className="w-full flex items-center justify-center">
                  <img src={Jz_bass} alt="" className="w-full rounded-lg" />
                </div>
                <p className="font-semibold text-lg px-14 py-2 text-blue-600">JS_JZ</p>
              </div>

              <div className=" hover:bg-gray-300 border-gray-500 drop-shadow-md w-1/4 text-center bg-zinc-200 rounded-xl cursor-pointer">
                <div onClick={()=> navigate("/lnboombest")} className="w-full flex items-center justify-center">
                  <img src={Ln_boombest} alt="" className="w-full rounded-lg" />
                </div>
                <p className="font-bold text-xl px-6 py-2 text-blue-600">BoomBest</p>
              </div>

              <div className=" hover:bg-gray-300 border-gray-500 drop-shadow-md w-1/4 text-center bg-zinc-200 rounded-xl cursor-pointer">
                <div onClick={()=> navigate("/koleer")} className="w-full flex items-center justify-center">
                  <img src={Koleer} alt="" className="w-full rounded-lg" />
                </div>
                <p className="font-bold text-lg px-11 py-2 text-blue-600">Koleer</p>
              </div>

              <div className=" hover:bg-gray-300 border-gray-500 drop-shadow-md w-1/4 text-center bg-zinc-200 rounded-xl cursor-pointer">
                <div onClick={()=> navigate("/lp")} className="w-full flex items-center justify-center object-cover">
                  <img src={Lp} alt="" className="w-full object-cover rounded-lg" />
                </div>
                <p className="font-bold text-xl px-16 py-2 text-blue-600">LP</p>
              </div>

              <div className=" hover:bg-gray-300 border-gray-500 drop-shadow-md w-1/4 text-center bg-zinc-200 rounded-xl cursor-pointer">
                <div onClick={()=> navigate("/tg")} className="w-full flex items-center justify-center">
                  <img src={TG} alt="" className="w-full rounded-lg" />
                </div>
                <p className="font-bold text-xl px-14 py-2 text-blue-600"> TG</p>
              </div>

              <div className=" hover:bg-gray-300 border-gray-500 drop-shadow-md w-1/4 text-center bg-zinc-200 rounded-xl cursor-pointer">
                <div onClick={()=> navigate("/wuf")} className="w-full flex items-center justify-center">
                  <img src={Wuf} alt="" className="w-full rounded-lg" />
                </div>
                <p className="font-bold text-xl px-14 text-blue-600">Wuf</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default category
