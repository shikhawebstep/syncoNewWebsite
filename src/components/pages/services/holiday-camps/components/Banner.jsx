import React from "react";

const Banner = () => {
    return (
        <section
            className="campBanner holidayCampbanner md:px-0 px-5  z-50 bg-cover bg-bottom py-[100px] lg:min-h-[700px] 2xl:h-[765px] min-h-[700px] md:flex items-center relative "
            
        >
            <div className="container mx-auto">
                <div className="inner-content  max-w-[1000px] md:pb-20 pt-12 md:pt-0   m-auto">
                    <h1 className="recline  text-[64px] lg:text-[100px]  blue-text ">
                        <span className="permanent-marker block font-normal  text-white   lg:text-[94px]">Holiday  </span>Camps
                    </h1>
                    <button 
                        onClick={() => window.location.href = "/find-a-camp"}
                        className="text-white poppins rounded-3xl px-8 md:py-2 py-3 md:mt-0 mt-4 md:text-[20px] text-[18px] md:font-bold bg-[#042C89]"
                    >
                        Book Now
                    </button>
                </div>
            </div>


        </section>
    );
};

export default Banner;
