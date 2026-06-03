import React from "react";
import bannerImg from "/assets/RegionalManagerBg.png";

const Banner = () => {
    return (
        <section
            className="relative  regionalManagerSection whitetop flex md:bg-cover bg-no-repeat items-start bg-[#fff]  md:bg-top bg-bottom md:pt-[100px] pt-[100px] pb-[100px] min-h-[1200px] "
           
        >
            <div className="container mx-auto">
                <div className="text-center max-w-[850px] mx-auto">
                    <h1 className=" leading-[1] recline lg:text-[64px] text-[42px] text-white font-medium">
                       Apply to be a <br /> <span className="text-[#FFDE14] permanent-marker ">regional manager!</span>
                    </h1>
                <button className="bg-[#FFDE14] text-[#042C89] rounded-3xl p-2 px-4 font-bold text-[16px] mt-2 mb-10">Learn More</button>
                </div>
            </div>

        </section>
    );
};

export default Banner;
