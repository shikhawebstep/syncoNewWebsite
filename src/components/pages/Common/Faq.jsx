import React from 'react'

const Faq = ({ faqData, activeIndex, setActiveIndex, buttonText, color }) => {
    return (
        <>
            <div className="lg:flex gap-4 lg:max-w-[1200px] mt-5 m-auto lg:space-x-10">
                {/* Questions */}
                <div className="lg:w-1/3  lg:max-w-[406px] space-y-4 mb-6 lg:mb-0">
                    {faqData.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            style={
                                activeIndex === index
                                    ? { backgroundColor: color || "#0DD180" }
                                    : { backgroundColor: color ? "#d2effa" : "#0DD18026" }
                            }
                            className={`block w-full text-left px-4 py-3 poppins rounded-xl transition-colors duration-300
    ${activeIndex === index
                                    ? color ? "activeTabCamp text-white font-semibold" : "text-white font-bold text-[18px] activeTab"
                                    : "text-[#5F5F6D] text-[16px] font-medium"
                                }
  `}
                        >
                            {item.question}
                        </button>

                    ))}
                </div>

                {/* Answer + Image */}
                <div className="lg:w-2/3 acc md:pr-15">
                    <div className="">
                        <img
                            src={faqData[activeIndex].image}
                            alt={faqData[activeIndex].question}
                            className="w-full lg:w-10/12 mb-8 h-auto rounded-lg object-cover"
                        />
                        {faqData[activeIndex].answer.map((paragraph, idx) => (
                            <p key={idx} className="text-[#5F5F6D] mb-5 tracking-[0.2px] leading-[30px]">
                                {paragraph}
                            </p>
                        ))}
                        {faqData[activeIndex].olList && (
                             <p className='my-3'><b>{faqData[activeIndex].olList}</b></p>
                        )}
                        <ul className='padding'> {faqData[activeIndex].ulList && faqData[activeIndex].ulList.map((list, idx) => (
                            <li key={idx} className="text-[#5F5F6D] list-disc tracking-[0.2px] leading-[30px]">
                                {list}
                            </li>
                        ))}</ul>
                        
                        {faqData[activeIndex].olList2 && (
                              <p className='my-3'><b>{faqData[activeIndex].olList2}</b></p>
                        )}
                        <ul className='padding'>   {faqData[activeIndex].ulList2 && faqData[activeIndex].ulList2.map((list, idx) => (
                            <li key={idx} className="text-[#5F5F6D] list-disc tracking-[0.2px] leading-[30px]">
                                {list}
                            </li>
                        ))}</ul>
                        {faqData[activeIndex].olList3 && (
                            <p className='my-3'><b>{faqData[activeIndex].olList3}</b></p>
                        )}
                           <ul className='padding'>
                        {faqData[activeIndex].ulList3 && faqData[activeIndex].ulList3.map((list, idx) => (
                            <li key={idx} className="text-[#5F5F6D] list-disc tracking-[0.2px] leading-[30px]">
                                {list}
                            </li>
                        ))}
                        </ul>
                        {faqData[activeIndex].lists && faqData[activeIndex].lists.map((list, idx) => (
                            <li key={idx} className="text-[#5F5F6D] mb-1 tracking-[0.2px] leading-[30px] flex gap-2 items-center "><img className="h-7 w-7" src="/assets/greenCheck.png" alt="" />
                                {list}
                            </li>
                        ))}
                        {faqData[activeIndex].note && (
                            <p className='text-[#5F5F6D]'><i>{faqData[activeIndex].note}</i></p>

                        )}
                          {faqData[activeIndex].answer2?.map((paragraph, idx) => (
                            <p key={idx} className="text-[#5F5F6D] mb-5 onlyMobile block recline  tracking-[0.2px] leading-[30px]">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                    <div className="mt-8">
                        <button
                            style={{ backgroundColor: color || "#042C89" }}
                            className="text-white px-8 py-3 rounded-3xl poppins font-bold"
                        >
                            {buttonText}
                        </button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Faq
