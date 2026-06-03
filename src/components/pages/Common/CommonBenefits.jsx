import { img } from "framer-motion/client";
import React from "react";

const CommonBenefits = ({
  heading,
  headingMobile,
  highlightTextMobile,
  subHeadingMobile,
  subHeading2Mobile,
  logoImage,
  highlightText,
  subHeading,
  subHeading2,
  benefits,
  dashImage,
  isCenter
}) => {
  console.log("isCenter:", isCenter);
  return (

    <section
      className={`  benefits-banner bg-cover bg-top pb-[90px] flex items-center relative z-50  ${logoImage ? "pt-[100px]" : "pt-[190px]"}`}

    >
      <div className="container mx-auto">
        <div className={`text-center m-auto ${logoImage ? "lg:max-w-[1230px]" : " lg:max-w-[1200px]"} `}>
          <div className={`${logoImage ? "md:flex gap-10  items-center " : ""}`}>

            <div className={`${logoImage ? "md:w-[45%] text-left mt-[100px] " : ""}`}>
              {logoImage && (
                <img src={logoImage} alt={subHeading} className="md:w-[180px] w-[50%] md:mx-0 mx-auto" />
              )}
              <h3
                className={`text-white onlyDesktop text-center text-[32px] benifith3 font-semibold ${isCenter ? "md:text-center" : "md:text-left"
                  }`}
              >
                {heading}{" "}
                <span className={` relative text-[#0DD180]  font-normal  ${logoImage ? "md:block md:text-[84px] " : ""}`}>{highlightText} {dashImage && <img src={dashImage} className="absolute right-[30px] -bottom-[5px]" alt="Dashboard image" />}</span>{" "}
                {subHeading} <span className="block recline ">  {subHeading2}</span>


              </h3>
              <h3
                className={`text-white onlyMobile text-center text-[32px] benifith3 font-semibold ${isCenter ? "md:text-center" : "md:text-left"
                  }`}
              >
                {headingMobile}{" "}
                <span className={` relative text-[#0DD180]  font-normal  ${logoImage ? "md:block md:text-[84px] " : ""}`}>{highlightTextMobile} {dashImage && <img src={dashImage} className="absolute right-[30px] -bottom-[5px]" alt="Dashboard image" />}</span>{" "}
                {subHeadingMobile} <span className="block recline ">  {subHeading2Mobile}</span>


              </h3>

            </div>



            <div className={`md:grid items-start gap-6 ${logoImage ? "lg:grid-cols-2 md:w-[57%]" : " lg:grid-cols-4  mt-10 "}`}>
              {benefits.map((item, index) => (
                <div key={index} className={`${!logoImage ? "md:max-w-[254px] mx-auto" : "w-full"}`}>
                  <div className="img-box h-[195px] w-[220px] m-auto mb-4">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="object-contain h-[100%] w-full"
                    />
                  </div>

                  <h6
                    className={`text-[26px] font-bold pb-3 ${index % 2 === 0 ? "text-[#FFDE14]" : "text-[#0DD180]"
                      }`}
                  >
                    {item.title}
                  </h6>

                  <p className="text-[#FDFDFF] text-[14px] font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommonBenefits;
