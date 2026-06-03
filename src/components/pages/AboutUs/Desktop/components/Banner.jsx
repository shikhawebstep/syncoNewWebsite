import React from "react";
import bannerImg from "/assets/AboutusMainBanner.png";
import bannerImgMobile from "/assets/AboutusMainBannerMobile.png";

const Banner = () => {
    return (
        <section
            className={`
              relative aboutusbanner flex items-end bg-cover bg-bottom bg-[#FFDE14]
              pt-[150px] pb-[150px] 2xl:min-h-[700px] lg:h-[600px] h-[800px] 
              bg-[url('/assets/AboutusMainBannerMobile.png')]
              md:bg-[url('/assets/AboutusMainBanner2.png')]
            `}

        >
            <div className="container mx-auto">
                <div className="text-center max-w-[850px] mt-0 mt-[-400px] mx-auto">
                    <h1 className=" leading-14   recline  md:text-[80px] text-[48px]   font-medium" 
                    style={{"lineHeight": "1"}}>
                        <span className="text-[#00A6E3]  permanent-marker pb-1  ">Teaching <br /> brazilian <br /> football</span> <br className="mb-1" />
                    </h1>
                    <h2 className="text-[#042C89] recline md:text-[65px] text-[28px]">since 2009</h2>

                </div>
            </div>

        </section>
    );
};

export default Banner;
