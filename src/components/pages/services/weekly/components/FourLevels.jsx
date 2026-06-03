import React, { useState } from "react";

const faqData = [
  {
    question: "Beginners Group",
    title: "Weekly beginner football classes for kids",
    desc: "For those just starting their footballing journey, our beginner level establishes the foundations for playing football with flair, freedom, and fun while establishing those all-important basics that are needed to progress.",
    subheading: "Our beginners class teaches your child the following:",
    listing: [
      "Basic dribbling techniques using the sole, inside and outside of the foot",
      "The foundations for ball mastery skills appropriate for their level",
      "Simple ball control techniques through passing and receiving",
      "Decision-making skills through fun game-based exercises",
    ],
    image: "/assets/img-level-beginner.png",
  },
  {
    question: "Intermediate Group",
    // title: "Weekly intermediate football classes for kids",
    desc: "With the basics now in place, it’s time for your child to step things up.  Our intermediate classes build on existing foundations by teaching them how to create space and use the skills learnt at the beginner level more effectively and with greater confidence.   ",
    subheading: "Our Intermediate class teaches your child the following skills:",
    listing: [
      "A range of ball mastery skills suitable for their level",
      "How to create space with their body and skills",
      "Core 1v1 tricks suitable for their level",
      "Decision making including when and how to use skills against defenders",
    ],
    image: "/assets/level-2.png",
  },
  {
    question: "Advanced Group",
    // title: " Advanced weekly football classes " ,
    desc: "We take your child’s footballing development up yet another gear as they move into the advanced group. This is where children really begin to feel comfortable with a ball at their feet and where that Brazilian style of play begins to truly shine.",
    subheading: "Our Advanced classes teach your child the following skills:",
    listing: [
      "Physical movements and techniques focusing on speed, agility, and balance",
      "Advanced ball mastery skills suitable for their level, including combinations of skills",
      "Core 1v1 tricks suitable for their level",
      "How to make better decisions with and without the ball",
    ],
    image: "/assets/level3.png",
  },
  {
    question: "Proficient Group",
    // title: "Proficient weekly football classes",
    desc: "If your child has been with us from the start, this is where we bring everything together, and the next Neymar emerges! Our proficient group ties together all of the skills, tricks, techniques, and footballing knowledge learnt throughout the previous three levels while sharpening their problem-solving ability through more complex drills and training styles. If your child dreams of playing in the Premier League one day, they’ll need to pass through our proficiency level.",
    subheading: "Our Proficient football classes teach your child the following skills:",
    listing: [
      "High intensity physical movements to develop speed and reaction",
      "Complex ball mastery skills suitable for their level",
      "Core 1v1 tricks suitable for their level",
      "How to problem solve when under significant pressure",
    ],
    image: "/assets/level4.png",
  },
];


const FourLevels = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeItem = faqData[activeIndex];

  return (
    <section className="bg-white  services services1  faq md:py-20 py-10 px-10 lg:px-20">
      <div className="text-center mb-10 text-white">
        <h3 className="yellow-text   recline" style={{textAlign:'center'}}>Four Levels</h3>
        {activeIndex == 0 ? (
          <>
            <p className="md:block hidden pt-5 ">
              Our weekly football classes in London are all divided into four
              levels to ensure that  <br className="md:block hidden" /> every child plays within a group that shares
              similar abilities.
            </p>
            <p className="pt-6 md:block hidden">
              While we do group students by ability and not age, we find that
              levels usually <br className="md:block hidden" /> incorporate rough age ranges - Beginner (4-5 years),
              Intermediate (6-7 years) <br className="md:block hidden" />, Advanced (8-9 years), and Proficient
              (10-12 years).
            </p>
             <p className="pt-6 md:hidden block md:px-10">
             Although we group players based on ability and not age, we have found that our ability groups loosely fit certain age groups.

            </p>
          </>
        ) : (
          <p className="pt-5">
            Our weekly football classes in London are all divided into four
            levels to ensure  <br className="md:block hidden" /> that every child plays within a group that shares
            similar abilities.
          </p>
        )}
      </div>

      <div className="lg:max-w-[1100px] mt-5 m-auto  lg:space-x-10">
        {/* Tabs */}
        <div className="flex  gap-3  mb-6 lg:mb-0 overflow-x-auto text-white lg:max-w-[856px] m-auto">
          {faqData.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`block w-full whitespace-nowrap   px-2 py-3 text-[20px] text-center border-btn border border-[#FFDE14] poppins recline rounded-xl ${
                activeIndex === index
                  ? "bg-[#FFDE14] text-[#042C89] font-bold "
                  : "bg-none text-[#FFDE14] font-medium"
              } transition-colors duration-300`}
            >
              {item.question}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex lg:flex-row flex-col lg:items-center lg:space-x-8 mt-15">
      

          <div className="lg:w-7/12">
            {activeItem.title && (
              <p className="text-[18px] poppins text-[18px] text-white font-bold text-blue-900 mb-4">
                {activeItem.title}
              </p>
            )}
            <p className="text-[#5F5F6D] mb-4 text-white tracking-[0.2px] leading-[30px]">
              {activeItem.desc}
            </p>
            {activeItem.subheading && (
              <p className="font-semibold  text-white mb-3">
                {activeItem.subheading}
              </p>
            )}
            <ul className="list-disc pl-5 space-y-1 text-white text-[#5F5F6D] leading-[28px]">
              {activeItem.listing.map((point, idx) => (
                <li key={idx} className="text-[15px] poppins flex gap-2 items-center "><img className="w-4.5" src="/assets/greenCheck.png" alt="" />{point}</li>
              ))}
            </ul>
          </div>
              <div className="lg:w-5/12">
            <img
              src={activeItem.image}
              alt={activeItem.question}
              className="w-full md:mb-8 mt-8 md:mt-0 h-auto rounded-lg object-cover"
            />
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourLevels;
