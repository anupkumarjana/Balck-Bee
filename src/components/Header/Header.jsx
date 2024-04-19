import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { FaRegWindowClose } from "react-icons/fa";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const Header = ({ themeToggler }) => {
  const [isShow, setIsShow] = useState(false);
  const [isDarkMode, setDarkMode] = useState(true);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  return (
    <header
      className={`w-full fixed z-20 shadow-lg ${
        !isDarkMode
          ? "bg-[#565656] text-white transition-all ease-in-out duration-1000"
          : "bg-white text-black"
      }`}
    >
      <>
        <nav className="flex lg:px-20 px-10 py-6 w-full justify-between items-center">
          <h1 className="text-xl font-bold font-montserrat">
            <Link to="/">blackBee.</Link>{" "}
          </h1>
          <div className="lg:block hidden">
            <ul className="flex gap-10 font-outfit">
              <li className="cursor-pointer hover:text-orange-400 transition-all ease-in-out duration-100">
                <Link to="/">Home</Link>
              </li>
              <li className="cursor-pointer hover:text-orange-400 transition-all ease-in-out duration-100">
                <Link to="/about"> About Us</Link>
              </li>
              <li className="cursor-pointer hover:text-orange-400 transition-all ease-in-out duration-100">
                <Link to="/services">Services</Link>
              </li>
              <li className="cursor-pointer hover:text-orange-400 transition-all ease-in-out duration-100">
                <Link to="blogs">Blogs</Link>
              </li>
              <li className="cursor-pointer hover:text-orange-400 transition-all ease-in-out duration-100">
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={themeToggler}>
              <DarkModeSwitch
                style={{
                  color: "black",
                  fill: "black",
                  stroke: "currentColor",
                }}
                checked={isDarkMode}
                onChange={toggleDarkMode}
                size={30}
              />
            </button>
            <button
              className="block lg:hidden text-2xl font-semibold transition-all ease-in-out duration-200"
              onClick={() => setIsShow(true)}
            >
              <FiMenu />
            </button>
          </div>
        </nav>
      </>
      {isShow && (
        <>
          {/* -------------------overlay------------------------ */}
          <div
            className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10"
            onClick={() => setIsShow(false)}
          ></div>
          {/* -------------------overlay------------------------ */}

          {/* -------------------------phone navbar-------------------------------- */}
          <nav className="absolute top-0 right-0 h-screen bg-white text-black font-montserrat font-medium w-1/2 flex justify-start pt-6 items-center pr-10 flex-col gap-10 transition-all ease-in-out duration-300 z-20">
            <button onClick={() => setIsShow(false)} className="text-xl">
              <FaRegWindowClose />
            </button>
            <ul className="flex flex-col justify-center gap-10 font-outfit">
              <li
                className="cursor-pointer hover:text-orange-400 transition-all ease-in-out duration-100"
                onClick={() => setIsShow(false)}
              >
                <Link to="/">HOME</Link>
              </li>
              <li
                className="cursor-pointer hover:text-orange-400 transition-all ease-in-out duration-100"
                onClick={() => setIsShow(false)}
              >
                <Link to="/about"> ABOUT US</Link>
              </li>
              <li
                className="cursor-pointer hover:text-orange-400 transition-all ease-in-out duration-100"
                onClick={() => setIsShow(false)}
              >
                <Link to="/services">SERVICES</Link>
              </li>
              <li
                className="cursor-pointer hover:text-orange-400 transition-all ease-in-out duration-100"
                onClick={() => setIsShow(false)}
              >
                <Link to="blogs">BLOGS</Link>
              </li>
              <li
                className="cursor-pointer hover:text-orange-400 transition-all ease-in-out duration-100"
                onClick={() => setIsShow(false)}
              >
                <Link to="/contact">CONTACT US</Link>
              </li>
            </ul>
          </nav>
        </>
      )}
    </header>
  );
};

export default Header;
