import React, { useState } from "react";
import Faq from "./Faq";

// Data array
const faqData = [
    {
        question: "Experienced coaches",
        answer:
            [
               "We can talk about our Brazilian methodology all day, but unless we have the best-quality coaches around, it just never works. ",
                "With this in mind, we have established a strict Coach Recruitment process to cherry-pick only the outstanding candidates and have developed our own Coach Education programme, which requires all coaches to sit an exam.",
                "This helps our coaches to perform at the highest level and ensures a consistent and safe football experience for your child. Click below to learn more about our team."
            ],
        image: "/assets/img-reason-1.png",
    },
    {
        question: "Premium facilities ",
        answer:
            [" We want everybody to feel safe and secure, so we only use premium indoor and outdoor facilities across the London area that allow you to sit back and watch your child having the time of their life in peace. ",
                "During the cold winter months, all our classes are held indoors, meaning your child won’t miss a class, whatever the weather throws at us. ",
            ],
        image: "/assets/img-reason-2.png",
    },
    {
        question: "Coaching Syllabus",
        answer: [
            "Successful coaching and football development aren’t built on random activities and exercises. All of our classes follow a dedicated curriculum that has been moulded over ten years to find the perfect balance between fun and education through our unique Brazilian methodology.  ",
            "Each class comes with clear and achievable goals, usually a core skill or 1v1 trick that is carefully taught and practised until it becomes second nature. We finish every session with small games, allowing each child to showcase what they’ve learnt that day. "
        ],
        image: "/assets/img-reason-3.png",
    },
    {
        question: "Value For Money",
        answer:
            ["We understand that extras like children’s football training can sometimes seem like expenses too far, so we always strive to keep our prices affordable while maintaining our exceptionally high standards. ",
                "Samba Soccer Schools always strives to provide children with the best possible coaching and value for money for the parents. We don’t ask for a hefty upfront fee as many schools do. Instead, our memberships are spread over smaller monthly segments, making the whole process more cost-efficient and convenient."
            ],
        image: "/assets/img-reason-4.png",
    }
];

const Qa = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="bg-white  faq py-20 md:px-4 px-8 lg:px-20">
            <div className="text-center mb-10">
                <h3 className="text-3xl lg:text-4xl font-bold text-blue-900 recline">
                    Why choose us?
                </h3>
                <p className="text-[#5F5F6D] mt-2">
                    Still need some convincing? Here are four reasons to choose Samba Soccer School:    
                                </p>

            </div>

            <Faq faqData={faqData} activeIndex={activeIndex} setActiveIndex={setActiveIndex} buttonText={"Find a class"} />
        </section>
    );
};

export default Qa;
