import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import TexturedBackground from "/assets/TexturedBackground.png";

const faqs = [
    {
        question: "How much are the uniforms?",
        answer:
            (
        <>
            You can find the price of each uniform on our official online shop{" "}
            <a
                href="/about/uniform"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[#5F5F6D]   hover:text-[#000] "
            >
                here
            </a>
        </>
    ),
    },
    {
        question: "Do we get a discount for the uniform?",
        answer:
            "Yes, absolutely. When you become a member of our soccer schools, you are entitled to different discounts depending on the package you purchased. More details can be found here",
    },
    {
        question: "What sizes are available?",
        answer:
            "You can view our size guide here",
    },
    {
        question: "Where can I purchase my child's uniform?",
        answer:
            "Each uniform order must be placed on our online shop. You can purchase your child’s uniform directly from the official online shop here.",
    },
    {
        question: "How long will it take to receive my order?",
        answer:
            "It usually takes between 3-4 days to receive your order. The kit will be sent directly to your home address.",
    },
    {
        question: "What if my child's kit does not fit?",
        answer:
            "If you order the wrong size, you can return the kit and exchange it for the correct size.",
    },
    {
        question: "Which items do I need to buy?",
        answer:
            "The three items listed above for each age group are compulsory. You also have the option to purchase extras as listed on the official online shop. Items marked with a ‘Essential Item’ label for your age group on the online shop must be purchased.",
    },
    {
        question: "Does my child have to wear the uniform?",
        answer:
            "Yes, it is compulsory for each child to wear our uniform during their classes.",
    },
    {
        question: "Why do children have to wear uniform to their classes?",
       answer: (
    <div className="space-y-4">
      <p>
        In our years of operation, we have found the following benefits of
        wearing the uniform:
      </p>

      <ol className="list-decimal pl-5 space-y-3">
        <li>
          <strong>Discipline:</strong> The lesson starts the moment a child
          puts on their uniform. We have a set of values we teach in our
          classes. The kit represents those values and can change children’s
          state of mind the moment they wear it.
        </li>

        <li>
          <strong>Improved behaviour:</strong> It is reported that when
          children wear a uniform, schools often report improved discipline
          and concentration. Once they put it on, their purpose is to work
          hard in the lessons. A sense of professionalism develops within
          each child.
        </li>

        <li>
          <strong>A feeling of equality:</strong> The kit brings everyone to
          the same platform, no matter their background, race, gender or
          class and thus inculcating a feeling of equality.
        </li>

        <li>
          <strong>A sense of belonging:</strong> Our uniform plays a key role
          in promoting pride, self-confidence, and a feeling of belonging
          within the group. This can be particularly helpful for those
          students who feel shy.
        </li>

        <li>
          <strong>Safety:</strong> With their football colours on, children
          can immediately be recognised at a distance as a member of that
          soccer school.
        </li>

        <li>
          <strong>A sense of pride:</strong> What child doesn’t like a new
          football kit? Football kits promote a sense of pride for children.
        </li>
      </ol>
    </div>
  ),
    },
];

const FrequentlyAskedQuestions = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="relative md:py-[100px] py-10  bg-[#F9FAFB]"
         style={{ backgroundImage: `url(${TexturedBackground})` }}>
            <div className="container mx-auto max-w-[1100px]">
                {/* Heading */}
                <h2 className="text-center text-[#0DD180] text-[50px] md:text-[56px] font-normal recline pb-6">
                    Frequently <br className="block md:hidden" />
                    Asked Questions
                </h2>

                <p className="text-[#5F5F6D] md:text-[20px] poppins text-center mb-14">
                    Below are answers to a variety of frequently asked questions that we
                    have received from our customers.
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
