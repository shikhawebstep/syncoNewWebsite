import { button } from 'framer-motion/client';
import React from 'react'

const Features = () => {


  const sections = [
    {
      title1: "Do you have the",
      title2: "skills ",
      title3: "to oversee, manage, and maintain our coaching quality?",
      description:
        "Samba Soccer Schools are searching for an experienced football coach to manage our coaching staff and supervise the quality of our football classes. \n\n The role of a ‘Regional Manager’ requires exceptional management and leadership skills as you take on significant responsibility.\n\n Please read the details below carefully before submitting your application and only apply if you meet the eligibility criteria.",
      image: "/assets/img-coaching-skills.png", // Replace with your actual image path or URL
      imageAlt: "Kids playing football training",
      imagePosition: "right",
      buttonText: "Apply Today",
    }
  ];
  return (
    <>
      <section className="  py-10 pt-15 ">
        <div className="container">

          <div>
            <div className=' m-auto'>
              {sections.map((section, idx) => {
                const isImageRight = section.imagePosition === "left";
                return (
                  <div
                    key={idx}
                    className={`flex mt-0 flex-col md:flex-row items-center gap-14 ${isImageRight ? "md:flex-row-reverse" : "md:flex-row"
                      }`}
                  >
                    {/* Text Content */}

                    <div className="md:w-5/12 p-15 relative md:block hidden">
                      <img
                        src={section.image}
                        alt={section.imageAlt}
                        className="rounded-3xl w-full object-cover"
                      />
                    </div>
                    <div className="md:w-7/12 text-gray-700">

                      <h1 className='md:text-[48px] text-[38px] leading-[1.2] text-left recline blue-text pb-8'> {section.title1} <span className='text-[#0DD180] permanent-marker' > {section.title2}</span>   {section.title3}
                      </h1>
                      {section.description.split("\n\n").map((para, i) => (
                        <p key={i} className="mb-4 leading-relaxed text-[#797A88] poppins">
                          {para}
                        </p>
                      ))}
                      <p className='mb-4 leading-relaxed font-semibold text-[#00A6E3] poppins'>{section.highlightDescription}</p>
                      {section.buttonText && (
                        <button className="mt-5 rounded-full bg-[#00A6E3] px-5 py-2.5 text-[16px] font-medium text-white poppins">
                          {section.buttonText}
                        </button>)}
                    </div>
<div className="md:w-5/12 relative md:hidden block">
                      <img
                        src={section.image}
                        alt={section.imageAlt}
                        className="rounded-3xl w-full object-cover"
                      />
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
