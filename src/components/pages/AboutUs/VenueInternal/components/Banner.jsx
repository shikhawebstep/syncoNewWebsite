import React from "react";

const Banner = () => {
    return (
        <section
            className="relative  footballClassinvenue flex bg-cover items-end bg-[#0DD180]  bg-top pt-[100px] pb-[150px] lg:min-h-[400px]"
            
        >
            <div className="container relative innerVenueBanner mx-auto">
                <div className="text-center md:mt-0 mt-[200px] max-w-[850px] mx-auto">
                    <h1 className=" leading-[1] permanent-marker lg:text-[85px] text-[40px] text-white font-medium">
                        Football  <br className="md:block hidden"/>Classes In Action 
                    </h1>
                    <p className="poppins text-[#FDFDFF] md:text-[22px] text-[18px] pt-5">Football classes that develop skills and build confidence <br className="md:block hidden"/> through our exciting Brazilian style </p>

                </div>
            </div>

        </section>
    );
};

export default Banner;
