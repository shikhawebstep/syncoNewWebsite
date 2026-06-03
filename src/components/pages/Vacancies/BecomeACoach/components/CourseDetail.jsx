import React, { useState } from "react";
import bannerImg from "/assets/CourseDetail.png";
import { div } from "framer-motion/client";

const CourseDetail = () => {



    return (
        <section
            className="relative py-[80px] pb-0 lg:min-h-[700px] flex justify-center cursor-pointer"
            style={{
                backgroundImage: `url(${bannerImg})`,
                backgroundSize: "cover",
                backgroundPosition: "bottom",
            }}
        >
            <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
            <div className="z-999 text-center">
                <h3 className="text-[65px] mb-2 font-medium text-white z-999 recline ">
                    Course Details
                </h3>
                <p className="text-white mt-2 text-[18px] font-semibold">
                    The SSS Coaching Pathway lasts six weeks, with seven courses throughout the <br /> year, and classes are held on Tuesday evenings between 7-8 pm at the King <br /> Solomon Academy near Edgware Road in London.
                </p>
                <div className="bg-white  p-10 mt-15 block text-left text-[16px] w-fit m-auto     text-[#34353B]
 poppins mb-10 rounded-2xl 
shadow-[0_25px_60px_-10px_rgba(0,0,0,0.35)]">
                    <p className="font-bold text-[#00A6E3] mb-4">
                        Course dates:
                    </p>

                    <div className="space-y-4">
                        <p>
                            <span className="font-bold text-[#00A6E3] pr-1">Course 1:</span>{"  "}
                            Tuesday 12th – Tuesday 17th October (6 weeks)
                        </p>

                        <p>
                            <span className="font-bold text-[#00A6E3] pr-1">Course 2:</span>{"  "}
                            Tuesday 31st October – Tuesday 5th December (6 weeks)
                        </p>

                        <p>
                            <span className="font-bold text-[#00A6E3] pr-1">Course 3:</span>{"  "}
                            Tuesday 9th Jan – Tuesday 13th Feb (6 weeks)
                        </p>

                        <p>
                            <span className="font-bold text-[#00A6E3] pr-1">Course 4:</span>{"  "}
                            Tuesday 20th Feb – Tuesday 26th March (6 weeks)
                        </p>

                        <p>
                            <span className="font-bold text-[#00A6E3] pr-1">Course 5:</span>{"  "}
                            Tuesday 16th April – Tuesday 21st May (6 weeks)
                        </p>

                        <p>
                            <span className="font-bold text-[#00A6E3] pr-1">Course 6:</span>{"  "}
                            Tuesday 4th June – Tuesday 9th July (6 weeks)
                        </p>

                        <p>
                            <span className="font-bold text-[#00A6E3] pr-1">Course 7:</span>{"  "}
                            Tuesday 23rd July – Tuesday 27th August (6 weeks)
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default CourseDetail;
