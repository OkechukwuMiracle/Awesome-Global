import { useState } from "react";
import { auth } from "../FirebaseAuth/firebase"; // Adjust the import path
import { sendPasswordResetEmail } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const forgotpassword = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!email) {
      toast.error("Email is required");
      return false;
    } else if (!regex.test(email)) {
      toast.error("Invalid email format");
      return false;
    }
    return true;
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      try {
        await sendPasswordResetEmail(auth, email);
        toast.success("Password reset email sent successfully!");
        setEmail(""); // Clear the input field
        onClose(); // Close the modal
      } catch (error) {
        console.error(error);
        toast.error(error.message || "Failed to send password reset email");
      }
    }
  };

  if (!isOpen) return null; // Do not render if the modal is not open

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-black p-8 shadow-lg rounded w-96 relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
      >
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 font-semibold"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center dark:text-white">Forgot Password</h2>
        <p className="mb-4 text-gray-600 text-center font-bold">
          Enter your email address below to receive a password reset link.
        </p>
        <form onSubmit={handlePasswordReset}>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded mb-4 font-bold"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700 transition font-bold"
          >
            Send Reset Link
          </button>
        </form>
      </div>
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

export default forgotpassword;

