import React from "react";
import bannerImg from "/assets/ReferAFriendBg.png";

const Banner = () => {
  return (
    <section
      className="relative  flex bg-cover items-center  bg-bottom pt-[50px] pb-[200px] lg:min-h-[800px]"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="container mx-auto">

        <div className="pb-20 flex justify-end max-w-[1130px] ">
          <div>
            <div className="mb-10">
            <img src="/assets/ReferGift.png"  alt="" />
            </div>
            <h1 className=" permanent-marker leading-16 text-[#FFDE14] lg:text-[77px]">
              Refer a Friend, <br /><span className="text-[48px] leading-none font-normal recline text-[#fff]">both get 1 month FREE</span>
            </h1>
          </div>

        </div>
      </div>
      <div className="absolute w-[600px] bottom-[25%] left-10 hidden lg:block">
        <img src="/assets/ReferFriendImg.png" alt="" />
      </div>
    </section>
  );
};

export default Banner;
