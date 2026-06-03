import { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const days = ["M", "T", "W", "T", "F", "S", "S"];

const getEarliestSessionDate = (classDetails) => {
  const allTermGroups = classDetails?.venue?.termGroups || [];
  let earliest = null;
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  allTermGroups.forEach((tg) => {
    (tg.terms || []).forEach((term) => {
      (term.sessionsMap || []).forEach((session) => {
        if (session.sessionDate) {
          const parts = session.sessionDate.split("-");
          if (parts.length === 3) {
            const d = new Date(parts[0], parts[1] - 1, parts[2]);
            if (d >= today) {
              if (!earliest || d < earliest) {
                earliest = d;
              }
            }
          }
        }
      });
    });
  });

  return earliest || null;
};

export default function StepSelectTrialDate({ onNext, classDetails, selectedDate: initialDate }) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [selectedDate, setSelectedDate] = useState(() => {
    if (!initialDate) return null;
    return initialDate instanceof Date ? initialDate : new Date(initialDate);
  });

  const [currentDate, setCurrentDate] = useState(() => {
    if (selectedDate) {
      return new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
    }
    const earliest = getEarliestSessionDate(classDetails);
    return earliest
      ? new Date(earliest.getFullYear(), earliest.getMonth(), 1)
      : new Date(today.getFullYear(), today.getMonth(), 1);
  });

  // ✅ Re-run when classDetails loads asynchronously
  useEffect(() => {
    if (selectedDate) return;
    const earliest = getEarliestSessionDate(classDetails);
    if (earliest) {
      setCurrentDate(new Date(earliest.getFullYear(), earliest.getMonth(), 1));
    }
  }, [classDetails, selectedDate]);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  const startDay = (firstDay.getDay() + 6) % 7;
  const daysInMonth = lastDay.getDate();

  const allTermGroups = classDetails?.venue?.termGroups || [];
  const sessionDates = new Set();

  allTermGroups.forEach((tg) => {
    (tg.terms || []).forEach((term) => {
      (term.sessionsMap || []).forEach((session) => {
        if (session.sessionDate) {
          sessionDates.add(session.sessionDate);
        }
      });
    });
  });

  const isSessionDate = (date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return sessionDates.has(`${y}-${m}-${d}`);
  };

  const isPastDate = (date) => date < today || !isSessionDate(date);
  const isPastSessionDate = (date) => {
    return date < today && isSessionDate(date);
  };

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
              onClick={() => setCurrentDate(new Date(year, month - 1, 1))}
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
              onClick={() => setCurrentDate(new Date(year, month + 1, 1))}
              className="w-[18px] h-[18px] p-1 flex items-center justify-center border rounded-full hover:bg-[#3E3E47] hover:text-white"
            >
              <IoIosArrowForward />
            </button>
          </div>

          {/* Days */}
          <div className="grid grid-cols-7 text-center mb-3">
            {days.map((d, i) => (
              <div key={i} className="text-sm font-semibold text-[#797A88]">
                {d}
              </div>
            ))}
          </div>

          {/* Dates */}
          <div className="grid grid-cols-7 gap-y-2">
            {[...Array(startDay)].map((_, i) => (
              <div key={"empty-" + i} />
            ))}

            {[...Array(daysInMonth)].map((_, i) => {
              const date = new Date(year, month, i + 1);

              const selected =
                selectedDate?.toDateString() === date.toDateString();

              const isSession = isSessionDate(date);

              const disabled = date < today || !isSession;

              const pastSession = isPastSessionDate(date);

              return (
                <button
                  key={i}
                  disabled={disabled}
                  onClick={() => setSelectedDate(date)}
                  className={`w-9 h-9 mx-auto rounded-full text-sm font-bold
        ${selected
                      ? "bg-[#0DD180] text-white"
                      : pastSession
                        ? "bg-red-100 text-red-500 border border-red-300 cursor-not-allowed"
                        : isSession
                          ? "bg-[#00a6e3] text-white hover:bg-[#008cc2]"
                          : "text-[#797A88] opacity-30 cursor-not-allowed"
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

      {/* Footer Buttons */}
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
            ${selectedDate
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