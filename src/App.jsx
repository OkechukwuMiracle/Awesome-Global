// import React from 'react'
// import Navbar from "./components/Navbar/Navbar"
// import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import HomePage from "./components/HomePage/home"
import AboutPage from "./components/AboutPage/about"
import ProductPage from "./components/ProductPage/products"
import ContactPage from "./components/ContactPage/contact_us"
import Register from "./components/MyAccount/register"
import Login from "./components/MyAccount/login"
import ForgotPassword from "./components/MyAccount/forgotpassword"
import Menu from "./components/Menu/menu"
import Whatsapp from "./components/WhatsappLink/whatsapp"
import "react-toastify/dist/ReactToastify.css";
import {ToastContainer} from 'react-toastify';
import Zealot from "./components/Categories/zealot"
import Jbl from "./components/Categories/jbl"
import H_F from "./components/Categories/h_f"
import Jz from "./components/Categories/jz"
import Lnboombest from "./components/Categories/Lnboombest"
import Koleer from "./components/Categories/koleer"
import Lp from "./components/Categories/LP"
import Tg from "./components/Categories/tg"
import Wuf from "./components/Categories/wuf"
// import { useNavigate } from "react-router-dom";
import NewArrival from "./components/Categories/newarrivals";
import Notification from "./components/Notification/notification";
import Footer from "./components/Footer/footer"
// import DarkMode from './components/DarkMode/DarkMode'

const App = () => {
  return (
    <div>
      {/* <button
        className="bg-blue-500 text-white py-2 px-4 rounded"
        onClick={() => setIsForgotPasswordOpen(true)}
      >
        Forgot Password
      </button> */}
      {/* <Navbar/> */}
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/products" element={<ProductPage />} />
        <Route exact path="/contact_us" element={<ContactPage />} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/forgotpassword" element={<ForgotPassword />} />
        <Route exact path="/menu" element={<Menu />} />
        <Route exact path="/whatsapp" element={<Whatsapp />} />
        <Route exact path="/zealot" element={<Zealot/>} />
        <Route exact path="/jbl" element={<Jbl/>} />
        <Route exact path="/h-f" element={<H_F/>} />
        <Route exact path="/jz" element={<Jz/>} />
        <Route exact path="/lnboombest" element={<Lnboombest/>} />
        <Route exact path="/koleer" element={<Koleer/>} />
        <Route exact path="/lp" element={<Lp/>} />
        <Route exact path="/tg" element={<Tg/>} />
        <Route exact path="/wuf" element={<Wuf/>} />
        <Route exact path="/newarrivals" element={<NewArrival />} />
        <Route exact path="/notification" element={<Notification />} />
        <Route exact path="/footer" element={<Footer />} />
        {/* <Route exact path="/Navbar" element={<Navbar/>} /> */}
      </Routes>
      <ToastContainer/>

    </div>
  )
}

export default App


