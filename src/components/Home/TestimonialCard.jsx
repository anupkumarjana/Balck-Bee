import React from "react";
import { FaQuoteLeft } from "react-icons/fa6";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="max-w-96 w-auto h-auto border border-slate-400 outline-none rounded-xl shadow-xl mx-2">
      <div className="flex flex-col ">
        <div className="text-wrap p-6 bg-[#002244] font-montserrat text-sm text-white rounded-xl">
          <span className="text-2xl text-orange-500">
            <FaQuoteLeft />
          </span>
          <p>{testimonial.content}</p>
        </div>
        <div className="flex gap-4 p-6 justify-start items-center">
          <img
            src={testimonial.image}
            alt=""
            className="w-10 rounded-full outline outline-white"
          />
          <div className="flex flex-col font-outfit text-start">
            <span>{testimonial.name}</span>
            <span className="text-orange-500">{testimonial.organisation}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
