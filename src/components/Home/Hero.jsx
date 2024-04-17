import React from "react";
import hero from "../../assets/Home/hero1.png";

const Hero = () => {
  return (
    <div className="lg:h-screen">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between lg:gap-0 gap-12">
        {/* Text Content */}
        <div className="lg:w-1/2 w-full flex flex-col gap-10  lg:items-start items-center">
          <h1
            className="lg:text-6xl text-3xl font-extrabold leading-normal"
            id="location-text"
            data-aos="fade-up"
          >
            We're Digital Marketing Creative Gigg!
          </h1>
          <div className="flex gap-4 flex-wrap" data-aos="fade-up">
            {/* <button className="border rounded-md px-4 py-2 bg-purple-600 text-white button">
              Find Solution
            </button> */}
            <button className="text-lg font-montserrat font-medium flex items-center gap-2 rounded lg:py-4 lg:px-8 px-4 py-2 bg-[#FF4D30] text-white shadow-custom hover:shadow-custom-hovered transition-all duration-300 ease-in-out  button">
              Find Solution
            </button>
            <button className="border border-black rounded-md px-4 py-2 button">
              Learn more
            </button>
          </div>
        </div>

        {/* Image */}
        <div
          className="lg:w-1/2 w-full flex justify-center lg:justify-end"
          data-aos="fade-up"
        >
          <img src={hero} alt="hero" className="hero-image lg:w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
