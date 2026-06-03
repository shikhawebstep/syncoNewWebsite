// utils/getBenefitsData.js

const benefitsContent = {
  "/services/training": {
    bannerImg: "/assets/benefits.png",
    heading: "",
    logoImage: '',
    isCenter: true,
    isNotLine: true,
    highlightText: "benefits",
    subHeading: "of our One to One",
    subHeading2: " Football Training Classes",
    headingMobile: "",
    highlightTextMobile: "Benefits",
    subHeadingMobile: " of our ",
    subHeading2Mobile: "One to One Football Training Classes",
    benefits: [
      {
        img: "/assets/service1.png",
        title: "Builds Confidence",
        desc:
          "Children work best without distractions. Without the pressure of having others around, your child can develop their footballing confidence and mental maturity quickly and efficiently through direct individual coaching.",
      },
      {
        img: "/assets/service2.png",
        title: "Learn New Skills",
        desc:
          "We focus on the close control and ball skills that have defined the Bazilan game. Each class is tailored specifically to your child and includes skills gradually built upon over time within a personalised syllabus.",
      },
      {
        img: "/assets/service3.png",
        title: "Physical Fitness",
        desc:
          "This isn’t just a casual kickabout. Our classes place great importance on high-intensity interval training to help develop your child’s cardiovascular endurance, agility, speed, and strength.",
      },
      {
        img: "/assets/service4.png",
        title: "Measurable Goals",
        desc:
          "Through careful analysis of their game, we set your child realistic and measurable goals each session, as well as throughout their personalised syllabus to develop their game step by step.",
      },
    ],
  },
  "/services/camps": {
    bannerImg: "/assets/benefits.png",
    heading: "The",
    logoImage: '',
    isCenter: true,
    isNotLine: true,

    headingMobile: "The",
    highlightTextMobile: "Benefits",
    subHeadingMobile: "of our football",
    subHeading2Mobile: "camps",

    highlightText: "benefits",
    subHeading2: "of our football camps",
    benefits: [
      {
        img: "/assets/camp1.png",
        title: "Boost in skills",
        desc:
          "Our football camp is an excellent opportunity for children to supercharge their football skills quickly through personalised expert coaching. We focus on the Brazilian way of playing, which means flair, ball skills, close control, and a whole lot of fun while doing it.   "
      },
      {
        img: "/assets/camp2.png",
        title: "Make New Friends",
        desc: "For many children, time away from their friends at school can be tricky - but who says you need to be in school to make friends? A wider friendship group can boost confidence and self-esteem, and football camps are the perfect setting for your child to strike up new friendships with those who share the same passion for football."
      },
      {
        img: "/assets/camp4.png",
        title: "Fun",
        desc:
          "Every child needs to reset and have plenty of fun during the holidays away from formal education. With exercises, tournaments, prizes, and samba music, our camps are always bubbling with excitement, and it’s great to see children grinning from ear to ear. If only school could be this much fun!"
      },
      {
        img: "/assets/camp3.png",
        title: "Physical Activity",
        desc:
          "Children are leading increasingly sedentary lives, which can lead to obesity, physical and mental health problems. Our camps get children away from screens and provide that much-needed physical activity that we all know is vital for a healthy life."
      },
    ],
  },
  "/services/parties": {
    bannerImg: "/assets/benefits.png",
    heading: "The",
    isCenter: true,

    logoImage: '',
    highlightText: "benefits",
    subHeading: "of a Samba",
    subHeading2: "Soccer birthday party for kids",

    headingMobile: "The",
    highlightTextMobile: "Benefits",
    subHeadingMobile: "of our football",
    subHeading2Mobile: "camps",

    benefits: [
      {
        img: "/assets/camp4.png",
        title: "Fun",
        desc:
          "The Brazilians know how to have fun, and we bring that same pumping samba beat to all our birthday parties. With interactive games and competition, your child’s birthday party will certainly be the talk of the school playground.    "
      },
      {
        img: "/assets/bday2.png",
        title: "Interaction",
        desc:
          "This kind of birthday party only works well if everybody interacts, which is why we’ve crafted our parties to maximise participation across all ages and abilities. We’ve got years of experience in doing this, and we know how to put on the perfect party.  "
      },
      {
        img: "/assets/bday3.png",
        title: "Personalised",
        desc: "We want your child to feel special on their text-[18px] day, so we personalise the experience as much as we can. This means branded invitations and certificates that your child and their friends will proudly keep for a long time. We always want to go the extra mile, so if there’s anything else we can do, just have a chat with us, and we’ll see what we can do. "
      },
      {
        img: "/assets/bday4.png",
        title: "Experienced Coaches",
        desc: "We only bring our most senior and experienced coaches to our birthday parties, meaning highly qualified professionals who are there to help the children have fun but also teach them a trick or two that they can take home and show their parents. "
      },
    ],
  },
  "/services/club": {
    bannerImg: "/assets/benefits.png",
    heading: "",
    isCenter: false,

    logoImage: "/assets/ssClubLogo.png",
    highlightText: "benefits",
    subHeading: "of our Football Club",
    benefits: [
      {
        img: "/assets/benefit1.png",
        title: "Competition",
        desc:
          "Our club is the logical next step for the thousands who attend our classes, and Samba Soccer FC allows them to take the football up a level and compete in real competitions. When done correctly, children thrive under competition, but this needs to be matched with lessons on fair play, honesty, and respect that go far beyond the football pitch."
      },
      {
        img: "/assets/benefit2.png",
        title: "Teamwork",
        desc:
          "The earlier children learn about teamwork, the better. When playing for Samba Soccer FC, we emphasise the importance of working together towards a shared goal. Good teamwork boosts morale, adds a sense of belonging, and can do wonders for a child’s confidence and social skills."
      },
      {
        img: "/assets/benefit3.png",
        title: "Social Skills",
        desc: "Those playing for Samba Soccer FC are expected to learn respect, listening skills, sportsmanship, and communication. We emphasise the importance of taking responsibility, even at a young age, so whether we win, lose, or draw, we always do it in a manner that shows respect for our teammates and the opposition."
      },
      {
        img: "/assets/benefit4.png",
        title: "Development",
        desc: "Samba Soccer FC shares the same football values as all our classes. We want to play with flair and fun, to be expressive and daring. Training once a week and playing a competitive game fortnightly is an excellent way to supercharge that development among players of a similar level while adding decision-making skills that are impossible to practise in non-competitive environments."
      },
    ],
  },
  "/about/InnerVenues": {
    bannerImg: "/assets/benefits.png",
    heading: "The",
    isCenter: true,

    logoImage: '',
    dashImage: '/assets/benifitDash.png',
    highlightText: "benefits",
    subHeading: "of our Acton ",
    subHeading2: "soccer classes",
    benefits: [
      {
        img: "/assets/img-builds-confidence.png",
        title: "Builds Confidence",
        desc:
          "We focus on one or two key skills per class while providing children with the supportive environment needed to build confidence quickly. Learning to play attractive, skilful football takes time, but it will never happen if a coach screams at you for every minor mistake.   ",
      },
      {
        img: "/assets/img-learn-new-skills.png",
        title: "Learn New Skills",
        desc:
          "Football should be about learning those showstopping skills that become the talk of the playground. Each of our weekly classes focuses on an individual skill, and since each child is provided with their own smaller ball, learning and development occur substantially faster than in other classes.   ",
      },
      {
        img: "/assets/img-make-new-friends.png",
        title: "Make New Friends",
        desc:
          "As well as the footballing side, we pride ourselves on teaching social skills such as respect, teamwork, listening and communication while providing the perfect setting for children to expand their social circle. With more and more time spent online, real-life, activity-based time with others has never been so important. ",
      },
      {
        img: "/assets/img-have-fun.png",
        title: "Have Fun",
        desc:
          "Enough of the boring football. We want all those attending our classes to leave with huge grins and a deep desire just to keep on playing. Football has to be about fun; there’s no other way to think about it. With samba music playing in the background, dazzling Brazilian skills on offer, and great friends around them, getting your child off the football pitch might be your biggest problem.",
      },
    ],
  },

  default: {
    bannerImg: "/assets/benefits.png",
    heading: "The",
    logoImage: '',
    isCenter: true,
    headingMobile: "The",
    highlightTextMobile: "Benefits",
    subHeadingMobile: "of our weekly ",
    subHeading2Mobile: "football classes for kids ",
    highlightText: "benefits",
    subHeading: "of our weekly",
    subHeading2: "football classes for kids",
    benefits: [
      {
        img: "/assets/img-have-fun-1.png",
        title: "Builds Confidence",
        desc:
          "Confident football comes with practice. Each class focuses on 1 or 2 key skills, which are gradually integrated together over time to help develop confidence and ability.",
      },
      {
        img: "/assets/img-learn-skills.png",
        title: "Learn New Skills",
        desc:
          "Kids want to learn the flicks and tricks that will wow their friends. Each week your child will learn skills straight out of the Brazilian football textbook that are fun, challenging, and dazzling.",
      },
      {
        img: "/assets/img-physical-skills.png",
        title: "Make New Friends",
        desc:
          "Weekly classes offer your child the chance to expand their friendship group while learning vital social skills such as respect, teamwork, and communication that go far beyond football.",
      },
      {
        img: "/assets/img-goals.png",
        title: "Have Fun",
        desc:
          "Playing football should be fun. For a huge number of children, they’re never happier than when they’re kicking a ball around with their friends. A weekly beaming smile is a joy to see.",
      },
    ],
  },
};

export function GetBenefitsData(pathname) {
  return benefitsContent[pathname] || benefitsContent.default;
}
