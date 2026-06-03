import React from "react";
import bannerImg from "/assets/supportBanner.png";
import bannerImgmobile from "/assets/supportMobileimg.png";

const Banner = () => {
  return (
    <section
      className="relative  flex bg-cover md:items-center items-start   bg-bottom py-[100px] lg:min-h-[800px]  min-h-[1000px]   bg-[url('/assets/supportmainBannerMobile.png')]
        md:bg-[url('/assets/supportBanner.png')]"
   
    >
      <div className="container mx-auto md:pt-0 pt-40">
        <div className="pb-20 md:flex justify-end max-w-[1130px] ">
          <h1 className="recline leading-tight text-white md:text-left text-center lg:text-[72px] text-[50px]">
            Franchise<br /> <span className="md:text-[95px] text-[60px] leading-none font-normal permanent-marker text-[#FFDE14]">Support</span>
          </h1>


        </div>
      </div>
      <div className="absolute w-[600px] bottom-[10%] left-10 hidden lg:block">
        <img src="/assets/supportImg.png" alt="" />
      </div>
      <div className="absolute w-[100%] bottom-[10%] left-0 lg:hidden block">
        <img src="/assets/supportMobileimg.png" alt="" />
      </div>

    </section>
  );
};

export default Banner;
