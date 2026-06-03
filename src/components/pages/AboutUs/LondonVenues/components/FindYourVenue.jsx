import React, { useState, useEffect } from "react";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import TexturedBackground from "/assets/TexturedBackground.png";
import { useNavigate } from "react-router-dom";
import Unforgettable from '../../../home/components/Unforgettable'
import Reviews from "../../../Common/Reviews";
const locations = [
    {
        id: 1,
        title: "Battersea",
        image: "/assets/Battersea.png",
        desc: "Football classes are held at the Battersea academy on Saturday afternoons for boys and girls aged 4-12.",
    },
    {
        id: 2,
        title: "Chelsea",
        image: "/assets/Chelsea.png",
        desc: "Football classes are held at the Chelsea academy on Sunday afternoons for boys and girls aged 4-12.",
    },
    {
        id: 3,
        title: "Fulham",
        image: "/assets/Fulham.png",
        desc: "Football classes are held at the Fulham academy on Saturday afternoons for boys and girls aged 4-12.",
    },
    {
        id: 4,
        title: "Acton",
        image: "/assets/Fulham.png",
        desc: "Football classes are held at the Wandsworth academy on Sunday afternoons for boys and girls aged 4-12.",
    },
];

const FindYourVenue = () => {
    const sliderRef = useRef(null);
    const infiniteLocations = [...locations, ...locations, ...locations];
  const navigate = useNavigate();

    const scrollByCard = (direction = 1) => {
        if (!sliderRef.current) return;

        const card = sliderRef.current.querySelector(".slider-card");
        if (!card) return;

        const gap = 80; // gap-20 = 80px
        const scrollAmount = card.offsetWidth + gap;

        sliderRef.current.scrollBy({
            left: direction * scrollAmount,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        if (!sliderRef.current) return;

        const card = sliderRef.current.querySelector(".slider-card");
        if (!card) return;

        const gap = 80;
        const scrollAmount = card.offsetWidth + gap;

        sliderRef.current.scrollLeft = locations.length * scrollAmount;
    }, []);

    return (
        <section className="relative py-[100px]  bg-[#F9FAFB]"
            style={{ backgroundImage: `url(${TexturedBackground})` }}>
            <div className="container mx-auto max-w-[1100px]">
                {/* Heading */}
                <h2 className="text-center text-[#042C89] text-[48px] md:text-[48px] font-normal recline mb-6">
                    Find your Venue
                </h2>

                <p className="text-[#5F5F6D] text-[20px] poppins text-center mb-14">
                    Football Classes For Kids In London (Aged 4-12)
                </p>

                {/* FAQ List */}
                <div className=" w-full md:max-w-[70%] rounded-4xl mx-auto bg-white p-10 mb-20 shadow-[0_-4px_12px_rgba(0,0,0,0.12)]">
                    <form class="space-y-4">
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4  ">
                            <input type="text" placeholder="Enter your post code"
                                class="w-full appearance-none rounded-lg border-2 px-4 py-3 pr-12 bg-white
        text-[#5F5F6D] border-[#E5E7EB]
        focus:outline-none focus:border-[#0DD180]" />

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


                          <button
      type="button"
      onClick={() => navigate("/about/InnerVenues")}
      className="w-full bg-[#0DD180] hover:bg-green-600 poppins font-bold text-white py-2 rounded-full transition"
    >
      Search
    </button>
                        </div>

                    </form>
                </div>
                <div className="max-w-[1200px] mx-auto relative py-5">

                    {/* LEFT BUTTON */}
                    <button
                        onClick={() => scrollByCard(-1)}
                        className="absolute  md:left-[-40px] left-[0px] top-1/2 -translate-y-1/2 z-20"
                    >
                        <img src="/assets/leftIcon.png" className="h-4" alt="" />
                    </button>

                    {/* SLIDER */}
                    <div
                        ref={sliderRef}
                        className="flex gap-0 overflow-x-scroll scroll-smooth no-scrollbar px-4"
                    >
                        {infiniteLocations.map((item, index) => (
                            <div
                                key={index}
                                className="slider-card min-w-[250px] max-w-[290px] block text-center space-y-6 shrink-0"
                            >
                                <img src={item.image} className="mx-auto" alt="" />

                                <div className="space-y-2">
                                    <span className="text-[14px] poppins text-[#042C89]">
                                        Football Classes in
                                    </span>
                                    <p className="text-[22px] recline font-bold text-[#042C89]">
                                        {item.title}
                                    </p>
                                </div>

                                <p className="text-[14px] poppins text-[#797A88]    px-7">
                                    {item.desc}
                                </p>

                                <button className="rounded-full bg-[#FFDE14] px-5 py-2.5 text-[12px] font-bold text-[#042C89] poppins">
                                    Find out more
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT BUTTON */}
                    <button
                        onClick={() => scrollByCard(1)}
                        className="absolute md:right-[-40px]  right-[-0px] top-1/2 -translate-y-1/2 z-20"
                    >
                        <img src="/assets/rightIcon.png" className="h-4" alt="" />
                    </button>


                </div>
                <div className="text-center mt-20">
                    <div className="review-img mb-4 flex justify-center items-center gap-3">
                        <img className='w-[120px]' src="/assets/google-reviews.png" alt="" />
                        <img className='w-[120px]' src="/assets/trustpoint.png" alt="" />
                    </div>
                    <h3 className="blue-text">
                        Unforgettable <span className='light-blue-text '>moments</span> <br className="md:block hidden" /> since 2009
                    </h3>
                </div>
                <Reviews />
            </div>

        </section>
    );
};

export default FindYourVenue;
