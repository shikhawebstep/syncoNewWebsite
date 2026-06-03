import React from 'react'

const Requirements = () => {
    const eligibilityCriteria = [
        "Aged 16–30",
        "A strong passion for football coaching",
        "An eagerness to learn",
        "Self-confidence",
        "Team player",
        "Playing experience (preferably a minimum of 1–2 years)",
        "Football coaching experience (preferable but not essential)",
        "Football coaching qualifications (preferable but not essential)",
        "A desire to make football coaching a long-term profession",
        "A commitment of time and energy to further your coaching development",
    ];


    return (
        <section className="py-15 px-4 lg:px-20">
            <div className="text-center">
              <div className="px-6 md:px-0">
                  <h3 className="text-3xl lg:text-[65px] mb-2 font-medium text-[#00A6E3] permanent-marker ">
                    Requirements
                </h3>
                <p className="text-[#5F5F6D] mt-2 md:font-medium font-semibold">
                    Please check our eligibility criteria for joining our <br className='hidden md:block'/> Pathway course before you submit your application.
                </p>
              </div>
                <div className="bg-[#00A6E3] py-[50px]  md:px-[20px] px-10 mt-15 block w-full text-left text-[20px] poppins mb-10 rounded-[20px] text-white
shadow-[0_25px_60px_-10px_rgba(0,0,0,0.35)]">
                    <ul className="flex md:gap-10 gap-6 flex-wrap md:justify-center">
                        <p className="recline text-[#FFDE14] text-[24px] text-center ">
                            Eligibility Criteria
                        </p>

                        {eligibilityCriteria.map((item, index) => (
                            <li key={index} className="flex gap-4 md:text-[18px] text-[15px] items-center">
                                <img src="/assets/yellowcheck.png" alt="check" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <p className="text-[#5F5F6D] mt-10 px-4 md:px-0 font-medium">
                    If you feel you tick these boxes, we’d love to hear from you! Continue reading to find out what your next steps are.                 </p>


            </div>

        </section>
    )
}

export default Requirements
