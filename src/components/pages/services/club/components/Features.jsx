import React from 'react'

const Features = () => {


  const sections = [
    {
      title: "Weekly Training Sessions",
      description:
        "Training sessions are held weekly throughout the football season (30 sessions in total). Each session lasts an hour and is taken by one of our expert coaches.",
      image: "/assets/training1.png", // Replace with your actual image path or URL
      imageAlt: "Kids playing football training",
      imagePosition: "right",
    },
    {
      title: "Matches",
      description:
        "Playing real matches is a crucial part of football development - without it, children are simply practising skills and using them in predetermined drills. Competitive games allow children to put those skills and tactics they learn in their lessons into a real-world environment. Only through these types of situations can children sharpen their decision-making skills while under pressure.\n\nAnother significant benefit of playing competitive football is that it helps to instil ideas of winning and losing - and how to approach both with humility and respect. It’s important to teach children early on that success comes from hard work and that hours of diligent work on the training pitch can lead to glory at the weekend.",
      image: "/assets/training2.png", // Replace with your actual image path or URL
      imageAlt: "Kids playing football match",
      imagePosition: "left",
    },
  ];
  return (
    <>
      <section className=" py-10 md:pt-15 pt-0 ">
        <div className="container">
          <h1 className='lg:text-[84px] sm-[48px] text-[38px] text-center recline blue-text'> <span className='text-[#0DD180] permanent-marker block' >Features</span> of our club
          </h1>
          <div>
            <div className='max-w-[1200px] m-auto'>
              {sections.map((section, idx) => {
                const isImageRight = section.imagePosition === "right";
                return (
                  <div
                  key={idx}
  className={`flex mt-10 flex-col-reverse md:flex-row  md:gap-14 ${
    isImageRight ? "md:flex-row-reverse" : ""
  }`}
                  >
                    {/* Text Content */}

                    <div className="md:w-1/2 relative">
                      <img
                        src={section.image}
                        alt={section.imageAlt}
                        className="rounded-3xl w-full object-cover"
                      />


                    </div>
                    <div className={`md:w-1/2 ${isImageRight ? 'mt-5':""} text-gray-700`}>
                      <h2 className="md:text-[36px] text-[32px]  recline font-bold text-[#0DD180] pb-4">
                        {section.title}
                      </h2>
                      {section.description.split("\n\n").map((para, i) => (
                        <p key={i} className="mb-4 md:text-[16px] text-[15px] leading-relaxed text-[#797A88] poppins">
                          {para}
                        </p>
                      ))}
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
