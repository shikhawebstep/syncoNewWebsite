import React from "react";
import bannerImg from "/assets/whyBrazilBg.png";
const TrainingKit = () => {
    return (
        <section
            className="relative trainingKitSec flex bg-contain bg-no-repeat items-end bg-[#fff]  bg-top pt-[50px] pb-[50px] lg:min-h-[800px]"

        >
            <div className="container z-999 mx-auto">
                {/* Heading */}
                <div>
                    <h2 className="text-center items-center flex justify-center gap-6 text-[#042C89] text-[52px] md:text-[56px] font-normal recline mb-12">
                        The Official Training Kit

                    </h2>
                    <p className="text-[#5F5F6D] text-[20px] poppins text-center" >The items below are compulsory for students attending our classes.</p>
                    {/* Content */}

                    <div className="border-3 mt-15  rounded-xl py-15 border-white bg-[#FDFDFF]  shadow-[0_-4px_12px_rgba(0,0,0,0.12)]">
                        <h2 className="text-center items-center flex justify-center gap-6 text-[#00A6E3] text-[52px] md:text-[56px] font-normal permanent-marker mb-12">
                            Kids Collection
                        </h2>
                        <div className="flex justify-center gap-40 mt-10 leading-relaxed">

                            <div className="block text-center space-y-5">
                                <img src="/assets/SSSTshirt.png" alt="" />
                                <span className="text-[20px] recline  text-[#042C89] text-center">SSS Kids T-Shirt</span>
                            </div>
                            <div className="block text-center space-y-5">
                                <img src="/assets/SSSDri-FITShorts.png" alt="" />
                                <span className="text-[20px] recline  text-[#042C89] text-center">SSS Dri-FIT Shorts</span>
                            </div>
                            <div className="block text-center space-y-5">
                                <img src="/assets/SSSSocks.png" alt="" />
                                <span className="text-[20px] recline  text-[#042C89] text-center">SSS CLASSIC II Socks</span>
                            </div>
                        </div>
                        <button className="bg-[#FFDE14] mx-auto mt-15 text-[#042C89] flex justify-center items-center rounded-3xl p-2 px-4 text-[18px] gap-2 font-semibold "> <img src="/assets/cartIcon.png" className="w-4 h-4" alt="" /> <a href="" className="recline"> Buy Today!</a></button>

                    </div>
  <div className="border-3 mt-10 rounded-xl py-15 border-white bg-[#FDFDFF]  shadow-[0_-4px_12px_rgba(0,0,0,0.12)]">
                        <h2 className="text-center items-center flex justify-center gap-6 text-[#0DD180] text-[52px] md:text-[56px] font-normal permanent-marker mb-12">
                           Coaches Collection
                        </h2>
                        <div className="flex justify-center gap-40 mt-10 leading-relaxed">

                            <div className="block text-center space-y-5">
                                <img src="/assets/Coaches T-Shirt.png" alt="" />
                                <span className="text-[20px] recline  text-[#042C89] text-center">Coaches T-Shirt</span>
                            </div>
                            <div className="block text-center space-y-5">
                                <img src="/assets/Coaches Mid-Layer.png" alt="" />
                                <span className="text-[20px] recline  text-[#042C89] text-center">Coaches Mid-Layer</span>
                            </div>
                            <div className="block text-center space-y-5">
                                <img src="/assets/Coaches Winter Jacket.png" alt="" />
                                <span className="text-[20px] recline  text-[#042C89] text-center">Coaches Winter Jacket</span>
                            </div>
                        </div>
                                               <button className="bg-[#FFDE14] mx-auto mt-15 text-[#042C89] flex justify-center items-center rounded-3xl p-2 px-4 text-[18px] gap-2 font-semibold "> <img src="/assets/cartIcon.png" className="w-4 h-4" alt="" /> <a href="" className="recline"> Buy Today!</a></button>


                    </div>
                    
                </div>
            </div>


        </section>
    );
};

export default TrainingKit;
