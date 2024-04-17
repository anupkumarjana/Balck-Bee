import React from "react";
import Hero from "../components/Home/Hero";
import BuisnessGrowth from "../components/Home/BuisnessGrowth";
import Banner from "../components/Home/Banner";

const HomePage = () => {
  return (
    <div className="lg:px-32 px-10  pt-20 lg:pt-40 flex-col gap-20  lg:text-start text-center text-wrap ">
      <Hero />
      <div className="flex flex-col gap-40">
        <div>
          <BuisnessGrowth />
        </div>
        <div>
          <Banner />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
