import React from "react";
import bannerImg from "/assets/contactBanner.png";
import TexturedBackground from "/assets/TexturedBackground.png";
import bannerImgMobile from "/assets/contactBannerMobile.png";

const Banner = () => {
  return (
    <section
      className="relative bg-[#FFDE14] z-999 bg-no-repeat md:bg-top  bg-right bg-cover  md:bg-[url('/assets/contactBanner.png')] bg-[url('/assets/contactBannerMobile.png')]"
    >

      <div className=" py-[100px] bg-no-repeat bg-cover contactbannerrr"
        >
        <div className="container mx-auto">
          <div className="inner-content mt-[100px]  pb-20  m-auto">
            <h1 className="recline leading-18 lg:text-[60px] text-[38px] md:max-w-[40%] pb-5 md:pt-0  pt-70 text-[#042C89]">
              We’d love to hear <br /> from you, so feel free <br />to <span className="permanent-marker  font-normal text-[#00A6E3]  lg:text-[60px]"> contact us! </span>
            </h1>
            <p className="text-[#5F5F6D] text-16px md:max-w-[50%]">If you’d like to contact the Samba Soccer team, please fill out the contact form, and we’ll do our best to respond to all messages within 48 hours. </p>
            <p className="text-[#5F5F6D] text-16px md:max-w-[50%] mt-5">Alternatively, please feel free to either email us at admin@sambasoccerschools.com or call our team on 020 72052723, and we’ll be happy to discuss any queries - or simply to chat about how much your child loves our lessons! </p>

          </div>
        </div>
      </div>

    </section>
  );
};

export default Banner;
