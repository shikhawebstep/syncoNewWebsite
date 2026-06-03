"use client";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import StepSelectTrialDate from "./components/StepSelectTrialDate";
import StepChildrenCount from "./components/StepChildrenCount";
import StepStudents from "./components/StepStudents";
import StepParents from "./components/StepParents";
import StepEmergency from "./components/StepEmergency";
import PaymentStep from "./components/PaymentStep";
import CheckoutStep from "./components/CheckoutStep";
import StepConfirm from "./components/StepConfirm";
import Stepper from "./components/Stepper";

import { BookingContext, BookingProvider } from "./context/BookingContext";

/* ================= CONTENT ================= */
function BookMemberShipContent() {
  const navigate = useNavigate();
  const { step, setStep } = useContext(BookingContext);

  // Stepper calculation
  const stepperStep = step <= 2 ? 1 : step <= 5 ? 2 : 3;
console.log('stepperStep',stepperStep)
  return (
    <div className="poppins px-4 bg-[#F6F6F7] md:py-12 py-40">
      {/* Header */}
      <div className="flex items-center gap-3 md:max-w-[900px] mb-5 m-auto">
        <img
          src="/assets/Arrow.png"
          onClick={() => {
            navigate("/find-a-class");
            localStorage.removeItem("bookingSteps");
            setStep(0)
          }}
          className="w-5 cursor-pointer"
          alt="Back Arrow"
        />
        <p className="text-[#00A6E3] font-semibold text-lg">
          Book a Membership
        </p>
      </div>

      {/* Main Card */}
      <div className={`w-full max-w-[1040px] m-auto bg-[#FDFDFF] rounded-[20px] ${step === 5 ? "md:p-6":"md:p-10"} p-5`}>
        <Stepper currentStep={stepperStep} />

        {step === 0 && <StepSelectTrialDate onNext={() => setStep(1)} />}
        {step === 1 && (
          <StepChildrenCount
            onNext={() => setStep(2)}
            onBack={() => setStep(0)}
          />
        )}
        {step === 2 && (
          <StepStudents
            onNext={() => setStep(3)}
            onBack={() => setStep(1)}
          />
        )}
        {step === 3 && (
          <StepParents
            onNext={() => setStep(4)}
            onBack={() => setStep(2)}
          />
        )}

        {/* ✅ EMERGENCY STEP FIXED */}
        {step === 4 && (
          <StepEmergency
            onNext={() => setStep(5)}
            onBack={() => setStep(3)}
          />
        )}

        {step === 5 && (
          <PaymentStep
            onNext={() => setStep(6)}
            onBack={() => setStep(4)}
          />
        )}
        {step === 6 && (
          <CheckoutStep
            onNext={() => setStep(7)}
            onBack={() => setStep(5)}
          />
        )}
        {step === 7 && <StepConfirm />}
      </div>
    </div>
  );
}

/* ================= PROVIDER WRAPPER ================= */
export default function BookMemberShip() {
  return (
    <BookMemberShipContent />
  );
}
