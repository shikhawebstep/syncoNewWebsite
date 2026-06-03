import React from "react";
import bannerImg from "/assets/MeetTheTeam.png";
import bannerImgMobile from "/assets/MeetTheTeamMobile.png";

const Banner = () => {
  return (
    <section
      className="gggggg
        relative bg-cover md:bg-center  bg-bottom
        bg-[url('/assets/MeetTheTeamMobile.png')]
        md:bg-[url('/assets/MeetTheTeam.png')]
      "
    >
  

      {/* content */}
      <div className=" flex items-end md:pt-[50px] pt-[90px] md:pb-[300px] pb-[70px] lg:min-h-[930px]">
        <div className="container MeetTheTeamCoaches mx-auto">
          <div className="md:text-center md:max-w-[650px] max-w-[65%] m-auto">
            <h1 className="leading-[1] permanent-marker text-[#00A6E3] md:text-[80px]  text-[45px] pb-4 md:pb-0 font-medium">
              Meet the team
            </h1>
            <p className="md:text-[18px] text-[14px] text-[#5F5F6D] md:leading-8 leading-[27px] md:mt-12">
              A football class can only be successful with outstanding coaches who share our deep passion for the game and who are capable of blending fun with education. Our coaches are picked through our strict Coach Recruitment process and passed through our Coaching Program to ensure that your child is in the best hands possible.
            </p>
            <p className="md:text-[18px] text-[14px] text-[#5F5F6D] md:leading-8 leading-[27px] mt-4">
              Scroll down to meet some of our senior coaches and learn a little about those who really make Samba Soccer Schools what it is.
            </p>
           <div className="flex justify-center md:block hidden absolute -bottom-30 left-0 right-0">
             <img src="/assets/downArrow.png" alt="" className="w-7" />
           </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Banner;
