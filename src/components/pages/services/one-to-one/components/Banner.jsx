import React from "react";
import bannerImg from "/assets/bg-header-one-to-one.png";

const Banner = () => {
    return (
        <section
            className=" bg-cover OnetoOne bg-bottom px-5 md:px-0  md:py-[100px] py-[110px]  md:min-h-[700px] min-h-[800px] md:flex items-center relative z-50"

        >
            <div className="container mx-auto">
                <div className="inner-content  max-w-[1000px] pb-20 md:mt-0  m-auto">
                    <h1 className="recline text-[55px]   lg:text-[100px] green-text">
                        <span className="permanent-marker block font-normal yellow-text text-[55px] md:text-[94px] lg:text-[94px]">One-to-one </span>training
                    </h1>
                    <button 
                        onClick={() => document.getElementById('enquiry-section')?.scrollIntoView({ behavior: 'smooth' })}
                        className="text-[#042C89] md:block hidden poppins rounded-[64px] px-8 py-3 text-[20px] font-bold bg-[#FFDE14]">
                        Enquire Today
                    </button>
                     <button 
                        onClick={() => document.getElementById('enquiry-section')?.scrollIntoView({ behavior: 'smooth' })}
                        className="text-[#042C89] md:hidden block poppins mt-5 rounded-3xl px-6  py-2 text-[16px] font-bold bg-[#FFDE14]">
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
