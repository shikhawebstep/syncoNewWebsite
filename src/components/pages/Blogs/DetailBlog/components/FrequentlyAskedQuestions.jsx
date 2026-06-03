import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import TexturedBackground from "/assets/TexturedBackground.png";

const faqs = [
    {
        question: "What are the best football drills for kids?",
        answer:
            "If you’re interested in some specific football games/drills for kids, click here.",
    },
    {
        question: "What is a warm-up drill?",
        answer:
            "Warm-up drills help players get stretched and ready to play by minimising the chance of injury.",
    },
    {
        question: "What are the best fitness drills for soccer?",
        answer:
            "If you’re looking for football drills to help improve endurance, click here.",
    },
    {
        question: "How do you warm-up for soccer practice?",
        answer:
            "There are many different methods to warm up and it’s important you stretch as many muscle groups as possible.",
    },
    
];

const FrequentlyAskedQuestions = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="relative py-[100px]  bg-[#F9FAFB]"
            style={{ backgroundImage: `url(${TexturedBackground})` }}>
            <div className="container mx-auto max-w-[1100px]">
                {/* Heading */}
           <div className="flex justify-center">    <h2 className="text-center text-[#042C89] text-[36px] md:text-[56px] 
               w-full md:max-w-[50%] mx-auto 
               font-normal recline mb-6">

                    <span className="text-[#0DD180]" > FAQs </span>  About Planning Football Sessions for Children                 </h2></div>

                

                {/* FAQ List */}
                <div className="space-y-5 max-w-[800px] mx-auto">
                    {faqs.map((faq, index) => {
                        const isOpen = activeIndex === index;

                        return (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-md px-8 py-6 transition-all"
                            >
                                {/* Question */}
                                <button
                                    onClick={() =>
                                        setActiveIndex(isOpen ? null : index)
                                    }
                                    className="w-full flex items-center justify-between text-left"
                                >
                                    <span className="text-[#1C1C28] md:text-[22px] text-[18px] font-medium poppins">
                                        {faq.question}
                                    </span>

                                    <ChevronDown
                                        className={`w-5 h-5 text-[#1C1C28] transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                {/* Divider */}
                                {isOpen && (
                                    <div className="h-px bg-[#E5E7EB] my-4" />
                                )}

                                {/* Answer */}
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${isOpen ? " opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <p className="text-[#5F5F6D] text-[16px] poppins leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FrequentlyAskedQuestions;
