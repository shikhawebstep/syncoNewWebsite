import { useState, useEffect, useContext, useCallback } from "react";
import { ChevronDown } from "lucide-react";
import { BookingContext } from "../context/BookingContext";

const StepStudent = ({ index, title, totalStudents, errors, setErrors }) => {
  const { students, setStudents } = useContext(BookingContext);
  const data = students[index] || {};
  const [open, setOpen] = useState(totalStudents === 1);

  const calculateAge = useCallback((dob) => {
    if (!dob) return "";
    const birthDate = new Date(dob);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age >= 0 ? age.toString() : "";
  }, []);

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

  const inputClass = (field) => {
    const errObj = errors[index] || {};
    return `mt-1 w-full mainShadow p-3 placeholder:text-[#494949] placeholder:text-[15px] rounded-md capitalize text-sm border ${
      errObj[field] ? "border-red-500" : "border-transparent"
    }`;
  };

  return (
    <div className={`${index > 0 ? "border-t border-gray-200" : ""} poppins py-4`}>
      {/* Header */}
      <div
        className={`flex items-center ${
          totalStudents > 1
            ? "justify-between cursor-pointer"
            : "justify-center md:justify-between"
        }`}
        onClick={() => totalStudents > 1 && setOpen(!open)}
      >
        <p className="text-sm md:text-[18px] md:text-left text-center font-semibold text-[#282829]">
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
            <label className="text-[14px] text-[#282829] font-normal">First name</label>
            <input
              value={data.firstName || ""}
              placeholder="Enter first name"
              onChange={(e) => handleFieldChange("firstName", e.target.value)}
              className={inputClass("firstName")}
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="text-[14px] text-[#282829] font-normal">Last name</label>
            <input
              placeholder="Enter last name"
              value={data.lastName || ""}
              onChange={(e) => handleFieldChange("lastName", e.target.value)}
              className={inputClass("lastName")}
            />
          </div>

          {/* DOB */}
          <div>
            <label className="text-[14px] text-[#282829] font-normal">Date of birth</label>
            <input
              type="date"
              placeholder="Enter date of birth"
              value={data.dob || ""}
              onChange={(e) => handleFieldChange("dob", e.target.value)}
              className={inputClass("dob")}
            />
          </div>

          {/* Age */}
          <div>
            <label className="text-[14px] text-[#282829] font-normal">Age</label>
            <input
              readOnly
              value={data.age || ""}
              placeholder="Automatic entry"
              className="mt-1 placeholder:text-[#494949] placeholder:text-[15px] w-full mainShadow p-3 rounded-md text-sm text-gray-400"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="text-[14px] text-[#282829] font-normal">Gender</label>
            <select
              value={data.gender || ""}
              onChange={(e) => handleFieldChange("gender", e.target.value)}
              className={inputClass("gender")}
            >
              <option value="">Select gender</option>
              <option value="male">male</option>
              <option value="female">female</option>
              <option value="others">others</option>
            </select>
          </div>

          {/* Medical */}
          <div>
            <label className="text-[14px] text-[#282829] font-normal">Medical information</label>
            <input
              placeholder="Enter medical information"
              value={data.medical || ""}
              onChange={(e) => handleFieldChange("medical", e.target.value)}
              className="mt-1 w-full mainShadow placeholder:text-[#494949] placeholder:text-[15px] p-3 rounded-md text-sm"
            />
          </div>

          {/* Class */}
          <div>
            <label className="text-[14px] text-[#282829] font-normal">Class</label>
            <input
              readOnly
              value={data.class || ""}
              placeholder="Automatic entry"
              className={inputClass("")}
            />
          </div>

          {/* Time */}
          <div>
            <label className="text-[14px] text-[#282829] font-normal">Time</label>
            <input
              readOnly
              placeholder="Automatic entry"
              className="mt-1 w-full mainShadow placeholder:text-[#494949] placeholder:text-[15px] p-3 rounded-md text-sm text-gray-400"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default function StepStudents() {
  const { students, setStudents, step, setStep, childrenCount } = useContext(BookingContext);
  const [errors, setErrors] = useState(() => Array(childrenCount).fill(null).map(() => ({})));

  useEffect(() => {
    setStudents((prev) => {
      const updated = [...prev];
      while (updated.length < childrenCount) updated.push({});
      return updated.slice(0, childrenCount);
    });
    setErrors(Array(childrenCount).fill(null).map(() => ({})));
  }, [childrenCount, setStudents]);

  const validate = () => {
    const newErrors = students.map((student) => {
      const errs = {};

      if (!student.firstName?.trim()) errs.firstName = "First name is required";
      if (!student.lastName?.trim()) errs.lastName = "Last name is required";
      if (!student.dob) errs.dob = "Date of birth is required";
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

      <div className="flex justify-end gap-2 mt-10">
        <button
          onClick={() => setStep(step - 1)}
          disabled={hasAnyError}
          className={`px-5 py-2 rounded-[6px] border font-semibold ${
            hasAnyError ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          Back
        </button>

        <button
          onClick={() => validate() && setStep(step + 1)}
          disabled={hasAnyError}
          className={`px-5 py-2 rounded-[6px] font-semibold ${
            hasAnyError ? "bg-gray-400 text-gray-200 cursor-not-allowed" : "bg-[#042C89] text-white hover:bg-blue-700"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
