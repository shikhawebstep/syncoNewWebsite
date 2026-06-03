import React from "react";

const Banner = () => {
    return (
        <section
            className="campBanner birthdayPartyBanner  bg-cover bg-bottom md:py-[100px] py-[200px] lg:min-h-[700px] min-h-[800px] md:flex items-center relative "

        >
            <div className="container mx-auto">
                <div className="inner-content-birthay  max-w-[750px] pb-20 md:ps-14  ms-auto">
                    <h1 className="recline md:text-left text-center text-[40px]  lg:text-[89px]  text-white ">
                        Football Birthday <span className="permanent-marker block font-normal  text-[#FFDE14]">Parties, <br className="md:block hidden" /> Samba Style   </span>
                    </h1>
                    <div className="md:w-fit md:mx-2 w-full max-w-fit mx-auto ">
                        <button 
                            onClick={() => document.getElementById('enquiry-section')?.scrollIntoView({ behavior: 'smooth' })}
                            className="text-white mt-5 poppins rounded-3xl px-8 py-3 text-[20px] font-bold bg-[#042C89]">
                            Enquire today
                        </button>
                    </div>
                </div>
            </div>


            <div className="absolute md:block hidden  right-0 w-[300px] h-full">
                <img src="/assets/bpartyLayer1.png" alt="" />
            </div>


        </section>
    );
};

export default Banner;
