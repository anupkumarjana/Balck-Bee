import React from "react";
import ServiceCard from "./ServiceCard";
import { services } from "../../utils/services";
import offerImg from "../../assets/Home/02.png"

const Offer = () => {
  return (
    <div className="flex flex-wrap justify-start h-auto ">
      <div className="flex lg:flex-row flex-col justify-between sticky-top gap-10 relative">
        {/* left side */}
        <div className="lg:w-1/2 w-full flex flex-col gap-4">
          <span
            className="text-lg font-outfit text-orange-500"
            data-aos="fade-up"
          >
            WHAT WE OFFER
          </span>
          <h3
            className="lg:text-6xl text-2xl font-montserrat lg:py-6"
            data-aos="fade-up"
          >
            What We’re Offering Creative Digital Service
          </h3>
          <img src={offerImg} alt="offer" className="w-96 drop-shadow"  data-aos="fade-right"/>
        </div>

        {/* right side */}
        <div
          className="lg:w-1/2 h-[650px] w-full flex flex-col gap-10  overflow-y-scroll no-scrollbar scroll-smooth"
          data-aos="fade-up"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="sticky card-shadow"
              style={{ top: `calc(20px * ${index})` }}
            >
              <ServiceCard data={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offer;

// .sticky-top {
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   z-index: 1000; /* Adjust as needed */
//   /* Add any other styles you need */
// }
