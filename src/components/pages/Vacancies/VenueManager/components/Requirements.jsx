import React from "react";

const Requirements = () => {
  return (
    <section
      className="relative bg-cover bg-center md:py-[150px] py-[100px]"
      style={{ backgroundImage: `url('/assets/RequirementBg.png')` }}
    >
        
      <div className="relative z-999 mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[1100px] mx-auto">

          {/* LEFT CARD – REQUIREMENTS */}
          <div className="bg-white rounded-[28px] p-10 shadow-lg">
            <h2
              className="md:text-[48px] text-[32px] permanent-marker text-[#00A6E3] pb-4"
            
            >
              Requirements
            </h2>

            <p className="text-[#797A88] md:text-[16px] text-[15px] leading-[26px] mb-6">
              This is a senior part-time position at Samba Soccer Schools. If
              you’re interested in the role and meet the below criteria, we
              would love to hear from you!
            </p>

            <span
              className="text-[22px] recline text-[#042C89] pb-3"
            >
              Eligibility Criteria
            </span>

            <ul className="space-y-2 mt-4 text-[#797A88] text-[16px]">
              {[
                "Minimum FA Level 1 in coaching football",
                "Playing experience",
                "Football coaching experience (essential)",
                "Previous experience working in a similar capacity",
                "Leadership/Management experience",
                "Access to a personal vehicle (preferable)",
                "Proficient user of Excel and Word",
              ].map((item, index) => (
                <li key={index} className="flex text-[14px] md:text-[16px] items-start gap-3">
  <img src="/assets/greencheckIcon.png" alt="" className="min-w-3 min-h-3 max-w-3 max-h-3 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT CARD – OUR VALUES */}
          <div className="bg-white rounded-[28px] p-10 shadow-lg">
            <h2
              className="md:text-[48px] text-[32px] permanent-marker text-[#00A6E3] pb-4"
            >
              Our Values
            </h2>

            <p className="text-[#797A88] text-[15px] md:text-[16px] leading-[26px] mb-6">
              At Samba Soccer Schools, we adopt a very particular set of values.
              Our Regional Managers must share our values below.
            </p>

            <span
              className="text-[22px] text-[#042C89] recline mb-4"
            >
              Values
            </span>

            <ul className="space-y-2  mt-4  text-[#797A88] text-[16px]">
              {[
                {
                  title: "Dependability:",
                  desc: "Reliable, trustworthy and does what they say they will!",
                },
                {
                  title: "Passion:",
                  desc: "Truly loves what they do and is proud to let people know!",
                },
                {
                  title: "Work Ethic:",
                  desc: "Never lets a minute go to waste.",
                },
                {
                  title: "People-orientated:",
                  desc: "Sociable – has a good understanding of human behaviour and knows how to adapt.",
                },
                {
                  title: "Team Player:",
                  desc: "Willing to sacrifice for the greater good of the team!",
                },
              ].map((item, index) => (
                <li key={index} className="flex text-[14px] md:text-[16px] items-start gap-3">
                  <img src="/assets/greencheckIcon.png" alt="" className="min-w-3 min-h-3 max-w-3 max-h-3 mt-2" />
                  <span>
                    <strong className="text-[#797A88]">
                      {item.title}
                    </strong>{" "}
                    {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
      <div className="absolute inset-0 bg-black/40"></div>
    </section>
  );
};

export default Requirements;
