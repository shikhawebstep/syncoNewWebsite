import { button } from 'framer-motion/client';
import React from 'react'

const Features = () => {


  const sections = [
    {
      title2: "Football schools in London teaching flair, fun, and unforgettable skills. ",
      description:
        "We believe Brazilians play football the way it’s supposed to be, with exciting skills, mesmerising speed, passionate goal celebrations, and huge smiles - which is why we base all our footballing coaching around it. \n\nIn 2009, we started Samba Soccer Schools as an alternative to the often boring and monotonous way of teaching children how to play football. It’s called the beautiful game for a reason, and our Brazilian football schools across London have helped thousands of children enjoy and play the game as it should be. \n\nWe encourage creativity, flair, good technique and ball control. We want children to have the confidence to attempt the daring in a safe and supported environment. Everybody makes mistakes while learning, but perseverance is key to successful development. \n\nWe’ve reimagined football classes in Britain, delivering fun, action-packed lessons set to a thumping samba beat that your child will absolutely love.",

      image: "/assets/twoKidssamba.png", // Replace with your actual image path or URL
      imageAlt: "Kids playing football training",
      imagePosition: "right",
       buttonText: "Read More",
    },
    
  ];
  return (
    <>
      <section className=" py-10 pt-15 ">
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

                    <div className="md:w-5/12 p-15 relative md:block hidden">
                      <img
                        src={section.image}
                        alt={section.imageAlt}
                        className="rounded-3xl w-full object-cover"
                      />


                    </div>
                    <div className="md:w-7/12 text-gray-700">
                      <h2 className="text-[36px] recline font-bold text-[#0DD180] mb-4">

                      </h2>
                      <h1 className='md:text-[52px] text-[38px] w-full text-left recline blue-text'> <span className='text-[#0DD180] permanent-marker   ' >  {section.title1}</span>  {section.title2}
                      </h1>
                      {section.description.split("\n\n").map((para, i) => (
                        <p key={i} className="my-4 leading-relaxed text-[#797A88] poppins">
                          {para}
                        </p>
                      ))}
                      <p className='mb-4 leading-relaxed font-semibold text-[#00A6E3] poppins'>{section.highlightDescription}</p>
                      {section.buttonText && (
                        <button className="mt-5 rounded-full bg-[#FFDE14] px-5 py-2.5 text-[16px] font-semibold text-[#042C89] poppins">
                          {section.buttonText}
                        </button>)}
                    </div>

                    <div className="md:w-5/12 md:p-15 relative md:hidden block">
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
