import React from "react";
import { aboutCardData } from "../../utils/AboutCardData";

const AboutCard = () => {
  return (
    <div className="flex flex-col gap-20">
      <h3
        className="text-lg text-orange-500 font-montserrat text-center"
        data-aos="fade-up"
      >
        HOW IT WORKS
      </h3>
      <div
        className="flex justify-center gap-10 items-stretch flex-wrap relative"
        data-aos="fade-up"
      >
        {aboutCardData.map((data, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-4 text-center max-w-60 w-auto border rounded-xl shadow-2xl px-4 py-10 lg:sticky top-0"
            style={{ minWidth: "240px" }}
          >
            <span className="text-4xl font-bold text-orange-500 flex justify-center">
              {/* Move the flex and justify-center to the outer span */}
              {data.icons}
            </span>
            <span className="font-montserrat pt-4 text-3xl font-medium">
              {data.title}
            </span>
            <span className="font-outfit text-sm font-light leading-relaxed p-4">
              {data.content}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutCard;
