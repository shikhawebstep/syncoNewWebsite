import React, { useState } from "react";
import TexturedBackground from "/assets/TexturedBackground.png";
import membershipBanner from "/assets/packagesBg.png";

const Packages = () => {
    const [children, setChildren] = useState(1);

    return (
        <section
            className="relative bg-[#F9FAFB] min-h-[1000px] bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${TexturedBackground})` }}
        >
            <div className=" py-[120px]  bg-no-repeat bg-cover z-99"
                style={{ backgroundImage: `url(${membershipBanner})` }}>
                <div className="container mx-auto ">
                    {/* CARD */}
                    <h1 className="text-center leading-[1] lg:text-[48px] text-[#0DD180] permanent-marker font-medium">
                        SAMBA
                    </h1>

                    <h2 className="text-center text-[#042C89] text-[48px] font-semibold recline  mb-8">
                        Packages
                    </h2>
                    <div className="flex mt-10 justify-center">
                        <div className="w-full max-w-[450px] bg-[#fff]  rounded-4xl shadow-xl px-10 py-10 border-t-8 border-[#FFD400] relative">

                            {/* TOP BORDER */}



                            {/* HEADINGS */}


                            <div className="text-center text-[#34353B] text-[18px] font-semibold mb-2">Choose a venue</div>
                            <div className="relative mb-6">
                                <select
                                    name="venue"
                                    defaultValue=""
                                    className={`w-full text-center  appearance-none rounded-lg border-2 px-4 py-3  bg-white
        text-[#5F5F6D] border-[#E5E7EB]
        focus:outline-none focus:border-[#0DD180]`}
                                >
                                    <option value="" disabled className="text-[#9CA3AF]">
                                        Chelsea Academy
                                    </option>
                                    <option value="venue1">Chelsea Academy 1</option>
                                    <option value="venue2">Chelsea Academy 2</option>
                                    <option value="venue3">Chelsea Academy 3</option>
                                </select>
                                {/* Custom arrow */}

                            </div>

                            {/* RADIO */}
                            <p className="text-center text-[#34353B]  text-[16px] font-semibold mb-4">
                                How many children would you like to book?
                            </p>

                            <div className="flex justify-center gap-8 mb-8">
                                {[1, 2, 3].map((num) => (
                                    <label
                                        key={num}
                                        className="flex items-center gap-3 cursor-pointer"
                                    >
                                        {/* Hidden native radio */}
                                        <input
                                            type="radio"
                                            name="children"
                                            value={num}
                                            checked={children === num}
                                            onChange={() => setChildren(num)}
                                            className="hidden peer"
                                        />

                                        {/* Custom radio */}
                                        <div className="w-6 h-6 rounded-full border-2 border-[#0DD180] flex items-center justify-center">
                                            <img
                                                src="/assets/greenDot.png"
                                                alt="checked"
                                                className={`w-4 h-4 p-1 transition-opacity ${children === num ? "opacity-100" : "opacity-0"
                                                    }`}
                                            />
                                        </div>

                                        {/* Label text */}
                                        <span className="text-[16px] text-[#5F5F6D]">
                                            {num}
                                        </span>
                                    </label>
                                ))}
                            </div>


                            {/* BUTTON */}
                            <button className="w-full bg-[#0DD180] hover:bg-[#0bbd72] transition text-white font-semibold text-[20px] py-3 rounded-full">
                                Show Prices
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center gap-10 mt-40">
                        <div className="w-[320px] bg-white rounded-[28px] shadow-xl overflow-hidden">

                            {/* TOP GREEN HEADER */}
                            <div className="bg-[#17D783] text-white text-center py-6 text-[24px] font-bold">
                                6 Month Plan
                            </div>

                            {/* CONTENT */}
                            <div className="px-6 py-6 space-y-4">

                                {/* FEATURES */}
                                <div className="space-y-3">
                                    {[
                                        "18 lessons at one venue",
                                        "5% discount on SSS Uniform",
                                        "FREE access to Skills Tutorial App",
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start gap-2">
                                            <img
                                                src="/assets/GreenRoundCHeck.png"
                                                alt="check"
                                                className="w-5 h-5 mt-[2px]"
                                            />
                                            <span className="text-[14px] text-[#5F5F6D] font-medium leading-snug">
                                                {item}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* PRICE */}
                                <div className="text-center pt-4">
                                    <div className="text-[#042C89] font-bold text-[48px] leading-none">
                                        £ 47.99
                                        <span className="text-[20px] font-medium text-[#9CA3AF] ml-1">
                                            /month
                                        </span>
                                    </div>

                                    <div className="text-[#17D783] text-[18px] font-medium mt-1">
                                        One-off £35 Joining Fee
                                    </div>
                                </div>

                                {/* BUTTONS */}
                                <div className="space-y-3 pt-2">
                                    <button className="w-full bg-[#C3C4CC] text-[#FFFFFF] text-[14px] py-3 rounded-full font-semibold">
                                        More Info
                                    </button>

                                    <button className="w-full bg-[#042C89] hover:bg-[#092f73] transition text-white text-[14px] py-3 rounded-full font-semibold">
                                        Book a Membership
                                    </button>
                                </div>

                            </div>
                        </div>
                        <div className="w-[320px] relative bg-white rounded-[28px] shadow-xl ">

                            {/* TOP GREEN HEADER */}
                            <div className="bg-[#00A6E3] text-white  rounded-t-[28px]  text-center py-6 text-[24px] font-bold">
                                12 Month Plan      
                              </div>
                            {/* CONTENT */}
                            <div className="px-6 py-6 space-y-4">

                                {/* FEATURES */}
                                <div className="space-y-3">
                                    {[
                                        "36 Lessons at one venue",
                                        "15% discount on SSS Uniform",
                                        "FREE access to Skills Tutorial App",
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start gap-2">
                                            <img
                                                src="/assets/GreenRoundCHeck.png"
                                                alt="check"
                                                className="w-5 h-5 mt-[2px]"
                                            />
                                            <span className="text-[14px] text-[#5F5F6D] font-medium leading-snug">
                                                {item}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* PRICE */}
                                <div className="text-center pt-4">
                                    <div className="text-[#042C89] font-bold text-[48px] leading-none">
                                        £ 39.99
                                        <span className="text-[20px] font-medium text-[#9CA3AF] ml-1">
                                            /month
                                        </span>
                                    </div>

                                    <div className="text-[#17D783] text-[18px] font-medium mt-1">
                                        One-off £35 Joining Fee
                                    </div>
                                </div>

                                {/* BUTTONS */}
                                <div className="space-y-3 pt-2">
                                    <button className="w-full bg-[#C3C4CC] text-[#FFFFFF] text-[14px] py-3 rounded-full font-semibold">
                                        More Info
                                    </button>

                                    <button className="w-full bg-[#042C89] hover:bg-[#092f73] transition text-white text-[14px] py-3 rounded-full font-semibold">
                                        Book a Membership
                                    </button>
                                </div>

                            </div>

                            <img src="/assets/Trophy.png" className="absolute top-[-75px] right-[-35px]" alt="" />
                        </div>
                        <div className="w-[320px] bg-white rounded-[28px] shadow-xl overflow-hidden">

                            {/* TOP GREEN HEADER */}
                            <div className="bg-[#FFDE14] text-[#042C89] text-center py-6 text-[24px] font-bold">
                                Flexi Plan
                            </div>

                            {/* CONTENT */}
                            <div className="px-6 py-6 space-y-4">

                                {/* FEATURES */}
                                <div className="space-y-3">
                                    {[
                                        "36 Lessons at one venue",
                                        "15% discount on SSS Uniform",
                                        "FREE access to Skills Tutorial App",
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start gap-2">
                                            <img
                                                src="/assets/GreenRoundCHeck.png"
                                                alt="check"
                                                className="w-5 h-5 mt-[2px]"
                                            />
                                            <span className="text-[14px] text-[#5F5F6D] font-medium leading-snug">
                                                {item}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* PRICE */}
                                <div className="text-center pt-4">
                                    <div className="text-[#042C89] font-bold text-[48px] leading-none">
                                        £ 50.00
                                        <span className="text-[20px] font-medium text-[#9CA3AF] ml-1">
                                            /month
                                        </span>
                                    </div>

                                    <div className="text-[#17D783] text-[18px] font-medium mt-1">
                                        One-off £35 Joining Fee
                                    </div>
                                </div>

                                {/* BUTTONS */}
                                <div className="space-y-3 pt-2">
                                    <button className="w-full bg-[#C3C4CC] text-[#FFFFFF] text-[14px] py-3 rounded-full font-semibold">
                                        More Info
                                    </button>

                                    <button className="w-full bg-[#042C89] hover:bg-[#092f73] transition text-white text-[14px] py-3 rounded-full font-semibold">
                                        Book a Membership
                                    </button>
                                </div>

                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>
        </section >
    );
};

export default Packages;
