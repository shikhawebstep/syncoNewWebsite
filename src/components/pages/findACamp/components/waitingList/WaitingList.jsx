"use client";
import { useState, useEffect } from "react";
import { scrollToTopSmooth } from "../../../../../utils/scroll";
import StepChildrenCount from "./components/StepChildrenCount";
import StepStudents from "./components/StepStudents";
import StepParents from "./components/StepParents";
import StepConfirm from "./components/StepConfirm";
import Stepper from "./components/Stepper";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function WaitingList() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const classId = searchParams.get("classId");



  // current step
  const [step, setStep] = useState(0);

  useEffect(() => {
    scrollToTopSmooth(800); // 800ms slow smooth scroll
  }, [step]);

  // shared data
  const [trialDate] = useState(null);
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
  const [emergency, setEmergency] = useState({
    sameAsAbove: true,
    emergencyFirstName: "",
    emergencyLastName: "",
    emergencyPhoneNumber: "",
    emergencyRelation: ""
  });
  const [classDetails, setClassDetails] = useState(null);
  const [venueClasses, setVenueClasses] = useState([]);

  useEffect(() => {
    if (classId) {
      fetch(`https://api.grabbite.com/api/open/find-a-camp/${classId}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("Fetched class details on Waiting List:", data);

          const classData = data?.data;
          setClassDetails(classData);

          if (classData?.venueClasses) {
            // Filter classes with capacity = 0
            const zeroCapacityClasses = classData.venueClasses.filter(
              (cls) => cls.capacity === 0
            );

            setVenueClasses(zeroCapacityClasses);
          }
        })
        .catch((err) => console.error("Error fetching class details:", err));
    }
  }, [classId]);



  const venue = classDetails?.venue?.name || "The King Fahad Academy, East Acton Lane, London W3 7HD";

  const formattedTrialDate = trialDate
    ? trialDate instanceof Date
      ? trialDate.toLocaleDateString()
      : String(trialDate)
    : "N/A";

  const timeString = classDetails?.startTime && classDetails?.endTime
    ? `${classDetails.startTime} - ${classDetails.endTime}`
    : "9:30 am – 10:30 am";

  const sessionInfo = {
    area: classDetails?.venue?.area || "Acton",
    day: classDetails?.day || "Saturday",
    type: classDetails?.venue?.facility || "Outdoor",
    date: formattedTrialDate,
    time: timeString,
    ageGroup: classDetails?.className || "4–7 Years",
  };

  // Stepper shows only 2 steps visually
  const stepperStep = step <= 1 ? 1 : 2;

  // submit handler
  const handleBookNow = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const rawData = {
      venueId: classDetails?.venue?.id || 1,
      holidayCampId: classDetails?.id || 13,
      totalStudents: childrenCount,
      students: students.map((s) => ({
        studentFirstName: s.firstName,
        studentLastName: s.lastName,
        dateOfBirth: s.dob,
        age: parseInt(s.age) || 0,
        gender: s.gender,
        medicalInformation: s.medical || "no",
        class: s.class || "",
        time: s.time || "",
        classScheduleId: s.classScheduleId || classDetails?.id || 1
      })),
      parents: parents.map((p) => ({
        parentFirstName: p.parentFirstName,
        parentLastName: p.parentLastName,
        parentEmail: p.parentEmail,
        parentPhoneNumber: p.phoneNumber,
        dialCode: p.dialCode || "",
        relationToChild: p.relationChild || "Mother",
        howDidYouHear: p.howDidHear || "Instagram",
        interestReason: p.interestReason,
        interestReasonOther: p.interestReasonOther,
      })),

    };

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(rawData),
      redirect: "follow"
    };

    try {
      const response = await fetch("https://api.grabbite.com/api/open/book-holiday-camp/waiting-list/create", requestOptions);
      const result = await response.json();
      console.log("Waiting list result:", result);

      if (!response.ok) {
        return { success: false, message: result.message || "Submission failed", error: result.error };
      }
      return { success: true };
    } catch (error) {
      console.error("Waiting list error:", error);
      return { success: false, message: error.message };
    }
  };

  const clearData = () => {
    setStep(0);
    setChildrenCount(1);
    setStudents([
      {
        firstName: "",
        lastName: "",
        dob: "",
        age: 0,
        gender: "",
        medical: "",
      },
    ]);
    setParents([]);
    setEmergency({
      sameAsAbove: true,
      emergencyFirstName: "",
      emergencyLastName: "",
      emergencyPhoneNumber: "",
      emergencyRelation: ""
    });
  }

  const handleCancel = () => {
    clearData();
  };

  return (
    <div className="poppins px-4 bg-[#F6F6F7] md:py-12 py-6">
      {/* Header */}
      <div className="flex items-center gap-3 md:max-w-[900px] mb-5 m-auto">
        <img
          src="/assets/Arrow.png"
          onClick={() => {
            clearData();
            navigate("/find-a-camp");
          }}
          className="w-5 cursor-pointer"
          alt=""
        />
        <p className="text-[#00A6E3] font-semibold text-lg">
          Join the waiting list
        </p>
      </div>

      {/* Main Card */}
      <div className="w-full max-w-[1040px] m-auto bg-[#FDFDFF] rounded-[20px] lg:p-10 p-3">
        <Stepper currentStep={stepperStep} />

        <div key={step} className="animate-fade-slide-in">
          {/* STEP 0 */}
          {step === 0 && (
            <StepChildrenCount
              value={childrenCount}
              setValue={setChildrenCount}
              onNext={() => setStep(1)}
              onCancel={handleCancel}
            />
          )}

          {/* STEP 1 */}
          {step === 1 && (
            <StepStudents
              count={childrenCount}
              students={students}
              setStudents={setStudents}
              onNext={(hasValidationErrors) => {
                if (hasValidationErrors) {
                  console.log("Cannot proceed, validation errors exist.");
                  return;
                }
                setStep(2);
              }}
              onBack={() => setStep(0)}
              classDetails={classDetails}
              venueClasses={venueClasses}
            />
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <StepParents
              parents={parents}
              setParents={setParents}
              emergency={emergency}
              setEmergency={setEmergency}
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
              onConfirm={handleBookNow}
            />
          )}
        </div>
      </div>
    </div>
  );
}
