import { useContext, useState } from "react";
import { X } from "lucide-react";
import { useToast, Toast } from "../../../../Common/Toast";
import { BookingContext } from "../context/BookingContext";
export default function StepConfirm({ classDetails }) {

  const { toasts, addToast, removeToast } = useToast();
  const { students, trialDate } = useContext(BookingContext);
  console.log('classDetails', classDetails)
  const formatDisplayDate = (date) => {
    if (!date) return "";
    const d = new Date(date);
    return d.toLocaleDateString("en-GB"); // 10/05/2026 style
  };
  return (
    <div className="max-w-[920px] mx-auto text-center md:mt-16 mt-10">
      <Toast toasts={toasts} removeToast={removeToast} />
      {/* Heading */}
      <p className="text-[18px] text-[18px] text-[#282829] font-semibold mb-2">
        Thanks, your all set!
      </p>
      <p className="text-[#5F5F6D] text-[14px] mb-7 mt-1">
        Please see below for a summary of your booking
      </p>

      {/* Card */}
      <div className="bg-white max-w-[672px] m-auto rounded-2xl border border-[#E2E1E5] p-3">
        {/* Venue Bar */}
        <div className="bg-[#00A6E3] text-white rounded-xl px-6 py-4 flex items-center justify-center gap-3 mb-3">
          <img src="/assets/location-01.png" className="w-5 h-5" />
          <p className="font-semibold text-left">
            Venue: <span className="font-normal">{classDetails?.venue?.name}, {classDetails?.venue?.address}, {classDetails?.venue?.postal_code || classDetails?.venue?.postalCode}</span>
          </p>
        </div>

        {/* Session Info */}
        <div className="bg-[#F6F6F7] border border-[#FCF9F6] rounded-xl md:p-6 p-3 mb-1 thankyou">
          <div className="grid grid-cols-3 items-center mb-4 max-w-[400px] pe-2 m-auto">
            <div className="text-left ps-4">
              <p className="font-semibold text-[14px]">{classDetails?.venue?.area}</p>
            </div>

            <div className="border-x-4 border-white">
              <p className="font-semibold">{classDetails?.day}</p>
              <p className="text-sm text-gray-500">{classDetails?.venue?.facility}</p>
            </div>

            <div className="text-left ps-8">
              <p className="font-semibold">Date</p>
              <p className="text-sm text-gray-500">
                {new Date().toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </p>            </div>
          </div>

          <div className="border-t-4 border-[#FDFDFF]  pt-4 space-y-3">
            <div className="md:max-w-[88%] m-auto grid gap-3">
              {students.length > 0 ? (
                students.map((student, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-3 items-center justify-between text-sm text-gray-700 gap-4 md:border-b-0 border-b-4 border-white last:border-0 pb-3 last:pb-0"
                  >
                    <div className="md:flex items-center text-center md:text-left justify-center gap-2 truncate">
                      <img src="/assets/User.png" alt="user" className="w-4 h-4 m-auto md:m-0 mb-2 md:mb-0 text-sky-500" />
                      <span className="truncate">
                        {student?.firstName || student?.name
                          ? `${student?.firstName ?? student?.name} ${student?.lastName ?? ""}`.trim()
                          : "Unnamed Student"}
                      </span>
                    </div>

                    <div className="md:flex items-center text-center md:text-left justify-center gap-2 truncate">
                      <img src="/assets/content.png" alt="content" className="w-4 h-4 m-auto md:m-0 mb-2 md:mb-0 text-sky-500" />
                      <span className="truncate">{student?.class}</span>
                    </div>

                    <div className="md:flex items-center text-center md:text-left justify-center gap-2 truncate">
                      <img src="/assets/clock.png" alt="clock" className="w-4 h-4 m-auto md:m-0 mb-2 md:mb-0 text-sky-500" />
                      <span className="text-left truncate">{student?.time}</span>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500">No students added yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className="text-start p-10 lg:px-30 rounded-2xl mt-5 thankyouBanner"
        style={{
          backgroundImage: "url('/assets/Sessioncard.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h4 className="recline text-[#042C89]">Order your <span className="text-[#00A6E3] block">uniform today</span></h4>
        <p className="text-[14px] font-semibold mb-5 text-[#042C89]">Uniform is compulsory. Use your discount code <br /> below and get 50% off.</p>
        <button className="bg-white recline uppercase border-dotted border-2 border-[#00A6E3] text-[#00A6E3] rounded-full px-4 py-2">samba 10</button>
        <button className="bg-[#00A6E3] text-white rounded-full px-4 py-2 capitalize ms-2">buy now</button>
      </div>




    </div>
  );
}
