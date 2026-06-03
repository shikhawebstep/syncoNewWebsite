import React from "react";
import bgImage from "/assets/serviceMainBannerCoach.png"; // background
import skillImg from "/assets/img-develop-a-new-skill.png";
import earnImg from "/assets/img-earn-through-what-you-love.png";
import networkImg from "/assets/img-expand-your-network.png";
import growthImg from "/assets/img-personal-growth.png";

const BenifitSection = () => {
  return (
    <section
      className=" bg-[#1c3c87]"
    >
      <div className="bg-cover  md:py-[120px] py-[80px] bg-[#1c3c87] relative"
       >
        <div className="container mx-auto"><div className="md:flex gap-20">
          {/* Heading */}
          <div className="md:text-left text-center md:w-[50%] mx-auto md:mb-14 pr-5">
            <h2 className="text-white text-[62px] font-semibold recline leading-tight">
              <span className="text-[#FFDE14] permanent-marker font-medium">Before</span> <br />YOU APPLY

            </h2>

            <p className="text-white font-light text-[16px] max-w-[800px] mx-auto mt-4 leading-relaxed">
              To ensure that nobody is wasting anybody’s time, please read our eligibility criteria. You must meet these requirements before you can apply, otherwise, your application could be rejected before the interview stage.
            </p>
            <p className="text-white font-light text-[16px] max-w-[800px] mx-auto mt-4 leading-relaxed">
              The football coaching position you are applying for is either for the Lead Coach or Head Coach role. Both roles will involve you delivering football classes for children between the ages of 4 and 12 years according to our coaching syllabus and in line with the school's playing philosophy.            </p>
            <button className="bg-[#FFDE14] text-[#042C89] rounded-3xl p-3 px-6 font-bold text-[16px] my-10">Learn More</button>

          </div>

          <div className="md:w-[50%] w-[80%] mx-auto ">
            <div className=" flex  flex-wrap md:gap-5 gap-8 text-center">
              {/* Card 1 */}
              <div className="bg-[#355296] md:w-[48%] w-full flex items-start max-h-full rounded-xl p-6">

                <div className="w-full">
                  <p className="text-[#0DD180] text-[24px] text-left recline font-bold mb-3">
                    Qualifications:
                  </p>
                  <ul className="space-y-1">
                    <li className="text-white text-[14px] leading-[26px] text-left  flex gap-2 items-start "><img src="/assets/greencheckIcon.png" className="mt-2 w-3 h-3" alt="" /> Head coaches require a minimum FA Level 1 Football Coaching License</li>
                    <li className="text-white text-[14px] leading-[26px] text-left  flex gap-2 items-start "><img src="/assets/greencheckIcon.png" className="mt-2 w-3 h-3" alt="" />Lead coaches do not need any licence</li>
                    <li className="text-white text-[14px] leading-[26px] text-left  flex gap-2 items-start "><img src="/assets/greencheckIcon.png" className="mt-2 w-3 h-3" alt="" />DBS Certificate</li>
                    <li className="text-white text-[14px] leading-[26px] text-left  flex gap-2 items-start "><img src="/assets/greencheckIcon.png" className="mt-2 w-3 h-3" alt="" />First Aid at Work</li>
                  </ul>
                </div>
              </div>
              <div className="bg-[#355296] md:w-[48%] w-full  flex items-start max-h-full rounded-xl p-6">
                <div className="w-full">
                  <p className="text-[#0DD180] text-[24px] text-left recline font-bold mb-3">
                    Requirements:
                  </p>
                  <ul className="space-y-1">
                    <li className="text-white text-[14px] leading-[26px] text-left  flex gap-2 items-start "><img src="/assets/greencheckIcon.png" className="mt-2 w-3 h-3" alt="" />Must speak fluent English</li>
                    <li className="text-white text-[14px] leading-[26px] text-left  flex gap-2 items-start "><img src="/assets/greencheckIcon.png" className="mt-2 w-3 h-3" alt="" />Must live in London</li>
                    <li className="text-white text-[14px] leading-[26px] text-left  flex gap-2 items-start "><img src="/assets/greencheckIcon.png" className="mt-2 w-3 h-3" alt="" />Punctuality and Reliability</li>
                    <li className="text-white text-[14px] leading-[26px] text-left  flex gap-2 items-start "><img src="/assets/greencheckIcon.png" className="mt-2 w-3 h-3" alt="" />Confidence and enthusiasm</li>
                    <li className="text-white text-[14px] leading-[26px] text-left  flex gap-2 items-start "><img src="/assets/greencheckIcon.png" className="mt-2 w-3 h-3" alt="" />Must have a passion for football</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className=" flex mt-5 flex-wrap gap-5 text-center">
              <div className="bg-[#355296] md:w-[48%] w-full  flex items-start max-h-full rounded-xl p-6">

                <div className="w-full">
                  <p className="text-[#0DD180] text-[24px] text-left recline font-bold mb-3">
                    Experience:
                  </p>
                  <ul className="space-y-1">
                    <li className="text-white text-[14px] leading-[26px] text-left  flex gap-2 items-start "><img src="/assets/greencheckIcon.png" className="mt-2 w-3 h-3" alt="" />2 Years of experience working with children between 4 and 12 years</li>
                    <li className="text-white text-[14px] leading-[26px] text-left  flex gap-2 items-start "><img src="/assets/greencheckIcon.png" className="mt-2 w-3 h-3" alt="" />2 or more years of playing experience</li>
                  </ul>
                </div>
              </div>
              <div className="bg-[#355296] md:w-[48%] w-full  flex items-start max-h-full rounded-xl p-6">

                <div className="w-full">
                  <p className="text-[#0DD180] text-[24px] text-left recline font-bold mb-3">
                    Key Responsibilities:
                  </p>
                  <ul className="space-y-1">
                    <li className="text-white text-[14px] leading-[26px] text-left  flex gap-2 items-start "><img src="/assets/greencheckIcon.png" className="mt-2 w-3 h-3" alt="" />To deliver classes in accordance with our coaching syllabus</li>
                    <li className="text-white text-[14px] leading-[26px] text-left  flex gap-2 items-start "><img src="/assets/greencheckIcon.png" className="mt-2 w-3 h-3" alt="" />To carry out safety checks before each session</li>
                    <li className="text-white text-[14px] leading-[26px] text-left  flex gap-2 items-start "><img src="/assets/greencheckIcon.png" className="mt-2 w-3 h-3" alt="" />To completing administration responsibilities after each class</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default BenifitSection;
