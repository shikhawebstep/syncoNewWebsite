import React, { useState } from "react";
import Faq from "../../../Common/Faq";

// Data array
const faqData = [
  {
    question: "Where and When Do Your Weekly Classes Take Place?",
    answer:
      [
        "Our weekly football classes take place throughout the academic year at some of the finest indoor and outdoor venues across the London area. This means your child receives 42 weekly classes every year and with nearly 50 separate locations, there’s sure to be something close by. Safety and comfort are our highest priorities, meaning you can sit back and watch your child having the time of their life.",
        "Each venue includes classes for children aged 4 to 12, but are often held at different times and on different days. Click below to find your closest class."
      ],
    image: "/assets/img-faq-1.png",
  },
  {
    question: "What is Brazilian football & What do you teach in the lessons?",
    answer:
      ["Brazilian football combines passion, flair, and fun with a style of play often referred to as ‘Ginga Football’ that has brought the country a record five World Cups. Ginga translates literally as ‘to sway,’ and if you ever saw Ronaldinho dance into the penalty area like he was on a samba dancefloor, you’ll know what we mean. ",
        "Our classes incorporate all of these elements while placing a strong emphasis on close control and skills development. We aim to make our classes as fun as possible but also believe in developing technique and skills while building confidence and teaching about the Brazilian side of the beautiful game. "
      ],
    image: "/assets/img-faq-2.png",
  },
  {
    question: "Can my child attend weekly classes even if they have no experience?",
    answer:
      ["We welcome children of all abilities, and our four-ability level system means there is a place for everybody at Samba Soccer Schools. Our beginner level teaches children the basics, such as dribbling and shooting, giving them a solid foundation to build on from there. "],
    image: "/assets/img-faq-3.png",
  },
  {
    question: "Who runs your weekly football classes?",
    answer:
      ["Our weekly football classes are run by our qualified coaches who have all been through our extensive coaching education programme, which requires each of them to sit an exam and gain the appropriate qualifications. Each coach holds a minimum Level 1 FA Coaching License and has first-aid training along with an up-to-date DBS certificate. ",
        "Our football classes have a 1:10 coach-to-student ratio, meaning your child receives personalised coaching, which isn’t always the case with other football classes."
      ],
    image: "/assets/img-faq-4.png",
  },
  {
    question: "How much are your weekly football classes?",
    answer:
      ["We know how important it is to find payment options that suit your situation. At Samba Soccer Schools, we run a membership programme for our weekly football classes - offering several flexible options, with a 12-month, 6-month, and rolling Flexi membership plan available to all our customers.",
        "Our membership fees are spread over equal monthly instalments to make it more affordable and cost-efficient for you.",
        "Click below to find out more."
      ],
    image: "/assets/img-faq-5.png",
  },
];

const QA = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-white  faq md:py-20 md:px-4 px-8 lg:px-20 py-15 pb-20">
      <div className="text-center mb-10">
        <h3 className="text-3xl lg:text-4xl font-bold text-blue-900 recline">
          Let’s answer <br className="block md:hidden"/> your <span className="text-[#0DD180] recline">questions</span>
        </h3>
        <p className="text-[#5F5F6D] mt-2">
          {activeIndex !== 0 ? (
            <>
              "We know you’ve probably got lots of questions to ask about our weekly football classes. <br className="md:block hidden" /> To make things easy, we’ve gone ahead and answered the most common questions."</>
          ) : (
            <>
              You’ve probably got a few questions, so here are the answers to some of the most{" "}
              <br className="md:block hidden" />
              common we get. If you can’t find what you’re looking for, please give us a call, and we’ll be{" "}
              <br className="md:block hidden" />
              more than happy to answer any queries you might have.
            </>
          )}
        </p>

      </div>

     <Faq faqData={faqData} activeIndex={activeIndex} setActiveIndex={setActiveIndex} buttonText={"Find a class"} />
    </section>
  );
};

export default QA;
