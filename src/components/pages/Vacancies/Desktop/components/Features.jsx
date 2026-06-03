import { button } from 'framer-motion/client';
import React from 'react'

const Features = () => {


  const sections = [
    {
      title1: "Welcome",
      title2: "to the SSS Coaching Pathway",
      description:
        "If you’ve always dreamed about being a football coach but never found a way into the profession, our coaching pathway is for you. We’re looking for people with a strong desire to coach, a passion for stylish, attractive football, and the motivation to make their dreams a reality.\n\nIf coaching is what you’ve always wanted to do, why not put the building blocks into place and construct the life you’ve always wanted to live? Forget that boring office 9-5 job - imagine coaching football daily.",

      image: "/assets/CoachDesktopsss1.png", // Replace with your actual image path or URL
      imageAlt: "Kids playing football training",
      imagePosition: "right",
    },
    {
      title: "Matches",
      description:
        "The Samba Soccer Schools Coaching Pathway is a free 6-week course that leads you through the basics of coaching and helps you establish proven structures that can be applied to any situation, anywhere. It is designed to lay the foundations for a successful coaching career by providing you with confidence, knowledge, and real-world situations to practise in. \n\nSamba Soccer Schools is rapidly expanding, and we’re often looking for new coaches to join our team. Those who excel on our Coaching Pathway will be offered coaching jobs, but everybody who completes the course should feel prepared to take on their FA Level 1 and 2 coaching badges and have acquired the skills to make them employable in the football industry.",
      highlightDescription: "If you’re ready to act on that long-standing dream and become the coach you’ve always thought you had inside, scroll down to some more information and an application form. ",
      image: "/assets/CoachDesktopsss2.png", // Replace with your actual image path or URL
      imageAlt: "Kids playing football match",
      imagePosition: "left",
      buttonText: "Apply Today",
    },
  ];
  return (
    <>
      <section className="md:pt-0 pt-10 md:py-5  ">
        <div className="container">

          <div>
            <div className=' m-auto'>
              {sections.map((section, idx) => {
                const isImageRight = section.imagePosition === "left";
                return (
                  <div
                    key={idx}
                    className={`flex mt-0 flex-col md:flex-row items-center md:gap-14 ${isImageRight ? "md:flex-row-reverse" : "md:flex-row"
                      }`}
                  >
                    {/* Text Content */}

                    <div className="md:w-5/12 md:p-15 relative md:pe-5">
                      <img
                        src={section.image}
                        alt={section.imageAlt}
                        className="rounded-3xl w-full object-cover"
                      />


                    </div>
                    <div className="md:w-7/12 text-gray-700 mt-4 md:mt-0">
                      <h2 className="text-[36px] recline font-bold text-[#0DD180] mb-4">

                      </h2>
                      <h1 className='md:text-[52px] text-[40px] md:w-9/12 text-left recline blue-text '> <span className='text-[#0DD180] permanent-marker' >  {section.title1}</span>  {section.title2}
                      </h1>
                      <div className='max-w-[674px]'>
                      {section.description.split("\n\n").map((para, i) => (
                        <p key={i} className="my-4 leading-[30px] text-[#797A88] poppins tracking-[-0.9%]">
                          {para}
                        </p>
                      ))}
                      <p className='mb-4 leading-relaxed font-semibold text-[#00A6E3] poppins'>{section.highlightDescription}</p>

                      </div>
                      {section.buttonText && (
                        <button 
                          onClick={() => document.getElementById('enquiry-section')?.scrollIntoView({ behavior: 'smooth' })}
                          className="mt-5 rounded-full bg-[#00A6E3] px-5 py-2.5 text-[16px] font-medium text-white poppins">
                          {section.buttonText}
                        </button>)}
                    </div>

                    {/* Image with decorative yellow splashes */}

                  </div>
                );
              })}

            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Features
