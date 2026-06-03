"use client";
import { useState, useEffect } from "react";
import StepChildrenCount from "./components/StepChildrenCount";
import StepStudents from "./components/StepStudents";
import StepParents from "./components/StepParents";
import StepConfirm from "./components/StepConfirm";
import Stepper from "./components/Stepper";
import { useNavigate } from "react-router-dom";

export default function WaitingList() {
  const navigate = useNavigate();

  // current step
  const [step, setStep] = useState(() => {
    if (typeof window !== "undefined") {
      const savedStep = localStorage.getItem("waitingListStep");
      return savedStep !== null ? Number(savedStep) : 0;
    }
    return 0;
  });

  // persist step
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("waitingListStep", step);
    }
  }, [step]);

  // shared data
  const [trialDate, setTrialDate] = useState(null);
  const [childrenCount, setChildrenCount] = useState(1);
  const [students, setStudents] = useState([
    {
      firstName: "",
      lastName: "",
      dob: "",
      age: 0,
      gender: "",
      medical: "",
    },
  ]);
  const [parents, setParents] = useState([]);

  // venue & session info
  const venue =
    "The King Fahad Academy, East Acton Lane, London W3 7HD";

  const formattedTrialDate = trialDate
    ? trialDate instanceof Date
      ? trialDate.toLocaleDateString()
      : String(trialDate)
    : "N/A";

  const sessionInfo = {
    area: "Acton",
    day: "Saturday",
    type: "Outdoor",
    date: formattedTrialDate,
    time: "9:30 am – 10:30 am",
    ageGroup: "4–7 Years",
  };

  // Stepper shows only 2 steps visually
  const stepperStep = step <= 1 ? 1 : 2;

  // submit handler
  const handleSubmit = () => {
    console.log("FINAL SUBMIT", {
      students,
      parents,
      sessionInfo,
    });

    // API call here if needed
  };

  const handleCancel = () => {
    localStorage.removeItem("waitingListStep");
    setStep(0);
  };

  return (
    <div className="poppins px-4 bg-[#F6F6F7] md:py-12 py-40">
      {/* Header */}
      <div className="flex items-center gap-3 md:max-w-[900px] mb-5 m-auto">
        <img
          src="/assets/Arrow.png"
          onClick={() => navigate("/find-a-class")}
          className="w-5 cursor-pointer"
          alt=""
        />
        <p className="text-[#00A6E3] font-semibold text-lg">
          Join the waiting list
        </p>
      </div>

      {/* Main Card */}
      <div className="w-full max-w-[1040px] m-auto bg-[#FDFDFF] rounded-[20px] md:p-10 p-5">
        <Stepper currentStep={stepperStep} />

        {/* STEP 0 */}
        {step === 0 && (
          <StepChildrenCount
            value={childrenCount}
            setValue={setChildrenCount}
            onNext={() => setStep(1)}
          />
        )}

        {/* STEP 1 */}
        {step === 1 && (
          <StepStudents
            count={childrenCount}
            students={students}
            setStudents={setStudents}
            onNext={() => setStep(2)}
            onBack={() => setStep(0)}
          />
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <StepParents
            parents={parents}
            setParents={setParents}
            onNext={() => setStep(3)}
            onBack={() => setStep(1)}
          />
        )}

        {/* STEP 3 (CONFIRM) */}
        {step === 3 && (
          <StepConfirm
            venue={venue}
            students={students}
            parents={parents}
            sessionInfo={sessionInfo}
            onBack={() => setStep(2)}
            onCancel={handleCancel}
            onSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  );
}
