"use client";

import { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { scrollToTopSmooth } from "../../../../../utils/scroll";

import StepChildrenCount from "./components/StepChildrenCount";
import StepStudents from "./components/StepStudents";
import StepParents from "./components/StepParents";
import StepEmergency from "./components/StepEmergency";
import CheckoutStep from "./components/CheckoutStep";
import StepConfirm from "./components/StepConfirm";
import Stepper from "./components/Stepper";

import { BookingContext, BookingProvider } from "./context/BookingContext";

/* ================= CONTENT ================= */
function BookACamp() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const classId = searchParams.get("classId");
  const skipDate = searchParams.get("skipDate");

  const [classDetails, setClassDetails] = useState(null);
  const [venueClasses, setVenueClasses] = useState([]);

  useEffect(() => {
    if (classId) {
      fetch(`https://api.grabbite.com/api/open/find-a-camp/${classId}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("Fetched class details on Membership:", data);

          const details = data?.data;

          setClassDetails(details);
          setCampDates(details?.venue?.holidayCampDates);

          // ✅ Only classes with capacity > 0
          const availableClasses = details?.venueClasses?.filter(
            (cls) => Number(cls.capacity) > 0
          );

          setVenueClasses(availableClasses || []);
        })
        .catch((err) =>
          console.error("Error fetching class details:", err)
        );
    }
  }, [classId]);

  const { step, setStep, setSelectedPlan, setCampDates, resetBookingData } = useContext(BookingContext);

  useEffect(() => {
    scrollToTopSmooth(800); // 800ms slow smooth scroll
  }, [step]);

  useEffect(() => {
    if (skipDate === "true" && step === 0) {
      setStep(1);
    }
  }, [skipDate, step, setStep]);

  // Stepper calculation
  const stepperStep = step <= 2 ? 1 : step <= 5 ? 2 : 3;
  return (
    <div className="poppins px-4 bg-[#F6F6F7] md:py-12 py-6 py-8">
      {/* Header */}
      <div className="flex items-center gap-3 md:max-w-[900px] mb-5 m-auto">
        <img
          src="/assets/Arrow.png"
          onClick={() => {
            resetBookingData();
            navigate("/find-a-camp");
            localStorage.removeItem("bookingSteps");
          }}
          className="w-5 cursor-pointer"
          alt="Back Arrow"
        />
        <p className="text-[#00A6E3] font-semibold text-lg">
          Book a Camp
        </p>
      </div>

      {/* Main Card */}
      <div className={`w-full max-w-[1040px] m-auto bg-[#FDFDFF] rounded-[20px] ${step === 5 ? "md:p-6" : "md:p-10"} p-5`}>
        <Stepper currentStep={stepperStep} />

        <div key={step} className="animate-fade-slide-in">
          {step === 0 && (
            <StepChildrenCount
              onNext={() => setStep(1)}
              classDetails={classDetails}
            />
          )}
          {step === 1 && (
            <StepStudents
              onNext={() => setStep(2)}
              onBack={() => setStep(0)}
              classDetails={classDetails}
              venueClasses={venueClasses}
            />
          )}
          {step === 2 && (
            <StepParents
              onNext={() => setStep(3)}
              onBack={() => setStep(1)}
            />
          )}

          {/* ✅ EMERGENCY STEP FIXED */}
          {step === 3 && (
            <StepEmergency
              onNext={() => setStep(4)}
              onBack={() => setStep(2)}
            />
          )}

          {step === 4 && (
            <CheckoutStep
              onNext={() => setStep(5)}
              onBack={() => setStep(3)}
              classDetails={classDetails}
              venueClasses={venueClasses}
            />
          )}
          {step === 5 && <StepConfirm classDetails={classDetails} />}
        </div>
      </div>
    </div>
  );
}

/* ================= PROVIDER WRAPPER ================= */
export default function BookMemberShip() {
  return (
    <BookingProvider>
      <BookACamp />
    </BookingProvider>
  );
}