import React from "react";

import bgImage from "/assets/serviceMainBannerCoach.png"; // background
import SafetyDiff from "/assets/SafetyDiff.png";
import FunDiff from "/assets/FunDiff.png";
import InnovationDiff from "/assets/InnovationDiff.png";
import EducationDiff from "/assets/EducationDiff.png";

const WhatMakeDiffrent = () => {
  return (
    <section
      className="bg-white"
    >
      <div className="bg-cover bg-white pt-[180px] bg-white pb-[90px] relative"
        style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="container mx-auto">
          {/* Heading */}
          <div className="text-center  mx-auto mb-14">
            <h2 className="text-[#0DD180] text-[48px] font-semibold recline leading-tight">
              What makes us different?
            </h2>

            <p className="text-white text-[18px]  mx-auto mt-4 leading-relaxed">
              Wondering what makes us stand out compared to the hundreds of other football schools out there?
            </p>
          </div>
          <div className="text-center  mx-auto mb-14">
            <h2 className="text-[#fff] text-[48px] font-semibold recline leading-tight">
              Our Values
            </h2>

            <p className="text-white text-[18px]  mx-auto mt-2 leading-relaxed">
              Samba Soccer Schools is based on four core values.
            </p>
          </div>
          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 text-center">
            {/* Card 1 */}
            <div className=" md:flex items-start">
              <div className="h-[190px] md:w-5/12 flex items-center justify-center mb-4">
                <img src={SafetyDiff} alt="Develop a New Skill" className="max-h-full" />
              </div>
              <div className="md:w-7/12">
                <p className="text-[#0DD180] text-[32px] md:text-left text-center recline font-bold mb-3">
                  Safety
                </p>
                <p className="text-white text-[16px] md:text-left text-center leading-relaxed">
                  Keeping everybody safe is our top priority. Our classes are held in London’s top secure indoor and outdoor venues, while our coaches all have an up-to-date DBS certificate and run careful safety checks before every session. Coaches undergo rigorous in-house training, including first aid, and are prepared for any emergency that might occur.                          </p>
              </div>
            </div>

            <div className=" md:flex items-start">
              <div className="h-[190px] md:w-5/12 flex items-center justify-center mb-4">
                <img src={FunDiff} alt="Develop a New Skill" className="max-h-full" />
              </div>
              <div className="md:w-7/12">
                <p className="text-[#FFDE14] text-[32px] md:text-left text-center recline font-bold mb-3">
                  Fun
                </p>
                <p className="text-white text-[16px] md:text-left text-center leading-relaxed">
                  Children need to have fun while playing football. Take that away, and any desire to play gradually fades. Fun and excitement are carefully woven into each training session to ensure that children are learning the essential aspects of football but do so with a smile on their faces and longing just to keep playing. With a pumping samba beat, their friends around them, and Brazilian-style tricks and flicks to learn, they won’t want to leave the football pitch.            </p>
              </div>
            </div><div className=" md:flex items-start">
              <div className="h-[190px] md:w-5/12 flex items-center justify-center mb-4">
                <img src={InnovationDiff} alt="Develop a New Skill" className="max-h-full" />
              </div>
              <div className="md:w-7/12">
                <p className="text-[#FFDE14] text-[32px] md:text-left text-center recline font-bold mb-3">
                  Innovation
                </p>
                <p className="text-white text-[16px] md:text-left text-center leading-relaxed">
                  You’d be amazed by how much having samba music playing can transform a child’s game. Instead of repetitive football drills, a training session becomes a dance studio where footballers can express themselves and have fun. We also use smaller footballs to encourage better close control at an early age - just as they do on the streets of Rio.   </p>
              </div>
            </div><div className=" md:flex items-start">
              <div className="h-[190px] md:w-5/12 flex items-center justify-center mb-4">
                <img src={EducationDiff} alt="Develop a New Skill" className="max-h-full" />
              </div>
              <div className="md:w-7/12">
                <p className="text-[#FFDE14] text-[32px] md:text-left text-center recline font-bold mb-3">
                  Education              </p>
                <p className="text-white text-[16px] md:text-left text-center leading-relaxed">
                  Having fun needs to be partnered with education. We want to deepen the footballing knowledge of every child who comes to our school while instilling core social skills, such as communication, respect, teamwork, and fair play - vital skills that go far beyond the football pitch. Hard work leads to positive development, and education is the cornerstone.           </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatMakeDiffrent;
