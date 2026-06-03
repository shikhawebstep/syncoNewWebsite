import React, { useState } from "react";
import Faq from "../../../Common/Faq";

// Data array
const faqData = [
    {
        question: "What are football holiday camps?",
        answer:
            ["Football camps with Samba Soccer Schools provide children between 4 and 12 with fun, healthy, and engaging football activities lasting anywhere from 4 days to several weeks. They offer the perfect opportunity for children to improve their football skills based on our Brazilian methodology, develop their confidence, make new friends, and have a fantastic time while doing so",
                "Our football camps are grouped by ability, so whether your child is entirely new to football or has been playing for many years and just can’t get enough, we’ve got the perfect camp for them. Boys or girls - everybody is welcome at our football camps held at some of London’s premium venues."
            ],
        image: "/assets/campFaq1.png",
    },
    {
        question: "What do your soccer camps include?",
        answer:
            ["If your child loves the beautiful game, there’s no better place for them than a football camp with Samba Soccer Schools. ",
                "We base all of our expert coaching around the Brazilian way of playing football, which means flair, fun, and unforgettable skills to take back to the playground. We’ll teach",
                "them Neymar’s famous double step-over, Ronaldinho’s iconic elastico, and Courtinho’s incredible bending shots - you’ll be amazed at what children can do after just a few days’ practice.",
                "Our camps are about quickly improving skills and confidence, but they’re also about enjoying yourself. No two days are ever the same, and we build skills and techniques over several days that build towards our end-of-camp tournament, where your child can showcase their new abilities."],
        image: "/assets/campFaq2.png",
    },
    {
        question: "What is a typical day like?",
        answer: [
            "We’ve been doing this since 2008, so we’ve had plenty of time to see what works and what doesn’t to make sure everything is just right. We think it’s vital that children are having fun while learning new football skills and techniques, which is why we always mix up activities to ensure that everything feels fresh and exciting. ",
            "We always mix it up at Samba Soccer Schools camp, but here is an idea of what a typical day looks like. We don’t do the kind of camps where kids sit around doing nothing, we like to keep everybody active and on their toes at all times."],
        image: "/assets/campFaq3.png",
    },
    {
        question: "When and where do you run your camps? ",
        answer:
            ["All of our holiday camps take place across the London area and are held during each of the school holidays. ",
                "A football camp is a perfect way to keep children engaged, active, and learning during their time away from school while also providing a relaxed, fun environment every child needs to re-energise. "],

        image: "/assets/campFaq4.png",
        mainData: [

        ]
    },
    {
        question: "Who runs the football camps?",
        answer:
            ["Ensuring your child is in safe hands is our top priority, which is why our coaching staff are expertly trained and highly qualified. The football camp is led by one of our regional managers, who can be contacted regarding any issues that may arise, while each coach on-site holds a minimum Level 1 FA Coaching License and has first-aid training along with an up-to-date DBS certificate. ",
                "While certificates and safety training is vital, we know there’s much more to it. Every one of our coaches shares the same passion and energy about teaching Brazilian-style football, meaning entertaining classes, dedicated and vigorous coaching, support for every child, and broad smiles.  "],
        image: "/assets/campFaq5.png",
    },
];

const Qa = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="bg-white  faq py-20 md:px-4 px-8 lg:px-20">
            <div className="text-center mb-10 lg:max-w-[800px] m-auto p-2">
                <h3 className="text-3xl lg:text-4xl font-bold text-blue-900 recline">
                    Soccer Holiday Camps  <span className="text-[#00A6E3] recline "> FAQS</span>
                </h3>
                <p className="text-[#5F5F6D] mt-2">
                    You’ve probably got plenty of questions about summer camps with Samba Soccer Schools, so here are some answers to our most common questions. If you can’t find what you’re looking for, contact us at 020 72052723 or at <a className="underline" href="mailTo:admin@sambasoccerschools.com.">admin@sambasoccerschools.com.</a>
                </p>

            </div>

            <Faq faqData={faqData} activeIndex={activeIndex} setActiveIndex={setActiveIndex} buttonText={"Find A Camp"} color={"#00A6E3"} />
        </section>
    );
};

export default Qa;
