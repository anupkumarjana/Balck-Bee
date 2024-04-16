import React from "react";
import hero from "../../assets/Home/02.png";

const Hero = () => {
  return (
    <div className=" ">
      <div className="w-full lg:flex lg:flex-row lg:justify-center lg:items-center flex flex-col gap-10 lg:h-screen">
        <div className="lg:w-1/2 w-full">
          <h1 className="lg:text-6xl text-xl font-extrabold leading-normal">
            Unlock Your Digital Potential: <br /> Explore Our Marketing Solutions!
          </h1>
        </div>
        <div className="lg:w-1/2 w-full">
          <img src={hero} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
