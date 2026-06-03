import React, { useState } from 'react'

const Services = () => {
    const [activeCard, setActiveCard] = useState(null)

    const cardsData = [
        {
            id: 1,
            title: "Weekly",
            subtitle: "classes",
            description:
                "We offer weekly football classes where your child will learn everything from the basics to those flicks and tricks the Brazilians are known for. Classes are split into four ability levels meaning there's something for everybody.",
            btnColor: "bg-[#042C89]",
            btnText: "text-white",
            textColor: "text-[#042C89]",
            defaultImg: "/assets/Weekly_classes.png",
            hoverImg: "/assets/weekly_classes_hover.png",
            align: "justify-end items-center endtext",
        },
        {
            id: 2,
            title: "Holiday",
            subtitle: "Camps",
            description:
                "Packed with skills, fun activities, and plenty of laughs, our football camps provide your child with a massive burst of confidence and increase in skill set over a short period. A great way to make new friends and stay social during that time away from school.",
            btnColor: "bg-[#042C89]",
            textColor: "text-[#042C89]",
            btnText: "text-white",
            defaultImg: "/assets/Holiday_Camps.png",
            hoverImg: "/assets/Holiday_Camps_hover.png",
            align: "items-center",
        },
        {
            id: 3,
            title: "One-to-one",
            subtitle: "training",
            description:
                "For those who want to rapidly improve their skills and technique. Whether a complete beginner or an academy prospect, a private one-to-one football training program can be scheduled to work around you, with each session tailored specifically to your child.",
            btnColor: "bg-[#0DD180]",
            btnText: "text-[#042C89]",
            textColor: "text-[#0DD180]",
            defaultImg: "/assets/One-to-one.png",
            hoverImg: "/assets/One-to-one_hover.png",
            align: "items-center",
        },
        {
            id: 4,
            title: "Birthday",
            subtitle: "parties",
            description:
                "Games, competitions, and prizes all played against the backdrop of swinging carnival music. Samba Soccer Schools birthday parties mix fun and excitement with football activities led by one of our dedicated coaches.",
            btnColor: "bg-[#FFDE14]",
            textColor: "text-[#FFDE14]",
            btnText: "text-[#042C89]",
            defaultImg: "/assets/Birthday_Parties.png",
            hoverImg: "/assets/Birthday_Parties_hover.png",
            align: "justify-end items-center endtext",
        },
    ]

    const handleCardClick = (id) => {
        setActiveCard(activeCard === id ? null : id)
    }

    return (
        <>
            <section className="services py-10">
                <div className="container">
                    <div className="text-center  sm:px-0">
                        <h3 className='text-white recline text-[28px] sm:text-[34px] md:text-[38px] lg:text-[44px]'>
                            Our <span className='permanent-marker yellow-text relative'>Services</span>
                        </h3>
                        <p className="text-white text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] pt-3 md:pt-5 leading-loose  sm:px-0">
                            Take your pick. We offer football training in <br className='block md:hidden' /> London with weekly classes, one-to-one<br className='block md:hidden' /> 
                            <br className='hidden md:block' />
                            sessions, holiday camps, and birthday parties,<br className='block md:hidden' />  all set to a jumping samba beat.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 service-card sm:grid-cols-2 gap-4 mt-8 md:mt-10 lg:mt-12 lg:max-w-[1250px] m-auto sm:px-0">
                        {cardsData.map((card) => {
                            const isActive = activeCard === card.id

                            return (
                                <div
                                    key={card.id}
                                    className="relative w-full group rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                                    onClick={() => handleCardClick(card.id)}
                                >
                                    {/* Default Image */}
                                    <div
                                        className={`p-6 sm:p-8 md:p-10 lg:p-12 flex ${card.align} bg-cover bg-center w-full min-h-[200px] sm:min-h-[240px] md:min-h-[300px] lg:min-h-[365px]`}
                                        style={{ backgroundImage: `url(${card.defaultImg})` }}
                                    >
                                        <div className='mt-2 md:mt-4 w-full md:w-6/12'>
                                            <h2 className={`text-[32px] sm:text-[42px] md:text-[52px] lg:text-[64px] font-bold recline ${card.textColor}`}>
                                                <span className="block font-normal permanent-marker text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px]">
                                                    {card.title}
                                                </span>
                                                {card.subtitle}
                                            </h2>

                                            <button
                                                className={`mt-1 md:mt-2 mreInfo px-5 md:px-7 lg:px-8 py-1.5 md:py-2 font-semibold text-[12px] md:text-[14px] rounded-4xl border-0 ${card.btnText} ${card.btnColor}`}
                                            >
                                                More Info
                                            </button>
                                        </div>
                                    </div>

                                    {/* Hover / Click Content */}
                                    <div
                                        className={`
                                            absolute inset-0 flex flex-col justify-center p-5 md:p-8 bg-cover bg-center transition-all duration-500
                                            opacity-0 md:translate-y-6
                                            md:group-hover:opacity-100 md:group-hover:translate-y-0
                                            ${isActive ? 'opacity-100 translate-y-0' : ''}
                                        `}
                                        style={{ backgroundImage: `url(${card.hoverImg})` }}
                                    >
                                        <p className="text-white text-center text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] recline mb-3 md:mb-4 leading-relaxed">
                                            {card.description}
                                        </p>

                                        <div className="flex justify-center">
                                            <button
                                                className={`px-5 md:px-7 py-1.5 md:py-2 rounded-4xl font-semibold text-[12px] md:text-[14px] border-0 ${card.btnColor} ${card.btnText}`}
                                            >
                                                More Info
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services