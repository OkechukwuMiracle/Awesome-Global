// import React from 'react'
// import LightButton from "../../assets/light-mode-button.png";
// import DarkButton from '../../assets/dark-mode-button.png';

// const DarkMode = () => {
//     const [theme, setTheme] = React.useState(
//       localStorage.getItem("theme") || "light"
    // );
  
    // const element = document.documentElement;
  

    // set theme to the localStorage and html
//     React.useEffect(() => {
//       localStorage.setItem("theme", theme);
//       if (theme === "dark") {
//         element.classList.add("dark");
//         element.classList.remove("light");
//       } else {
//         element.classList.add("light");
//         element.classList.remove("dark");
//       }
//     }, [theme]);

//   return (
//     <div className='relative '>
//       <img
//         onClick={()=> setTheme(theme === 'dark' ? 'light' : 'dark')}
//         src={LightButton}
//         alt=""
//         className={`w-10 cursor-pointer absolute right-0 z-10 ${
//           theme === "dark" ? "opacity-0" : "opacity-100" 
//         } transition-all duration-300`}
//       />

// <img
//     onClick={()=> setTheme(theme === 'dark' ? 'light' : 'dark')}
//         src={DarkButton}
//         alt=""
//         className={`w-10 cursor-pointer`}
//       />
//     </div>
//   );
// };

// export default DarkMode;
