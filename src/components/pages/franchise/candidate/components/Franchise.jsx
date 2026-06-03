import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const qualities = [
    {
        title: "Passion for Football",
        description:"A genuine love for football is at the heart of what we do. Our ideal franchisee shares our enthusiasm for the beautiful game and embraces the Brazilian style of football that sets us apart. Your passion must create an authentic and engaging experience for our students, fostering a lifelong love for football.",
        iconColor: "text-[#0DD180]",
    },
    {
        title: "Business Acumen",
        description:"Running a successful franchise requires a solid understanding of business principles. From financial management to marketing strategies and day-to-day operations, your business acumen will drive the growth and sustainability of your franchise. If you already have it, great, if not, don’t worry, we have over a decade’s worth of experience and are here to help you develop these core skills.",
        iconColor: "text-[#00A6E3]",
    },
    {
        title: "Leadership Skills",
        description:"As a franchisee, you’ll need to be a leader. Your ability to motivate and lead a team, including coaches and staff, will help to shape a positive and supportive environment where students thrive.",
        iconColor: "text-[#0DD180]",
    },
    {
        title: "Excellent Communication",
        description:"Effective communication is the cornerstone of success. You’ll interact with students, parents, and staff while promoting our brand within the local community. Clear communication ensures seamless operations and fosters connections.",
        iconColor: "text-[#00A6E3]",
    },
    {
        title: "Organisational Skills",
        description:"Managing classes, schedules, events, and administrative tasks requires effective organisation and time management. Our purpose-built CRM software has dramatically reduced administration time, meaning more hours dedicated to the actual business, but there will still be plenty to do. Your ability to keep things running smoothly is imperative for providing a rewarding experience for students and parents alike.",
        iconColor: "text-[#1E7BC8]",
    },
    {
        title: "Team Player",
        description:
            "Collaboration is vital to our collective success. Engaging with fellow franchisees and the franchisor to share best practices and promote the brand together is in everybody’s best interest and can elevate the Samba Soccer Schools community while increasing revenue across the board.",
        iconColor: "text-[#0DD180]",
    },
    {
        title: "Financial Stability",
        description:
            "Investing in the franchise and sustaining your business during its early stages is fundamental. Financial stability empowers you to focus on what truly matters – nurturing young football enthusiasts - while instability leads to a fractured working environment, customer uncertainty, and an inevitable loss of business.",
        iconColor: "text-[#1E7BC8]",
    },
    {
        title: "Alignment with Brand Values",
        description:
            "Our core values and mission revolve around building children’s confidence and skills through the joy of football. Your alignment with these values contributes to the positive impact we have on our students.",
        iconColor: "text-[#0DD180]",
    },
    {
        title: "Resilience",
        description:"Business landscapes evolve, and challenges arise. Your resilience, ability to adapt, and learn from setbacks will guide your journey to success. Franchising with Samba Soccer Schools gives you a significant leg up, but nothing comes easy. Starting a new business requires some mental, perseverance, and flexibility to survive.",
        iconColor: "text-[#0DD180]",
    },
    {
        title: "Passion for Coaching Kids Grassroots Football:",
        description:"Fostering a love for football among young children is central to our mission. Your genuine enthusiasm for coaching and empowering these young athletes will shape their positive and impactful learning experience. We understand that this is a business built on profit, but this is also about carefully nurturing abilities, helping children grow up well, and empowering them to succeed.",
        iconColor: "text-[#00A6E3]",
    },
    {
        title: "Strong Work Ethic",
        description:"Building and maintaining a thriving franchise requires dedication. Your unwavering commitment to putting in the time and effort needed is the driving force behind your achievements.",
        iconColor: "text-[#0DD180]",
    },
    {
        title: "Receptive to Feedback",
        description:"Continuous improvement is a shared goal. Embrace feedback from students, parents, coaches, and the franchisor, fostering a culture of growth and excellence. Feedback isn’t always positive, and if you’re the type of person that can’t face constructive criticism, think carefully about entering this industry.",
        iconColor: "text-[#00A6E3] ",
    },
    {
        title: "Experience in Coaching Kids’ Football (Grassroots, 4-12 years)",
        description:"Foundational experience in coaching children’s football at the grassroots level (2-4 years) demonstrates your understanding of working with young athletes.",
        iconColor: "text-[#00A6E3]",
    },
    {
        title: "FA Qualifications - Minimum Level 1/2",
        description:"Possessing coaching qualifications, such as an FA Level 1 or Level 2 certification, reflects your commitment to professionalism and coaching excellence.",
        iconColor: "text-[#0DD180]",
    },
];

const Franchisee = () => {
    return (
        <section className="py-15">
            <div className="max-w-[1200px] mx-auto px-4">

                <div className="text-center mb-16 max-w-[820px] m-auto">
                    <h4 className="text-[42px] md:text-[52px] light-blue-text  font-bold recline leading-tight">
                        <span className=" text-[#0DD180] font-normal permanent-marker">
                            What Makes
                        </span> {' '}
                        the Ideal Franchisee for <br />
                        Samba Soccer Schools?
                    </h4>
                    <div className="max-w-[700px] m-auto">

                        <p className=" text-[14px]  mt-4  text-[#5F5F6D] leading-[26px]">
                            At Samba Soccer Schools, we’re on a mission to bring the joy and excitement of Brazilian-style football to young children while nurturing their skills and confidence. The ideal franchisee embodies a unique blend of qualities that align with our values and ensure the success of the franchise and the continued growth of our passionate community. If you’re considering joining the Samba Soccer Schools family, here’s what we’re looking for:
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:max-w-[1242px] m-auto sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {qualities.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-3 mainShadow"
                        >
                            <div
                                className={` mb-4  ${item.iconColor}`}
                            >
                                <IoMdCheckmarkCircleOutline className="text-2xl"/>
                            </div>

                            <h6 className="font-bold small blue-text ">
                                {item.title}
                            </h6>

                            <p className="text-[#5F5F6D]  mt-2 text-[14px] text-sm leading-[23px]">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Franchisee;
