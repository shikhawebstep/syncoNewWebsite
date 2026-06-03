import React from "react";
import {
    TrendingUp,
    Users,
    Award,
    Smile,
    Briefcase,
    Target
} from "lucide-react";
import bannerImg from "/assets/IntegralBanner.png";
import BannerImgMobile from "/assets/IntegralBannerMobile.png";

import TexturedBackground from "/assets/TexturedBackground.png";
const benefits = [
    {
        title: "Career Progress",
        desc:
            "There is plenty of scope for career progress as our brand continues to grow in London and beyond through franchising.",
        icon: '/assets/careerProgress.png',
        color: "bg-[#00A6E3] text-white"
    },
    {
        title: "Establishing Relationships",
        desc:
            "Working closely with coaches, our Regional Managers provide the platform to really get to know our staff members.",
        icon: '/assets/EstablishingRelationShip.png',
        color: "bg-[#0DD180] text-white"
    },
    {
        title: "Leadership Responsibilities",
        desc:
            "Our Regional Managers will play a large part in shaping the company’s future.",
        icon: '/assets/LeadershipResponsibilities.png',
        color: "bg-[#0DD180] text-white"
    },
    {
        title: "Rewarding Encounters",
        desc:
            "This role is all about helping others develop and improve.",
        icon: '/assets/RewardingEncounters.png',
        color: "bg-[#00A6E3] text-white"
    },
    {
        title: "Competitive Salary",
        desc:
            "This role comes with a competitive starting salary for the right candidate.",
        icon: '/assets/CompetitiveSalary.png',
        color: "bg-[#00A6E3] text-white"
    },
    {
        title: "Transferable Skills",
        desc:
            "This role will equip our Regional Managers with invaluable skills and experience.",
        icon: '/assets/TransferableSkills.png',
        color: "bg-[#0DD180] text-white"
    },
    {
        title: "Sense of Community",
        desc:
            "We work really hard to create a sense of belonging for everyone at Samba Soccer Schools, including staff.",
        icon: '/assets/SenseofCommunity.png',
        color: "bg-[#0DD180] text-white"
    }
];

const BenefitCard = ({ title, desc, icon: Icon, color }) => (
    <div className="flex items-start gap-5 bg-[#FDFDFF] shadow-lg to-white rounded-[28px] px-7 py-6">
        {/* Icon */}
        <div className={`w-16 h-16 rounded-full bg-[#0A9BDC] flex items-center  justify-center shrink-0 ${color} `}>

            <img className="w-fit h-12 p-1" src={Icon} alt="" />
        </div>

        {/* Content */}
        <div>
            <p
                className= "text-[16px] md:text-[20px] recline font-semibold text-[#001F6E] leading-tight mb-1"
            >
                {title}
            </p>

            <p className="text-[16px] text-[#9AA0B3] font-light leading-relaxed max-w-[350px]">
                {desc}
            </p>
        </div>
    </div>

);

const IntegralPart = () => {
    return (
        <section
            className="bg-[#F6F7FB] "
            style={{ backgroundImage: `url(${TexturedBackground})` }}
        >
            <div className="
    md:pt-30  md:pb-30 pt-90 pb-30 px-5 bg-no-repeat bg-right-top
    bg-[url('/assets/IntegralBannerMobile.png')]
    md:bg-[url('/assets/IntegralBanner.png')]
  ">
                <div className="max-w-6xl mx-auto">

                    {/* Heading */}
                    <h2 className="text-[38px] md:text-[38px] font-semibold recline text-[#001F6E] b-4">
                        Become an <br className="block md:hidden" /> integral part of  <br className="block md:hidden" /> the <br className="md:block hidden" />
                        Samba Soccer Schools team!
                    </h2>
                    <div className="max-w-[787px] mt-3">

                        <p className="text-[#797A88] poppins mb-4 text-[16px] md:text-[20px] ">
                            We do things a little differently at Samba Soccer Schools and would
                            like to offer you the opportunity to be a crucial part of that.
                        </p>

                        <p className="text-[#797A88] poppins mb-4  text-[16px] md:text-[20px] ">
                            Our ethos is all about doing things the Brazilian way – injecting fun, flair, and freedom into everything we do.
                        </p>

                        <p className="text-[#797A88] poppins md:mb-25 mb-7 text-[16px] md:text-[20px] ">
                            As one of our Regional Managers, you would benefit in a variety of ways…
                        </p>

                    </div>


                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {benefits.map(item => (
                            <BenefitCard key={item.title} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntegralPart;
