import React from "react";
import bannerImg from "/assets/MeetTheTeam.png";
import bannerImgMobile from "/assets/MeetTheTeamMobile.png";

const Banner = () => {
  return (
    <section
      className="
        relative bg-[#FFDE14] md:bg-cover md:bg-center  bg-top
        bg-[url('/assets/MeetTheTeamMobile.png')]
        md:bg-[url('/assets/MeetTheTeam.png')]
      "
    >
      {/* overlay texture */}
      <div
        className="absolute inset-0 bg-cover md:bg-center "
        style={{ backgroundImage: `url('/assets/TexturedBackground.png')` }}
      />

      {/* content */}
      <div className="relative flex items-end md:pt-[50px] pt-[150px] md:pb-[300px] pb-[100px] lg:min-h-[800px]">
        <div className="container MeetTheTeamCoaches mx-auto">
          <div className="md:text-center md:max-w-[650px] max-w-[65%] mx-auto">
            <h1 className="leading-[1] permanent-marker text-[#00A6E3] md:text-[80px]  text-[50px] font-medium">
              Meet the team
            </h1>
            <p className="text-[18px] text-[#5F5F6D] leading-8 md:mt-12">
              A football class can only be successful with outstanding coaches who share our deep passion for the game and who are capable of blending fun with education. Our coaches are picked through our strict Coach Recruitment process and passed through our Coaching Program to ensure that your child is in the best hands possible.
            </p>
            <p className="text-[18px] text-[#5F5F6D] leading-8 mt-4">
              Scroll down to meet some of our senior coaches and learn a little about those who really make Samba Soccer Schools what it is.
            </p>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Banner;
