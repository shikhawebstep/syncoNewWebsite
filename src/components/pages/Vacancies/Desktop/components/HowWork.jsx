import React from 'react'

const HowWork = () => {
  return (
    <section
      className="relative  flex md:bg-cover items-center bg-[#0DD180]  bg-bottom py-[60px] "
      style={{ backgroundImage: `url('/assets/howWork.png')` }}
    ><div className="container">
        <div className='md:max-[1115px] m-auto coacingSessions bg-[#FDFDFF] p-8 pt-10 rounded-[20px] border-5 border-[#0DD180]'>

          <h4 className="text-[#042C89] md:text-[48px] text-[20px]  recline md:text-center">How does the programme work?</h4>
          <p className='text-[#042C89] font-semibold  md:text-[20px] pt-5 md:pt-0 text-[18px] md:text-center'>Here are the details of our <br className="block md:hidden" />  Coaching Pathway course</p>
          <div className=" rounded-[40px]  pt-8  m:p-7 ">

            {/* Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-6 items-start text-[16px] leading-[26px] text-[#34353]">

              {/* LEFT COLUMN */}
              <div className="space-y-6">
                <p className="text-[15px] text-[#5F5F6D]">
                  Our Pathway Course is designed to teach you our core coaching methodology,
                  allowing you to apply the same principles within any coaching environment.
                  While we like to encourage children to have fun and play football with freedom,
                  training sessions are still well-structured, with a robust syllabus perfected
                  over more than ten years.
                </p>

                <p className="text-[15px] text-[#5F5F6D]">
                  Every week, students focus on a particular exercise the tutor demonstrates
                  for around 10 minutes. You will then be asked to imitate the activity in front
                  of your tutor, who will make suggestions and advise as you go before delivering
                  overall feedback once the exercise is complete.
                </p>

                <p className="text-[15px] text-[#5F5F6D]">
                  We’ll be focusing on how well you carry out the set exercises but also how well
                  you build a rapport with others in the class who will be acting as students.
                  Good student rapport is non-negotiable at Samba Soccer Schools as we believe this
                  helps us stand out from other football schools. We’re not looking for robots who
                  simply set drills and shout-out instructions. Rapport, banter, good conversation
                  – call it what you will – it’s essential in what we do.
                </p>
              </div>

              {/* RIGHT COLUMN */}
              <div className="space-y-6">
                <p className="text-[15px] text-[#5F5F6D]">
                  Your six training sessions are complemented by our online training programme
                  that offers further theoretical guidance and health and safety information that
                  is vital if you hope to work in the football industry.
                </p>

                <p className="text-[15px] text-[#5F5F6D]">
                  There’s no pass or fail in our Pathway Course, but students who have shown an
                  outstanding aptitude for coaching will be invited to a real Samba Soccer class
                  and asked to demonstrate their skills in a real-world situation. And if that
                  goes well, we often have coaching positions available, so a training course can
                  become a full-time job before you know it.
                </p>

                <p className="text-[15px] text-[#5F5F6D]">
                  So what are you waiting for? If you like a challenge and want to build your
                  football coaching experience, apply for a space on our football coaching course
                  today and turn that long-standing dream into a reality.
                </p>
              </div>

            </div>


            {/* Button */}
            <div className="flex justify-center">
              {/* <button
                                className="bg-[#0DD180] hover:bg-[#0BC46F] transition
              text-white font-bold text-[18px] poppins
              px-30 py-4 rounded-full "
                            >
                                Download
                            </button> */}
            </div>

          </div>

        </div>
      </div>

    </section>
  )
}

export default HowWork
