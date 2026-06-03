import React from 'react'

const Faq = ({ faqData, activeIndex, setActiveIndex, buttonText, color, align }) => {
    return (
        <>
            <div className="lg:block gap-4 lg:max-w-[1100px] mt-5 m-auto lg:space-x-10">
                {/* Questions */}
                <div className="w-full max-w-[100%] text-center m-auto flex flex-col md:flex-row justify-center items-center gap-8 md:gap-8 mb-6">
                    {faqData.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            style={
                                activeIndex === index
                                    ? { backgroundColor: color || "#0DD180" }
                                    : { backgroundColor: color ? "#ffffffff" : "#ffffff26" }
                            }
                            className={`
                uppercase recline poppins
                md:px-4 px-2 py-4 text-[17px] md:text-[20px]
                rounded-xl transition-colors duration-300
                w-full md:w-fit
                text-center md:text-left
                ${activeIndex === index
                                    ? color
                                        ? "text-white font-semibold"
                                        : "text-white font-bold"
                                    : "text-[#0DD180] border border-[#0DD180] font-medium"
                                }
            `}
                        >
                            {item.question}
                        </button>

                    ))}
                </div>

                {/* Answer + Image */}
                <div className="lg:w-full acc">
                    <div className={`md:flex   justify-center ${align ? 'md:mt-15' : items - center}`}>
                        <div className='md:w-[50%] md:hidden block my-10 '>
                            <div className='w-full md:max-w-8/12  m-auto'>
                                <img
                                    src={faqData[activeIndex].image}
                                    alt={faqData[activeIndex].question}
                                    className=" mb-8 h-auto rounded-lg o"
                                />
                            </div>
                        </div>
                        <div className='md:w-[50%]'>
                            {faqData[activeIndex].answer.map((paragraph, idx) => (
                                <p key={idx} className="text-[#5F5F6D] mb-5 tracking-[0.2px] leading-[30px]">
                                    {paragraph}
                                </p>
                            ))}
                            {faqData[activeIndex].answer2?.map((paragraph, idx) => (
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
                            <div className="mt-8 flex md:justify-end justify-center">
                                <button
                                    onClick={() => document.getElementById('enquiry-section')?.scrollIntoView({ behavior: 'smooth' })}
                                    style={{ backgroundColor: color || "#042C89" }}
                                    className="text-white px-8 py-3 rounded-3xl poppins font-bold"
                                >
                                    {buttonText}
                                </button>

                            </div>
                        </div>
                        <div className='md:w-[50%] md:block hidden'>
                            <div className='w-full max-w-8/12  m-auto'>
                                <img
                                    src={faqData[activeIndex].image}
                                    alt={faqData[activeIndex].question}
                                    className=" mb-8 h-auto rounded-lg o"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faq
