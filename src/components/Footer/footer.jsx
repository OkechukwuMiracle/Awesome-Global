import Logo from "../../assets/logo.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About",
    link: "/about",
  },
  {
    id: 3,
    name: "Product",
    link: "/products",
  },
  {
    id: 4,
    name: "Contact",
    link: "/contact_us",
  },
];

const footer = () => {
  return (
    <div className="w-11/12 m-auto bg-gray-800  border-t-2 border-t-gray-200 py-5 mb-3">
      <div className="container md:flex justify-between gap-5 pt-3 py-2 w-full">
        {/* Logo*/}
        <div className="">
          <img className="w-10 flex rounded-full mb-3" src={Logo} alt="Logo" />
          <h2 className="font-bold text-xl text-white">
            Awesome Phones & Gadgets
          </h2>
          <p className="font-bold text-white text-sm mt-3">
            Dealers in all kinds of Mp3 speakers, <br /> mobile phones
            accessories like charger, <br />
            cables,batteries e.t.c.
          </p>
        </div>

        {/* Menu Items */}
        <div className="mt-3 md:mt-0">
          <h4 className="text-xl font-bold mb-3 text-white">Links</h4>
          <ul className="font-bold ">
            {MenuLinks.map((data, index) => (
              <li key={index}>
                <a
                  className="inline-block text-gray-400 hover:text-gray-700 mb-4"
                  href={data.link}
                >
                  {/* {" "} */}
                  {data.name}{" "}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-3 text-white ">Address</h4>
          <p className="font-bold text-sm text-white">
            Shop 10A Anakey Plaza, <br /> Beside Sky Host Plaza Fancy & Funiture{" "}
            <br /> Alaba Int'l Market,
            <br /> Ojo, Lagos, Nigeria
          </p>
          <p className="font-bold mt-3 text-white ">
            Email:{" "}
            <a className="text-blue-600 cursor-pointer">
              awesomeglobalent@gmail.com
            </a>
          </p>
          <p className="font-bold mt-2 text-white ">
            Tel: <a className="text-blue-600 cursor-pointer">08147216125</a>
          </p>
          <div className="flex gap-4 pt-4">
            <a href="" className="cursor-pointer">
              <FaFacebook className="text-white hover:text-gray-600" />
            </a>
            <a href="" className="cursor-pointer">
              <FaSquareInstagram className="text-white hover:text-gray-600" />
            </a>
            <a href="" className="cursor-pointer">
              <FaTelegram className="text-white hover:text-gray-600" />
            </a>
            <a href="" className="cursor-pointer">
              <FaXTwitter className="text-white hover:text-gray-600" />
            </a>
          </div>
        </div>
      </div>
      <div className="lg:flex gap-8 pl-5 font-bold text-white">
        <p className="">&copy; copyright- awesomephonesandgadgets 2025</p>
      </div>
    </div>
  );
};

export default footer;
