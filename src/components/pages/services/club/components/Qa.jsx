import React, { useState } from "react";
import Faq from "../../../Common/Faq";

// Data array
const faqData = [
    {
        question: "How much do you charge to join the club?",
        answer:
            ["We aim to keep costs associated with Samba Soccer FC to a bare minimum, mainly covering administrative fees, coaching and match day costs, and insurance. ",
                "This includes a £180 joining fee, a one-off £70 kit fee, and a monthly £49 membership fee. "
            ],

        image: "/assets/clubfaq1.png",
    },
    {
        question: "How are the charges broken down?",
        answer:
            [],
        olList: '1. The initial joining fee of £180 covers the following:',
        ulList: [
            "Membership of London County Saturday Youth League",
            "18 matchday costs (18 throughout the season priced at £10 each)",
            "Matchday referee fees",
            "All required equipment ",
            "Personal accident insurance cover",
            "Public liability insurance cover",
            "FA Team affiliation fee",],
        olList2: '2. The kit fee of £70 covers the following:',
        ulList2: [
            "T-shirt",
            "Shorts",
            "Pair of socks",
            "Rain jacket",
            "Tracksuit joggers",
        ],
        ulList3: [
            "36 training sessions through the year (priced at £14.99 each)",
            "Pitch hire fees",
            "Coach fees",
        ],
        olList3: '3. The monthly fee of £49 covers the following:',
        image: "/assets/clubfaq2.png",
    },
    {
        question: "Where and when does the training take place?",
        answer: ["Training sessions and matches are held at various locations and times around London. For more information, please contact us at 020 7205 2723 or email admin@sambasoccerschools.com. "],
        image: "/assets/clubfaq3.png",
    },
    {
        question: "Where and when do the matches take place?",
        answer:
            ["Unfortunately, places are limited, and we can only offer spots on the team for those who excel in our open trials. Once trials have been held, our coaches will handpick the best 12 players, who will be invited to join Samba Soccer FC. ",
                "To reserve a spot on one of our trials, fill out the enquiry form, and one of our team members will be in touch."
            ],
        image: "/assets/clubfaq4.png",
    },
    {
        question: "How do I join?",
        answer:
            ["With our 1-to-1 football coaching lessons, we aim to make things as easy as possible by offering several flexible options:",],
        lists:
            ["One-hour classes can be scheduled around your needs wherever possible. ",
                "Sessions can usually be held in any location that’s convenient, be it a park, a local football pitch, or even in your garden. ",
                "Samba Soccer Schools is always expanding, and we do our best to cater to any 1-to-1 request within the London area."
            ],
        note: "*Please note that your child always needs to be accompanied during our lessons.",
        image: "/assets/clubfaq4.png",
    },
];

const Qa = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className=" grey-bg faq md:py-20 py-15 px-4 lg:px-20">
            <div className="text-center mb-10">
                <h3 style={{ textAlign: 'center' }} className="text-3xl lg:text-4xl font-bold text-blue-900 recline">
                    Samba Soccer FC <br className="block md:hidden" /> <span className="text-[#0DD180] font-medium  permanent-marker">FAQs</span>
                </h3>
                <p className="text-[#5F5F6D] hidden md:block mt-2 font-medium">
                    Since Samba Soccer FC is brand new, you’ll probably have a few questions if your <br /> child is interested in coming to one of our trial sessions.
                </p>
                <p className="text-[#5F5F6D] text-[17px] md:hidden block mt-2 font-medium">
                    You’ll probably have a few questions if your child is interested in coming to a trial session for Samba Soccer FC.                 </p>

            </div>

            <Faq faqData={faqData} activeIndex={activeIndex} setActiveIndex={setActiveIndex} buttonText={"Enquire Now"} btnColor={'#0DD180'} />
        </section>
    );
};

export default Qa;
