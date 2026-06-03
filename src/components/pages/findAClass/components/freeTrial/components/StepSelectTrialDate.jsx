import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const days = ["M", "T", "W", "T", "F", "S", "S"];

export default function StepSelectTrialDate({ onNext }) {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  const startDay = (firstDay.getDay() + 6) % 7;
  const daysInMonth = lastDay.getDate();

  const isPastDate = (date) =>
    date < new Date(today.setHours(0, 0, 0, 0));

  return (
    <div className="poppins md:mt-15 mt-10">
      {/* Title */}
      <p className="text-center md:text-[18px] font-semibold mb-7 text-[#282829]">
        When would you like to try our classes?
      </p>

      {/* Calendar */}
      <div className="flex justify-center">
        <div className="bg-[#F6F6F7] shadow-sm rounded-xl p-6 w-[422px]">
          {/* Header */}
          <div className="flex items-center justify-between max-w-[80%] m-auto mb-7">
            <button
              onClick={() =>
                setCurrentDate(new Date(year, month - 1, 1))
              }
              className="w-[18px] h-[18px] p-1 flex items-center justify-center border rounded-full hover:bg-[#3E3E47] hover:text-white"
            >
              <IoIosArrowBack />
            </button>

            <span className="font-semibold text-[#3E3E47]">
              {currentDate.toLocaleString("default", {
                month: "long",
                year: "numeric",
              })}
            </span>

            <button
              onClick={() =>
                setCurrentDate(new Date(year, month + 1, 1))
              }
              className="w-[18px] h-[18px] p-1 flex items-center justify-center border rounded-full hover:bg-[#3E3E47] hover:text-white"
            >
              <IoIosArrowForward />
            </button>
          </div>

          {/* Days */}
          <div className="grid grid-cols-7 text-center mb-3">
            {days.map((d) => (
              <div
                key={d}
                className="text-sm font-semibold text-[#797A88]"
              >
                {d}
              </div>
            ))}
          </div>

          {/* Dates */}
          <div className="grid grid-cols-7 gap-y-2">
            {[...Array(startDay)].map((_, i) => (
              <div key={i} />
            ))}

            {[...Array(daysInMonth)].map((_, i) => {
              const date = new Date(year, month, i + 1);
              const selected =
                selectedDate?.toDateString() ===
                date.toDateString();

              return (
                <button
                  key={i}
                  disabled={isPastDate(date)}
                  onClick={() => setSelectedDate(date)}
                  className={`w-9 h-9 mx-auto rounded-full text-sm
                    ${
                      selected
                        ? "bg-[#0DD180] text-white font-bold"
                        : isPastDate(date)
                        ? "text-[#797A88] cursor-not-allowed"
                        : "text-[#34353B] font-bold hover:bg-gray-200"
                    }
                  `}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 🔹 Footer Buttons */}
      <div className="flex justify-center gap-3 mt-8">
        {/* Back */}
        <button
          disabled
          className="px-6 py-3 text-[14px] rounded-[6px] bg-[#E1E2E6] text-white font-bold cursor-not-allowed"
        >
          Back
        </button>

        {/* Next */}
        <button
          onClick={() => onNext(selectedDate)}
          disabled={!selectedDate}
          className={`px-6 py-3 text-[14px] rounded-[6px] font-bold text-white
            ${
              selectedDate
                ? "bg-[#042C89] hover:bg-[#031f63]"
                : "bg-[#042C89] opacity-40 cursor-not-allowed"
            }
          `}
        >
          Next
        </button>
      </div>
    </div>
  );
}
