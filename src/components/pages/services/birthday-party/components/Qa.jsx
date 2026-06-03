import React, { useState } from "react";
import Faq from "../../../Common/Faq";

// Data array
const faqData = [
    {
        question: "What do your kids football birthday parties include?",
        answer:
            ["Brazilians are known for throwing incredible celebrations, and we’ve cherry-picked the best parts, turned up that samba beat, and added some expert football coaching to create a birthday party quite unlike your child has ever had.",
                "Our birthday parties are suitable for those aged 4-12 years old, and all abilities are welcome. We offer a range of challenges and competitions, so whether your child and their friends are complete football beginners or seasoned pros just waiting for that call-up to the Premier League, we’ve got the perfect birthday party activities to make the day extra special.   ",
                "A typical Samba Soccer birthday party includes the following:"],
        image: "/assets/bdayFaq1.png",
        
        lists: [
            "The most experienced and enthusiastic Samba Soccer coaches",
            "Samba music to bring the party to life",
            "Ball mastery skill workshops",
            "Fun games with and without the ball",
            "A football tournament",
            "Fun challenges"
        ],
        answer2: ["Want to see a real example? Check out a surprise birthday party we ran for one of our students, Liam (aka “Mini Ronaldo”)"]
    },
    {
        question: "Where do your children’s football parties take place?",
        answer: [
            "We want to make your child’s birthday party as convenient as possible - for you and those coming to it. Parties can be held in your local park or a large back garden, or we’ll be happy to suggest a few places nearby. ",
            "We currently offer our football party packages across the London area, subject to coach availability. We’ll do our utmost to make it work for you and create a day that’s as special as possible. "
        ],
        image: "/assets/bdayFaq2.png",
        
    },
    {
        question: "Who will run my child’s football birthday party?",
        answer: ["We know those running a football birthday party can make all the difference, so we only bring the very best. We want your child to have a truly unforgettable experience, and that all begins with coaches who are enthusiastic, passionate about the Brazilian style of football, and above all, great fun.  ",
            "Safety, security, and experience are hugely important to us, which is why each of our coaches holds a minimum Level 1 FA Coaching License and has first-aid training along with an up-to-date DBS certificate."],
        image: "/assets/bdayFaq3.png",
    },

];

const Qa = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="bg-white  faq py-20 md:px-4 px-8 lg:px-20">
            <div className="md:text-center mb-10 lg:max-w-[780px] m-auto ">
                <h3 className="text-3xl lg:text-4xl  font-bold text-blue-900 recline">
                    Football Birthday Parties<span className="text-[#00A6E3] recline"> FAQs</span>
                </h3>
                <p className=" md:block hidden  text-[#5F5F6D] mt-2">
                    Football birthday parties aren’t exactly common - yet - so you’ve probably got a few <br />questions. Here are some answers to the most common we get, but if you have any <br /> more queries, feel free to get in touch.                </p>
                <p className=" md:hidden block text-[#5F5F6D] mt-2">We know you’ve probably got lots of questions to ask about your child’s football birthday party.To make thing easy, we’ve gone ahead and answered the common questions.</p>
            </div>

            <Faq faqData={faqData} activeIndex={activeIndex} setActiveIndex={setActiveIndex} buttonText={"Enquire Today"} color={"#00A6E3"} />
        </section>
    );
};

export default Qa;
