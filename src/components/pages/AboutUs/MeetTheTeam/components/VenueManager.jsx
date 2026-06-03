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
          "Nicknamed ‘Manny’, Emmanuel Marshal started his coaching journey at the age of 17. He played for Fulham FC Academy as a youth player and was later recruited by their coaching department.",
          "Emmanuel went on to work with Samba Soccer Schools at the age of 18 and has since developed into a Head Coach. He is known for his vibrant energy and fun-like style of football coaching. He’s also a bit of a ‘baller’ but shh don't tell him that as it’ll get to his head.",
          "When he’s not coaching, you’ll probably find him in the gym or praying for Fulham FC to get back in the Premier League.",
        ]
      },
      {
        id: 2,
        name: "Haile Solomon",
        role: "Venue Manager",
        banner: "/assets/Emmanuel.png",
        image: "/assets/HaileSolomon.png",
        description: [
          "Nicknamed ‘Manny’, Emmanuel Marshal started his coaching journey at the age of 17. He played for Fulham FC Academy as a youth player and was later recruited by their coaching department.",
          "Emmanuel went on to work with Samba Soccer Schools at the age of 18 and has since developed into a Head Coach. He is known for his vibrant energy and fun-like style of football coaching. He’s also a bit of a ‘baller’ but shh don't tell him that as it’ll get to his head.",
          "When he’s not coaching, you’ll probably find him in the gym or praying for Fulham FC to get back in the Premier League.",
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
          "Ethan realised his passion for football coaching after completing a coaching course hosted by Samba Soccer Schools in 2017. After gaining his FA qualifications, he worked tremendously hard to climb the ladder going from support coach, to Head Coach and now appointed as Head of Recruitment at SSS.",
          "He is popular for breaking down exercises and communicating with players in a clear way. One parent had this to say: ‘Ethan has the teacher-engaging-ability all teachers should have, but not all do have!’",
          "Bravo Ethan, Bravo!"
        ]
      },
      {
        id: 1,
        name: "Emmanuel Marshal",
        role: "Venue Manager",
        image: "/assets/EmmanuelMarshal.png",
        banner: "/assets/Emmanuel.png",
        description: [
          "Ethan realised his passion for football coaching after completing a coaching course hosted by Samba Soccer Schools in 2017. After gaining his FA qualifications, he worked tremendously hard to climb the ladder going from support coach, to Head Coach and now appointed as Head of Recruitment at SSS.",
          "He is popular for breaking down exercises and communicating with players in a clear way. One parent had this to say: ‘Ethan has the teacher-engaging-ability all teachers should have, but not all do have!’",
          "Bravo Ethan, Bravo!"
        ]
      },
      {
        id: 2,
        name: "Haile Solomon",
        role: "Venue Manager",
        banner: "/assets/Emmanuel.png",
        image: "/assets/HaileSolomon.png",
        description: [
          "Ethan realised his passion for football coaching after completing a coaching course hosted by Samba Soccer Schools in 2017. After gaining his FA qualifications, he worked tremendously hard to climb the ladder going from support coach, to Head Coach and now appointed as Head of Recruitment at SSS.",
          "He is popular for breaking down exercises and communicating with players in a clear way. One parent had this to say: ‘Ethan has the teacher-engaging-ability all teachers should have, but not all do have!’",
          "Bravo Ethan, Bravo!"
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
          "Coach Haile is one of the coolest guys you will meet in football coaching. Big claim right? But he has years of evidence to back this up!",

          "Haile has been a Head Coach for Samba Soccer Schools for 5 years. He knows how to bring the fun to every class putting smiles on all his students the moment they arrive to his classes.",

          "Outside of coaching, you’ll find Haile enjoying a 5-aside game with his mates or watching his beloved Borussia Dortmund FC.",

          "Oh yeah, we also forgot to mention that Haile represents his home country, Eritrea for their national football tournaments! Now that's pretty cool!"
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
          "Coach Haile is one of the coolest guys you will meet in football coaching. Big claim right? But he has years of evidence to back this up!",

          "Haile has been a Head Coach for Samba Soccer Schools for 5 years. He knows how to bring the fun to every class putting smiles on all his students the moment they arrive to his classes.",

          "Outside of coaching, you’ll find Haile enjoying a 5-aside game with his mates or watching his beloved Borussia Dortmund FC.",

          "Oh yeah, we also forgot to mention that Haile represents his home country, Eritrea for their national football tournaments! Now that's pretty cool!"
        ]
      }
    ]
  }
];

/* ===================== SECTION ===================== */
const VenueManagerSection = ({ group }) => {
  const { groupName, position, color, managers } = group;

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
    <section className={`relative px-4 md:px-0 py-10  md:py-20 ${groupName !== "Head Coaches" ? 'ggggggs' : ""}  m-0   z-1`}>
      <div className="max-w-[1164px] mx-auto relative z-10">

        {/* TITLE */}
        <div
          className={`md:flex items-center mb-14
    ${position === "swapped" ? "md:flex-row-reverse md:justify-between" : "md:flex justify-between"}
  `}
        >
          {/* HEADING */}
          <h2
            className={`md:text-[48px] text-[38px] recline font-bold  text-center md:text-left`}
            style={{ color }}
          >
            {groupName}
          </h2>

          {/* SLIDER */}
          <div className="relative md:mt-0 mt-10">

            {/* LEFT */}
            <button
              onClick={() => scrollByCard(-1)}
              className="absolute md:left-[27px] left-[5px] top-1/2 -translate-y-1/2 z-30"
            >
              <img src="/assets/leftIcon.png" className="h-3 md:h-5" alt="Left" />
            </button>

            <div
              ref={sliderRef}
              className="flex md:max-w-[660px] w-[80%] m-auto gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory px-2"
            >
              {infiniteManagers.map((item, index) => {
                const isActive = active.id === item.id;
                const baseColor = index % 2 === 0 ? "#00BA7C" : "#00AEEF";

                return (
                  <button
                    key={`${item.id}-${index}`}
                    onClick={() => setActive(item)}
                    className={`snap-start flex-shrink-0 md:w-[115px] w-[80px] rounded-2xl items-stretch p-0 overflow-hidden bg-white transition-all duration-300
              ${isActive ? "border-2 shadow-lg" : "border-white"}
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
                      className="w-full md:h-[100px] h-[70px] object-contain"
                    />
                    <p
                      className="text-white h-[100%] text-center font-bold py-3 md:px-4 text-[10px] md:text-[12px]"
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
              className="absolute md:right-[27px] right-[5px] top-1/2 -translate-y-1/2 z27"
            >
              <img src="/assets/rightIcon.png" className="h-3 md:h-5" alt="Right" />
            </button>
          </div>
        </div>


        {/* DETAIL CARD */}
        <div
          className="bg-white rounded-[32px] md:p-10 p-5 flex flex-col lg:flex-row gap-10 items-center shadow-lg"
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
            <h2 className="md:text-[24px] text-[20px] poppins font-bold text-[#042C89] pb-6">
              {active.name}
            </h2>

            {active.description.map((para, index) => (
              <p
                key={index}
                className="text-[#5F5F6D] mb-4 md:text-[16px] text-[14px] leading-relaxed"
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
