import React from 'react'
import { useState } from "react";
const countries = [
    {
        code: "GB",
        name: "United Kingdom",
        dialCode: "+44",
        flag: "/assets/ukFlag.png",
    },
    {
        code: "US",
        name: "United States",
        dialCode: "+1",
        flag: "/assets/ukFlag.png",
    },
    {
        code: "IN",
        name: "India",
        dialCode: "+91",
        flag: "/assets/ukFlag.png",
    },
];
const EnquireToday = () => {
    const link = "sharelink.com/get/sff323fg";
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(link);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch (err) {
            console.error("Failed to copy", err);
        }
    };

    const [selectedCountry, setSelectedCountry] = useState(countries[0]); // UK default
    const [phone, setPhone] = useState("");
    return (
        <section className="py-[50px] ">
            <div className="container">

                <div className='max-w-[900px] m-auto text-[#042C89] text-center'>
                    <p className='text-[20px] leading-[30px] text-[#042C89] font-semibold px-[8%]'>Introduce your friends to Samba Soccer Schools and they’ll get one free month of classes! You’ll also get a free month as a thank you for sharing.
                    </p>
                    <p className='text-[20px] leading-[30px] text-[#042C89] font-semibold px-[8%] py-8'>
                        The more friends you refer, the more months you get! Simply use the buttons below to share this form with them. Or copy and paste this link to share:
                    </p>
                    <div className='mt-10'>
                        <p className='text-[20px] text-[#042C89] font-semibold'>Copy Link</p>
                        <div className="w-full max-w-[520px] mx-auto">
                            <div className="flex items-center justify-between border border-[#C3C4CC] rounded-full px-5 py-2 bg-[#F6F6F7]">

                                {/* Link Text */}
                                <span className="text-[15px] text-[#5F5F6D] truncate">
                                    {link}
                                </span>

                                {/* Copy Button */}
                                <button
                                    onClick={handleCopy}
                                    className="ml-4 flex items-center justify-center w-12 h-12 rounded-full bg-[#042C89]"
                                >
                                    <img
                                        src={copied ? "/assets/CopyIcon.png" : "/assets/CopyIcon.png"}
                                        alt="Copy"
                                        className="w-6 h-6"
                                    />
                                </button>
                            </div>

                            {/* Feedback */}
                            {copied && (
                                <p className="mt-2 text-sm text-green-600 text-center">
                                    Link copied!
                                </p>
                            )}
                        </div>
                    </div>
                    <div className='mt-10'>
                        <p className='text-[20px] text-[#042C89] mb-2 font-semibold'>Share</p>
                        <div className='flex gap-2 justify-center'>
                            <div>
                                <img src="/assets/mobileIcon.png" className='ml-4 flex items-center justify-center w-18 h-18  p-4 rounded-full bg-[#0DD180]' alt="" />
                            </div>
                            <div>
                                <img src="/assets/MailIcon.png" className='ml-4 flex items-center justify-center w-18 h-18  p-4 rounded-full bg-[#0DD180]' alt="" />
                            </div>
                            <div>
                                <img src="/assets/FacebookIcon.png" className='ml-4 flex items-center justify-center w-18 h-18  p-4 rounded-full bg-[#0DD180]' alt="" />
                            </div>
                            <div>
                                <img src="/assets/InstaIcon.png" className='ml-4 flex items-center justify-center w-18 h-18  p-4 rounded-full bg-[#0DD180]' alt="" />
                            </div>

                            <div>
                                <img src="/assets/LinkedinIcon.png" className='ml-4 flex items-center justify-center w-18 h-18  p-4 rounded-full bg-[#0DD180]' alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='mt-20'>
                        <p className='text-[20px] text-[#042C89] mb-2 font-semibold'>Or send us the referee details</p>
                        <p className='text-[18px] text-[#87838D] mb-2 font-semibold px-[5%]'>Prefer to send us their details? Use the form below and we’ll directly contact your friend on your behalf, and if they sign up, we’ll let you know. </p>
                        <div className="max-w-[1000px] mx-auto">
                            <div className="grid text-left mt-10 grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">

                                {/* First Name */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-[16px] poppins font-medium text-[#282829]">
                                        First name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="First name"
                                        className="h-[46px] px-4 rounded-lg bg-[#F0F5FF] text-[#5F5F6D] placeholder-[#9E9FAA] outline-none"
                                    />
                                </div>

                                {/* Last Name */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-[16px] poppins font-medium text-[#282829]">
                                        Last name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Last name"
                                        className="h-[46px] px-4 rounded-lg bg-[#F0F5FF] text-[#5F5F6D] placeholder-[#9E9FAA] outline-none"
                                    />
                                </div>

                                {/* Email */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-[16px] poppins font-medium text-[#282829]">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="if known"
                                        className="h-[46px] px-4 rounded-lg bg-[#F0F5FF] text-[#5F5F6D] placeholder-[#9E9FAA] outline-none"
                                    />
                                </div>

                                {/* Phone Number */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-[16px] poppins font-medium text-[#282829]">
                                        Phone number
                                    </label>

                                    <div className="flex items-center h-[46px] rounded-lg bg-[#F0F5FF] px-3">
                                        {/* Country Select */}
                                        <div className="relative">
                                            <select
                                                className="absolute inset-0 opacity-0 cursor-pointer"
                                                value={selectedCountry.code}
                                                onChange={(e) =>
                                                    setSelectedCountry(
                                                        countries.find(c => c.code === e.target.value)
                                                    )
                                                }
                                            >
                                                {countries.map(country => (
                                                    <option key={country.code} value={country.code}>
                                                        {country.name} ({country.dialCode})
                                                    </option>
                                                ))}
                                            </select>

                                            <div className="flex items-center gap-2">
                                                <img
                                                    src={selectedCountry.flag}
                                                    alt={selectedCountry.name}
                                                    className="w-6 h-4 rounded-sm"
                                                />
                                                <svg
                                                    className="w-4 h-4 text-[#5F5F6D]"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Divider */}
                                        <div className="h-6 w-[1px] bg-[#C3C4CC] mx-3" />

                                        {/* Dial Code */}
                                        {/* <span className="text-[#5F5F6D] mr-2">
          {selectedCountry.dialCode}
        </span> */}

                                        {/* Phone Input */}
                                        <input
                                            type="tel"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            className="flex-1 bg-transparent outline-none text-[#5F5F6D]"
                                            placeholder="Enter phone number"
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    <button className="mt-10 rounded-xl bg-[#042C89] px-14 py-3 text-[16px] font-medium text-white poppins">
                        Submit
                    </button>


                    <div className='howItWork mt-50'>
                        <h4 className="text-3xl lg:text-4xl recline font-bold text-blue-900 recline">
                            How it works…
                        </h4>
                        <p className='text-[18px] text-[#87838D] mb-2 font-semibold px-[5%]'>Start earning rewards in three simple steps…</p>
                        <div className="grid text-left mt-10 grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-6">
                            <div className='text-center'>
                                <div className='min-h-50'>
                                <img src="/assets/ShareImg.png" className='mx-auto  ' alt="" />
                                </div>
                                <p className='text-[20px] text-[#00A6E3] mb-2  recline font-semibold'>Share</p>
                                <p className='text-[14px] text-[#87838D] mb-2  font-medium px-[10%]'>To give your friend a reward, share this link and tell your friends to enter your name in the fields above.</p>
                            </div>
                               <div className='text-center'>
                                <div className='min-h-50'>
                                <img src="/assets/RelaxImg.png" className='mx-auto ' alt="" />
                                </div>
                                <p className='text-[20px] text-[#00A6E3] mb-2  recline font-semibold'>Relax</p>
                                <p className='text-[14px] text-[#87838D] mb-2  font-medium px-[10%]'>Sit back, relax and wait for your friends to book a membership plan.</p>
                            </div>
                               <div className='text-center'>
                                 <div className='min-h-50'>
                                <img src="/assets/RewardImg.png" className='mx-auto  ' alt="" />
                                </div>
                                <p className='text-[20px] text-[#00A6E3] mb-2  recline font-semibold'>Reward</p>
                                <p className='text-[14px] text-[#87838D] mb-2  font-medium px-[10%]'>When they make their booking, you’ll both receive one month for free. Hooray!</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default EnquireToday
