import React from "react";

const Banner = () => {
  return (
    <section
      className="relative FranchiseInvestmentBanner md:flex bg-cover items-center  bg-bottom md:py-[100px] py-[110px] md:min-h-[900px] min-h-[750px]"
      
    >
      <div className="container mx-auto">
        <div className="pb-20 flex md:mt-0  justify-start max-w-[1020px] mx-auto">
          <h1 className="recline leading-tight text-white  text-[45px] lg:text-[72px]">
            <span className="md:text-[95px]  text-[52px]  leading-none font-normal permanent-marker text-[#FFDE14]"> Investment</span><br /> Information
          </h1>


        </div>
      </div>
      <div className="absolute w-[600px] bottom-[10%] right-10 hidden lg:block">
        <img src="/assets/investmentImg.png" alt="" />
      </div>
    </section>
  );
};

export default Banner;
