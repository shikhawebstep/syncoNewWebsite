

const data = [
  {
    id: 1,
    title: "1. Website Booking System",
    desc: [
      "The website booking system is a streamlined software package allowing customers to book classes, camps, etc., and appears on the main website. It’s simple and easy to use, meaning that your customers get from A to B in the shortest possible time. And those conversation rates remain high.   "
    ],
    imgSrc: "/assets/website-booking.png", // Use your own image or URL here
    imgAlt: "Website Booking System",
    color: "green-text",
  },
  {
    id: 2,
    title: "2. Parent Connect account",
    desc: [
      "Parents have got enough on their plates without worrying about trying to keep track of when their child’s football class is and if they’ve paid for next month. With that in mind, we’ve created a dedicated Parent Connect Account section in Synco where parents can log in and find all the information concerning classes, payment, and our loyalty points scheme. It’s also where development and skill progress information can be found, allowing parents to quickly check how their child is doing and what particular skills they will be learning in the future.    "
    ],
    imgSrc: "/assets/parent-account.png",
    imgAlt: "Parent Connect account",
    color: "light-blue-text",
  },
  {
    id: 3,
    title: "3. Coach Pro",
    desc: [
      "Juggling employees who don’t know what they’re doing or where they’re supposed to be going can quickly become a nightmare, which is why Coach Pro has become an indispensable component of the Synco software. ",
      "Coach Pro starts with the onboarding process, leading new employees through the various steps needed to get up and running, such as signing contracts, uploading qualifications, purchasing kit, and watching training videos. Once that’s out of the way, coaches can access any information they need directly from the app, such as schedules, the SSS syllabus, training session plans, class registers, music playlists, and customer feedback. ",
      "In a nutshell, your coaches shouldn’t need anything else to run a successful football training class apart from this app. If that’s not simplicity, we don’t know what is."
    ],
    imgSrc: "/assets/coach-pro.png",
    imgAlt: "Coach Pro",
    color: "green-text",
  },
  {
    id: 4,
    title: "4. Synco",
    desc: [
      "The main Synco area is the real juggernaut of Samba Soccer Schools, where business owners can manage every aspect of their football school and where every other section of Synco migrates its information to. This is a true operating beast if we’ve ever seen one, and it’s here that the vast majority of that 80% cut in admin time comes from. ",
      "This is a piece of bespoke customer relationship management (CRM) software that includes everything; bookings, cancellations, customer accounts, reports, to-do lists, email marketing campaigns, social media leads, surveys, coach information, and asset folders for marketing. ",
      "We operated without software like this for years, but it’s now impossible to imagine a world without it. An absolute titan that is worth every penny."
    ],
    imgSrc: "/assets/synco.png",
    imgAlt: "Synco",
    color: "light-blue-text",
  },
];

const InfoCard = ({ title, desc, imgSrc, imgAlt, color, reverse }) => {
  return (
    <div
      className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""
        } items-center md:justify-between mb-16`}
    >
       <div className="md:w-1/2 md:hidden flex  justify-center p-4">
        <div className="relative  max-w-[450px]  rounded-md overflow-hidden ">
          <img
            src={imgSrc}
            alt={imgAlt}
            className="object-contain w-full h-full"
          />
          {/* Add optional decorative shapes or overlay here if needed */}

        </div>
      </div>
      <div className="md:w-1/2 md:p-4">
        <h4
          className={`text-lg extra-small recline font-semibold pb-4 ${color}`}
        >{title}</h4>
        {desc.map((line, i) => (
          <p key={i} className="text-[#5F5F6D] whitespace-pre-line mb-4">
            {line}
          </p>
        ))}

      </div>
      <div className={`md:w-1/2  md:flex hidden ${!reverse ? 'justify-center':''} p-4`}>
        <div className="relative  max-w-[450px]  rounded-md overflow-hidden ">
          <img
            src={imgSrc}
            alt={imgAlt}
            className="object-contain w-full h-full"
          />
          {/* Add optional decorative shapes or overlay here if needed */}

        </div>
      </div>
    </div>
  );
};

export default function BookingSystem() {
  return (
    <section className=" mx-auto md:px-6 py-12">
      <div className="container">

        <div className="max-w-[1280px] m-auto">
          {data.map((item, idx) => (
            <InfoCard
              key={item.id}
              {...item}
              reverse={idx % 2 !== 0}
            />
          ))}

        </div>

      </div>
    </section>
  );
}
