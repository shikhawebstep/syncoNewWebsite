import React, { useState } from "react";
import Faq from "../components/Faq";

// Data array
const faqData = [
    {
        question: "Phase 1 - Phone Interview",
        answer:
            ["Once you’ve filled in the form at the bottom of this page, and provided you meet the required criteria, a member of our recruitment team will contact you within 48 hours to set up a telephone interview.  "],
        answer2: ["This is a reasonably informal chat to get to know you a little better, and we will ask you questions about your coaching experience, playing experience, qualifications and availability. The telephone interview is also the perfect time to ask any questions you might have, either about the rest of the recruitment process or the position itself. So if there’s anything on your mind, feel free to ask. This is about you getting to know us just as much as vice versa. "],
        image: "/assets/img-phone-interview.png",
    },
    {
        question: "Phase 2 - Coaching Demonstration",
        answer:
            ["After the phone interview, you will be invited to a coaching session with children signed up with Samba Soccer Schools and asked to take the session yourself. "],
            answer2: ["We will provide you with a complete lesson plan for the session beforehand so you can prepare and plan ahead of time. The key areas we look for are your ability to communicate clearly, your tone and enthusiasm and your ability to demonstrate skills. "],

        image: "/assets/img-phase-1.png",
    },
    // {
    //     question: "Expert Guidance ",
    //     answer: ["There are many coaching schools where you simply turn up and get taught without having the kind of expert, nurturing guidance we pride ourselves on. Developing coaching skills in the detailed and thorough way it should be takes time and usually involves plenty of questions. Theoretical teaching is all well and good, but without the extra mile that comes with explaining carefully and going over it again when needed, learning to coach will always be more of a struggle. "],
    //     image: "/assets/img-expert-guidance.png",
    // },

];

const Qa = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className=" grey-bg faq py-20 px-4 lg:px-20">
            <div className="text-center mb-10 px-4 md:px-0">
                <h3 style={{textAlign:'center'}} className="text-3xl lg:text-4xl font-bold text-blue-900 recline">
                    The process
                </h3>
                <p className="text-[#5F5F6D] mt-2 font-medium md:pb-5">
                    Working for Samba Soccer Schools involves passing through a two-stage recruitment process.                 </p>

            </div>

            <Faq faqData={faqData} activeIndex={activeIndex} setActiveIndex={setActiveIndex} buttonText={"Apply Today"} align={'top'} />
        </section>
    );
};

export default Qa;
