import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { FaRegWindowClose } from "react-icons/fa";
import { CiFacebook, CiLinkedin, CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";

const Header = () => {
  const [isShow, setIsShow] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className="w-full fixed z-2 bg-white"
    >
      <>
        <nav className="flex lg:px-20 px-10 py-4 w-full justify-between">
          <h1 className="text-xl font-bold font-montserrat">blackBee.</h1>
          <div className="lg:block hidden">
            <ul className="flex gap-10 font-outfit">
              <li className="cursor-pointer hover:text-orange-400 transition-all ease-in-out duration-100">
                Home
              </li>
              <li className="cursor-pointer hover:text-orange-400 transition-all ease-in-out duration-100">
                About Us
              </li>
              <li className="cursor-pointer hover:text-orange-400 transition-all ease-in-out duration-100">
                Services
              </li>
              <li className="cursor-pointer hover:text-orange-400 transition-all ease-in-out duration-100">
                Blogs
              </li>
              <li className="cursor-pointer hover:text-orange-400 transition-all ease-in-out duration-100">
                Contact Us
              </li>
            </ul>
          </div>
          <div className="lg:block hidden">
            <div className="flex gap-2 justify-center items-center ">
              <span className="cursor-pointer">
                <a href="https://facebook.com">
                  <CiFacebook />
                </a>
              </span>
              <span className="cursor-pointer">
                <CiInstagram />
              </span>
              <span className="cursor-pointer">
                <CiTwitter />
              </span>
              <span className="cursor-pointer">
                <CiLinkedin />
              </span>
            </div>
          </div>

          <button
            className="block lg:hidden text-xl font-semibold transition-all ease-in-out duration-200"
            onClick={() => setIsShow(true)}
          >
            <FiMenu />
          </button>
        </nav>
      </>
      {isShow && (
        <>
          <nav className="absolute top-0 right-0 h-screen bg-red-700 w-1/2 flex justify-start pt-6 items-center pr-10 flex-col gap-10">
            <button onClick={() => setIsShow(false)} className="text-xl">
              <FaRegWindowClose />
            </button>
            <ul className="flex flex-col justify-center gap-10 font-outfit">
              <li className="cursor-pointer hover:text-orange-400 transition-all ease-in-out duration-100">
                Home
              </li>
              <li className="cursor-pointer hover:text-orange-400 transition-all ease-in-out duration-100">
                About Us
              </li>
              <li className="cursor-pointer hover:text-orange-400 transition-all ease-in-out duration-100">
                Services
              </li>
              <li className="cursor-pointer hover:text-orange-400 transition-all ease-in-out duration-100">
                Blogs
              </li>
              <li className="cursor-pointer hover:text-orange-400 transition-all ease-in-out duration-100">
                Contact Us
              </li>
            </ul>
          </nav>
        </>
      )}
    </header>
  );
};

export default Header;
