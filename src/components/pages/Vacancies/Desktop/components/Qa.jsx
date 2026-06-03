import React, { useState } from "react";
import Faq from "../components/Faq";

// Data array
const faqData = [
    {
        question: "Experience",
        answer:
            ["When it comes to coaching, experience counts for everything. Samba Soccer Schools has been operating since 2009, and in that time, we’ve explored and tweaked countless coaching methods and models before arriving at today’s Coaching Pathway course. We’ve fine-tuned and ironed out the wrinkles to create a comprehensive coaching syllabus delivered with confidence and passion.    "],

        image: "/assets/img-why-experience.png",
    },
    {
        question: "The SSS Movement",
        answer:
            ["We’re not just any old football school. What makes Samba Soccer Schools so unique and popular is our ability to deliver structured classes that focus on careful progression with the kind of show-stopping entertainment the Brazilians are known for. We believe children should love playing football, and with a thumping samba beat in the background, and a spotlight on core and 1v1 skills, kids can’t get enough of our classes. "],
       
        image: "/assets/img-the-sss-movement.png",
    },
    {
        question: "Expert Guidance ",
        answer: ["There are many coaching schools where you simply turn up and get taught without having the kind of expert, nurturing guidance we pride ourselves on. Developing coaching skills in the detailed and thorough way it should be takes time and usually involves plenty of questions. Theoretical teaching is all well and good, but without the extra mile that comes with explaining carefully and going over it again when needed, learning to coach will always be more of a struggle. "],
        image: "/assets/img-expert-guidance.png",
    },

];

const Qa = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className=" grey-bg faq md:py-20 py-10 px-4 lg:px-20">
            <div className="text-center mb-10 px-3 md:px-0">
                <h2 className="text-[40px] lg:text-[55px] font-bold text-blue-900 recline">
                    Why should you <span className="text-[#0DD180]  font-medium permanent-marker">Learn</span> From us  ?
                </h2>
                <p className="text-[#5F5F6D] mt-2 font-medium">
                    With our industry experience, we are confident we can help you become an outstanding coach <br className="hidden md:block" /> who will thrive in the football world
                </p>

            </div>

            <div className="px-3 md:px-0">
                <Faq faqData={faqData} activeIndex={activeIndex} setActiveIndex={setActiveIndex} buttonText={"Apply Today"} />
            </div>
        </section>
    );
};

export default Qa;
