import React from "react";

const Banner = () => {
    return (
        <section
            className="campBanner holidayCampbanner z-50 bg-cover bg-bottom py-[100px] lg:min-h-[700px] min-h-[900px] flex items-center relative "
            
        >
            <div className="container mx-auto">
                <div className="inner-content  max-w-[1000px] pb-20  m-auto">
                    <h1 className="recline  text-[64px] lg:text-[100px]  blue-text ">
                        <span className="permanent-marker block font-normal  text-white   lg:text-[94px]">Holiday  </span>Camps
                    </h1>
                    <button className="text-white poppins rounded-3xl px-8 md:py-2 py-3 md:mt-0 mt-4 md:text-[20px] text-[18px] md:font-bold bg-[#042C89]">
                        Book Now
                    </button>
                </div>
            </div>


        </section>
    );
};

export default Banner;
