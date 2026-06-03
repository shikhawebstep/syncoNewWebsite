import React from 'react'
import bannerImg from "/assets/whyus.png";
const Whyus = () => {
    return (
        <>
            <section
                className=" bg-cover bg-center bg-[#0dd180] lg:p-[60px] relative "
                style={{ backgroundImage: `url(${bannerImg})` }}
            >
                <div className="container mx-auto">
                    <div className="md:flex items-center justify-between gap-10 rounded-2xl bg-[#FDFDFF] p-10 max-w-[1190px] mx-auto">
                        <div className="text-left text-white  recline md:w-[67%]">
                            <h4 className='text-[#0DD180] pb-3 small text-[#042C89] recline '>Try out our free class for<span className="permanent-marker  text-[#0DD180]"> free!</span></h4>
                            <p className="text-[#797A88] tracking-[0.2px] pb-5">
                                We could go on and on about why you should bring your child to a session with Samba Soccer Schools, but why not try it out for free instead? Book a no-strings-attached free trial with us today, and we’ll show you all the fuss.
                            </p>


                        </div>
                        <div class="lg:w-[33%] shadowBox bg-white p-8 rounded-3xl">



                            <form class="space-y-4">
                                <div class="grid grid-cols-1 sm:grid-cols-1 gap-4 mt-4 ">
                                    <input
  type="text"
  placeholder="Enter your post code"
  class="w-full appearance-none rounded-lg border-2 px-4 py-3 pr-12 bg-white
  text-[#5F5F6D] border-[#E5E7EB]
  placeholder:text-[#5F5F6D]
  focus:outline-none focus:border-[#0DD180]"
/>

                                    <div className="relative w-full">
                                        <select
                                            name="venue"
                                            defaultValue=""
                                            className={`w-full appearance-none rounded-lg border-2 px-4 py-3 pr-12 bg-white
        text-[#5F5F6D] border-[#E5E7EB]
        focus:outline-none focus:border-[#0DD180]`}
                                        >
                                            <option value="" disabled className="text-[#9CA3AF]">
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

                                <button type="submit"
                                    class="w-full bg-[#0DD180] hover:bg-green-600 poppins font-bold text-white py-2 rounded-full transition">
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Whyus
