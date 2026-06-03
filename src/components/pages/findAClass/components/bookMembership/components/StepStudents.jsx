import { useState, useEffect, useContext, useCallback } from "react";
import { ChevronDown } from "lucide-react";
import { BookingContext } from "../context/BookingContext";

const StepStudent = ({ index, title, totalStudents, errors, setErrors, venueClasses }) => {
  const { students, setStudents } = useContext(BookingContext);
  const data = students[index] || {};

  const [open, setOpen] = useState(totalStudents === 1);

  function calculateAge(dob) {
    if (!dob || dob.length < 10) return "";

    const parts = dob.split("/");
    if (parts.length !== 3) return "";

    const [day, month, year] = parts.map(Number);

    // Validate ranges
    if (month < 1 || month > 12) return "";
    if (day < 1 || day > 31) return "";
    if (year < 1900 || year > new Date().getFullYear()) return "";

    const birthDate = new Date(year, month - 1, day);

    // Check if date actually exists (e.g. 31/02 is invalid)
    if (
      birthDate.getFullYear() !== year ||
      birthDate.getMonth() !== month - 1 ||
      birthDate.getDate() !== day
    ) return "";

    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age >= 0 ? age.toString() : "";
  }

  const updateStudent = useCallback(
    (idx, newData) => {
      setStudents((prev) => {
        const copy = [...prev];
        copy[idx] = newData;
        return copy;
      });
    },
    [setStudents]
  );

  const handleFieldChange = useCallback(
    (field, value) => {
      if (field === "dob") {
        const age = calculateAge(value);
        updateStudent(index, { ...data, dob: value, age });
      } else {
        updateStudent(index, { ...data, [field]: value });
      }

      setErrors((prevErrors) => {
        const updatedErrors = [...prevErrors];
        if (updatedErrors[index]) {
          const { [field]: _, ...rest } = updatedErrors[index];
          updatedErrors[index] = rest;
        }
        return updatedErrors;
      });
    },
    [calculateAge, data, index, setErrors, updateStudent]
  );

  const handleDOBChange = useCallback(
    (idx, rawValue) => {
      let val = rawValue.replace(/[^\d]/g, "");
      if (val.length >= 3 && val.length <= 4)
        val = val.slice(0, 2) + "/" + val.slice(2);
      else if (val.length > 4)
        val = val.slice(0, 2) + "/" + val.slice(2, 4) + "/" + val.slice(4);
      handleFieldChange("dob", val);
    },
    [handleFieldChange]
  );

  const inputClass = (field) => {
    const errObj = errors[index] || {};
    return `mt-1 w-full mainShadow capitalize p-3 font-normal placeholder:font-normal placeholder:text-[#494949] placeholder:text-[15px] rounded-md text-[#494949] text-sm border ${errObj[field] ? "border-red-500" : "border-transparent"
      }`;
  };

  const getDateBounds = (className) => {
    if (!className) return {};
    const match = className.match(/(\d+)\s*[-to]+\s*(\d+)/i);
    if (match) {
      const minAge = parseInt(match[1], 10);
      const maxAge = parseInt(match[2], 10);
      const today = new Date();

      const formatLocal = (d) => {
        const y = d.getFullYear();
        const m = String(d.getMonth() + 1).padStart(2, "0");
        const day = String(d.getDate()).padStart(2, "0");
        return `${y}-${m}-${day}`;
      };

      const minDateObj = new Date(today.getFullYear() - maxAge - 1, today.getMonth(), today.getDate() + 1);
      const maxDateObj = new Date(today.getFullYear() - minAge, today.getMonth(), today.getDate());

      return { min: formatLocal(minDateObj), max: formatLocal(maxDateObj) };
    }
    return {};
  };

  const { min: minDob, max: maxDob } = getDateBounds(data.class);

  return (
    <div className={`${index > 0 ? "border-t border-gray-200" : ""} poppins py-4`}>
      {/* Header */}
      <div
        className={`flex items-center ${totalStudents > 1
          ? "justify-between cursor-pointer"
          : "justify-center md:justify-between"
          }`}
        onClick={() => totalStudents > 1 && setOpen(!open)}
      >
        <p className="text-sm text-[18px] md:text-left text-center font-semibold text-[#282829]">
          {totalStudents > 1 ? title : "Student Information"}
        </p>
        {totalStudents > 1 && (
          <ChevronDown
            className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          />
        )}
      </div>

      {(totalStudents === 1 || open) && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
          {/* First Name */}
          <div>
            <label className="text-[14px] text-[#282829] font-normal">First name<span className="text-red-500 ml-0.5">*</span></label>
            <input
              value={data.firstName || ""}
              placeholder="Enter first name"
              onChange={(e) => handleFieldChange("firstName", e.target.value)}
              className={inputClass("firstName")}
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="text-[14px] text-[#282829] font-normal">Last name<span className="text-red-500 ml-0.5">*</span></label>
            <input
              placeholder="Enter last name"
              value={data.lastName || ""}
              onChange={(e) => handleFieldChange("lastName", e.target.value)}
              className={inputClass("lastName")}
            />
          </div>

          {/* DOB */}
          <div>
            <label className="text-[14px] text-[#282829] font-normal">
              Date of Birth<span className="text-red-500 ml-0.5">*</span>
            </label>
            <input
              id={`student-${index}-dateOfBirth`}
              type="text"
              value={data.dob || ""}
              onChange={(e) => {
                handleDOBChange(index, e.target.value);
                if (errors[index]?.dob) {
                  const newErrs = [...errors];
                  newErrs[index] = { ...newErrs[index], dob: null };
                  setErrors(newErrs);
                }
              }}
              placeholder="DD/MM/YYYY (e.g., 15/10/2026)"
              className={`w-full mainShadow mt-2 text-[#494949] font-normal placeholder:text-[#494949] placeholder:font-normal ${errors[index]?.dob ? 'border-[#F04438]' : 'border-gray-300'} rounded-lg p-3 text-base`}
              maxLength={10}
            />
            {errors[index]?.dob && (
              <p className="text-red-500 text-xs mt-1">{errors[index].dob}</p>
            )}
          </div>

          {/* Age */}
          <div>
            <label className="text-[14px] text-[#282829] font-normal">Age:</label>
            <input
              readOnly
              value={data.age || ""}
              placeholder="Automatic entry"
              className="mt-1 placeholder:text-[#494949] placeholder:font-normal font-normal placeholder:text-[15px] w-full mainShadow p-3 rounded-md text-sm text-[#494949]"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="text-[14px] text-[#282829] font-normal capitalize">Gender<span className="text-red-500 ml-0.5">*</span></label>
            <select
              value={data.gender || ""}
              onChange={(e) => handleFieldChange("gender", e.target.value)}
              className={inputClass("gender")}
            >
              <option value="">Enter gender</option>
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
          </div>

          {/* Medical */}
          <div>
            <label className="text-[14px] text-[#282829] font-normal">Medical information</label>
            <input
              placeholder="Enter medical information"
              value={data.medical || ""}
              onChange={(e) => handleFieldChange("medical", e.target.value)}
              className="mt-1 w-full mainShadow capitalize text-[#494949] font-normal placeholder:text-[#494949] placeholder:font-normal placeholder:text-[15px] p-3 rounded-md text-sm"
            />
          </div>

          {/* Class */}
          <div>
            <label className="text-[14px] text-[#282829] font-normal">Class/Level:</label>
            {index === 0 ? (
              <input
                readOnly
                value={`${data?.class || ""} ${data?.level ? `(${data.level})` : ""}`.trim()}
                className="mt-1 w-full mainShadow capitalize p-3 rounded-md text-sm text-[#494949] font-normal placeholder:text-[#494949] placeholder:font-normal bg-gray-100 cursor-not-allowed border outline-none"
              />
            ) : (
              <select
                value={data.classScheduleId || ""}
                onChange={(e) => {
                  const selectedId = e.target.value;
                  const selectedClass = venueClasses?.find(c => c.classId.toString() === selectedId);
                  if (selectedClass) {
                    updateStudent(index, {
                      ...data,
                      classScheduleId: selectedClass.classId,
                      class: selectedClass.className,
                      time: selectedClass.time
                    });
                  }
                }}
                className={inputClass("class")}
              >
                <option value="">Select class</option>
                {venueClasses?.map((c) => (
                  <option key={c.classId} value={c.classId}>
                    {`${c?.className || ""}${c?.level ? ` (${c.level})` : ""}`}
                  </option>
                ))}
              </select>
            )}
          </div>

          {/* Time */}
          <div>
            <label className="text-[14px] text-[#282829] font-normal">Time:</label>
            <input
              readOnly
              value={data.time || ""}
              placeholder="Automatic entry"
              className="mt-1 w-full mainShadow capitalize placeholder:text-[#494949] placeholder:font-normal font-normal placeholder:text-[15px] p-3 rounded-md text-sm text-[#494949] bg-gray-50 bg-opacity-50"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default function StepStudents({ classDetails, venueClasses }) {
  const { students, setStudents, step, setStep, childrenCount } = useContext(BookingContext);
  const [errors, setErrors] = useState(() => Array(childrenCount).fill(null).map(() => ({})));

  console.log('students', students)

  useEffect(() => {
    setStudents((prev) => {
      const updated = [...prev];

      while (updated.length < childrenCount) {
        updated.push({});
      }

      return updated.slice(0, childrenCount).map((student, index) => {
    const baseClass =
  classDetails?.className
    ? classDetails?.level
      ? `${classDetails.className} (${classDetails.level})`
      : classDetails.className
    : "";

        const baseTime =
          classDetails?.startTime && classDetails?.endTime
            ? `${classDetails.startTime} - ${classDetails.endTime}`
            : "-";

        const baseClassId = classDetails?.id;

        return {
          ...student,
          class:
            student?.class
              ? student?.level
                ? `${student.class} (${student.level})`
                : student.class
              : baseClass, time: student.time || baseTime,
          classScheduleId: student.classScheduleId || baseClassId,
        };
      });
    });

    setErrors((prevE) => {
      if (prevE.length !== childrenCount) {
        return Array(childrenCount).fill(null).map(() => ({}));
      }
      return prevE;
    });
  }, [childrenCount, classDetails, setStudents]);

  const validate = () => {
    const newErrors = students.map((student) => {
      const errs = {};

      if (!student.firstName?.trim()) errs.firstName = "First name is required";
      if (!student.lastName?.trim()) errs.lastName = "Last name is required";
      if (!student.dob) {
        errs.dob = "Date of birth is required";
      } else if (student.dob.length < 10) {
        errs.dob = "Enter complete date DD/MM/YYYY";
      } else {
        const parts = student.dob.split("/");
        const [day, month, year] = parts.map(Number);
        const birthDate = new Date(year, month - 1, day);
        const isInvalid =
          month < 1 || month > 12 ||
          day < 1 || day > 31 ||
          year < 1900 || year > new Date().getFullYear() ||
          birthDate.getMonth() !== month - 1 ||
          birthDate.getDate() !== day;

        if (isInvalid) errs.dob = "Enter a valid date";
        else if (birthDate >= new Date()) errs.dob = "Date of birth cannot be in the future";
      }

      if (!student.gender) {
        errs.gender = "Gender is required";
      }

      if (!student.gender) errs.gender = "Gender is required";

      return errs;
    });

    setErrors(newErrors);
    return newErrors.every((err) => Object.keys(err).length === 0);
  };

  const hasAnyError = errors.some((errObj) => Object.keys(errObj).length > 0);

  return (
    <div className="lg:max-w-4xl mx-auto md:p-6 pt-0 poppins">
      {students.map((student, index) => (
        <StepStudent
          key={index}
          index={index}
          title={`Student ${index + 1}`}
          totalStudents={childrenCount}
          errors={errors}
          setErrors={setErrors}
          venueClasses={venueClasses}
        />
      ))}

      {errors.map(
        (err, index) =>
          Object.keys(err).length > 0 && (
            <div
              key={`error-${index}`}
              className="mt-3 p-3 bg-[#FEF3F2] text-red-700 text-sm rounded-[10px] mb-3"
            >
              <div className="flex items-center gap-2">
                <img src="/assets/Alerts.png" className="w-8" alt="alert icon" />
                You cannot continue if you have not completed the information for student {index + 1}.
                <br />
                You must complete all the information in order to continue.
              </div>
            </div>
          )
      )}

      <div className="flex md:justify-end gap-2 md:mt-10 mt-5 justify-center mb-5">
        <button
          onClick={() => setStep(step - 1)}
          disabled={hasAnyError}
          className={`px-5 py-2 rounded-[6px] border font-semibold ${hasAnyError ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:bg-gray-100"
            }`}
        >
          Back
        </button>

        <button
          onClick={() => validate() && setStep(step + 1)}
          disabled={hasAnyError}
          className={`px-5 py-2 rounded-[6px] font-semibold ${hasAnyError ? "bg-gray-400 text-gray-200 cursor-not-allowed" : "bg-[#042C89] text-white hover:bg-blue-700"
            }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
