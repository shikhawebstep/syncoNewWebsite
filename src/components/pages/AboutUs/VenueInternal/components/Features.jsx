import { button } from 'framer-motion/client';
import React from 'react'

const Features = () => {


  const sections = [
    {
      title1: "Football classes for kids in Acton, London",
      // title2: "Football classes for 4-12 years ",
      description:
        "If you’re interested in your child playing football, which blends excitement and flair with confidence building and structured development, you’ve come to the right place.\n\n Since 2009, we’ve taught thousands of children how to play football with fun and freedom - putting smiles on their faces and equipping them with mesmerising skills and tricks.\n\nSo whether your child simply needs to polish their skills or is starting entirely from scratch, needs a helping, confidence-boosting hand, or somewhere to make new friends, we’re ready to help.",
      image: "/assets/Frame1000003029.png", // Replace with your actual image path or URL
      imageAlt: "Kids playing football training",
      imagePosition: "right",
      buttonText: "Book a FREE Trial",
    }
  ];
  return (
    <>
      <section className=" py-10 mb-10 pt-15 ">
        <div className="container">

          <div>
            <div className=' m-auto'>
              {sections.map((section, idx) => {
                const isImageRight = section.imagePosition === "right";
                return (
                  <div
                    key={idx}
                    className={`flex mt-0 flex-col md:flex-row items-center gap-14 ${isImageRight ? "md:flex-row-reverse" : "md:flex-row"
                      }`}
                  >
                    {/* Text Content */}

                    <div className="md:w-5/12 md:px-15 relative order-2 md:order-none">
                      <img
                        src={section.image}
                        alt={section.imageAlt}
                        className="rounded-3xl w-full object-cover"
                      />


                    </div>
                    <div className="md:w-7/12 text-gray-700">

                      <h1 className='text-[38px] leading-[1.2] text-left recline blue-text pb-8'> {section.title1} <span className='text-[#0DD180] permanent-marker   ' > </span>   {section.title3}
                      </h1>
                      <p className="mb-3  leading-relaxed text-[#00A6E3] poppins font-semibold">  {section.title2}</p>
                      {section.description.split("\n\n").map((para, i) => (
                        <p key={i} className="mb-6 md:pr-20  leading-relaxed text-[#797A88] poppins">
                          {para}
                        </p>
                      ))}
                      <p className='mb-4 leading-relaxed font-semibold text-[#00A6E3] poppins'>{section.highlightDescription}</p>
                      {section.buttonText && (
                        <button className="mt-5 rounded-full bg-[#FFDE14] px-5 py-2.5 text-[18px] font-semibold text-[#042C89] recline">
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
