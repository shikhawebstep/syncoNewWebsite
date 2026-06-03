import React, { useState, useEffect } from "react";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import TexturedBackground from "/assets/TexturedBackground.png";
import { useNavigate } from "react-router-dom";
import Unforgettable from '../../../home/components/Unforgettable'
import Reviews from "../../../Common/Reviews";
import { useSearchForm } from "../../../../../hooks/useSearchForm";
import { CustomPostcodeInput, CustomVenueInput } from "../../../Common/SearchInputs";
import { Toast } from "../../../Common/Toast";
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
    const searchFormProps = useSearchForm();
    const { handleSearch, toasts, removeToast } = searchFormProps;

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
       <>
        <section className="relative py-[100px]  bg-[#F9FAFB]"
            style={{ backgroundImage: `url(${TexturedBackground})` }}>
            <Toast toasts={toasts} removeToast={removeToast} />
            <div className="container mx-auto max-w-[1100px]">
                {/* Heading */}
                <h2 className="text-center text-[#042C89] text-[40px] md:text-[48px] font-normal recline mb-6">
                    Find your Venue
                </h2>

                <p className="text-[#5F5F6D] md:text-[20px] text-[15px] poppins text-center mb-14">
                    Football Classes For Kids In London (Aged 4-12)
                </p>

                {/* FAQ List */}
                <div className=" w-full md:max-w-[70%] rounded-4xl mx-auto bg-white md:p-10 p-5 mb-20 shadow-[0_-4px_12px_rgba(0,0,0,0.12)]">
                    <form className="space-y-4" onSubmit={handleSearch}>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <CustomPostcodeInput
                                {...searchFormProps}
                                inputClassName="w-full appearance-none rounded-lg border-2 px-4 py-3 bg-white text-[#5F5F6D] border-[#E5E7EB] focus:outline-none focus:border-[#0DD180]"
                            />
                            <CustomVenueInput
                                {...searchFormProps}
                                inputClassName="w-full appearance-none rounded-lg border-2 px-4 py-3 pr-12 bg-white text-[#5F5F6D] border-[#E5E7EB] focus:outline-none focus:border-[#0DD180]"
                            />

                            <button
                                type="submit"
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
                                   Learn More
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
             
            </div>

        </section>
        <div className="bg-[#FDFDFF]">
               <div className="text-center mt-20">
                   
                    <h3 className="blue-text">
                        Reviews 
                    </h3>
                </div>
                <Reviews />
            </div>
       </>
    );
};

export default FindYourVenue;
