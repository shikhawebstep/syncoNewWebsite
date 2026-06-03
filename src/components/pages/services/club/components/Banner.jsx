import React from "react";

const Banner = () => {
    return (
        <section
            className=" bg-cover clubBackground bg-bottom md:py-[100px] 2xl:h-[800px] xl:h-[600px] lg:h-[600px] sm:h-[500px] h-[700px] md:flex items-center relative z-50"
            
        >
            <div className="container mx-auto">
                <div className="inner-content md:-mt-[100px]  max-w-[1200px] md:pb-20 pt-[100px] md:pt-0  m-auto">
                    <h1 className="recline  xl:text-[64px] lg:text-[50px] text-[30px] text-white">
                        Looking for a <span className="permanent-marker block font-normal yellow-text  xl:text-[83px]"> Football Club?</span>that really stands out?
                    </h1>
                    <button 
                        onClick={() => document.getElementById('enquiry-section')?.scrollIntoView({ behavior: 'smooth' })}
                        className="text-[#fff] bg-[#042C89] poppins rounded-full md:px-8 md:py-2.5 p-3 md:mt-3 mt-5 md:text-[20px] font-bold "
                    >
                        Enquire Now
                    </button>
                </div>
            </div>


        </section>
    );
};

export default Banner;
