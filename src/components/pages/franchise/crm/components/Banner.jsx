import React from "react";
import bannerImg from "/assets/crmBanner.png";

const Banner = () => {
    return (
        <section
            className="relative crmSection  flex bg-cover items-end  bg-top md:pt-[100px] pt-[180px] pb-[30px] min-h-[800px]"

        >
            <div className="container mx-auto">
                <div className="text-center max-w-[850px] mx-auto">
                    <h1 className=" leading-tight permanent-marker lg:text-[64px] text-[40px] text-[#00A6E3]">
                        CRM
                    </h1>
                    <p className="text-[#5F5F6D] leading-[28px] mt-7"> Organising a business is difficult enough, so we’ve put together a comprehensive, bespoke customer relationship management (CRM) software called Synco with everything franchisees, customers, and coaches need all in one convenient place.  </p>
                    <p className="text-[#5F5F6D] leading-[28px] py-4">   This is the all-in-one business management solution every business wishes they’d had ten years ago. Easy to navigate, with a staggering amount of information, services, business breakdowns, booking options, and just about everything needed to run a Samba Soccer Schools franchise, all at the click of a button.
                    </p>
                    <p className="text-[#5F5F6D] leading-[28px]">Make no mistake about it; this is a piece of software that is already transforming how we do business. It has taken the best part of three years to develop fully, but it’s certainly been worth the wait - slashing around 80% of the business admin time, allowing us to just get on with what we love - coaching football, of course.
                    </p>
                    <p className="text-[#5F5F6D] leading-[28px] pt-4">Synco is a software ecosystem broadly broken into four areas; a website booking system (for customers), Parent Connect Account (for customers), Coach Pro (for coaches), and the main Synco section (for franchisees).
                    </p>
                </div>
            </div>

        </section>
    );
};

export default Banner;
