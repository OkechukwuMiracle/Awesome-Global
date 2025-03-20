// import React from 'react'
import Notification from "../Notification/notification";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/footer";
import Menu from "../Menu/menu";
import { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import styles for Toastify

const createProduct = ({ setProducts, products }) => {

    const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const fileInputRef = useRef(null);

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleClick = () => fileInputRef.current?.click();

const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.readAsDataURL(file); // Convert to Base64
      reader.onloadend = () => {
        setImage(reader.result); // Store Base64 version
      };
    }
  };

  const handleDragOver = (event) => event.preventDefault();

  const handleAddProduct = () => {
    if (!name || !price || !image) {
      alert("Please provide all details.");
      toast.success("Product created successfully");
      return;
    }

    const newProduct = { id: Date.now(), name, price, image };

    const updatedProducts = [...products, newProduct];

    // setProducts([...products, newProduct]); // Updates state

    setProducts(updatedProducts); // Updates state in App.jsx
    localStorage.setItem("products", JSON.stringify(updatedProducts)); // Save to localStorage

    setImage(null);
    setName("");
    setPrice("");
    
  };



  return (
    <div className="pb-5 dark:bg-black overflow-hidden">
      <Notification />
      <Navbar />
      <Menu />

      <div className="md:mx-10 lg:w-[50%] lg:m-auto bg-white rounded-3xl p-4 my-10 lg:my-10">
        <div
          className=" md:p-6 text-center cursor-pointer"
          
        >
          <h1 className="text-black text-3xl font-bold  text-center">Create Product</h1>
          <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 mt-4 border rounded placeholder:text-black text-black font-semibold"
        />
        <input
          type="text"
          placeholder="Enter price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-2 mt-2 border rounded placeholder:text-black text-black font-semibold"
        />
          <div className="border-dashed border-2 border-gray-400 rounded-xl w-[100%] m-auto h-[45vh] my-5 p-4 bg-black" onDrop={handleDrop}
          onDragOver={handleDragOver}
          onClick={handleClick}>
          {image ? (
            <img
              src={image}
              alt="Uploaded"
              className=" object-cover w-full h-full "
            />
          ) : (
            <p className="text-white mt-[13%] text-2xl font-bold leading-relaxed ">Drag & Drop and image <br /> <span className="text-base font-bold text-gray-400">Supports PNG,SVG,JPG </span> <br /> <span className="text-[12px] border-2 border-blue-600  hover:border-blue-800 bg-blue-600 hover:bg-blue-800 hover:text-white p-2 rounded-2xl">Select fron Computer</span></p>
    
          )}
          </div>
          
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
            accept="image/*"
          />
        </div>
        
        <div className="flex justify-end mt-3 px-6">
          <button
            className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded"
            onClick={handleAddProduct}
          >
            Create
          </button>
        </div>
      </div>
      <Footer />
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
  )
}

export default createProduct
