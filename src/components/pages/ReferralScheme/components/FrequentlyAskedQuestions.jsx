import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import TexturedBackground from "/assets/TexturedBackground.png";

const faqs = [
    {
        question: "How does the refer-a-friend scheme work?",
        answer:
            "Using the refer-a-friend scheme can earn your friends a free month’s membership at Samba Soccer Schools. When your friend makes their first booking, you will also receive a free month. It’s a win-win!",
    },
    {
        question: "How can I refer a friend?",
        answer:
            (
                <div className="space-y-4">
                    <p>
                        It’s super simple. There are two ways you can refer a friend:
                    </p>

                    <ol className="list-decimal mb-10 pl-5 space-y-3">
                        <li>
                            Share your link. This can be done via email, Facebook or WhatsApp. Alternatively, you can copy and paste the link.
                        </li>

                        <li>
                            Use your name. Your friend can type in your name when prompted during registration to claim their reward.
                        </li>
                    </ol>
                    <p>
                        <strong>Use your name</strong>
                    </p>
                    <p>Your friend can type in your name when prompted during registration to claim their reward.</p>
                </div>
            ),
    },
    {
        question: "Is there a limit to how many people I can recommend?",
        answer:
            "Not at all! The more people you invite the bigger the rewards you receive!",
    },
    {
        question: "How will I get my referral reward?",
        answer:
            "We’ll pause your subscription for one month and allow you to continue attending our classes. ",
    },
    {
        question: "My friend is not near our venue, do you have other centres?",
        answer:
            "Yes, we have multiple venues across London. Your friend can find their nearest venue here Alternatively, they can call us at 0207 2052723 or email us at admin@sambasoccerschools.com",
    },
    {
        question: "What if I've recommended people in the past?",
        answer:
            "Unfortunately, our referral program is only for new referrals as of October 2021. Prior recommendations are not eligible for the referral scheme.",
    },
    {
        question: "A friend has referred me by word of mouth, and I need to mention their name. Where do I do this?",
        answer:
            "When you’ve chosen your membership plan, you will need to go to the checkout page. Select ‘referral’ from the ‘How did you hear about us’ and enter your friend’s name here. Our customer support team will then be in touch with them to process the rewards.",
    },
    {
        question: "What if my friend signs up multiple children?",
        answer:
            "Each new customer would be treated as one referral irrespective of how many children are enrolled.",
    },
    {
        question: "Can my friend have a free trial?",
        answer:
            "Yes, this is absolutely fine. If, after the free trial, your friend chooses to go ahead with their membership, you will each be rewarded.",
    },
    {
        question: "What happens if the class is full?",
        answer: (
            <div className="space-y-4" >
                <p>
                    If you refer a friend, but there are no spaces available in a class, your friend will be placed on a waiting list. Should they choose to sign up once a place becomes available, you’ll both be able to claim the reward.
                </p>
                <p>What are the terms and conditions of this offer?</p>
            </div >
        )
    },
    {
        question: "What are the terms and conditions of this offer?",
        answer: (
            <div className="space-y-4">


                <ol className="list-decimal mb-10 pl-5 space-y-3">
                    <li>
                        The friend or ‘Referee’ should be a new customer who has not previously been a member of our soccer schools in the past.
                    </li>

                    <li>
                        To qualify for the incentive, the new booking must take place 7 days after the cooling-off period.
                    </li>
                    <li>In order to be applicable, the ‘Referee’ must quote the ‘Referrers’ full name via the online form.</li>
                    <li>Should a booking that is made via a recommendation be cancelled within 7 days, the offer will be deemed null and void.</li>
                    <li>This offer can only be redeemed within 7 days of the referee registering for a membership.</li>
                    <li>Samba Soccer Schools reserves the right to terminate, amend, or extend this promotion at any time.</li>
                    <li>This offer cannot be used in conjunction with any other offer.</li>
                </ol>

            </div>
        ),
    },
];

const FrequentlyAskedQuestions = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="relative py-[100px]  bg-[#F9FAFB]"
            style={{ backgroundImage: `url(${TexturedBackground})` }}>
            <div className="container mx-auto max-w-[1100px]">
                {/* Heading */}
                <h2 className="text-center text-[#042C89] text-[52px] md:text-[56px] font-normal recline mb-6">
                    Frequently Asked Questions
                </h2>

                <p className="text-[#5F5F6D] text-[20px] poppins text-center mb-14">
                    Here are the answers to some of our frequently asked questions.
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
