import React from "react";
import bannerImg from "/assets/candidate.png";

const Banner = () => {
  return (
    <section
      className="relative  idealCandidate flex bg-cover items-center  bg-bottom py-[100px] md:min-h-[800px] min-h-[720px]" 

    >
      <div className="container mx-auto">
        <div className="pb-20 flex md:justify-end justify-center md:mt-0 mt-[-300px] max-w-[1130px] ">
          <h1 className="recline text-center md:text-start  leading-tight text-white text-[60px] lg:text-[72px]">
            Ideal<br /> <span className="md:text-[95px] text-[60px] leading-none font-normal permanent-marker text-[#FFDE14]">Candidate</span>
          </h1>


        </div>
      </div>
      <div className="absolute w-[700px] bottom-[8%] left-[10%] hidden lg:block">
        <img src="/assets/idealCandidate.png" alt="" />
      </div>
       <div className="absolute max-w-[360px] bottom-[10%] left-0 right-0 lg:hidden block">
        <img src="/assets/idealCandidateMobile.png" alt="" />
      </div>
    </section>
  );
};

export default Banner;
