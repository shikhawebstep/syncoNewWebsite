import React from 'react'

const Prospectus = () => {
    return (
        <section
            className="relative  flex bg-cover items-center bg-[#0DD180]  bg-bottom py-[60px] "
            style={{ backgroundImage: `url('/assets/prospectusBanner.png')` }}
        ><div className="container">
                <div className='max-w-[780px] m-auto bg-[#FDFDFF] p-8 rounded-3xl'>

                    <h4 className="light-blue-text text-center pb-8">Download our prospectus!</h4>
                    <div className="bg-white rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-7 ">

                        {/* Inputs */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <input
                                type="text"
                                placeholder="Enter full name"
                                className="w-full h-[64px] px-6 rounded-xl border border-[#ECECF2]
              text-[#1C1C28] placeholder:text-[#5F5F6D]
              focus:outline-none focus:border-[#0DD180]"
                            />

                            <input
                                type="email"
                                placeholder="Enter email"
                                className="w-full h-[64px] px-6 rounded-xl border border-[#ECECF2]
              text-[#1C1C28] placeholder:text-[#5F5F6D]
              focus:outline-none focus:border-[#0DD180]"
                            />
                        </div>

                        <div className="mb-10">
                            <input
                                type="tel"
                                placeholder="Enter telephone number"
                                className="w-full h-[64px] px-6 rounded-xl border border-[#ECECF2]
              text-[#1C1C28] placeholder:text-[#5F5F6D]
              focus:outline-none focus:border-[#0DD180]"
                            />
                        </div>

                        {/* Button */}
                        <div className="flex justify-center">
                            <button
                                className="bg-[#0DD180] hover:bg-[#0BC46F] transition
              text-white font-bold text-[18px] poppins
              px-30 py-4 rounded-full "
                            >
                                Download
                            </button>
                        </div>

                    </div>

                </div>
            </div>

        </section>
    )
}

export default Prospectus
