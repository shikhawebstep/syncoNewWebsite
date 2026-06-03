import React from "react";
import leftImg from "/assets/img-quality-of-classes.png";
import rightImg from "/assets/img-safety.png";
import bgImage from "/assets/serviceMainBannerCoach.png"; // background

const cardsTop = [
  {
    title: "Quality of Classes",
    headerBg: "bg-[#0DD180]",
    textColor: "text-white",
    desc:
      "Supervising and maintaining the high standards of coaching at Samba Soccer Schools. This includes overseeing coaching assessments, delivering quality control feedback, and managing issues and concerns, among other tasks.",
  },
  {
    title: "Practical Assessments",
    headerBg: "bg-[#FFDE14]",
    textColor: "text-white",
    desc:
      "Conducting hands-on practical assessments with potential coaches and compiling data evaluation.",
  },
  {
    title: "Onboarding",
    headerBg: "bg-[#0DD180]",
    textColor: "text-white",
    desc:
      "Training new coaches and managing volunteer and pathway coaches.",
  },
];

const cardsBottom = [
  {
    title: "Emergency Coaching",
    headerBg: "bg-[#0DD180]",
    textColor: "text-white",
    desc:
      "Setting up emergency coaching contingency plans and acting as a hub for coaching enquiries. Fulfilling the role of emergency coach if necessary.",
  },
  {
    title: "Key Performance Indicators",
    headerBg: "bg-[#FFDE14]",
    textColor: "text-white",
    desc:
      "Overseeing and reviewing data from KPIs. Compiling quality control reports and customer feedback.",
  },
  {
    title: "Safety",
    headerBg: "bg-[#0DD180]",
    textColor: "text-white",
    desc:
      "Safeguarding regional lead. Responsible for updating and maintaining company policies.",
  },
];

const Card = ({ title, desc, headerBg, textColor }) => (
  <div className="bg-[#2F4E85] rounded-2xl overflow-hidden w-full max-w-[260px] h-full flex flex-col">

    {/* Header */}
    <div
      className={`py-4 min-h-20 p-8 recline font-semibold text-[25px] text-center flex items-center justify-center leading-[1] text-blue-900 ${headerBg}`}
      style={{ backgroundImage: "url('/assets/Texturebg.png')" }}
    >
      {title}
    </div>

    {/* Body */}
    <div className="px-5 py-5 flex-1 flex items-start">
      <p className={`text-[14px] poppins text-center font-light leading-relaxed ${textColor}`}>
        {desc}
      </p>
    </div>

  </div>
);


const BeforeYouApply = () => {
  return (
    <section
      className="bg-cover whatDoesRoleInclude bg-top pt-[180px] pb-[90px] relative"

    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-15" >
          <h2 className="text-[#FFDE14] recline text-[52px]">What does the role include?</h2>
          <p className="font-light text-[#FDFDFF]">Here is an overview of the six areas our Regional Manager <br /> would oversee and what each would entail:</p>
        </div>
        {/* TOP ROW */}
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-6 items-stretch">

          {/* Image – unchanged */}
          <img
            src={leftImg}
            alt="Training"
            className="rounded-2xl w-full h-full object-cover"
          />

          {/* Cards */}
          <div
            className="
      flex md:block
      gap-6
      overflow-x-auto md:overflow-visible
      md:contents
      snap-x snap-mandatory
      scrollbar-hide
    "
          >
            {cardsTop.map(card => (
              <div
                key={card.title}
                className="min-w-[75%] md:min-w-0 snap-center"
              >
                <Card {...card} />
              </div>
            ))}
          </div>

        </div>



        {/* BOTTOM ROW */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_1.5fr] gap-6 items-stretch mt-15">
       <div className="md:hidden block">  <img
            src={rightImg}
            alt="Safety"
            className="rounded-2xl w-full h-full   object-cover"
          /></div>
         <div
            className="
      flex md:block
      gap-6
      overflow-x-auto md:overflow-visible
      md:contents
      snap-x snap-mandatory
      scrollbar-hide
    "
          >  {cardsBottom.map(card => (
             <div
                key={card.title}
                className="min-w-[75%] md:min-w-0 snap-center"
              >
            <Card  {...card} />
            </div>
          ))}
          </div>

          <div className="md:block hidden">
            <img
            src={rightImg}
            alt="Safety"
            className="rounded-2xl w-full h-full object-cover"
          />
          </div>
        </div>

      </div>
    </section>

  );
};

export default BeforeYouApply;
