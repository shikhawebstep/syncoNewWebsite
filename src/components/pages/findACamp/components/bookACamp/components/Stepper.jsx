import { useContext } from "react";
import { FaCheck } from "react-icons/fa6";
import { BookingContext } from "../context/BookingContext";

export default function Stepper() {
  const { step } = useContext(BookingContext)
  const currentStep = step;
  const steps = [
    {
      id: 1,
      label: "Membership Information",
      mobileLabel: "Member Info",
    },
    {
      id: 2,
      label: "Parent/Student Information",
      mobileLabel: "Parent/Student Info",
    },
    {
      id: 3,
      label: "Payment",
      mobileLabel: "Payment",
    },
  ];

  return (
    <div className="w-full m-auto flex bg-[#FAFAFB] md:p-5 p-3 rounded-2xl items-center md:justify-center mb-[25px] justify-between md:gap-0 gap-1.5">
      {steps.map((step, index) => {
        const isActive = step.id === currentStep;
        const isCompleted = step.id < currentStep;

        return (
          <div key={step.id} className="flex gap-2 items-center">
            {/* Step Circle + Label */}
            <div className="flex items-center gap-3">
              <div
                className={`md:w-[25px] md:h-[25px]  w-[20px] h-[20px] flex items-center justify-center rounded-full capitalize border md:text-sm text-[10px] font-semibold cursor-default ${isCompleted || isActive
                  ? "border-green-500 text-green-500"
                  : "border-gray-300 text-[#797A88]"
                  }`}
              >
                {isCompleted ? <FaCheck className="w-4 h-4" /> : step.id}
              </div>

              {/* Desktop label */}
              <span
                className={`md:text-[13px] md:block capitalize hidden text-[12px] ${isActive || isCompleted
                  ? "text-[#34353B] font-semibold"
                  : "text-[#797A88] font-normal"
                  }`}
              >
                {step.label}
              </span>

              {/* Mobile label */}
              <span
                className={`hidden  text-[12px] ${isActive || isCompleted
                  ? "text-[#34353B] font-semibold"
                  : "text-[#797A88] font-normal"
                  }`}
              >
                {step.mobileLabel}
              </span>
            </div>

            {/* Connector */}
            {index < steps.length - 1 && (
              <div className="md:mx-8 mx-3 md:w-[60px] w-[45px]  h-[1px] bg-[#9E9FAA]" />
            )}
          </div>
        );
      })}
    </div>
  );
}