"use client";

import { useState,useEffect } from "react";
import StepSelectTrialDate from "./components/StepSelectTrialDate";
import StepChildrenCount from "./components/StepChildrenCount";
import StepStudents from "./components/StepStudents";
import StepParents from "./components/StepParents";
import StepConfirm from "./components/StepConfirm";
import Stepper from "./components/Stepper";
import { useNavigate } from "react-router-dom";
export default function BookFreeTrial() {
  const navigate = useNavigate();

  // current step
  const [step, setStep] = useState(() => {
    if (typeof window !== "undefined") {
      const savedStep = localStorage.getItem("bookFreeTrialStep");
      return savedStep !== null ? Number(savedStep) : 0;
    }
    return 0;
  });

  // Save step to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("bookFreeTrialStep", step);
    }
  }, [step]);
  // shared data
  const [trialDate, setTrialDate] = useState(null);
  const [childrenCount, setChildrenCount] = useState(1);
  const [students, setStudents] = useState([
    {
      firstName: "",
      lastName: "",
      dob: '',
      age: 0,
      gender: '',
      medical: ''
    }
  ]);
  const [parents, setParents] = useState([]);

  // example dynamic venue and session info (you might want to get these from API or props)
  const venue = "The King Fahad Academy, East Acton Lane, London W3 7HD";

  const formattedTrialDate = trialDate
    ? trialDate instanceof Date
      ? trialDate.toLocaleDateString()
      : String(trialDate)
    : "";

  const sessionInfo = {
    area: "Acton",
    day: "Saturday",
    type: "Outdoor",
    date: formattedTrialDate || "N/A", // use formatted trialDate or fallback
    time: "9:30 am – 10:30 am",
    ageGroup: "4–7 Years",
  };

  // Stepper shows only 2 steps visually
  const stepperStep = step <= 2 ? 1 : 2;

  return (
    <div className="poppins px-4 bg-[#F6F6F7] py-12">
      {/* Header */}
      <div className="flex items-center gap-3 md:max-w-[900px] mb-5 m-auto">
        <img src="/assets/Arrow.png" onClick={()=> navigate('/find-a-class')} className="w-5 cursor-pointer" alt="" />
        <p className="text-[#00A6E3] font-semibold text-lg">Book a Free Trial</p>
      </div>

      {/* Main Card */}
      <div className="w-full max-w-[1040px] m-auto bg-[#FDFDFF] rounded-[20px]  md:p-10 p-5">
        <Stepper currentStep={stepperStep} />

        {/* STEP 0 */}
        {step === 0 && (
          <StepSelectTrialDate
            selectedDate={trialDate}
            onNext={(date) => {
              setTrialDate(date);
              setStep(1);
            }}
          />
        )}

        {/* STEP 1 */}
        {step === 1 && (
          <StepChildrenCount
            value={childrenCount}
            setValue={setChildrenCount}
            onBack={() => setStep(0)}
            onNext={() => setStep(2)}
          />
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <StepStudents
            count={childrenCount}
            students={students}
            setStudents={setStudents}
            onNext={() => setStep(3)}
            onBack={() => setStep(1)}
          />
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <StepParents
            parents={parents}
            setParents={setParents}
            onNext={() => setStep(4)}
            onBack={() => setStep(2)}
          />
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <StepConfirm
            venue={venue}
            students={students}
            parents={parents}
            sessionInfo={sessionInfo}
            onBack={() => setStep(3)}
            onCancel={() => setStep(0)}
          />
        )}
      </div>
    </div>
  );
}
