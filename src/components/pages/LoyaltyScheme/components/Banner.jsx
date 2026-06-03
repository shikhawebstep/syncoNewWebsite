import React from "react";
import bannerImg from "/assets/ReferAFriendBg.png";

const Banner = () => {
  return (
    <section
      className="relative  flex bg-cover items-center  bg-bottom pt-[100px] pb-[200px] lg:min-h-[500px]"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="container mx-auto">

        <div className="flex items-center justify-between max-w-[1000px] m-auto">
          <div className="ms-20">

            <h1 style={{ lineHeight: 1 }} className=" permanent-marker  text-[#FFDE14] lg:text-[105px]">
              Loyalty <br /><span className="text-[77px] leading-none font-normal recline text-[#fff]">Scheme</span>
            </h1>
          </div>
          <div className="max-w-[450px]">
            <img src="/assets/ReferFriendImg.png" alt="" />
          </div>

        </div>
      </div>

    </section>
  );
};

export default Banner;
