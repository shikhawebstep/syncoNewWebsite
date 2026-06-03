import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import TexturedBackground from "/assets/TexturedBackground.png";

const faqs = [
    {
        question: "How long are the classes",
        answer:
            "Each class runs for 60 minutes.",
    },
    {
        question: "What if my child is a beginner?",
        answer:
            "That’s fine. We have four different ability groups, from beginner to advanced, and your child will be assessed during their free trial class. ",
    },
    {
        question: "What should my child wear?",
        answer:
            "When you become a member, you will be directed to our online kit store to purchase your child’s uniform. Compulsory items include a T-shirt, shorts, and socks. However, if you’d like to book a trial, we suggest your child arrives in comfortable sportswear of their choice. Check if your chosen venue is indoor or outdoor, and plan accordingly.",
    },
    {
        question: "What footwear should my child wear?",
        answer:
            "Astro-turf trainers are more suitable for the surfaces we play on. Please ensure you do not attend any of our classes with studded boots, as this is prohibited at all venues.",
    },
    {
        question: "How can I book a free trial?",
        answer:
            "Head to our classes page and select your nearest venue to book a free trial. Or click the ‘free trial’ button at the bottom of this page.",
    },
    {
        question: "How many kids are in each class?",
        answer:
            "We only allow up to 20 kids in each class as we have a 1:10 coach-to-students policy. If more staff are on site, we may allow more students if the venue is big enough.",
    },
    {
        question: "What is a typical class like?",
        answer:
            "A typical class begins with small-sided games to warm kids up and get them excited for their lesson. Then we focus on the technical aspect, teaching core ball mastery skills to develop confidence. Students are then taught how to apply these skills boosting their quick decision-making skills in our tactical exercises. Finally, we wrap up the session back with a return to small-sided games where kids can put their skills to the test in a real-world environment.  ",
    },
    {
        question: "Who runs the classes?",
        answer:
            "We only recruit the best football coaches and then put them through detailed training so they can support your child. So rest assured that your child’s progress is in the right hands. Our Head Coaches are FA accredited, with the appropriate licences and checks to run classes. You can learn more about our team here.",
    },
    {
        question: "How much are your lessons after a trial session?",
       answer: "We have two membership plans available. You can find out more information about our prices here."
    },
      {
        question: "My child is quite shy. Should I bring them?",
       answer: "Yes! Our coaches are trained on how to integrate students into the class, especially during their first visit. We can’t always promise it’ll work, but we’ll give it our best!"
    },
];

const FrequentlyAskedQuestions = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="relative py-[100px]  bg-[#F9FAFB]"
         style={{ backgroundImage: `url(${TexturedBackground})` }}>
            <div className="container mx-auto max-w-[1100px]">
                {/* Heading */}
                <h2 className="text-center text-[#042C89] text-[48px] md:text-[56px] font-normal recline mb-6">
                   <span className="text-[#0DD180]">FAQs</span> About London Football Classes
                </h2>

                <p className="text-[#5F5F6D] md:max-w-[70%] mx-auto text-[20px] poppins text-center md:mt-0 mt-10 mb-14">
                    We get plenty of questions about our classes, so below are a selection of the most common, along with answers. If you can’t find what you’re looking for, please contact us at 020 7205 2723 or admin@sambasoccerschools.com.
                </p>

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
