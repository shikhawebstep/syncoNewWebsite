import React from "react";

const Banner = () => {
    return (
        <section
            className="relative BecomeACoachBannerSection flex bg-cover md:items-end items-center bg-[#0DD180]  bg-top pt-[150px] pb-[150px] md:min-h-[800px] min-h-[1100px]"
        
        >
            <div className="container mx-auto ">
                <div className="text-center max-w-[850px]  md:mt-0   mx-auto">
                    <h1 className=" leading-tight recline lg:text-[64px] text-[40px] text-white font-medium">
                      <span className="text-[#FFDE14] permanent-marker ">We’re <br className="block md:hidden" /> changing</span> <br className="md:block hidden" />how children play <br className="md:block hidden" /> football - are you in?
                    </h1>
                    <p className="text-[#fff] recline md:text-[36px] text-[34px]  md:mt-7"> Football coaching - Brazilian Style </p>
                <button className="bg-[#FFDE14] text-[#042C89] rounded-3xl p-2 px-4 font-bold text-[16px] my-10">Learn More</button>
                </div>
            </div>

        </section>
    );
};

export default Banner;
