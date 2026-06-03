import React, { useEffect, useState } from "react";

import bgDesktop  from "/assets/serviceMainBannerCoach.png"; // background
import skillImg from "/assets/img-develop-a-new-skill.png";
import earnImg from "/assets/img-earn-through-what-you-love.png";
import networkImg from "/assets/img-expand-your-network.png";
import growthImg from "/assets/img-personal-growth.png";
import bgMobile from "/assets/Vector301211.png";
const BenifitSection = () => {
  const [bg, setBg] = useState(bgDesktop);
    useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setBg(bgMobile); // mobile
      } else {
        setBg(bgDesktop); // desktop
      }
    };

    handleResize(); // initial run
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section
      className="bg-white"
    >
      <div className="md:bg-cover bg-white md:pt-[180px] pt-[100px] md:mt-0 mt-10 bg-white pb-[90px] relative"
      style={{ backgroundImage: `url(${bg})` }}>
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center max-w-[1130px] mx-auto mb-14">
          <h2 className="text-white text-[50px] font-semibold recline leading-tight">
            What are the{" "}
            <span className="text-[#FFDE14] permanent-marker font-medium">BENEFITS</span> of the
            <br />
            SSS Coaching Pathway?
          </h2>

          <p className="text-white text-[18px] max-w-[820px] mx-auto mt-4 leading-relaxed">
            We applaud anybody who follows their dream, and if football coaching
            is yours, let’s work together. There are several major benefits that
            taking the SSS Coaching Pathway can have.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 text-center">
          {/* Card 1 */}
          <div className="bg-[#28478d]  md:flex items-center rounded-xl p-6">
            <div className="h-[190px] md:w-5/12 flex items-center justify-center mb-4">
              <img src={skillImg} alt="Develop a New Skill" className="max-h-full" />
            </div>
            <div className="md:w-7/12">
              <p className="text-[#FFDE14] text-[32px] text-left recline font-bold mb-3">
                Develop a New Skill
              </p>
              <p className="text-white text-[16px] text-left leading-relaxed">
                Football is a passion that grips many of us - usually beginning with playing but sometimes eventually moving into coaching. If you’ve always thought you had what it takes to develop the abilities of others through your own knowledge and love of the game, our pathway course is your entry into this exciting yet often hard-to-enter industry. We’ll teach you our fine-tuned coaching structure that you can apply to any coaching situation, regardless of age or ability.                   </p>
            </div>
          </div>

          <div className="bg-[#28478d]  md:flex items-center rounded-xl p-6">
            <div className="h-[190px] md:w-5/12 flex items-center justify-center mb-4">
              <img src={earnImg} alt="Develop a New Skill" className="max-h-full" />
            </div>
            <div className="md:w-7/12">
              <p className="text-[#fff] text-[32px] text-left recline font-bold mb-3">
                Earn through what you love
              </p>
              <p className="text-white text-[16px] text-left leading-relaxed">
Is there anything better than waking up in the morning and going to a job that you adore? For those who live and breathe football, coaching allows you to earn a living doing what you truly love. Upon completion of the course, we’ll direct you towards your FA qualifications or a Sports Apprenticeship, and the very best will be offered a job right there and then with Samba Soccer Schools and/or other partner clubs.               </p>
            </div>
          </div><div className="bg-[#28478d]  md:flex items-center rounded-xl p-6">
            <div className="h-[190px] md:w-5/12 flex items-center justify-center mb-4">
              <img src={networkImg} alt="Develop a New Skill" className="max-h-full" />
            </div>
            <div className="md:w-7/12">
              <p className="text-[#fff] text-[32px] text-left recline font-bold mb-3">
               Expand your Network 
              </p>
              <p className="text-white text-[16px] text-left leading-relaxed">
The SSS Coaching Pathway brings together like-minded individuals with an aptitude for success. It provides entry into an industry that can be difficult to crack, allowing you to meet coaches and others within the football world who can help you along the way as you embark on this new profession.               </p>
            </div>
          </div><div className="bg-[#28478d]  md:flex items-center rounded-xl p-6">
            <div className="h-[190px] md:w-5/12 flex items-center justify-center mb-4">
              <img src={growthImg} alt="Develop a New Skill" className="max-h-full" />
            </div>
            <div className="md:w-7/12">
              <p className="text-[#FFDE14] text-[32px] text-left recline font-bold mb-3">
Personal Growth              </p>
              <p className="text-white text-[16px] text-left leading-relaxed">
If you’re already leaning towards a football career, you’re already blazing a trail that few dare attempt. Life is short, so what waste it doing things you dislike or even hate? We firmly believe that establishing a career in a profession you love is something everybody should try to do as it almost always makes us better people. Our Coaching Pathway establishes the coaching foundations and teaches skills far beyond the football pitch, and the personal growth can be extraordinary.                </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default BenifitSection;
