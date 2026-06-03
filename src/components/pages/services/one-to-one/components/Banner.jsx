import React from "react";
import bannerImg from "/assets/bg-header-one-to-one.png";

const Banner = () => {
    return (
        <section
            className=" bg-cover OnetoOne md:bg-bottom  bg-top md:py-[100px]   md:min-h-[700px] min-h-[900px] flex items-center relative z-50"

        >
            <div className="container mx-auto">
                <div className="inner-content  max-w-[1000px] pb-20 md:mt-0 mt-[-200px]  m-auto">
                    <h1 className="recline text-[50px]   lg:text-[100px] green-text">
                        <span className="permanent-marker block font-normal yellow-text text-[50px] md:text-[94px] lg:text-[94px]">One-to-one </span>training
                    </h1>
                    <button className="text-[#042C89] md:block hidden poppins rounded-3xl px-8 py-2 text-[20px] font-bold bg-[#FFDE14]">
                        Enquire Today
                    </button>
                     <button className="text-[#042C89] md:hidden block poppins mt-10 rounded-3xl px-6  py-2 text-[16px] font-bold bg-[#FFDE14]">
                        Book Now
                    </button>
                </div>
            </div>

            <div className="absolute md:block hidden max-w-[1000px] right-[18%]">
                <img src="/assets/one-to-one-layer.png" alt="" />
            </div>
        </section>
    );
};

export default Banner;
