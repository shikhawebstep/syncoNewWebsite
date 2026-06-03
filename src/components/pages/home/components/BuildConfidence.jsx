import React from 'react'

const BuildConfidence = () => {
    return (
        <>
            <section className="nearest -mt-[80px] sm:-mt-[100px] md:-mt-[140px]">
                <div className="container">
                    <div className="nearest-class">
                        <div className="bg-white rounded-[32px] md:rounded-[32px] shadow-lg max-w-[700px] m-auto w-full p-6 sm:p-8 md:p-10 relative">
                            <div className="absolute top-0 left-0 w-[80%] right-0 h-[8px] md:h-[10px] bg-[#FFDE14] m-auto"></div>

                            <h2 className="text-[26px] sm:text-[26px] md:text-[30px] lg:text-[32px] font-bold text-center recline text-blue-900 mb-4 md:mb-6">
                                Find your <br className='block md:hidden' />  nearest class
                            </h2>

                            <form className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 my-4 md:my-8">
                                    <input
                                        type="text"
                                        placeholder="Enter your post code"
                                        className="w-full px-4 py-2.5 md:py-3 rounded-md border border-gray-200 shadow text-gray-700 text-[13px] md:text-[14px] placeholder:text-[#5F5F6D] focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <select
                                        className="w-full px-4 py-2.5 md:py-3 text-[#5f5f6d] rounded-md border border-gray-200 shadow text-[#5F5F6D] text-[13px] md:text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        onChange={(e) => {
                                            e.target.classList.remove('text-[#5F5F6D]');
                                            e.target.classList.add('text-gray-700');
                                        }}
                                    >
                                        <option value="" disabled defaultValue>Or select a Venue</option>
                                        <option value="1">Venue 1</option>
                                        <option value="2">Venue 2</option>
                                        <option value="3">Venue 3</option>
                                    </select>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-[#0DD180] hover:bg-green-600 text-white font-bold poppins text-[14px] md:text-[16px] py-2.5 py-3 rounded-full transition"
                                >
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="flex flex-col-reverse md:flex-row buildingConfidence items-center gap-4 md:gap-0">

                        {/* Left / Image */}
                        <div className="image-sec flex justify-center md:justify-end md:w-6/12 mt-4 md:mt-0">
                            <div className="playboy-img md:max-w-[550px] md:-mr-[90px]">
                                <picture>
                                    <source media="(max-width: 767px)" srcSet="/assets/Frame1000002538.png" />
                                    <img src="/assets/player-pointing.png" alt="" className="w-full h-auto max-w-[320px] sm:max-w-[400px] md:max-w-full mx-auto" />
                                </picture>
                            </div>
                        </div>

                        {/* Right / Text */}
                        <div className="right-side-content md:w-6/12 max-w-[515px] text-center px-4 sm:px-0 mt-6 md:mt-0">
                            <h3 className="recline blue-text text-[26px] sm:text-[30px] md:text-[34px] lg:text-[40px]">
                                Building confidence, mastering skills – doing it in{" "}
                                <span className="text-[#0DD180] relative">STYLE</span>
                            </h3>
                            <p className="leading-relaxed text-[#5F5F6D] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] mt-3 px-2">
                                Samba Soccer Schools is more than just football coaching. We improve
                                your child's social skills and confidence, developing technique,
                                flair, and footballing ability through
                                <br className="lg:block hidden" />
                                our unique Brazilian style.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BuildConfidence