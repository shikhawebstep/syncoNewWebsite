import React, { useState } from "react";
import Faq from "../../../Common/Faq";

// Data array
const faqData = [
    {
        title: 'Territory mapping of your area',
        question: "Territory mapping of your area",
        answer:
            [
                "Territory mapping is a crucial component of what we offer as it provides you with a clear insight into what region you will have exclusive access to. Through our vigorous mapping plans and data analysis, we identify your region and provide you with key information such as the number of children aged 4-12 in your area, average household income and postcode hotspots based on data from the 2021 census. ",
                "We want to give each Samba Soccer Schools franchise the best chance of success, and using detailed analytics is the best way to do it. This data gives you an excellent prediction of the market penetration opportunity based on your region. Using our systems and methods, we’ll also be able to give you an honest idea of how much you can comfortably earn in your area. ",
                "While it’s impossible to claim that all regions share the same socio-economic layout, all of our territories have been defined with baseline measures. Some may be slightly bigger than others, but we’ve poured time and money into this mapping system to ensure that regions are as uniform as possible regarding population numbers and opportunities for success. ",
                "We don’t want you to constantly look over your shoulder and worry about other Samba Soccer Schools popping up close by, so we ring-fence your area and keep it that way. Once you’re set-up, we guarantee you’ll never see another Samba Soccer franchise appear in your region."],

    },
    {
        title: 'Building a case for your territory ',
        question: "Building a case for your territory ",
        answer:
            [
                "Of course, establishing a territory is just the start. During the onboarding phase, our expert marketing team will provide a Strengths, Weaknesses, Opportunities, and Threats (SWOT) Analysis, which includes research on all the available venues, broken down into hotspot and non-hotspot areas. ",
                "We’ll also compile a comprehensive assessment of competition in the area and work with you to gauge the saturation level and how to address it. We don’t want anybody to fail, which is why we believe honesty and clarity are vital at this stage. Having several strong competitors in your area isn’t necessarily a recipe for disaster, but it’s a factor that needs to be front and centre as we move forward.",
                "Finally, we’ll suggest pricing for your membership plans based on the average household income and our competitor research. We’re sure that we don’t need to tell you, but this is pivotal for the entire launch. Go too high, and you turn off potential customers, go too low, and you miss out on a sizable chunk of potential revenue."],
    },
    {
        title: 'Marketing',
        question: "Marketing",
        answer: [
            "Marketing is a vital component of any business in the modern age. Word of mouth is great and undoubtedly helpful, but you need to reach a broader audience to grow your business quickly and establish a solid base from which to thrive from.",
            "This is an area where we’ve had plenty of practice over the years. Getting the proper marketing to the right people usually takes time and involves plenty of frustrating trial and error. Luckily for you, we’ve already done the painful part and have developed a winning formula for lead-generation ad campaigns ready for you to use from day 1. ",
            "Whether through Facebook or Google ads, we’ll set you up quickly and allow you to begin rolling out your campaign immediately. Ongoing online marketing management will incur an additional cost, but we’ve made this affordable and in line with your growth as a business because we recognise how important this is for your continued and consistent growth.",

        ],


    },
    {
        title: 'Financial planning',
        question: "Financial planning",
        answer:
            [

                "Having a clear and concise road map with a sound financial plan can dramatically lower the nerves when starting out and boost chances of success. Mapping out the various stages while including achievable targets and measurable goals creates a vision of where your business is heading and we usually find it’s here where the business feels like it really comes alive. Don’t think about where you are now, think about where you want to be in five years. ",
                "We’ll set out this road map for you using our years of experience to establish a realistic yet vigorous plan for your franchise’s success. We will also go through it carefully with you to ensure that you have complete confidence in the project while having the opportunity to make alterations or ask questions. ",
                "This map sets out business models and potential earnings using guidelines based on average results in the past, giving a clear prediction of what’s possible through hard work and dedication. However, these are just estimates. We see franchises blow these predictions out of the water all the time by going above and beyond what we recommend. How far you want to go is all up to you.  ",
                "Finally, we’ll integrate essential software into your business so you can apply best practices for bookkeeping and financial compliance. Nobody likes doing that side of the business, but to stay on the right side of the law, it is important. We make it as easy as possible so that you can get on with the fun side.  ",
            ],

    },
    {
        title: 'Synco',
        question: "Synco ",
        answer:
            [
                "Every good business is built on solid foundations, and with Samba Soccer Schools, our bespoke CRM package, Synco, is just that. Synco is a true juggernaut that combines every aspect needed to run a Samba Soccer franchise all under one roof. ",
                "It comprises four different areas; a website booking system (for customers), Parent Connect Account (for customers), Coach Pro (for coaches), and the main Synco section (for franchisees). You’ll find everything you need here, from detailed business analytics of classes, venues, and customers, to our SSS syllabus and customer feedback. This CRM is a beast, but don’t worry; we’ll provide comprehensive training so you don’t feel like you’ve just been dropped in the deep end. ",
                "Synco has completely changed our operations, slashing administration time by around 80% and reducing franchisee stress levels by infinitely more. You can try and run a business without it, but trust us; you won’t want to. ",
            ],


    },
    {
        title: 'Sales/ Customer service and cancellations',
        question: "Sales/ Customer service and cancellations",
        answer:
            [
                "Getting customers is one thing; keeping them and establishing them as loyal customers who return year after year is quite another. The sales and customer service aspect of our business is often painfully overlooked, but we can’t stress their importance enough. ",
                "We’ll give you all the training you need to ensure you deliver services to the highest level. Our experienced and professional team will walk you through the phone scripts we deploy and the proven steps we carry out to ensure high levels of customer satisfaction.",
                "Running a successful business involves frequently avoiding and sometimes climbing out of countless pitfalls. Usually, you have to learn these on your own, and needless to say, it can be a painful learning curve. While we can’t prepare you for every imaginable possibility or complaint, we can arm you with our comprehensive knowledge and tools to withstand (almost) everything the business world can throw at you.",
            ],


    },
    {
        title: ' how to deliver classes',
        question: "How to deliver classes",
        answer:
            [
                "Using the Samba Soccer Schools name and brand isn’t just about slapping on the badge. We’ve perfected our teaching method over more than ten years, and it’s in our best interests that you provide the same level of service associated with Samba Soccer Schools from the moment you open.",
                "We’ll schedule a day for all pitch-related training so new franchisees can see precisely how we work. You’ll be guided through a typical session, our coaching methodology and our coaching curriculum, led by our technical coaching director, who will be on hand to answer any questions you may have.",
                "This will be accompanied by live sessions running in tandem with the training so you can see exactly how these principles work. We believe you only really get a sense of our system until you do it for yourself, which is why you’ll also take a few exercises with our students so we can give you feedback."
            ],


    },
    {
        title: 'Ongoing consultancy ',
        question: "Ongoing consultancy ",
        answer:
            ["Franchising is all about balance. We don’t want to leave you high and dry just as you get started, but we also don’t want to molly-cuddle you for too long or act as some intrusive overlord who won’t leave you alone. ",
                "The first few months are usually tricky, so we’ll remain hands-on during this period. However, once you feel confident enough for us to begin stepping back, we’ll do exactly that. We’ll continue our consultancy in a structured manner through video calls/ or in-person meetings every six weeks, allowing you to raise any issues you might be having, but after Year 2, this will reduce to once every term (3 times per year).",
                "This staggered withdrawal gives you the confidence to run a business independently without pulling the rug out from under you before you’re ready. We want all of our franchisees to feel assured and supported for as long as needed, so we’ll always be on hand to answer any questions, whether on day one or day 1001."],

    },
];

const Qa = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="grey-bg faq py-20 px-4 lg:px-20">
            <div className="text-center mb-10">
                <div className="m-auto max-w-[150px] mb-5">
                    <img src="/assets/locate.png" alt="" />

                </div>
                <h4 className="text-3xl lg:text-4xl recline font-bold text-blue-900 recline">
                    Our franchise support involves <br /> the following:
                </h4>
            </div>

            <div className="lg:flex gap-4 lg:max-w-[1200px] mt-5 m-auto lg:space-x-10">
                {/* Questions */}
                <div className="lg:w-1/3 lg:max-w-[406px] space-y-4 mb-6 lg:mb-0">
                    {faqData.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-300 poppins
                ${activeIndex === index
                                    ? "bg-[#0DD180] activeTab text-white font-semibold text-[18px]"
                                    : "bg-[#0DD18026] text-[#5F5F6D] font-medium text-[16px]"
                                }`}
                        >
                            {item.question}
                        </button>
                    ))}
                </div>

                {/* Answer */}
                <div className="lg:w-2/3 acc md:pr-15">
                    <div>
                        {faqData[activeIndex].title && (
                            <h5 className="recline font-bold text-[#00A6E3] pb-4 recline">
                                {faqData[activeIndex].title}
                            </h5>
                        )}
                        {faqData[activeIndex].answer.map((paragraph, idx) => (
                            <p
                                key={idx}
                                className="text-[#5F5F6D] text-[14px] mb-5 tracking-[0.2px] leading-[30px]"
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    <div className="mt-8">
                        <button className="text-white px-6 bg-[#0DD180] py-3 rounded-3xl poppins font-bold">
                            Apply Today
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qa;
