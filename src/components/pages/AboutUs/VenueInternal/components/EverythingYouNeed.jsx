import React from "react";
import { Link } from "react-router-dom";
import EverythingYouNeedBg from "/assets/EverythingYouNeedBg.png";
import BookTrialGreenBg from "/assets/BookTrialGreenBg.png";

const EverythingYouNeed = () => {
    return (
        <>
            <section
                className="relative  flex bg-cover items-end bg-[#0DD180]  md:mt-0 mt-[-50px] bg-top pt-[100px] pb-[150px] lg:min-h-[400px] 
                    bg-[url('/assets/EverythingYouNeedBgMobile.png')]
        md:bg-[url('/assets/EverythingYouNeedBg.png')]
                "
               
>
                <div className="container relative  mx-auto">
                    <div className="text-center relative max-w-[850px] mx-auto">
                        <h1 className=" leading-[1] permanent-marker lg:text-[52px] text-[38px] recline text-white font-medium">
                            Everything you need to know <br className="md:block hidden" /> about soccer classes in Acton
                        </h1>
                        <p className="poppins text-[#FDFDFF] text-[20px] pt-5">Scroll down to learn about our football classes for kids in Acton, London.</p>
                        <img src="/assets/chevron-double-below.png" className="absolute right-[0px] left-[0px] mx-auto -bottom-[100px] w-[70px] " alt="" />
                    </div>
                </div>

            </section>

            <section
                className="relative  flex bg-cover items-end bg-[#FDFDFF]  bg-top pt-[100px] pb-[100px] lg:min-h-[400px]
            "


            >
                <div className="container relative  mx-auto">
                    <div className="text-center relative max-w-[900px] mb-[60px] mx-auto">
                        <h1 className=" leading-[1] lg:text-[52px] text-[38px] recline text-[#042C89] font-medium">
                            Everything <span className="text-[#00A6E3] permanent-marker ">  you need to know about </span> soccer classes in Battersea
                        </h1>
                        <p className="poppins text-[#5F5F6D] text-[20px] pt-5">Scroll down to learn about our football classes in Battersea, London.</p>

                    </div>
                    <div className=" font-medium mx-auto border-[7px] border-[#0DD180] rounded-3xl bg-white md:p-10 p-6">
                        {/* Top Row */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-8 border-b border-[#0DD180]">
                            {/* Days */}
                            <div>
                                <p className="text-[20px] font-semibold text-[#042C89] mb-3 recline">Days</p>
                                <p className="text-[20px] text-[#5F5F6D] recline">Saturday</p>
                                <p className="text-[16px] text-[#5F5F6D] mt-2 poppins">
                                    Classes only operate during school term time
                                </p>
                            </div>

                            {/* Times */}
                            <div>
                                <p className="text-[20px] font-semibold text-[#042C89] mb-3 recline">Times</p>
                                <p className="text-[16px] text-[#5F5F6D] poppins">
                                    <strong>Ages 4–7</strong> &nbsp; 03:00 PM – 04:00 PM
                                </p>
                                <p className="text-[16px] text-[#5F5F6D] mt-2 poppins">
                                    <strong>Ages 8–12</strong> &nbsp; 04:00 PM – 05:00 PM
                                </p>
                            </div>

                            {/* Surface */}
                            <div>
                                <p className="text-[20px] font-semibold text-[#042C89] mb-3 recline">Surface</p>
                                <p className="text-[16px] text-[#5F5F6D] ">Indoor</p>
                            </div>
                        </div>

                        {/* Term Dates */}
                        <div className=" py-8 border-b border-[#0DD180]">
                            <p className="text-[20px] font-semibold text-[#042C89] mb-2  recline">
                                Term Dates
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                                {[
                                    {
                                        title: "Autumn 2021",
                                        range: "Sat 11 Sep 2021 – Sat 04 Dec 2021",
                                        exclusion: "Half term Exclusion: Sat 23 Oct 2021",
                                    },
                                    {
                                        title: "Spring 2022",
                                        range: "Sat 08 Jan 2022 – Sat 02 Apr 2022",
                                        exclusion: "Half term Exclusion: Sat 12 Feb 2022",
                                    },
                                    {
                                        title: "Summer 2022",
                                        range: "Sat 23 Apr 2022 – Sat 16 Jul 2022",
                                        exclusion: "Half term Exclusion: Sat 28 May 2022",
                                    },
                                ].map((term, i) => (
                                    <div key={i}>
                                        <p className="text-[20px] font-semibold text-[#5F5F6D] mb-2  recline">
                                            {term.title}
                                        </p>
                                        <p className="text-[16px] text-[#5F5F6D]">{term.range}</p>
                                        <p className="text-[16px] text-[#5F5F6D] mt-2">{term.exclusion}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bottom Row */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-8">
                            {/* Price */}
                            <div>
                                <p className="text-[20px] font-semibold text-[#042C89] mb-4  recline">Price</p>
                                <p className="text-[16px] text-[#5F5F6D]">
                                    <strong>6 Month Plan</strong> &nbsp; £47.99 per month
                                </p>
                                <p className="text-[16px] text-[#5F5F6D] mt-2">
                                    <strong>12 Month Plan</strong> &nbsp; £39.99 per month
                                </p>
                            </div>

                            {/* Key Information */}
                            <div className="spacr-y-4">
                                <p className="text-[20px] font-semibold text-[#042C89] mb-4 recline">
                                    Key Information
                                </p>
                                <p className="text-[16px]  font-semibold text-[#5F5F6D] mb-4 ">
                                    Before you arrive
                                </p>
                                {[
                                    "Arrive 5 mins before the start",
                                    "You must wear your full uniform",
                                    "Bring plenty of water",
                                    "No snacks to be consumed during the lesson",
                                    "No studded boots (only trainers)",
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 mb-3">
                                        <img
                                            src="/assets/checkedroundImg.png"
                                            alt="check"
                                            className="w-5 h-5 mt-1"
                                        />
                                        <p className="text-[16px] text-[#5F5F6D]">{item}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Venue */}
                            <div>
                                <p className="text-[20px] font-semibold text-[#042C89] mb-4 recline">Venue</p>
                                <p className="text-[20px] recline text-[#5F5F6D] font-medium">Battersea</p>
                                <p className="text-[16px] text-[#5F5F6D] mt-2">
                                    St John Bosco College, Parkham St, Battersea, London SW11 3DQ
                                </p>
                            </div>


                        </div>
                        <div className=" mx-auto mt-12 border-[3px] border-[#0DD180] rounded-3xl overflow-hidden bg-white">
                            <iframe
                                title="St John Bosco College Map"
                                src="https://www.google.com/maps?q=St%20John%20Bosco%20College%20Parkham%20Street%20Battersea%20London%20SW11%203DQ&output=embed"
                                className="w-full h-[350px] md:h-[400px]"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>

                    </div>
                    <div className="relative max-w-[1100px] mx-auto mt-15">
                        <div className="relative  overflow-hidden md:min-h-auto min-h-[900px] rounded-[32px] bg-[#00A6E3] bg-cover px-10 py-12 flex flex-col lg:flex-row items-center justify-between"
                            style={{ backgroundImage: `url(${BookTrialGreenBg})` }}
                        >

                            {/* Left Content */}
                            <div className="max-w-[520px] text-white z-10">
                                <h1 className="text-[62px] recline lg:text-[62px] font-bold leading-tight">
                                    Book a <span className="text-[#FFDE14]">FREE</span> Trial!
                                </h1>

                                <p className="mt-4 text-[16px] leading-relaxed text-white/90">
                                    We could go on and on about why you should bring your child to a
                                    session with Samba Soccer Schools, but why not try it out for free
                                    instead? Book a no-strings-attached free trial with us today, and
                                    we’ll show you all the fuss.
                                </p>

                                <Link to="/find-a-class">
                                    <button className="mt-6 inline-flex items-center justify-center bg-[#FFDE14] recline font-bold hover:bg-yellow-500 transition text-[#042C89]  px-6 py-3 rounded-full">
                                        Book a FREE Trial
                                    </button>
                                </Link>
                            </div>
                            <div className="">
                                <img src="/assets/img-kids-picture-2.png" className="absolute right-[20px] bottom-[0px]" alt="" />
                            </div>



                        </div>

                    </div>

                </div>

            </section>
        </>
    );
};

export default EverythingYouNeed;
