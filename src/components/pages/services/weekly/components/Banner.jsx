import React from "react";
import bannerImg from "/assets/weeklyclassbanner.png"; 
import bannerImgMobile from "/assets/weeklyMainBannerMobile.png"; 

const Banner = () => {
  return (
    <section
    
      className="weekly-banner bg-cover bg-bottom  lg:min-h-[730px] min-h-[800px]  md:py-[100px] py-[180px] flex md:items-center relative z-99"
     
    >
      <div className="container mx-auto">
        <div className="inner-content  md:pb-20   lg:max-w-[650px]  m-auto">
          <h1 className="recline text-[72px] lg:text-[85px] blue-text">
            <span className="permanent-marker block font-normal  lg:text-[94px]">Weekly </span>classes
          </h1>
          <button 
            onClick={() => window.location.href = "/find-a-class"}
            className="text-white rounded-3xl px-8 py-2 text-[20px] font-bold bg-[#042C89]"
          >
            Book now 
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
