import React from "react";

import bgImage from "/assets/serviceMainBannerCoach.png"; // background
import offer1 from "/assets/img-offer-1.png";
import offer2 from "/assets/img-offer-2.png";
import offer3 from "/assets/img-offer-3.png";
import offer4 from "/assets/img-offer-4.png";
import offer5 from "/assets/img-offer-5.png";
import offer6 from "/assets/img-offer-6.png";

const SchoolOffersYou = () => {
    return (
        <section
            className="gray-bg "
        >
            <div className="bg-cover gray-bg md:pt-[120px] pt-[60px] bg-white pb-[90px] relative"
            >
                <div className="container mx-auto">
                    {/* Heading */}
                    <div className="text-center max-w-[1130px] mx-auto mb-14">
                        <h2 className="text-[#042C89] md:text-[64px] text-[45px] font-semibold recline leading-tight">
                            What Samba Soccer <br className="onlyDesktop" /> Schools{" "}
                            <span className="text-[#0DD180] permanent-marker font-medium">Offer You</span>
                        </h2>

                        <p className="text-[#797A88] text-[18px] max-w-[820px] mx-auto mt-4 leading-relaxed">
                            Our franchise opportunity is designed to provide you with the tools and the <br className="hidden md:block" /> know-how to push you above your local competitors from the very start.
                        </p>
                    </div>

                    {/* Benefits Grid */}
                    <div className="grid grid-cols-1 max-w-[1273px] m-auto md:grid-cols-2 lg:grid-cols-2 gap-6 text-center">
                        {/* Card 1 */}
                        <div className="bg-[#FDFDFF] shadow-xl  md:flex items-center rounded-[25px] p-6">
                            <div className="h-[190px] md:w-5/12 flex items-center justify-center mb-4">
                                <img src={offer1} alt="Develop a New Skill" className="max-h-full" />
                            </div>
                            <div className="md:w-7/12">
                                <p className="text-[#0DD180] text-[26px] text-left recline font-bold mb-2">
                                    Exclusive Territory
                                </p>
                                <p className="text-[#797A88] text-[14px] text-left leading-relaxed">
                                    We make sure that SSS franchise holders don’t overlap territories. Our specially designed mapping system defines your exclusive, protected area meaning you can focus on maximising your region’s potential rather than worrying about competition. </p>
                            </div>
                        </div>

                        <div className="bg-[#FDFDFF] shadow-xl  md:flex items-center rounded-[25px] p-6">
                            <div className="h-[190px] md:w-5/12 flex items-center justify-center mb-4">
                                <img src={offer2} alt="Develop a New Skill" className="max-h-full" />
                            </div>
                            <div className="md:w-7/12">
                                <p className="text-[#0DD180] text-[26px] text-left recline font-bold mb-2">
                                    The SSS Brand
                                </p>
                                <p className="text-[#797A88] text-[14px] text-left leading-relaxed">
                                    Our brand and trademark are instantly recognisable across the London area, but creating your own successfully can take years. Franchising with us means you can skip to the front of the queue by using our name, imagery, personalised website layout, and booking system to draw customers to you quickly.
                                </p>
                            </div>
                        </div><div className="bg-[#FDFDFF] shadow-xl  md:flex items-center rounded-[25px] p-6">
                            <div className="h-[190px] md:w-5/12 flex items-center justify-center mb-4">
                                <img src={offer3} alt="Develop a New Skill" className="max-h-full" />
                            </div>
                            <div className="md:w-7/12">
                                <p className="text-[#0DD180] text-[26px] text-left recline font-bold mb-2">
                                    Coaching Syllabus
                                </p>
                                <p className="text-[#797A88] text-[14px] text-left leading-relaxed">
                                    Creating a coaching syllabus is vital for providing the kind of services customers want to keep returning to - but doing it yourself can take months. With a SSS franchise, you get an organised coaching programme ready to go from Day 1. Our syllabus provides minute-by-minute instructions on how to deliver high-quality classes cutting down your set-up time dramatically.
                                </p>
                            </div>
                        </div>
                        <div className="bg-[#FDFDFF] shadow-xl  md:flex items-center rounded-[25px] p-6">
                            <div className="h-[190px] md:w-5/12 flex items-center justify-center mb-4">
                                <img src={offer4} alt="Develop a New Skill" className="max-h-full" />
                            </div>
                            <div className="md:w-7/12">
                                <p className="text-[#0DD180] text-[26px] text-left recline font-bold mb-2">
                                    Synco           </p>
                                <p className="text-[#797A88] text-[14px] text-left leading-relaxed">
                                    At the core of our franchise package is our purpose-built CRM software that slashes administration time by up to 80%.
                                    Organising a thriving business isn’t easy, but with Samba Soccer Schools, we provide the tools to simplify the whole process. Synco has transformed how we operate by cutting the tedious side of business operations down to the bare minimum, leaving you to focus on the exciting side instead.
                                </p>
                            </div>
                        </div>
                            <div className="bg-[#FDFDFF] shadow-xl  md:flex items-center rounded-[25px] p-6">
                            <div className="h-[190px] md:w-5/12 flex items-center justify-center mb-4">
                                <img src={offer5} alt="Develop a New Skill" className="max-h-full" />
                            </div>
                            <div className="md:w-7/12">
                                <p className="text-[#0DD180] text-[26px] text-left recline font-bold mb-2">
                                    Coaching Education          </p>
                                <p className="text-[#797A88] text-[14px] text-left leading-relaxed">
                                   We have included everything you need to recruit and train coaches within the Coach Pro app, saving you enormous work. It contains detailed video guidance on recruitment, quality control and Samba Soccer Schools class delivery to ensure your customers get the best coaching by the best coaches out there.
                                </p>
                            </div>
                        </div>
                            <div className="bg-[#FDFDFF] shadow-xl  md:flex items-center rounded-[25px] p-6">
                            <div className="h-[190px] md:w-5/12 flex items-center justify-center mb-4">
                                <img src={offer6} alt="Develop a New Skill" className="max-h-full" />
                            </div>
                            <div className="md:w-7/12">
                                <p className="text-[#0DD180] text-[26px] text-left recline font-bold mb-2">
                                    Guidance and Consultancy           </p>
                                <p className="text-[#797A88] text-[14px] text-left leading-relaxed">
                                   Starting a business is never easy, so having somebody guide you through the early stages and help with consultancy whenever you have questions or issues can make all the difference. Each SSS Franchisee is assigned their own franchise manager to help set achievable goals and actionable targets, while our detailed online course is freely available to assist with everything from marketing to customer service.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SchoolOffersYou;
