import React from "react";
import bannerImg from "/assets/LondonVenueBanner2.png";
import bannerImgMobile from "/assets/LondonVenueBanner2Mobile.png";

const Banner = () => {
    return (
        <section
            className="relative  flex bg-cover md:items-end items-center bg-[#0DD180]  bg-top md:pt-[200px] pt-[400px] md:pb-[400px] pb-[300px] lg:min-h-[1000px]  bg-[url('/assets/LondonVenueBanner2Mobile.png')]
              md:bg-[url('/assets/LondonVenueBanner2.png')]"

        >
            <div className="container mx-auto">
                <div className="md:text-center max-w-[850px] mx-auto">
                    <h1 className=" leading-[1] permanent-marker lg:text-[85px] text-[48px] text-[#042C89] font-medium">
                        Football  <br />Classes London
                    </h1>
                    <p className="poppins text-[#FDFDFF] md:text-[22px] text-[16px] pt-5">Sharpen your child’s football skills and boost <br className="md:block hidden" /> their confidence</p>

                </div>
            </div>

        </section>
    );
};

export default Banner;
