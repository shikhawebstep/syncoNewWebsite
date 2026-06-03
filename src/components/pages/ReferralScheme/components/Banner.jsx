import React from "react";

const Banner = () => {
  return (
    <section
      className="relative referFriend flex bg-cover items-center py-10 bg-bottom md:pt-[150px] md:pb-[200px] lg:min-h-[800px]"

    >
      <div className="container mx-auto">

        <div className="pb-20 gap-20 flex md:flex-row items-center flex-col-reverse justify-center md:justify-end  ">
          <div className="max-w-[600px] ">
            <img src="/assets/ReferFriendImg.png" alt="" />
          </div>
          <div>
            <div className="mb-10">
              <img src="/assets/ReferGift.png" alt="" />
            </div>
            <h1 className=" permanent-marker leading-16 text-[#FFDE14] lg:text-[77px]">
              Refer a Friend, <br /><span className="text-[48px] leading-none font-normal recline text-[#fff]">both get 1 month FREE</span>
            </h1>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Banner;
