import React from "react";
import bannerImg from "/assets/weeklyclassbanner.png"; 
import bannerImgMobile from "/assets/weeklyMainBannerMobile.png"; 

const Banner = () => {
  return (
    <section
    
      className="weekly-banner bg-cover bg-bottom  lg:min-h-[730px] min-h-[900px] py-[100px] flex items-center relative z-99"
     
    >
      <div className="container mx-auto">
        <div className="inner-content  md:py-20 md:mt-0 mt-[-60px] lg:max-w-[610px] m-auto">
          <h1 className="recline text-[72px] lg:text-[85px] blue-text">
            <span className="permanent-marker block font-normal  lg:text-[94px]">Weekly </span>classes
          </h1>
          <button className="text-white rounded-3xl px-8 py-2 text-[20px] font-bold bg-[#042C89]">
            Book now 
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
