import React from 'react'
import { Link } from 'react-router-dom'

const BookTrial = () => {
    return (
        <>
            <section className="book-trial py-8 md:py-10 p-4">
                <div className="container">
                    <div className="bg-white rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 lg:max-w-[1210px] m-auto">
                        <div className="md:flex gap-4 lg:gap-6 items-center">

                            {/* Left image */}
                            <div className="img-sec flex justify-center mb-4 md:mb-0">
                                <img
                                    className='w-[120px] sm:w-[150px] md:w-[175px] lg:w-[215px] h-auto'
                                    src="/assets/img-book-a-trial-1.png"
                                    alt=""
                                />
                            </div>

                            {/* Content */}
                            <div className="content-sec flex-1 md:max-w-[670px] m-auto">
                                <div className="text-center">
                                    <h4 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] blue-text permanent-marker py-3 md:py-0">
                                        Book a <br className='block md:hidden' /> Free trial
                                    </h4>
                                    <p className="text-[13px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-[#797A88] pt-3 md:pt-5">
                                        There are countless football schools around, but we like to think we're a little different. This is football training where flair, confidence, and close ball control take centre stage alongside a samba rhythm.
                                    </p>
                                    <p className="text-[13px] sm:text-[15px] md:text-[16px] lg:text-[18px] py-3 md:py-4 text-[#797A88]">
                                        Booking a free trial only takes two minutes, and with venues across London, there's probably one right on your doorstep.
                                    </p>
                                    <Link to="/find-a-class">
                                        <button className="bg-[#00A6E3] text-white px-5 py-2 my-4 md:my-2 rounded-3xl font-semibold text-[14px] md:text-[15px] lg:text-[16px]">
                                            Book a FREE Trial Now
                                        </button>
                                    </Link>
                                </div>
                            </div>

                            {/* Right image */}
                            <div className="img-sec hidden md:block">
                                <img
                                    className='w-[120px] sm:w-[150px] md:w-[175px] lg:w-[215px] h-auto'
                                    src="/assets/img-book-a-trial-2.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BookTrial