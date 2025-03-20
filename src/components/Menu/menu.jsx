// import React from 'react'



const MenuLinks = [
    {
      id: 1,
      name: "Home",
      link: "/dashboard",
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
  
const menu = () => {
  return (
    <div className='w-full h-12 bg-slate-600 lg:hidden'>
       {/* Menu Items */}
       <div className=" block">
            <ul className="flex justify-evenly pt-3 gap-10 font-bold ">
              {MenuLinks.map((data, index) => (
                <li key={index}>
                  <a
                    className="inline-block text-black hover:text-gray-400 "
                    href={data.link}
                  >
                    {/* {" "} */}
                    {data.name}{" "}
                  </a>
                </li>
              ))}
            </ul>
          </div>
    </div>
  )
}

export default menu
