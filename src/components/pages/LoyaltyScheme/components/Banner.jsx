import React from "react";
import bannerImg from "/assets/ReferAFriendBg.png";

const Banner = () => {
  return (
    <section
      className="relative  flex bg-cover items-center  bg-bottom pt-[200px] pb-[200px] lg:min-h-[700px]"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="container mx-auto">

        <div className="pb-20  pl-40 flex justify-start max-w-[1130px] ">
          <div>
            
            <h1 className=" permanent-marker leading-25 text-[#FFDE14] lg:text-[105px]">
              Loyalty <br /><span className="text-[77px] leading-none font-normal recline text-[#fff]">Scheme</span>
            </h1>
          </div>

        </div>
      </div>
      <div className="absolute w-[600px] bottom-[15%] right-50 hidden lg:block">
        <img src="/assets/ReferFriendImg.png" alt="" />
      </div>
    </section>
  );
};

export default Banner;
