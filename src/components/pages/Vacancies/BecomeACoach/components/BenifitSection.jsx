import React from "react";

import bgImage from "/assets/serviceMainBannerCoach.png"; // background
import skillImg from "/assets/img-competitive-rates.png";
import earnImg from "/assets/img-training-and-support.png";
import networkImg from "/assets/img-premade-session-plans.png";
import growthImg from "/assets/img-fun-benefits.png";

const BeforeYouApply = () => {
  return (
    <section
      className="bg-cover servicesBenifit bg-top md:pt-[180px] md:mt-0 mt-20  pb-[90px] relative"
    // style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center max-w-[1130px] mx-auto mb-14">
          <h2 className="text-white recline text-[48px] font-semibold leading-tight">

            <span className="text-[#FFDE14] permanent-marker font-medium">BENEFITS </span> of working with Samba <br className="hidden md:block"/> Soccer Schools
          </h2>


        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {/* Card 1 */}
          <div className="rounded-xl p-6">
            <div className="h-[190px] flex items-center justify-center mb-4">
              <img src={skillImg} alt="Develop a New Skill" className="max-h-full" />
            </div>
            <p className="text-[#FFDE14] md:text-[35px] text-[25px] recline font-bold mb-3">
              Competitive Rates
            </p>
            <p className="text-white text-[14px] leading-relaxed">
              We understand how the world works. We offer competitive rates compared with other football schools and pathway options that can lead to further development and positions. Two coaching positions are available, with rates ranging between £14 and £18 for new starters.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl p-6">
            <div className="h-[190px] flex items-center justify-center mb-4">
              <img src={earnImg} alt="Earn through what you love" className="max-h-full" />
            </div>
            <p className="text-[#0DD180] md:text-[35px] text-[25px] recline font-bold mb-3">
              Training & Support
            </p>
            <p className="text-white text-[14px] leading-relaxed">
              We pride ourselves on our comprehensive Coach Education programme that establishes the foundations for every coach to thrive, but we also believe that everybody should continue to develop their skills. We provide ongoing training and support for all our coaches, whether teaching the latest ideas emerging from the football world or simply answering some nagging questions.             </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-xl p-6">
            <div className="h-[190px] flex items-center justify-center mb-4">
              <img src={networkImg} alt="Expand your Network" className="max-h-full" />
            </div>
            <p className="text-[#FFDE14] md:text-[35px] text-[25px] recline font-bold mb-3">
              Pre-made Session Plans            </p>
            <p className="text-white text-[14px] leading-relaxed">
              We want all our coaches to focus on the coaching, so we provide everybody with our detailed and comprehensive syllabus - meaning every lesson is planned and fully taken care of before you even step onto the pitch. This saves you a huge amount of planning time and ensures a degree of uniformity, meaning every child passing through the Samba Soccer Schools learns the same skills, and nobody gets left behind.             </p>
          </div>

          {/* Card 4 */}
          <div className="rounded-xl p-6">
            <div className="h-[190px] flex items-center justify-center mb-4">
              <img src={growthImg} alt="Personal Growth" className="max-h-full" />
            </div>
            <p className="text-[#0DD180] md:text-[35px] text-[25px] recline font-bold mb-3">
              Fun            </p>
            <p className="text-white text-[14px] leading-relaxed">
              Football coaching should be all about fun, but too often, it becomes stale too quickly. We teach children to play football with a genuine love of the game, with passion and excitement - and as a coach, it’s impossible not to get caught up in all the fun. If you love football and are looking for a job to have a great time while doing it, look no further.            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeYouApply;
