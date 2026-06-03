import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import TexturedBackground from "/assets/TexturedBackground.png";

const faqs = [
    {
        question: "How long is each football class?",
        answer:
            "Each class runs for 60 minutes.",
    },
    {
        question: "What if my child is a beginner?",
        answer:
            "That’s totally fine. We have four different ability groups from beginner to advanced.",
    },
    {
        question: "What should my child wear?",
        answer:
            "When you become a member, we provide your child with a full uniform including t-shirt, shorts and socks. However, if you’d like to book a trial, we suggest your child arrives in comfortable sports wear. Check if your chosen venue is indoor or outdoor and plan accordingly.",
    },
    {
        question: "What footwear should my child wear?",
        answer:
            "Astro-turf trainers are more suitable for the surfaces we play on. Please make sure you do not attend any of our classes with studded boots as this is not permitted at any of the venues.",
    },
    {
        question: "How can I book a free trial?",
        answer:
            "Head over to our classes page and select your nearest venue to book a free trial. Or click the ‘free trial’ button at the bottom of this page.",
    },
    {
        question: "How many kids are in each class?",
        answer:
            "We only allow up to 20 kids in each class as we have a 1:10 coach to students policy. If there are more staff on site, we may allow more students in providing the venue is big enough.",
    },
    {
        question: "Who runs the classes?",
        answer:
            "We only recruit the best football coaches in London and then put them through detailed training so they can support your child. So rest assured that your child’s progress is in the right hands. Our coaches are FA accredited and have the appropriate licenses and checks to run classes. You can learn more about our team here",
    },
    {
        question: "How much are your lessons after a trial session?",
        answer:
            "We have two membership plans available. The 12 month membership plan starts at £34.99 per month. The 6 month plan starts at £42.99 per month. You can find out more information about our prices here",
    },
    {
        question: "My child is quite shy. Should I bring them?",
       answer: "Yes! Our coaches are trained on how to integrate students into the class, especially during their first visit. We can’t always promise it’ll work, but we’ll definitely give it our best go!"
    },
];

const FrequentlyAskedQuestions = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="relative py-[100px]  bg-[#fff]"
         >
            <div className="container mx-auto max-w-[1100px]">
                {/* Heading */}
                <h2 className="text-center text-[48px] text-[#042C89] md:text-[48px] font-normal recline mb-6">
                  <span className="text-[#0DD180] ">FAQs</span>  About London Football Classes
                </h2>

                <p className="text-[#5F5F6D] text-[20px] poppins text-center mb-14">
                    Below are answers to a variety of frequently asked questions that we have received from our customers.
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
