import { button } from 'framer-motion/client';
import React from 'react'

const Features = () => {


  const sections = [
    {
      title1: "Are you looking for a football coaching  ",
      title2: "JOB ",
      title3: "with a difference?",
      description:
        "Are you looking for a coaching job that allows you to develop football abilities through fun, free-flowing, attacking football? Are you tired of the traditional dreary way that a lot of coaching is done these days?\n\n At Samba Soccer Schools, we’re putting the excitement back into football coaching by developing a structured syllabus that allows children the freedom to express themselves on the football pitch while still underpinning the essentials.We believe football should be fun, which is why we borrow the Brazilian way of doing things, creating a thrilling, inspiring environment where children gain the confidence to attempt the outrageous and enjoy the beautiful game in the way it was meant to be.\n\n We’ve been doing this for nearly 15 years, teaching thousands of children how to play with expression and excitement.If this sounds like something you’d like to be a part of, why not apply now to become part of the Samba Soccer Schools family ? \n\nThe best football coaching starts with the coach, which is why we provide expert training and guidance for all of our coaches, allowing you to maximise your teaching output and arm yourself with skills and knowledge that will enable you to blossom in the football world.\n\nSo if you think you’ve got what it takes to join the most exciting football school around and help transform hundreds of children's footballing abilities as well as accelerating your personal growth, then we’d love to hear from you. ",
      image: "/assets/img-looking-for-football-coaching-job.png", // Replace with your actual image path or URL
      imageAlt: "Kids playing football training",
      imagePosition: "right",
      buttonText: "Apply Today",
    }
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
                    className={`flex mt-0 flex-col md:flex-row items-center gap-2 ${isImageRight ? "md:flex-row-reverse" : "md:flex-row"
                      }`}
                  >
                    {/* Text Content */}

                    <div className="md:w-5/12 md:p-15 relative md:block hidden">
                      <img
                        src={section.image}
                        alt={section.imageAlt}
                        className="rounded-3xl w-full object-cover"
                      />


                    </div>
                    <div className="md:w-7/12 text-gray-700">
                      <h2 className="text-[36px] recline font-bold text-[#0DD180] mb-4">

                      </h2>
                      <h1 className='md:text-[52px] text-[42px]  text-left recline blue-text'> {section.title1} <span className='text-[#0DD180] permanent-marker' > {section.title2}</span>   {section.title3}
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
