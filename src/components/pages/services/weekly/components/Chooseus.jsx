import React from 'react'
import bannerImg from "/assets/whyus.png";
const Chooseus = () => {
    return (
        <>
            <section
                className=" whyShoulIChoose bg-cover bg-center bg-[#0dd180]  lg:p-[30px] relative "

            >
                <div className="container mx-auto py-[30px]">
                    <div className="md:flex items-center justify-between gap-10 rounded-2xl bg-[#FDFDFF] p-10 max-w-[90%] mx-auto">
                        <div className="text-left text-white  recline md:w-[67%] md:pb-0 pb-6">
                            <h4 className='text-[#0DD180] pb-3 small '><span className="permanent-marker block text-[#0DD180]">Why should I choose </span><span className=' text-[#042C89] recline'>Your Weekly Classes?</span></h4>
                            <p className="text-[#797A88] tracking-[0.2px] pb-5">
                                We believe football should be taught regularly and in a way that allows children to express themselves, build confidence, develop skills, make friends, and have the time of their lives while doing it. Weekly classes with Samba Soccer Schools provide just this. An hour a week of fun, action-packed, samba-filled, breathtaking football that your child is going to adore.

                            </p>

                            <p className="text-[#797A88] " >Still not sure? Why not book a free trial class with Samba Soccer Schools? We’ll be more than happy to show you what we do and why we’re the best.</p>

                        </div>
                        <div class="lg:w-[33%] shadowBox bg-white p-8 rounded-3xl">



                            <form class="space-y-4">
                                <div class="grid grid-cols-1 sm:grid-cols-1 gap-4 mt-4 ">
                                    <input type="text" placeholder="Enter your post code"
                                        class="w-full px-4 py-3 rounded-md border border-gray-200 shadow text-[#5F5F6D] placeholder:text-[#5F5F6D]  focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700" />

                                    <div className="relative w-full">
                                        <select
                                            className="
      w-full
      appearance-none
      px-4
      py-3
      pr-12
      rounded-md
      border
      border-gray-200
      shadow
      text-[#5F5F6D]
      focus:outline-none
      focus:ring-2
      focus:ring-blue-500
      bg-white
    "
                                        >
                                            <option>Or select a Venue</option>
                                            <option>Venue 1</option>
                                            <option>Venue 2</option>
                                            <option>Venue 3</option>
                                        </select>

                                        {/* Custom dropdown icon */}
                                        <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                                            <svg
                                                className="h-5 w-5 text-gray-500"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                                                    clipRule="evenodd"
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

export default Chooseus
