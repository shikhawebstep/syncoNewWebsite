import React from 'react'

const BookAClass = () => {
    return (
        <section
            className="relative  flex bg-cover items-center bg-[#0DD180]  bg-bottom py-[60px] "
            style={{ backgroundImage: `url('/assets/prospectusBanner.png')` }}
        ><div className="container">
                <div className='max-w-[780px] m-auto bg-[#FDFDFF] p-8 rounded-3xl'>

                    <h4 className="light-blue-text text-center pb-8">Book a samba soccer class</h4>
                    <div className="bg-white yellowLine relative rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-7 ">

                        {/* Inputs */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <input
                                type="text"
                                placeholder="Enter your post code"
                                className="w-full h-[64px] px-6 rounded-xl border border-[#ECECF2]
              text-[#1C1C28] placeholder:text-[#5F5F6D]
              focus:outline-none focus:border-[#0DD180]"
                            />

                              <div className="relative w-full">
                                        <select
                                            name="venue"
                                            defaultValue=""
                                            className={`w-full appearance-none h-[64px] px-6 rounded-xl border border-[#ECECF2]
              text-[#1C1C28] placeholder:text-[#5F5F6D]
              focus:outline-none focus:border-[#0DD180]`}
                                        >
                                            <option value="" disabled className="text-[#5F5F6D]">
                                                Or select a Venue
                                            </option>
                                            <option value="venue1">Venue 1</option>
                                            <option value="venue2">Venue 2</option>
                                            <option value="venue3">Venue 3</option>
                                        </select>

                                        {/* Custom arrow */}
                                        <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                                            <svg
                                                className="w-5 h-5 text-[#1c3c87]"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                        </div>

                        {/* Button */}
                        <div className="flex  justify-center">
                            <button
                                className="bg-[#0DD180] w-full hover:bg-[#0BC46F] transition
              text-white font-bold text-[18px] poppins
              px-30 py-4 rounded-full "
                            >
                                Search
                            </button>
                        </div>

                    </div>

                </div>
            </div>

        </section>
    )
}

export default BookAClass
