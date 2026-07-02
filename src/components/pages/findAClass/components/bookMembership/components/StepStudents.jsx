import { useState, useEffect, useContext, useCallback } from "react";
import { ChevronDown, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BookingContext } from "../context/BookingContext";

const StepStudent = ({ index, title, totalStudents, errors, setErrors, isStarterPack, venueClasses, onOpenSizeChart }) => {
  const { students, setStudents } = useContext(BookingContext);
  const data = students[index] || {};

  const [open, setOpen] = useState(totalStudents === 1);

  function calculateAge(dob) {
    if (!dob || dob.length < 10) return "";

    const parts = dob.split("/");
    if (parts.length !== 3) return "";

    const [day, month, year] = parts.map(Number);

    if (month < 1 || month > 12) return "";
    if (day < 1 || day > 31) return "";
    if (year < 1900 || year > new Date().getFullYear()) return "";

    const birthDate = new Date(year, month - 1, day);

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
    [data, index, setErrors, updateStudent]
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
    return `mt-1 w-full mainShadow capitalize p-3 font-normal placeholder:font-normal placeholder:text-[#494949] placeholder:text-[15px] rounded-md text-[#494949] text-sm  ${errObj[field] ? "border border-red-500" : "border border-transparent"
      }`;
  };

  const kitSizeOptions = [
    { value: "Small", label: "Small" },
    { value: "Medium", label: "Medium" },
    { value: "Large", label: "Large" },
    { value: "XL", label: "Extra Large" },
    { value: "XXL", label: "XXL" }
  ];

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
        className={`flex items-center ${totalStudents > 1 ? "justify-between cursor-pointer" : "justify-center md:justify-between"
          }`}
        onClick={() => totalStudents > 1 && setOpen(!open)}
      >
        <p className="text-sm text-[18px] md:text-left text-center font-semibold text-[#282829]">
          {totalStudents > 1 ? title : "Student Information"}
        </p>
        {totalStudents > 1 && (
          <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
        )}
      </div>

      {(totalStudents === 1 || open) && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
          {/* First Name */}
          <div>
            <label className="text-[14px] text-[#282829] font-normal">
              First name<span className="text-red-500 ml-0.5">*</span>
            </label>
            <input
              value={data.firstName || ""}
              placeholder="Enter first name"
              onChange={(e) => handleFieldChange("firstName", e.target.value)}
              className={inputClass("firstName")}
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="text-[14px] text-[#282829] font-normal">
              Last name<span className="text-red-500 ml-0.5">*</span>
            </label>
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
              className={`w-full mainShadow mt-2 text-[#494949] font-normal placeholder:text-[#494949] placeholder:font-normal ${errors[index]?.dob ? "border-[#F04438]" : "border-gray-300"
                } rounded-lg p-3 text-base`}
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
            <label className="text-[14px] text-[#282829] font-normal capitalize">
              Gender<span className="text-red-500 ml-0.5">*</span>
            </label>
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
                className="mt-1 w-full mainShadow capitalize p-3 rounded-md text-sm text-[#494949] font-normal placeholder:text-[#494949] placeholder:font-normal bg-gray-100 cursor-not-allowed x outline-none"
              />
            ) : (
              <select
                value={data.classScheduleId || ""}
                onChange={(e) => {
                  const selectedId = e.target.value;
                  const selectedClass = venueClasses?.find((c) => c.classId.toString() === selectedId);
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

          {/* Kit Size */}

          {
            isStarterPack && (
              <div className="md:flex gap-4 col-span-2">
                <div className="w-full mb-5 md:mb-0">
                  <div className="flex justify-between items-center mb-1">
                    <label className="block text-[14px] text-[#282829] font-medium">
                      Starter Pack Kit Size<span className="text-red-500 ml-0.5">*</span>
                    </label>
                    <button
                      type="button"
                      onClick={onOpenSizeChart}
                      className="text-[13px] text-[#237FEA] font-semibold underline underline-offset-2 hover:text-blue-700 transition-colors"
                    >
                      Size Chart
                    </button>
                  </div>
                  <select
                    className={inputClass("size")}
                    value={data.size || ""}
                    onChange={(e) => handleFieldChange("size", e.target.value)}
                  >
                    <option value="">Select size</option>
                    {kitSizeOptions.map((o) => (
                      <option key={o.value} value={o.value}>{o.label}</option>
                    ))}
                  </select>
                  {errors[index]?.size && (
                    <span className="text-red-500 text-[12px] mt-1 block">{errors[index].size}</span>
                  )}
                </div>
              </div>

            )
          }
        </div>
      )}
    </div>
  );
};

export default function StepStudents({ classDetails, venueClasses }) {
  const { students, setStudents, step, setStep, childrenCount } = useContext(BookingContext);
  const [errors, setErrors] = useState(() => Array(childrenCount).fill(null).map(() => ({})));
  const [isSizeChartOpen, setIsSizeChartOpen] = useState(false);
  const isStarterPack = classDetails?.venue?.starterPack === true;

  useEffect(() => {
    setStudents((prev) => {
      const updated = [...prev];

      while (updated.length < childrenCount) {
        updated.push({});
      }

      return updated.slice(0, childrenCount).map((student) => {
        const baseClass = classDetails?.className
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
          class: student?.class
            ? student?.level
              ? `${student.class} (${student.level})`
              : student.class
            : baseClass,
          time: student.time || baseTime,
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

      if (!student.gender) errs.gender = "Gender is required";
      if (!student.size && isStarterPack) errs.size = "Kit size is required";

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
          isStarterPack={isStarterPack}
          venueClasses={venueClasses}
          onOpenSizeChart={() => setIsSizeChartOpen(true)}
        />
      ))}

      {errors.map(
        (err, index) =>
          Object.keys(err).length > 0 && (
            <div key={`error-${index}`} className="mt-3 p-3 bg-[#FEF3F2] text-red-700 text-sm rounded-[10px] mb-3">
              <div className="flex items-center gap-2">
                <img src="/assets/Alerts.png" className="w-8" alt="alert icon" />
                You cannot continue if you have not completed the information for student {index + 1}.
                <br />
                You must complete all the information in order to continue.
              </div>
            </div>
          )
      )}

      <AnimatePresence>
        {isSizeChartOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setIsSizeChartOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="bg-white rounded-3xl w-full max-w-5xl shadow-2xl relative flex flex-col max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center px-8 py-5 border-b border-gray-100">
                <div>
                  <span className="text-[12px] uppercase tracking-wider text-[#237FEA] font-bold">Size guides</span>
                  <h2 className="text-[22px] font-bold text-gray-900 leading-tight">Kids Size Chart</h2>
                </div>
                <button
                  onClick={() => setIsSizeChartOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors focus:outline-none"
                >
                  <X className="w-6 h-6 text-gray-400 hover:text-gray-600" />
                </button>
              </div>

              <div className="p-8 space-y-6 overflow-y-auto">
                <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                  <table className="w-full text-center border-collapse text-sm">
                    <thead>
                      <tr className="bg-gray-900 text-white text-[13px] font-semibold tracking-wider uppercase">
                        <th rowSpan="2" className="py-3 px-4 border-r border-gray-800 align-middle">Size</th>
                        <th rowSpan="2" className="py-3 px-4 border-r border-gray-800 align-middle">Age</th>
                        <th colSpan="2" className="py-2 px-4 border-r border-gray-800">Height</th>
                        <th colSpan="2" className="py-2 px-4 border-r border-gray-800">Chest</th>
                        <th colSpan="2" className="py-2 px-4">Waist</th>
                      </tr>
                      <tr className="bg-gray-800 text-gray-200 text-[11px] font-semibold uppercase">
                        <th className="py-2 px-4 border-r border-gray-700">cm</th>
                        <th className="py-2 px-4 border-r border-gray-700">in</th>
                        <th className="py-2 px-4 border-r border-gray-700">cm</th>
                        <th className="py-2 px-4 border-r border-gray-700">in</th>
                        <th className="py-2 px-4 border-r border-gray-700">cm</th>
                        <th className="py-2 px-4">in</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-gray-700">
                      {[
                        { size: "Small", age: "4-5", height: { cm: "107", in: "42" }, chest: { cm: "68", in: "26" }, waist: { cm: "46", in: "18" } },
                        { size: "Medium", age: "6-7", height: { cm: "119", in: "46" }, chest: { cm: "74", in: "29" }, waist: { cm: "50", in: "20" } },
                        { size: "Large", age: "8-9", height: { cm: "131", in: "51" }, chest: { cm: "84", in: "33" }, waist: { cm: "54", in: "21" } },
                        { size: "Extra Large", age: "10-12", height: { cm: "143", in: "56" }, chest: { cm: "89", in: "34" }, waist: { cm: "58", in: "23" } },
                        { size: "XXL", age: "13-14", height: { cm: "152", in: "60" }, chest: { cm: "98", in: "38" }, waist: { cm: "68", in: "26" } },
                      ].map((row, idx) => (
                        <tr key={idx} className="hover:bg-gray-50/70 transition-colors odd:bg-white even:bg-gray-50/30">
                          <td className="py-3.5 px-4 font-semibold text-gray-900 border-r border-gray-100">{row.size}</td>
                          <td className="py-3.5 px-4 border-r border-gray-100">{row.age}</td>
                          <td className="py-3.5 px-4 border-r border-gray-100">{row.height.cm}</td>
                          <td className="py-3.5 px-4 border-r border-gray-100">{row.height.in}</td>
                          <td className="py-3.5 px-4 border-r border-gray-100">{row.chest.cm}</td>
                          <td className="py-3.5 px-4 border-r border-gray-100">{row.chest.in}</td>
                          <td className="py-3.5 px-4 border-r border-gray-100">{row.waist.cm}</td>
                          <td className="py-3.5 px-4">{row.waist.in}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="border-l-4 border-[#237FEA] pl-4 py-1">
                  <span className="text-[16px] font-bold text-gray-900">How to measure?</span>
                  <p className="text-sm text-gray-600 mt-1">To choose the correct size, measure your child's body as follows:</p>
                </div>

                <div className="flex justify-center items-center py-6 bg-[#fcfcfc] rounded-2xl border border-gray-100 shadow-inner">
                  <img
                    src="/assets/Kids-Size-Guide.png"
                    alt="Kids Measuring Guide"
                    className="max-h-[380px] w-auto object-contain rounded-xl hover:scale-[1.01] transition-transform duration-300"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex md:justify-end gap-2 md:mt-10 mt-5 justify-center mb-5">
        <button
          onClick={() => setStep(step - 1)}
          className="px-5 py-2 rounded-[6px] border font-semibold text-gray-700 hover:bg-gray-100"
        >
          Back
        </button>

        <button
          onClick={() => validate() && setStep(step + 1)}
          className={`px-5 py-2 rounded-[6px] font-semibold ${hasAnyError ? "bg-gray-400 text-gray-200" : "bg-[#042C89] text-white hover:bg-blue-700"
            }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}