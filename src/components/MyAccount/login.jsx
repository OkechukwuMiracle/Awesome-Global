// import React from 'react'
import Navbar from "../Navbar/Navbar";
import L10 from "../../assets/WUF-F1.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../FirebaseAuth/firebase";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GoogleButton from "react-google-button";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import ForgotPassword from "./forgotpassword";

const login = () => {
  const navigate = useNavigate();
  const [isPasswordVisible, setIsPasswordVisible] = useState(""); // Password visibility
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [users, setUsersDetails] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUsersDetails({ ...users, [name]: value });
  };

  const validateForm = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required";
      toast.error("Email is required");
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email address";
      toast.error("Invalid email address");
    }
    if (!values.password) {
      errors.password = "Password is required";
      toast.error("Password is required");
    } else if (values.password.length < 4) {
      errors.password = "Password must be at least 4 characters long";
      toast.error("Password must be at least 4 characters long");
    }
    return errors;
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    setIsSubmit(true);
    const errors = validateForm(users);
    setFormErrors(errors);
    if (Object.keys(errors).length === 0 && isSubmit) {
      try {
        await signInWithEmailAndPassword(auth, users.email, users.password);
        toast.success("Login successfully!!");
        navigate("/");
      } catch (error) {
        console.error(error);
        toast.error(error.message || "Failed to Login");
      }
    }
  };

  const signInWithGoogle = async (e) => {
    const provider = new GoogleAuthProvider();
    e.preventDefault();
    setIsSubmit(true);
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      toast.success("Login successful!!");
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Failed to login with Google");
    }
  };

  // Handle the password visibility toggle
  const handlePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleForgotPassword = () => {
    setIsForgotPasswordOpen(!isForgotPasswordOpen);
  };

  return (
    <div>
      <Navbar />
      <div className="lg:flex dark:bg-black h-screen">
        <div className="hidden lg:flex lg:w-6/12 h-screen">
          <img src={L10} alt="" className="w-full h-full" />
        </div>
        <div className="w-full lg:w-3/5">
          <form onSubmit={loginHandler} className="w-5/6 m-auto pt-8 lg:pt-14">
            <h1 className="text-4xl font-bold dark:text-white">Log In</h1>
            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              onChange={changeHandler}
              value={users.email}
              className="border w-full py-3 px-4 mt-8 mb-5 font-bold"
              required
            />
            <div className="flex relative">
              <input
                type={isPasswordVisible ? "text" : "password"}
                name="password"
                placeholder="Password"
                onChange={changeHandler}
                value={users.password}
                className="border w-full py-3 px-4 mt-8 mb-5 font-bold"
                required
              />
              <div className="absolute right-8 top-12">
                <button type="button" onClick={handlePasswordVisibility}>
                  {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            <div className="flex justify-between mb-7">
              <button
                type="submit"
                className="w-2/5 py-2 text-white bg-blue-500 hover:bg-blue-700 font-bold text-2xl"
              >
                Login
              </button>
              <button onClick={ toggleForgotPassword} className="text-red-500 hover:text-red-700 font-bold">
                Forgot Password
              </button>
            </div>
            <div className="flex justify-center font-bold dark:text-black">
              <GoogleButton onClick={signInWithGoogle} />
            </div>
            <p className="mt-4 text-center font-bold dark:text-white">
              Create an account?{" "}
              <a href="/register" className="text-blue-500">
                register
              </a>
            </p>
          </form>
        </div>
      </div>

        {/* ForgotPassword Modal */}
      <ForgotPassword
        isOpen={isForgotPasswordOpen}
        onClose={toggleForgotPassword}
      />

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        style={{ width: "300px" }}
      />
    </div>
  );
};

export default login;
