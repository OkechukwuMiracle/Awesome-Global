import Logo from "../../assets/logo.jpg";
// import DarkMode from "../DarkMode/DarkMode";
import { FaUserCircle } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../FirebaseAuth/firebase"; // Adjust the path
import { onAuthStateChanged, signOut } from "firebase/auth";

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

const Navbar = () => {
  const navigate = useNavigate();

  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [user, setUser] = useState(null); // Handle users profiles

  // Monitor auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Current User:", currentUser); // Debugging
      if (currentUser) {
        setUser({
          name: currentUser.displayName,
          email: currentUser.email,
          photoURL: currentUser.photoURL,
        });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe(); // Clean up the listener
  }, []);

  // Function to toggle the dropdown visibility
  const toggleProfileMenu = () => {
    setShowProfileMenu((prev) => !prev);
  };

  // Function to handle Logout events
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
      setUser(null);
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  return (
    <div className="bg-black text-white duration-200 relative z-40 border-b-2 border-gray-200">
      <div>
        <div className="container flex items-center justify-between pt-3 py-2 w-full">
          {/* Logo and link section */}
          <div>
            <img className="w-10 flex rounded-full" src={Logo} alt="Logo" />
          </div>

          {/* Menu Items */}
          <div className="hidden lg:block">
            <ul className="flex gap-10 font-bold ">
              {MenuLinks.map((data, index) => (
                <li key={index}>
                  <a
                    className="inline-block text-primary hover:text-red-400 "
                    href={data.link}
                  >
                    {/* {" "} */}
                    {data.name}{" "}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navbar Right Section */}
          <div className="flex gap-7 justify-center items-center">
            {/* Search Bar Section */}
            <div className="flex relative group sm:block">
              <input
                type="text"
                placeholder="Search for product"
                className="search-bar"
              />

              <svg
                className="size-6 w-5 inline-block text-gray-400 absolute top-2 duration-200 right-0"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>

            {/* cart section */}
            {/* <button className="relative hidden md:flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 w-5 inline-block text-gray-900 dark:text-gray-400  "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              <div className="w-2 h-2 bg-red-500 text-white rounded-full absolute top-0 right-3 flex items-center justify-center text-xs font-bold"></div>
            </button> */}

            {/* Profile Section */}
            <div className="relative">
              <button onClick={toggleProfileMenu}>
                {user && user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="User Profile"
                    className="w-8 h-8 rounded-full object-cover"
                    onError={(e) => {
                      console.error("Image Load Error:", e); // Debugging
                      e.target.src = "https://via.placeholder.com/150"; // Fallback to placeholder
                    }}
                  />
                ) : (
                  <FaUserCircle className="text-3xl" />
                )}
              </button>

              {/* Dropdown Show Profile Menu */}
              {showProfileMenu && (
                <div className="absolute bg-black dark:bg-white top-10 right-0 bg-neutral shadow-lg rounded-lg w-40 z-50">
                  <ul className="font-bold">
                    {user ? (
                      <>
                        <li className="py-2 px-4 hover:text-black hover:bg-white dark:hover:bg-black dark:hover:text-white cursor-pointer border-b-2 border-neutral text-white dark:text-black">
                          {user.name}
                        </li>

                        <li
                          onClick={handleLogout}
                          className="py-2 px-4 hover:text-black hover:bg-white dark:hover:bg-black dark:hover:text-white cursor-pointer border-b-2 border-neutral text-white dark:text-black"
                        >
                          Logout
                        </li>
                      </>
                    ) : (
                      <li
                        onClick={() => navigate("/login")}
                        className="py-2 px-4 hover:text-black hover:bg-white dark:hover:bg-black dark:hover:text-white cursor-pointer border-b-2 border-neutral text-white dark:text-black"
                      >
                        Login
                      </li>
                    )}

                    <li
                      onClick={() => navigate("/register")}
                      className="py-2 px-4 hover:text-black hover:bg-white dark:hover:bg-black dark:hover:text-white cursor-pointer border-b-2 border-neutral text-white dark:text-black"
                    >
                      My Account
                    </li>

                    <div className="flex items-center gap-5 pt-3">
                      {/* <div>
                        <DarkMode />
                      </div> */}
                      {/* <div> */}
                      {/* Order-button section */}
                      {/* <button className="relative">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6 w-5 inline-block text-white dark:text-gray-900  "
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                            />
                          </svg>
                          <div className="w-2 h-2 bg-red-500 text-white rounded-full absolute top-0 right-3 flex items-center justify-center text-xs font-bold"></div>
                        </button>
                      </div> */}
                    </div>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
