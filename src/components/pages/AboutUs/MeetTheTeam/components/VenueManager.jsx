import React, { useState, useEffect, useRef } from "react";

/* ===================== DATA ===================== */
const managersData = [
  {
    groupId: 1,
    groupName: "Regional Managers",
    color: "#00AEEF",
    position: "normal",
    managers: [
      {
        id: 1,
        name: "Emmanuel Marshal",
        role: "Venue Manager",
        image: "/assets/EmmanuelMarshal.png",
         banner: "/assets/Emmanuel.png", 
        description: [
          "Nicknamed ‘Manny’, Emmanuel Marshal started his coaching journey at the age of 17.",
          "He is known for his vibrant energy and fun-like style of football coaching.",
          "When he’s not coaching, you’ll probably find him in the gym."
        ]
      },
      {
        id: 2,
        name: "Haile Solomon",
        role: "Venue Manager",
        banner: "/assets/Emmanuel.png", 
        image: "/assets/HaileSolomon.png",
        description: [
          "Started coaching at a young age with Fulham FC Academy.",
          "Developed into a Head Coach at Samba Soccer Schools.",
          "Big believer in high-energy, fun training sessions."
        ]
      }
    ]
  },
  {
    groupId: 2,
    groupName: "Head Coaches",
    color: "#00BA7C",
    position: "swapped",
    managers: [
      {
        id: 3,
        name: "Ethan Bond Vaughan",
        role: "Venue Manager",
        image: "/assets/EthanBondVaughan.png",
        banner: "/assets/EthanBond.png",
        description: [
          "Experienced youth coach with a strong technical background.",
          "Known for structured but exciting coaching methods.",
          "Always focused on player development."
        ]
      },
       {
        id: 1,
        name: "Emmanuel Marshal",
        role: "Venue Manager",
        image: "/assets/EmmanuelMarshal.png",
         banner: "/assets/Emmanuel.png", 
        description: [
          "Nicknamed ‘Manny’, Emmanuel Marshal started his coaching journey at the age of 17.",
          "He is known for his vibrant energy and fun-like style of football coaching.",
          "When he’s not coaching, you’ll probably find him in the gym."
        ]
      },
      {
        id: 2,
        name: "Haile Solomon",
        role: "Venue Manager",
        banner: "/assets/Emmanuel.png", 
        image: "/assets/HaileSolomon.png",
        description: [
          "Started coaching at a young age with Fulham FC Academy.",
          "Developed into a Head Coach at Samba Soccer Schools.",
          "Big believer in high-energy, fun training sessions."
        ]
      }
    ]
  },
  {
    groupId: 3,
    groupName: "Management Team",
    color: "#00AEEF",
    position: "normal",
    managers: [
     {
        id: 1,
        name: "Emmanuel Marshal",
        role: "Venue Manager",
        image: "/assets/EmmanuelMarshal.png",
         banner: "/assets/Emmanuel.png", 
        description: [
          "Nicknamed ‘Manny’, Emmanuel Marshal started his coaching journey at the age of 17.",
          "He is known for his vibrant energy and fun-like style of football coaching.",
          "When he’s not coaching, you’ll probably find him in the gym."
        ]
      },
       {
        id: 6,
        name: "Helaku El-bay",
        role: "Venue Manager",
        image: "/assets/HelakuEl-bay.png",
         banner: "/assets/Helaku.png", 
          description: [
          "Coach Haile is one of the coolest guys you will meet in football coaching. Big claim right? But he has years of evidence to back this up!",

"Haile has been a Head Coach for Samba Soccer Schools for 5 years. He knows how to bring the fun to every class putting smiles on all his students the moment they arrive to his classes.",

"Outside of coaching, you’ll find Haile enjoying a 5-aside game with his mates or watching his beloved Borussia Dortmund FC.",

"Oh yeah, we also forgot to mention that Haile represents his home country, Eritrea for their national football tournaments! Now that's pretty cool!"
        ]
      },
          {
        id: 2,
        name: "Haile Solomon",
        role: "Venue Manager",
        banner: "/assets/Emmanuel.png", 
        image: "/assets/HaileSolomon.png",
        description: [
          "Started coaching at a young age with Fulham FC Academy.",
          "Developed into a Head Coach at Samba Soccer Schools.",
          "Big believer in high-energy, fun training sessions."
        ]
      }
    ]
  }
];

/* ===================== SECTION ===================== */
const VenueManagerSection = ({ group }) => {
  const { groupName, position,color, managers } = group;

  if (!managers?.length) return null;

  const [active, setActive] = useState(managers[0]);
  const sliderRef = useRef(null);

  const infiniteManagers = [...managers, ...managers, ...managers];

  const scrollByCard = (direction = 1) => {
    if (!sliderRef.current) return;

    const card = sliderRef.current.querySelector("button");
    if (!card) return;

    const gap = 24;
    const scrollAmount = card.offsetWidth + gap;

    sliderRef.current.scrollBy({
      left: direction * scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (!sliderRef.current) return;

    const card = sliderRef.current.querySelector("button");
    if (!card) return;

    const gap = 24;
    const scrollAmount = card.offsetWidth + gap;

    sliderRef.current.scrollLeft = managers.length * scrollAmount;
  }, [managers.length]);

  const activeIndex = infiniteManagers.findIndex(
    (item) => item.id === active.id
  );

  const activeColor = activeIndex % 2 === 0 ? "#00BA7C" : "#00AEEF";

  return (
    <section className="relative bg-[#F6F6F6] py-20 m-0 venueManagersSec">
      <div className="container mx-auto relative z-10">

        {/* TITLE */}
        <div
          className={`md:flex items-center mb-14
    ${position === "swapped" ? "md:flex-row-reverse md:justify-between" : "md:flex justify-between"}
  `}
        >
          {/* HEADING */}
          <h2
            className={`md:text-[48px] text-[40px] recline font-bold  text-center md:text-left`}
            style={{ color }}
          >
            {groupName}
          </h2>

          {/* SLIDER */}
          <div className="relative md:mt-0 mt-10">

            {/* LEFT */}
            <button
              onClick={() => scrollByCard(-1)}
              className="absolute md:left-[-55px] left-[-15px] top-1/2 -translate-y-1/2 z-30"
            >
              <img src="/assets/leftIcon.png" className="h-5" alt="Left" />
            </button>

            <div
              ref={sliderRef}
              className="flex max-w-[900px] gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory px-2"
            >
              {infiniteManagers.map((item, index) => {
                const isActive = active.id === item.id;
                const baseColor = index % 2 === 0 ? "#00BA7C" : "#00AEEF";

                return (
                  <button
                    key={`${item.id}-${index}`}
                    onClick={() => setActive(item)}
                    className={`snap-start flex-shrink-0 w-[160px] rounded-2xl overflow-hidden bg-white transition-all duration-300
              ${isActive ? "border-4 shadow-lg" : "border-4 border-white"}
            `}
                    style={
                      isActive
                        ? {
                          borderColor: baseColor,
                          boxShadow: `0 10px 25px ${baseColor}55`,
                        }
                        : {}
                    }
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-[200px] p-2 object-cover"
                    />
                    <p
                      className="text-white text-center font-bold py-3 text-[12px]"
                      style={{ backgroundColor: baseColor }}
                    >
                      {item.name.toUpperCase()}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* RIGHT */}
            <button
              onClick={() => scrollByCard(1)}
              className="absolute md:right-[-55px] right-[-15px] top-1/2 -translate-y-1/2 z-30"
            >
              <img src="/assets/rightIcon.png" className="h-5" alt="Right" />
            </button>
          </div>
        </div>


        {/* DETAIL CARD */}
        <div
          className="bg-white rounded-[32px] p-10 flex flex-col lg:flex-row gap-10 items-center shadow-lg"
          style={{ borderLeft: `6px solid ${activeColor}` }}
        >
          <div className="w-full lg:w-4/12">
            <img
              src={active.banner || active.image}
              alt={active.name}
              className="w-full rounded-2xl"
            />
          </div>

          <div className="w-full lg:w-8/12">
            <h3 className="text-[24px] font-bold text-[#042C89] mb-6">
              {active.name}
            </h3>

            {active.description.map((para, index) => (
              <p
                key={index}
                className="text-[#5F5F6D] mb-4 text-[16px] leading-relaxed"
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ===================== MAIN ===================== */
const VenueManagers = () => {
  return (
    <>
      {managersData.map((group) => (
        <VenueManagerSection key={group.groupId} group={group} />
      ))}
    </>
  );
};

export default VenueManagers;
