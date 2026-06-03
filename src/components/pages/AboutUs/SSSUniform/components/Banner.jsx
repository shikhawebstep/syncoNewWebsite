import React from "react";
import bannerImg from "/assets/SSSBackground.png";
import bannerImgMobile from "/assets/SSSBackgroundMobile.png";

const Banner = () => {
    return (
        <section
            className="
        relative flex md:bg-cover bg-contain bg-bottom bg-[#00A6E3]
        py-[100px] 
        min-h-[1500px] lg:min-h-[800px]
        md:items-center
        bg-[url('/assets/aboutuniformmobilebg.png')]
        md:bg-[url('/assets/SSSBackground.png')]
      "
        >
            <div className="container md:px-[10%] md:py-0 py-20 mx-auto">
                <div className="pb-20  max-w-[700px] ">
                    <h1 className="recline leading-tight hidden md:block text-white lg:text-[86px]  text-[60px]">
                        <span className="lg:text-[95px] text-[70px]  leading-none font-normal permanent-marker text-[#FFDE14]">Worn</span> with pride
                    </h1>
                      <h1 className="recline leading-tight md:hidden block text-white lg:text-[86px]  text-[60px]">
                        <span className="lg:text-[95px] text-[60px] block leading-none font-normal permanent-marker text-[#FFDE14]">Worn</span> with pride
                    </h1>
                    <p className="md:text-[20px] text-[16px] text-[#FDFDFF] leading-8 mt-5 mb-10">
                        Get them excited about the beautiful game with our exclusive range of kids’ football kits. Whether you’re taking them to their lesson or kicking the ball about in the garden, our official kids’ football kit will make their day!
                    </p>
                    <button className="bg-[#FFDE14] text-[#042C89] flex justify-center items-center rounded-3xl p-2 px-4 text-[18px] font-semibold recline">Online Shop!</button>
                    <p className="md:text-[20px] text-[16px] text-[#FDFDFF] leading-8 mt-12">
                        You can buy your kit directly on our online shop!                             </p>
                </div>
            </div>
            <div className="absolute md:bottom-[0%] bottom-[5%] right-0 md:block hidden  block">
                <img src="/assets/SSSkid.png" className="w-full " alt="" />
                {/* <img src="/assets/SSSKidMobile.png" className="w-full block  md:hidden " alt="" /> */}

            </div>
               <div className="absolute md:bottom-[0%] bottom-[10%] right-0 block md:hidden  block">
                {/* <img src="/assets/SSSkid.png" className="w-full " alt="" /> */}
                <img src="/assets/SSSKidMobile.png" className="w-full block  md:hidden " alt="" />

            </div>
        </section>
    );
};

export default Banner;
