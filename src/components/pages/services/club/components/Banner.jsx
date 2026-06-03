import React from "react";

const Banner = () => {
    return (
        <section
            className=" bg-cover clubBackground bg-bottom py-[100px] min-h-[900px] flex items-center relative z-50"
            
        >
            <div className="container mx-auto">
                <div className="inner-content -mt-[100px]  max-w-[1200px] pb-20  m-auto">
                    <h1 className="recline  lg:text-[64px] text-[34px] text-white">
                        Looking for a <span className="permanent-marker block font-normal yellow-text text-[40px] lg:text-[83px]"> Football Club?</span>that really stands out?
                    </h1>
                    <button className="text-[#fff] bg-[#042C89] poppins rounded-full px-8 md:py-2.5 py-4 md:mt-0 mt-5 text-[20px] font-bold ">
                        Enquire Now
                    </button>
                </div>
            </div>


        </section>
    );
};

export default Banner;
