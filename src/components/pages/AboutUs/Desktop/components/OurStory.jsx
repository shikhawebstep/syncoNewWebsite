import React from "react";

const OurStorySection = () => {
  return (
    <section className="story-banner relative bg-gradient-to-b from-[#0B2A6A] to-[#0E3B8C] bg-cover  md:py-24 pt-10 px-5"
      style={{
        backgroundImage: "url('/assets/serviceMainBannerCoach.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      <div className="mx-auto max-w-5xl pt-30">
        {/* Heading */}
        <h2 className="text-center text-[#FFDE14] text-[48px] md:text-[56px] font-bold recline mb-12">
          Our Story
        </h2>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-white text-[17px] mt-10 leading-relaxed">

          {/* Left Column */}
          <div className="space-y-8">
            <p className="font-light text-[#FDFDFF] leading-8">
              We’ve all seen those children's football coaches who pace the sideline on a Saturday or Sunday morning, constantly shouting at their players. Phrases like ‘box them in’, ‘go long’, and ‘track back’ all make sense when delivered to older players, but to children, they’re often meaningless jargon that simply detracts from the pure joy of playing football. Many kids grow up with an almost innate love of the game, but all too often, that is stamped out by dreary teaching methods and ranting coaches who shatter self-confidence.
            </p>

            <p className="font-light text-[#FDFDFF] leading-8 ">
              This is precisely how our founder, Nilio Bagga, felt as a child. Whenever he tried anything skilful - something you might see a Brazilian doing - his coaches immediately shot him down and ordered him to play safer, standard football. To Nilio, that meant more boring football, and he could feel his love for the game slowly dwindle. Isn’t the beautiful game supposed to be based on creativity, excitement, and showstopping skills?
            </p>

            <p className="font-light text-[#FDFDFF] leading-8 ">
              Away from the more rigid coaching methods, Nilio found his football feet on the streets or in the playground, where he and his friends could express themselves freely without the constant fear of making mistakes and dressing down from a coach that would follow. Suddenly he could sharpen his skills and develop confidence and a passion for the game like never before. He didn’t know it then, but Nilio had stumbled into the world of Ginga football, a style of play that has seen Brazilians electrifying football for decades.
            </p>

            <div className="block md:hidden">
              <img
                src="/assets/Group1000002515.png"
                className="w-[70%] mx-auto"
                alt=""
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <p className="font-light text-[#FDFDFF] leading-8 ">
              This experience profoundly impacted Nilio as he became an adult and moved into football coaching. Isn’t it possible to teach children how to play thrilling football based on freedom and expression while still retaining structure and development? As his horizons began to broaden, his attention fell on Brazil, and after visiting the country in 2010, he knew he had found his way of playing football and one he was determined to bring back to Britain.
            </p>

            <p className="font-light text-[#FDFDFF] leading-8 ">
              Over ten years later, here we are. Samba Soccer Schools has grown rapidly and today teaches thousands of children how to play football with beauty, freedom and self-expression - free from the harsh critical gaze that frequently dogs football coaching in Britain.
            </p>

            <p className="font-light text-[#FDFDFF] leading-8 ">
              During our classes, each child uses their own ball, maximising the number of touches and dramatically improving their close control ability. Sessions are taken by experienced coaches who share Nilio’s vision for attractive, skilful football and who encourage the daring rather than telling them to play it safe. And it’s all done to the background of a thumping samba beat that makes the whole experience more like a fun kickabout at carnival time than a dull coaching session based on outdated tactics.
            </p>

            <p className="font-light text-[#FDFDFF] leading-8 ">This is football as it’s supposed to be.
            </p>
            <div className="block md:hidden">
              <img
                src="/assets/sambakid11881.png"
                className="w-[70%] mx-auto"
                alt=""
              />
            </div>
          </div>
        </div>

      </div>
      <div className="absolute left-0 bottom-0 hidden md:block">
        <img src="/assets/OueStory1.png" alt="" />
      </div>

      <div className="absolute right-0 bottom-0 hidden md:block">
        <img src="/assets/OueStory2.png" alt="" />
      </div>

      <div className="absolute left-1/2 bottom-10 -translate-x-1/2 hidden md:block">
        <img src="/assets/SambaLogo.png" alt="" />
      </div>


    </section>
  );
};

export default OurStorySection;
