import React from "react";
import { ContentMarketingData } from "../../utils/ContentMarketingData";
import ContentMarketingCard from "./ContentMarketingCard";

const ContentMarketingHero = () => {
  return (
    <div className="flex flex-col gap-20">
      <div className="mb-10">
        <span className="text-sm font-montserrat font-medium">
          HOME/SERVICES/
          <span className="text-orange-500">CONTENT MARKETING</span>
        </span>
      </div>
      <h2
        className="text-lg lg:text-2xl text-orange-500 font-montserrat font-semibold "
        data-aos="fade-down"
      >
        CONTENT WRITING
      </h2>
      {/* -----------------------content section----------------------------- */}
      <div className="flex lg:flex-row flex-col lg:justify-between lg:items-start items-center gap-10">
        {/* ------------------------left section----------------------- */}

        <div className="lg:w-1/2 w-full flex flex-col gap-20 lg:justify-start justify-center">
          <div className="flex flex-col gap-4 lg:pr-8">
            <h4 className="text-4xl font-bold font-montserrat">
              WE OFFER SEARCH ENGINE OPTIMIZED, QUALITY CONTENT WRITING
              SERVICES.
            </h4>
            <p
              className="text-lg font-normal font-montserrat"
              data-aos="fade-up"
            >
              If you're looking for top-quality content that engages, informs,
              and converts your audience, you've come to the right place. Our
              experienced team works closely with you to understand your brand
              and your target audience, and we create content that speaks
              directly to them.
            </p>
            <p
              className="text-lg font-normal font-montserrat "
              data-aos="fade-up"
            >
              At Lettery, we're committed to providing our clients with the
              highest level of service and support. Contact us today to learn
              more about how we can help you achieve your content and social
              media goals.
            </p>
          </div>
        </div>
        {/* ------------------------right section----------------------- */}
        <div className="lg:w-1/2  w-full flex flex-wrap gap-10" data-aos="fade-up">
          {ContentMarketingData.map((data, index) => (
            <div key={index} className="lg:w-60 w-full">
              <ContentMarketingCard data={data} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentMarketingHero;
