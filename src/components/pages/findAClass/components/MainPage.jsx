import { useState, useRef } from "react";
import {
  Clock,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import PostcodeSelect from "../../Common/PostCodeSelect";
import { ChevronDown } from "lucide-react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const days = [
  "All",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const venues = [
  "Catholrope Project, 268-274 Grays Inn Rd, London WC1X 8LH",
  "Neidborough Sports Garden, 27 Union St, London SE1 8SD",
  "Ark Globe Academy, Harper Road, London SE1 6AF",
  "King Solomon Academy, Penfold St, Marylebone, London NW1 6RJ",
  "Mulberry Academy Shoreditch, 60-68 Whitechapel Road, London E1 1EW",
];

const congestionInfo =
  "This venue has no parking facilities available. Paid road parking is available.";

const parkingInfo =
  "This venue has no parking facilities available. Paid road parking is available.";

const subscriptionPlans = [
  {
    title: "12 Month Plan",
    price: "£39.99",
    priceTag: "/month",
    benefits: [
      "36 lessons at one venue",
      "15% off SSS uniform",
      "FREE access to Skills Tutorial App",
    ],
  },
  {
    title: "6 Month Plan",
    price: "£47.99",
    priceTag: "/month",
    benefits: [
      "36 lessons at one venue",
      "15% off SSS uniform",
      "FREE access to Skills Tutorial App",
    ],
  },
  {
    title: "Flexi Plan",
    price: "£50.00",
    priceTag: "/month",
    benefits: [
      "36 lessons at one venue",
      "15% off SSS uniform",
      "FREE access to Skills Tutorial App",
    ],
  },
];



export default function MainPage() {
  const [activeModal, setActiveModal] = useState(null);
const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState(new Date()); // Feb 2023
  const [selectedDay, setSelectedDay] = useState(28);
  const toggleModal = (name) => {
    setActiveModal((prev) => (prev === name ? null : name));
  };

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const [selected, setSelected] = useState("All");

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay(); // 0 = Sun
  const startOffset = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1; // Monday start

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
    setSelectedDay(null);
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
    setSelectedDay(null);
  };
  const [students, setStudents] = useState(1);


  const mapRef = useRef(null);




  return (
 <div className="min-h-screen bg-[#F6F6F7] md:py-16 py-40 font-sans">
  <div className="mx-auto max-w-7xl px-4">
    <div className="mb-6 flex flex-col items-center gap-4 md:flex-row md:justify-between">
      <h4 className="text-3xl font-bold light-blue-text">
        FIND A CLASS
      </h4>

      <div className="flex w-full flex-col gap-3 z-9999 md:w-auto md:flex-row">
        <PostcodeSelect onSelect={(postcode) => console.log(postcode)} />

       
          </div>
        </div>

        <div className="mb-6 border-[9px] border-white md:mt-0 mt-[-50px] overflow-hidden min-h-60 rounded-3xl bg-gray-200">
          <div className="relative aspect-[16/4] w-full">
            <iframe
              className="absolute inset-0 h-full min-h-60 w-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.83988669532!2d-0.26640339995072626!3d51.528739805038576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sin!4v1766649812397!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
              allowFullScreen
            />
          </div>
        </div>
        <div className="flex relative justify-between pb-5">
          <p className="text-[18px] text-[#34353B] font-semibold cursor-pointer" onClick={() => toggleModal("venueModal")
          }>List of Venues <span className="text-[#9E9FAA] text-[14px]">+20 results</span></p>

          {activeModal === "venueModal" && (
            <div className="bg-white w-[515px] top-[30px] absolute z-50 border border-[#E1E2E6] p-3 rounded-[20px] max-h-[90vh] overflow-auto">
              <ul className="space-y-2 text-gray-900 overflow-auto">
                {venues.map((v, i) => (
                  <li key={i} className=" text-[13px] pb-1 text-[#34353B] font-medium">
                    {v}
                  </li>
                ))}
              </ul>

            </div>
          )
          }
          <div className="flex gap-2 items-center">
            <div className="flex gap-2 items-center cursor-pointer" onClick={() => toggleModal("dayModal")}>

              <p className="text-[14px] text-[#34353B]cursor-pointer" >Sort By Days</p> <ChevronDown className={`${activeModal === "dayModal" ? 'rotate-180' : ''}`} />
            </div>

            {activeModal === "dayModal" && (

              <div className="w-[130px] top-[30px] absolute z-50 poppins bg-white rounded-xl shadow-lg border border-[#E1E2E6] py-4 overflow-hidden">
                {days.map((day) => (
                  <button
                    key={day}
                    onClick={() => setSelected(day)}
                    className={`w-full text-left px-5 py-1.5 text-[13px] transition
            ${selected === day
                        ? "text-sky-500 font-semibold"
                        : "text-gray-800 hover:bg-gray-50"
                      }
          `}
                  >
                    {day}
                  </button>
                ))}
              </div>
            )}
          </div>

        </div>

        <div className=" rounded-[30px] bg-white p-4  border border-[#E2E1E5]">
          <div className="relative flex items-center justify-between rounded-[22px] bg-[#042C89] px-5 py-4 text-white">
            <div className="flex items-center text-[16px] poppins gap-2 text-sm">
              <FaMapMarkerAlt size={20} />
              The King Fahad Academy, East Acton Lane, London W3 7HD
            </div>

            <div className="flex gap-2">
              <div className="relative">
                <button
                  onClick={() => toggleModal("subscription")}
                  title="Subscription Plans"
                  className="w-[26px] h-[26px]"
                >
                  <img
                    src="/assets/pound.png"
                    alt="Subscription"
                    className="w-full h-full object-contain"
                  />
                </button>

                {activeModal === "subscription" && (
                  <div className="text-black poppins w-[950px] absolute -right-3 top-[30px] bg-white rounded-[20px] shadow-lg border border-[#E2E1E5] p-4 z-50">

                    <div className="flex justify-between items-center mb-4 border-b pb-3 border-[#E2E1E5]">
                      <h2 className="text-[24px] font-semibold text-gray-900">
                        Subscription Plan
                      </h2>
                      <button
                        onClick={() => toggleModal(null)}
                        className="text-[#0F121C] text-xl font-bold hover:text-gray-700"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="mb-4 flex gap-2 p-3 border w-max mx-auto border-[#E2E1E5] rounded-[19px]">
                      {[1, 2, 3].map((n) => (
                        <button
                          key={n}
                          onClick={() => setStudents(n)}
                          className={`px-4 py-2 font-semibold transition rounded-[14px]
              ${students === n
                              ? "bg-[#00A6E3] text-white"
                              : "text-black hover:bg-gray-100"
                            }`}
                        >
                          {n} Student{n > 1 ? "s" : ""}
                        </button>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {subscriptionPlans.map((plan, i) => (
                        <div
                          key={i}
                          className="border border-[#E2E1E5] rounded-[20px] p-4"
                        >
                          <p className="text-lg font-semibold mb-6">{plan.title}</p>

                          <h1 className="text-[32px] font-bold mb-2 border-b border-[#E2E1E5] pb-3">
                            {plan.price}{" "}
                            <span className="text-[16px] text-[#717073] font-medium">
                              {plan.priceTag}
                            </span>
                          </h1>

                          <ul className="my-8 space-y-3">
                            {plan.benefits.map((b, j) => (
                              <li
                                key={j}
                                className="text-sm font-medium text-[#282829] flex items-center gap-2"
                              >
                                <img src="/assets/greenTick.png" className="w-5" alt="" />
                                {b}
                              </li>
                            ))}
                          </ul>

                          <button className="w-full bg-[#042C89] text-white font-semibold py-3 rounded-[12px]">
                            £35 Joining Fee
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="relative">
                <button
                  onClick={() => toggleModal("termDates")}
                  className="w-[26px]"
                  title="Term Dates">

                  <img src="/assets/calendar-circle.png" alt="" />
                </button>
                {activeModal === "termDates" && (
                  <div className="text-black poppins w-[490px] absolute -right-3 top-[30px] bg-white rounded-[20px] shadow-lg border border-[#E2E1E5] p-4 z-50">

                    <div className="flex justify-between items-center mb-4 border-b pb-3 border-[#E2E1E5]">
                      <h2 className="text-[24px] poppins font-semibold text-gray-900">Term Dates</h2>
                      <button onClick={() => toggleModal(null)} className="text-[#0F121C] font-bold hover:text-gray-700">
                        ✕
                      </button>
                    </div>
                    <div className="mb-6 space-y-5 text-center text-gray-600 text-xs select-none">
                      {[
                        {
                          name: "Autumn Term 2022",
                          dateRange: "Sun 11th Sep 2022 - Sun 04th Dec 2022",
                          exclusion: "Half term Exclusion: Sun 23rd Oct 2022",
                        },
                        {
                          name: "Spring Term 2022",
                          dateRange: "Sun 11th Sep 2022 - Sun 04th Dec 2022",
                          exclusion: "Half term Exclusion: Sun 23rd Oct 2022",
                        },
                        {
                          name: "Summer Term 2022",
                          dateRange: "Sun 11th Sep 2022 - Sun 04th Dec 2022",
                          exclusion: "Half term Exclusion: Sun 23rd Oct 2022",
                        },
                      ].map(({ name, dateRange, exclusion }) => (
                        <div key={name}>
                          <p className="font-semibold text-[18px] text-[#1F1C1E] ">{name}</p>
                          <p className="text-[#717073] py-3 text-[14px]">{dateRange}</p>
                          <p className="text-[#717073] text-[14px]">{exclusion}</p>
                        </div>
                      ))}
                    </div>
                    <div className="bg-[#F6F6F7] max-w-[90%] m-auto poppins shadow rounded-xl p-4 select-none">

                      <div className="flex justify-center items-center text-gray-700 font-semibold mb-7">
                        <button onClick={handlePrevMonth} className="p-1 rounded-full flex items-center justify-center w-8 h-8 hover:bg-[#3E3E47] hover:text-white">
                          < IoIosArrowBack />
                        </button>

                        <span className="mx-4 text-[#1F1C1E] font-semibold text-[16px]">
                          {currentDate.toLocaleString("default", {
                            month: "long",
                            year: "numeric",
                          })}
                        </span>

                        <button onClick={handleNextMonth} className="p-1 rounded-full flex items-center justify-center w-8 h-8 hover:bg-[#3E3E47] hover:text-white">
                          < IoIosArrowForward />
                        </button>
                      </div>

                      <div className="grid grid-cols-7 gap-1 text-center text-gray-500 text-xs font-semibold mb-2">
                        {["M", "T", "W", "T", "F", "S", "S"].map((day) => (
                          <div className="text-sm text-[#797A88]" key={day}>{day}</div>
                        ))}
                      </div>

                      <div className="grid grid-cols-7 gap-1 text-center text-gray-700 text-sm">

                        {[...Array(startOffset)].map((_, i) => (
                          <div key={`empty-${i}`} />
                        ))}

                        {[...Array(daysInMonth)].map((_, i) => {
                          const day = i + 1;
                          const isBold = day % 7 === 0;
                          const isSelected = day === selectedDay;

                          return (
                            <button
                              key={day}
                              onClick={() => setSelectedDay(day)}
                              className={`py-4 text-[#797A88] rounded-full transition
                  ${isSelected ? "bg-[#0DD180] font-bold text-white" : "hover:bg-gray-200"}
                  ${isBold ? "font-bold" : "font-medium"}
                `}
                            >
                              {day}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )
                }

              </div>

              <div>
                <button
                  ref={mapRef}
                  onClick={() =>
                    toggleModal('mapInfo')
                  }
                  className="w-[26px]"
                  title="map Info"
                >
                  <img src="/assets/map.png" alt="" />
                </button>
              </div>
              <div className="relative">
                <button
                  onClick={() =>
                    toggleModal('congestionInfo')
                  }
                  className="w-[26px]"
                  title="Congestion Info"
                >
                  <img src="/assets/conjetion.png" alt="" />
                </button>
                {activeModal === "congestionInfo" && (
                  <div className="w-[436px] text-black poppins absolute -right-3 top-[30px] bg-white rounded-[20px] shadow-lg border border-[#E2E1E5] p-4 z-50" >
                    <div className="flex">
                      <div>
                        <p className="text-xl font-semibold text-[#FF5C40]">
                          Congestion Information
                        </p>
                        <p className="text-[#282829]">{congestionInfo}</p>

                      </div>
                      <BsInfoCircle size={25} className='text-gray-400' />
                    </div>
                  </div>
                )}

              </div>
              <div className="relative">
                <button
                  onClick={() => toggleModal("parkingInfo")}
                  className="w-[26px]"
                  title="Parking Info"
                >
                  <img src="/assets/p.png" alt="" />
                </button>
                {activeModal === "parkingInfo" && (
                  <div className="w-[436px] text-black poppins absolute -right-3 top-[30px] bg-white rounded-[20px] shadow-lg border border-[#E2E1E5] p-4 z-50">
                    <div className="flex">
                      <div>
                        <p className="text-xl font-semibold text-[#FF5C40]">
                          Parking Information
                        </p>
                        <p className="text-[#282829]">{parkingInfo}</p>
                      </div>
                      <BsInfoCircle size={25} className='text-gray-400' />
                    </div>


                  </div>
                )}

              </div>
            </div>
          </div>

    {/* ================= MOBILE CARD (ONLY MOBILE) ================= */}
<div className="md:hidden p-4 bg-[#F6F6F7] border border-[#FCF9F6] rounded-[22px] mt-4 space-y-4">

  {/* Location + Day */}
  <div className="md:flex justify-between">
    <div className="md:block flex items-center gap-2">
      <p className="font-semibold">Acton</p>
      <p className="text-sm text-gray-500">2 miles</p>
    </div>
    <div className="md:text-right md:block flex items-center gap-2">
      <p className="font-semibold">Saturday</p>
      <p className="text-sm text-gray-500">Outdoor</p>
    </div>
  </div>

  {/* Class 1 */}
  <div className="md:bg-white rounded-xl border border-[#E1E2E6] p-2 space-y-3">
    <div className="flex justify-between">
      <div>
        <p className="font-bold">Class 1</p>
        <p className="text-sm text-[#384455]">4–7 years</p>
      </div>
      <span className="rounded-[8px] bg-[#F7EBEA] px-3 py-1 text-sm font-semibold text-[#FF5C40]">
        Fully booked
      </span>
    </div>

    <div className="flex items-center gap-1 text-[#384455] text-sm">
      <Clock size={14} /> 9:30am – 10:30am
    </div>

    <button
      className="w-full bg-[#E1E8FF] p-3 rounded-[6px] text-[#042C89] text-xs font-bold"
      onClick={() => navigate("/find-a-class/waiting-list")}
    >
      Add to Waiting List
    </button>
  </div>

  {/* Class 2 */}
  <div className="md:bg-white rounded-xl md:p-4 border border-[#E1E2E6] p-2 space-y-3">
    <div className="flex justify-between">
      <div>
        <p className="font-bold">Class 2</p>
        <p className="text-sm text-[#384455]">8–12 years</p>
      </div>
      <span className="rounded-[8px] bg-[#E9F1EC] px-3 py-1 text-sm font-semibold text-[#34AE56]">
        +4 spaces
      </span>
    </div>

    <div className="flex items-center gap-1 text-[#384455] text-sm">
      <Clock size={14} /> 10:30am – 11:30am
    </div>

    <div className="flex flex-col gap-2">
      <button
        className="border border-[#042C89] p-3 rounded-[6px] text-[#042C89] text-xs font-bold"
        onClick={() => navigate("/find-a-class/book-membership")}
      >
        Book a Membership
      </button>

      <button
        className="bg-[#042C89] p-3 rounded-[6px] text-xs font-bold text-white"
        onClick={() => navigate("/find-a-class/book-free-trial")}
      >
        Book a FREE Trial
      </button>
    </div>
  </div>
</div>

{/* ================= DESKTOP (UNCHANGED) ================= */}
<div className="hidden md:flex p-5 bg-[#F6F6F7] border border-[#FCF9F6] rounded-[22px] mt-4 gap-4">

  {/* 🔥 YOUR ORIGINAL DESKTOP CODE — 100% SAME */}
  <div className="w-[8%] flex flex-col justify-center border-r ps-2 border-r-[#E1E2E6]">
    <p className="font-semibold">Acton</p>
    <p className="text-sm text-gray-500">2 miles</p>
  </div>

  <div className="w-[10%] flex flex-col justify-center border-r border-r-[#E1E2E6] ps-4">
    <p className="font-semibold">Saturday</p>
    <p className="text-sm text-gray-500">Outdoor</p>
  </div>

  <div className="w-[82%]">
    {/* Class 1 */}
    <div className="flex justify-between items-center gap-4">
      <div className="flex gap-4 w-[52%] justify-between pe-3 items-center">
        <p className="font-bold text-[#282829]">Class 1</p>
        <p className="font-medium text-[#384455]">4–7 years</p>
        <div className="flex items-center gap-1 text-[#384455] text-[16px]">
         <img src="/assets/TimeCircle.png" className="w-[18px]" alt="" />  9:30am – 10:30am
        </div>
      </div>

      <div className="w-[13%]">
        <span className="rounded-[8px] bg-[#F7EBEA] px-3 py-1 text-sm font-semibold text-[#FF5C40]">
          Fully booked
        </span>
      </div>

      <div className="w-[35%] grid justify-end">
        <button
          className="bg-[#E1E8FF] p-3 rounded-[6px] text-[#042C89] w-[150px] text-xs font-bold"
          onClick={() => navigate("/find-a-class/waiting-list")}
        >
          Add to Waiting List
        </button>
      </div>
    </div>

    {/* Class 2 */}
    <div className="flex justify-between items-center gap-4 border-t border-[#E1E2E6] mt-2 pt-2">
      <div className="flex gap-4 w-[52%] justify-between pe-3 items-center">
        <p className="font-bold text-[#282829]">Class 2</p>
        <p className=" font-medium text-[#384455]">8–12 years</p>
        <div className="flex items-center gap-1 text-[#384455] text-[16px]">
        <img src="/assets/TimeCircle.png" className="w-[18px]" alt="" /> 10:30am – 11:30am
        </div>
      </div>

      <div className="w-[13%]">
        <span className="rounded-[8px] bg-[#E9F1EC] px-3 py-1 text-sm font-semibold text-[#34AE56]">
          +4 spaces
        </span>
      </div>

      <div className="w-[35%] grid md:grid-cols-2 justify-end">
        <button
          className="border border-[#042C89] p-3 w-[150px] rounded-[6px] text-[#042C89] text-xs font-bold"
        >
          Book a Membership
        </button>
        <button
          className="bg-[#042C89] p-3 rounded-[6px] w-[150px] text-xs font-bold text-white ms-2"
        >
          Book a FREE Trial
        </button>
      </div>
    </div>
  </div>
</div>

        </div>

      </div>




    </div>
  );
}
