import React from "react";
import bannerImg from "/assets/SSSBackground.png";
import bannerImgMobile from "/assets/SSSBackgroundMobile.png";

const Banner = () => {
    return (
        <section
            className="
        relative flex md:bg-cover bg-bottom 
        md:py-[100px] 
        min-h-[1100px] lg:min-h-[900px]
        md:items-center
        bg-[url('/assets/ssMobile.png')]
        md:bg-[url('/assets/SSSBackground.png')]
      "
        >
            <div className="container md:px-[10%] py-20 mx-auto">
                <div className="pb-20  max-w-[700px] ">
                    <h1 className="recline leading-tight hidden md:block text-white lg:text-[86px]  text-[60px]">
                        <span className="lg:text-[95px] text-[70px]  leading-none font-normal permanent-marker text-[#FFDE14]">Worn</span> with pride
                    </h1>
                      <h1 className="recline leading-tight md:hidden block text-white lg:text-[86px]  text-[60px]">
                        <span className="lg:text-[95px] text-[60px] block leading-none font-normal permanent-marker text-[#FFDE14]">Worn</span> with pride
                    </h1>
                    <p className="md:text-[20px] text-[16px] text-[#FDFDFF] leading-8 mt-5 md:mb-10 mb-4">
                        Get them excited about the beautiful game with our exclusive range of kids’ football kits. Whether you’re taking them to their lesson or kicking the ball about in the garden, our official kids’ football kit will make their day!
                    </p>
                    <button className="bg-[#FFDE14] text-[#042C89] flex justify-center items-center rounded-3xl p-2 px-4 text-[18px] font-semibold recline">Online Shop!</button>
                    <p className="md:text-[20px] text-[14px] text-[#FDFDFF] leading-8 md:mt-12 mt-4">
                        You can buy your kit directly on our online shop!                             </p>
                </div>
            </div>
            
            
        </section>
    );
};

export default Banner;
