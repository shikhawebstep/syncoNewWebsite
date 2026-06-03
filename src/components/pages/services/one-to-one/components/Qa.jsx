import React, { useState } from "react";
import Faq from "../../../Common/Faq";

// Data array
const faqData = [
    {
        question: "What is 1 to 1 football coaching?",
        answer:
            [
                "Our 1-to-1 football coaching is our most intensive, vigorous, and rewarding way to improve a child’s footballing ability. It simply involves one child and one coach, meaning your child receives a level of attention and individual teaching that is impossible within team training sessions.",
                "It’s a bit like having your own personal trainer and the gym. Personal football training designed specifically for your child."
            ],
        image: "/assets/qa1.png",
    },
    {
        question: "What do your 1 on 1 football coaching lessons involve?",
        answer:
            [" Private 1-to-1 football coaching with Samba Soccer Schools is perfect for the budding academy prospect who needs to focus on specific points before a trial or complete novices who need a boost in ability and confidence. ",
                "Our personal tailored-made sessions are designed to fast-track a child’s development through a  targeted syllabus and close individual attention.  ",
                "Every child’s 1-to-1 coaching period starts with a detailed analysis of their game by an expert coach. This is then used to craft individual coaching sessions that focus on gaps within their game, as well as boosting overall confidence and establishing our trademark Brazilian way of playing."
            ],
        image: "/assets/qa2.png",
    },
    {
        question: "Physical Training",
        answer: [
            "We believe an essential part of any football coaching is high-intensity interval training (HIIT), and our private 1-to-1 coaching is no different. HIIT involves short bursts of intense exercise alternating with low-intensity recovery periods. HIIT has been shown to have numerous benefits, including burning more calories, reducing in blood sugar levels, heart rate and blood pressure, and improving aerobic and anaerobic performance. ",
            "When it comes to football, this kind of training is vital as it helps to promote overall physical fitness, agility, speed, balance, and coordination. All of our sessions include periods of HIIT, which, when combined with our focused approach to ball mastery, close control, flair, and Brazilian skills, creates a true all-around footballer.  "
        ],
        image: "/assets/qa3.png",
    },
    {
        question: "Who provides your 1-on-1 football coaching lessons?",
        answer:
            ["Only our most experienced coaches deliver our 1-to-1 football sessions. Each coach holds a minimum Level 1 FA Coaching License and has first-aid training along with an up-to-date DBS certificate. ",
                "Each session follows the same structure set out by Samba Soccer Schools to ensure continuity and uniformity, but the content is always tailored specifically to the child and adapted enough over time to keep them on their toes."
            ],
        image: "/assets/qa4.png",
    },
    {
        question: "Where and when do your one to one football coaching lessons take place?",
        answer:
            ["With our 1-to-1 football coaching lessons, we aim to make things as easy as possible by offering several flexible options:",],
        lists:
            ["One-hour classes can be scheduled around your needs wherever possible. ",
                "Sessions can usually be held in any location that’s convenient, be it a park, a local football pitch, or even in your garden. ",
                "Samba Soccer Schools is always expanding, and we do our best to cater to any 1-to-1 request within the London area."
            ],
        note: "*Please note that your child always needs to be accompanied during our lessons.",
        image: "/assets/qa5.png",
    },
];

const Qa = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="bg-white  faq md:py-20 md:px-4 px-8 lg:px-20 py-15 pb-20">
            <div className="text-center mb-10">
                <h3 style={{textAlign:'center'}} className="text-3xl lg:text-4xl font-bold text-blue-900 recline">
                    Let’s answer  <br className="block md:hidden"/>  your <span className="text-[#0DD180] recline">questions</span>
                </h3>
                <p className="text-[#5F5F6D] md:text-[16px] text-[15px] mt-2">
                    We know you’ve probably got lots of questions to ask about our 1-to-1 coaching classes.To <br className="md:block hidden"/> bmake things easy, we’ve gone ahead and answered the commonly asked:
                </p>

            </div>

            <Faq faqData={faqData} activeIndex={activeIndex} setActiveIndex={setActiveIndex}  buttonText={"Enquire Now"}/>
        </section>
    );
};

export default Qa;
