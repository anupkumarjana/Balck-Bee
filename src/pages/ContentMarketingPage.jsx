import React from 'react'
import ContentMarketingHero from '../components/Services/ContentMarketingHero'
import PackageSection from "../components/Services/PackageSection";

const ContentMarketingPage = () => {
  return (
    <main className="lg:px-40 px-10 pt-40 flex flex-col gap-20 lg:gap-40  lg:text-start text-center text-wrap ">
      <div>
        <ContentMarketingHero />
      </div>
      <div>
        <PackageSection />
      </div>
    </main>
  );
}

export default ContentMarketingPage