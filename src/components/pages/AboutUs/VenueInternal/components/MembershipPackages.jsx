import React, { useState } from "react";
import TexturedBackground from "/assets/TexturedBackground.png";
import membershipBanner from "/assets/membershipBanner.png";

const MembershipPackages = () => {
    const [children, setChildren] = useState(1);

    return (
        <section
            className="relative bg-[#F9FAFB] bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${TexturedBackground})` }}
        >
            <div className=" py-[120px]  bg-no-repeat bg-cover z-99"
                style={{ backgroundImage: `url(${membershipBanner})` }}>
                <div className="container mx-auto ">
                    {/* CARD */}
                    <h1 className="text-center leading-[1] lg:text-[48px] text-[#0DD180] permanent-marker font-medium">
                        Samba Soccer Schools
                    </h1>

                    <h2 className="text-center text-[#042C89] text-[48px] font-semibold recline  mb-8">
                        Membership packages
                    </h2>
                    <div className="flex mt-10 justify-center">
                        <div className="w-full max-w-[600px] bg-[#fefefe30] bg-opacity-10 rounded-2xl shadow-xl px-10 py-10 relative">

                            {/* TOP BORDER */}

                            <div className="absolute top-0 left-0 w-full h-[6px] bg-[#FFD400] rounded-t-2xl" />

                            {/* HEADINGS */}


                            {/* SELECT */}
                            <div className="relative mb-6">
                                <select
                                    name="venue"
                                    defaultValue=""
                                    className={`w-full appearance-none rounded-lg border-2 px-4 py-3 pr-12 bg-white
        text-[#5F5F6D] border-[#E5E7EB]
        focus:outline-none focus:border-[#0DD180]`}
                                >
                                    <option value="" disabled className="text-[#9CA3AF]">
                                        Search or select an option
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

                            {/* RADIO */}
                            <p className="text-center text-[#042C89]  text-[16px] font-semibold mb-4">
                                How many children would you like to book?
                            </p>

                            <div className="flex justify-center gap-8 mb-8">
                                {[1, 2, 3].map((num) => (
                                    <label
                                        key={num}
                                        className="flex items-center gap-2 cursor-pointer text-[#1C1C28]"
                                    >
                                        <input
                                            type="radio"
                                            name="children"
                                            checked={children === num}
                                            onChange={() => setChildren(num)}
                                            className="accent-[#0DD180] w-4 h-4"
                                        />
                                        <span className="text-[16px]">{num}</span>
                                    </label>
                                ))}
                            </div>

                            {/* BUTTON */}
                            <button className="w-full bg-[#0DD180] hover:bg-[#0bbd72] transition text-white font-semibold text-[20px] py-3 rounded-full">
                                Show Prices
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MembershipPackages;
