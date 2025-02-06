// import React from 'react'
import Navbar from "../Navbar/Navbar";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Menu from "../Menu/menu";
import Footer from "../Footer/footer";
import Swal from "sweetalert2"

const contact_us = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_oehoo79", "template_upqx8sm", form.current, {
        publicKey: "dUQqNOXdEq1fgwXwT",
      })
      .then(
        () => {
          Swal.fire( {
            icon: "success",
            title: "Message Sent!",
            text: "We've received your message. We'll get back to you soon.",
            confirmButtonColor: "#4caf50",
          });
          form.current.reset();
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong. Please try again later.",
            confirmButtonColor: "#ff5252",
          })
          console.error("FAILED...", error.text)
        }
      );
  };

  return (
    <div>
      <Navbar />
      <Menu />
      <h1 className="text-white py-5 text-4xl font-bold text-center">
        Contact Us
      </h1>
      <div className="md:flex justify-between w-11/12 m-auto mb-5">
        <div className="md:w-1/3 mb-5">
          <h3 className="text-white text-2xl pb-2">Email</h3>
          <a href="" className="text-white text-lg">
            awsomeglobalent.com
          </a>

          <h3 className="text-white  text-2xl pb-2 pt-5">Phones</h3>
          <p className="text-white text-lg">08147216125</p>

          <h3 className="text-white text-2xl pb-2 pt-5">Address</h3>
          <p className="text-white text-lg">
            Shop 10A Anakey Plaza, <br /> Beside Sky Host Plaza Fancy & Funiture{" "}
            <br /> Alaba Int'l Market,
            <br /> Ojo, Lagos, Nigeria.
          </p>

          <p className="text-white mt-5">
            We would love to connect with you✨! Reach out to us with any
            inquiries and feedback.🤝
          </p>
        </div>

        <div className="justify-start md:w-5/12 ">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="user_name"
              className="w-full p-3 font-semibold text-lg"
              placeholder="Name"
              required
            />
            <br /> <br />
            <input
              type="email"
              name="user_email"
              className="w-full p-3 font-semibold text-lg"
              placeholder="Email"
              required
            />
            <br /> <br />
            <textarea
              name="message"
              className="w-full h-44 p-3 font-semibold text-lg"
              placeholder="Type your message here."
              required
            />
            <button
              className="px-8 py-4  mt-3 text-white text-2xl bg-green-400 hover:bg-green-300 font-bold"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default contact_us;
