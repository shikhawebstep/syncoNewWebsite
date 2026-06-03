"use client";

import { useState, useEffect } from "react";
import { scrollToTopSmooth } from "../../../../../utils/scroll";
import StepSelectTrialDate from "./components/StepSelectTrialDate";
import StepChildrenCount from "./components/StepChildrenCount";
import StepStudents from "./components/StepStudents";
import StepParents from "./components/StepParents";
import StepConfirm from "./components/StepConfirm";
import Stepper from "./components/Stepper";
import { useNavigate, useSearchParams } from "react-router-dom";
export default function BookFreeTrial() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const classId = searchParams.get("classId");

  useEffect(() => {
    if (classId) {
      fetch(`https://api.grabbite.com/api/open/find-class/${classId}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("Fetched class details on Free Trial:", data);
        })
        .catch((err) => console.error("Error fetching class details:", err));
    }
  }, [classId]);

  // current step
  const [step, setStep] = useState(0);

  useEffect(() => {
    scrollToTopSmooth(800); // 800ms slow smooth scroll
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
  const [emergency, setEmergency] = useState({
    emergencyFirstName: "",
    emergencyLastName: "",
    emergencyPhoneNumber: "",
    emergencyRelation: ""
  });
  const [classDetails, setClassDetails] = useState(null);
  const [venueClasses, setVenueClasses] = useState([]);

  useEffect(() => {
    if (classId) {
      fetch(`https://api.grabbite.com/api/open/find-class/${classId}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("Fetched class details:", data);
          setClassDetails(data?.data);
        })
        .catch((err) => console.error("Error fetching class details:", err));
    }
  }, [classId]);

  useEffect(() => {
    if (classDetails?.venue?.id) {
      fetch("https://api.grabbite.com/api/open/find-class")
        .then((res) => res.json())
        .then((data) => {
          const venue = data?.data?.find(v => v.venueId === classDetails.venue.id);
          if (venue && venue.classes) {
            const flatClasses = Object.entries(venue.classes).flatMap(([day, classList]) =>
              classList.map(c => ({ ...c, day }))
            );
            setVenueClasses(flatClasses);
          }
        })
        .catch((err) => console.error("Error fetching venue classes:", err));
    }
  }, [classDetails]);
  const formatDateSafe = (dateInput) => {
    console.log('dateInput', dateInput);
    if (!dateInput) return null;

    let date;

    // Handle DD/MM/YYYY format
    if (typeof dateInput === "string" && /^\d{2}\/\d{2}\/\d{4}$/.test(dateInput)) {
      const [day, month, year] = dateInput.split("/");
      date = new Date(`${year}-${month}-${day}`);
    } else {
      date = new Date(dateInput);
    }

    if (isNaN(date.getTime())) return null;

    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  };
  const handleBookNow = async () => {
    const rawData = {
      venueId: classDetails?.venueId || 51,
      trialDate: formatDateSafe(trialDate),
      totalStudents: childrenCount,
      students: students.map(s => ({
        studentFirstName: s.firstName,
        studentLastName: s.lastName,
        dateOfBirth: formatDateSafe(s.dob),
        age: parseInt(s.age) || 0,
        gender: s.gender,
        medicalInformation: s.medical || "None",
        classScheduleId: s.classScheduleId || classDetails?.id || 80
      })),
      parents: parents.map(p => ({
        parentFirstName: p.parentFirstName,
        parentLastName: p.parentLastName,
        parentEmail: p.parentEmail,
        parentPhoneNumber: p.phoneNumber,
        dialCode: p.dialCode || "",
        relationToChild: p.relationChild || "Mother",
        howDidYouHear: p.howDidHear || "Search",
        interestReason: p.interestReason || "",
        interestReasonOther: p.interestReasonOther || "",
      })),

    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(rawData),
      redirect: "follow"
    };

    try {
      const response = await fetch("https://api.grabbite.com/api/open/book-free-trial/create", requestOptions);
      const result = await response.json();
      console.log("Booking result:", result);

      if (!response.ok) {
        return { success: false, message: result.message || "Submission failed", error: result.error };
      }
      return { success: true };
    } catch (error) {
      console.error("Booking error:", error);
      return { success: false, message: error.message };
    }
  };

  const venue = classDetails?.venue?.name + ", " + classDetails?.venue?.address + ", " + classDetails?.venue?.postal_code || classDetails?.venue?.postalCode || "The King Fahad Academy, East Acton Lane, London W3 7HD";

  const formattedTrialDate = trialDate
    ? trialDate instanceof Date
      ? trialDate.toLocaleDateString()
      : String(trialDate)
    : "";

  const timeString = classDetails?.startTime && classDetails?.endTime
    ? `${classDetails.startTime} - ${classDetails.endTime}`
    : "9:30 am – 10:30 am";

  const sessionInfo = {
    area: classDetails?.venue?.area || "Acton",
    day: classDetails?.day || "Saturday",
    type: classDetails?.venue?.facility || "Outdoor",
    date: formattedTrialDate || "N/A", // use formatted trialDate or fallback
    time: timeString,
    ageGroup: classDetails?.className || "4–7 Years",
  };

  // Stepper shows only 2 steps visually
  const stepperStep = step <= 2 ? 1 : 2;

  return (
    <div className="poppins px-4 bg-[#F6F6F7] md:py-12 py-6">
      {/* Header */}
      <div className="flex items-center gap-3 md:max-w-[900px] mb-5 m-auto">
        <img src="/assets/Arrow.png" onClick={() => navigate('/find-a-class')} className="w-5 cursor-pointer" alt="" />
        <p className="text-[#00A6E3] font-semibold text-lg">Book a Free Trial</p>
      </div>

      {/* Main Card */}
      <div className="w-full max-w-[1040px] m-auto bg-[#FDFDFF] rounded-[20px]  md:p-10 p-5">
        <Stepper currentStep={stepperStep} />

        <div key={step} className="animate-fade-slide-in">
          {/* STEP 0 */}
          {step === 0 && (
            <StepSelectTrialDate
              selectedDate={trialDate}
              onNext={(date) => {
                setTrialDate(date);
                setStep(1);
              }}
              classDetails={classDetails}
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
              classDetails={classDetails}
              venueClasses={venueClasses}
            />
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <StepParents
              parents={parents}
              setParents={setParents}
              emergency={emergency}
              setEmergency={setEmergency}
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
              onConfirm={handleBookNow}
            />
          )}
        </div>
      </div>
    </div>
  );
}
