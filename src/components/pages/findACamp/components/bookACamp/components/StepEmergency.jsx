import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { BookingContext } from "../context/BookingContext";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

/* ================= HELPERS ================= */
const onlyLetters = (v) => v.replace(/[^a-zA-Z\s]/g, "");
const onlyNumbers = (v, max = 15) => v.replace(/\D/g, "").slice(0, max);
/* =========================================== */

const relationOptions = [
  { value: "father", label: "Father" },
  { value: "mother", label: "Mother" },
  { value: "guardian", label: "Guardian" },
];

const emptyEmergency = () => ({
  id: Date.now(),
  emergencyFirstName: "",
  emergencyLastName: "",
  phoneNumber: "",
  relationChild: "",
});

const StepEmergency = ({ onNext, onBack }) => {
  const { parents, emergency, setEmergency } = useContext(BookingContext);
  
  const [fillSame, setFillSame] = useState(() => {
    if (!parents?.length || !emergency?.length) return false;
    const p = parents[0];
    const e = emergency[0];
    return (
      e.emergencyFirstName === p.parentFirstName &&
      e.emergencyLastName === p.parentLastName &&
      e.phoneNumber === p.phoneNumber &&
      e.relationChild === p.relationChild
    );
  });

  const [errors, setErrors] = useState({});
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize once
  useEffect(() => {
    if (!emergency || emergency.length === 0) {
      setEmergency([emptyEmergency()]);
    }
    setIsInitialized(true);
  }, []);

  // Copy parent when checkbox toggles
  useEffect(() => {
    if (!isInitialized) return;
    if (!parents?.length) return;
    if (fillSame) {
      const p = parents[0];
      setEmergency([
        {
          ...emergency?.[0],
          emergencyFirstName: p.parentFirstName || "",
          emergencyLastName: p.parentLastName || "",
          phoneNumber: p.phoneNumber || "",
          relationChild: p.relationChild || "",
        },
      ]);
      setErrors({}); // Clear validation errors when copying parent info
    } else {
      setEmergency([emptyEmergency()]);
    }
  }, [fillSame, parents, isInitialized]);

  const handleEmergencyChange = (field, value, data) => {
    const updated = { ...emergency?.[0] };
    if (field === "phoneNumber") {
      const formattedPhone = value && !value.startsWith("+") ? `+${value}` : value;
      updated[field] = formattedPhone;
      updated.dialCode = data?.dialCode || "";
    } else {
      updated[field] = value;
    }
    setEmergency([updated]);

    // Clear error
    setErrors((prev) => {
      const copy = { ...prev };
      delete copy[field];
      return copy;
    });
  };

  const validateField = (field, value) => {
    switch (field) {
      case "emergencyFirstName":
        if (!value?.trim()) return "First name is required";
        break;
      case "emergencyLastName":
        if (!value?.trim()) return "Last name is required";
        break;
      case "phoneNumber":
        if (!value?.trim()) return "Phone number is required";
        break;
      case "relationChild":
        if (!value) return "Relation is required";
        break;
    }
    return "";
  };

  const e = emergency?.[0];

  const inputClass = (errorKey, disabled = false) => `
    w-full mt-1 mainShadow bg-white text-[#494949] font-normal placeholder:text-[#494949] placeholder:font-normal 
    rounded-[6px] px-4 py-3 text-sm border 
    ${errors[errorKey] ? "border-red-500" : "border-gray-200"} 
    ${disabled ? "bg-gray-50 text-[#494949] cursor-not-allowed" : "focus:border-[#042C89] focus:outline-none focus:ring-2 focus:ring-[#042C89]/20"}
  `;

  const selectClass = (errorKey, disabled = false) => `
    w-full mt-1 mainShadow bg-white text-[#494949] font-normal placeholder:text-[#494949] placeholder:font-normal 
    rounded-[6px] px-4 py-3 text-sm border cursor-pointer
    ${errors[errorKey] ? "border-red-500" : "border-gray-200"} 
    ${disabled ? "bg-gray-50 text-[#494949] cursor-not-allowed" : "focus:border-[#042C89] focus:outline-none focus:ring-2 focus:ring-[#042C89]/20"}
  `;

  const validateAndNext = () => {
    const newErrors = {};
    let valid = true;

    if (!e?.emergencyFirstName?.trim()) {
      newErrors.emergencyFirstName = "First name is required";
      valid = false;
    }
    if (!e?.emergencyLastName?.trim()) {
      newErrors.emergencyLastName = "Last name is required";
      valid = false;
    }
    if (!e?.phoneNumber?.trim()) {
      newErrors.phoneNumber = "Phone number is required";
      valid = false;
    }
    if (!e?.relationChild) {
      newErrors.relationChild = "Relation is required";
      valid = false;
    }

    setErrors(newErrors);
    if (valid) onNext();
  };

  const isValid =
    e?.emergencyFirstName?.trim() &&
    e?.emergencyLastName?.trim() &&
    e?.phoneNumber?.trim() &&
    e?.relationChild &&
    Object.keys(errors).length === 0;

  return (
    <div className="lg:max-w-[80%] m-auto">
      <style>{`
        .react-tel-input .selected-flag .flag {
          transform: scale(1.3) !important;
        }
        .react-tel-input .selected-flag {
          width: 55px !important;
        }
        .react-tel-input input::placeholder {
          color: #494949 !important;
          font-weight: normal !important;
        }
        .react-tel-input input {
          color: #494949 !important;
          font-weight: normal !important;
        }
      `}</style>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="md:p-6 rounded-3xl space-y-6 poppins"
      >
        <h2 className="text-[20px] text-center font-semibold pb-5 text-[#282829]">
          Emergency contact details
        </h2>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={fillSame}
            onChange={() => setFillSame((v) => !v)}
            className="w-4 h-4 text-[#042C89] border-gray-300 rounded focus:ring-[#042C89]"
          />
          <span className="text-[14px] font-medium text-[#282829]">Fill same as above</span>
        </label>

        <div className="grid md:grid-cols-2 gap-4 md:gap-x-8 md:gap-y-5">
          {/* First Name */}
          <div>
            <label className="text-[14px] text-[#282829] font-medium mb-1 block">
              First name<span className="text-red-500 ml-0.5">*</span>
            </label>
            <input
              className={inputClass("emergencyFirstName", fillSame)}
              value={e?.emergencyFirstName || ""}
              placeholder="Enter first name"
              disabled={fillSame}
              onChange={(ev) =>
                handleEmergencyChange("emergencyFirstName", onlyLetters(ev.target.value))
              }
            />
            {errors.emergencyFirstName && (
              <span className="text-red-500 text-[12px] mt-1 block">
                {errors.emergencyFirstName}
              </span>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label className="text-[14px] text-[#282829] font-medium mb-1 block">
              Last name<span className="text-red-500 ml-0.5">*</span>
            </label>
            <input
              className={inputClass("emergencyLastName", fillSame)}
              value={e?.emergencyLastName || ""}
              placeholder="Enter last name"
              disabled={fillSame}
              onChange={(ev) =>
                handleEmergencyChange("emergencyLastName", onlyLetters(ev.target.value))
              }
            />
            {errors.emergencyLastName && (
              <span className="text-red-500 text-[12px] mt-1 block">
                {errors.emergencyLastName}
              </span>
            )}
          </div>

          {/* Phone - SIMPLIFIED (No dial code) */}
          <div>
            <label className="text-[14px] text-[#282829] font-medium mb-1 block">
              Phone number<span className="text-red-500 ml-0.5">*</span>
            </label>
            <PhoneInput
              country={"gb"}
              value={e?.phoneNumber || ""}
              disabled={fillSame}
              onChange={(value, data) => handleEmergencyChange("phoneNumber", value, data)}
              containerClass="!w-full !mt-2 mainShadow !rounded-[6px] !bg-white !border !border-[#E2E1E5]"
              inputStyle={{
                width: '100%',
                height: '46px',
                fontSize: '16px',
                paddingLeft: '65px',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: 'transparent'
              }}
              buttonStyle={{
                backgroundColor: 'transparent',
                border: 'none',

                borderRadius: '6px 0 0 6px',
                width: '55px',
              }}
              dropdownClass="!bg-white !rounded-[12px] !shadow-lg"
              specialLabel={""}
              placeholder="+44 1234568"
            />
            {errors.phoneNumber && (
              <span className="text-red-500 text-[12px] mt-1 block">
                {errors.phoneNumber}
              </span>
            )}
          </div>

          {/* Relation */}
          <div>
            <label className="text-[14px] text-[#282829] font-medium mb-1 block">
              Relation to child<span className="text-red-500 ml-0.5">*</span>
            </label>
            <select
              value={e?.relationChild || ""}
              onChange={(ev) => handleEmergencyChange("relationChild", ev.target.value)}
              disabled={fillSame}
              className={selectClass("relationChild", fillSame)}
            >
              <option value="">Select relation</option>
              {relationOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors.relationChild && (
              <span className="text-red-500 text-[12px] mt-1 block">
                {errors.relationChild}
              </span>
            )}
          </div>
        </div>
      </motion.div>

      <div className="flex justify-end gap-3 mt-10">
        <button
          onClick={onBack}
          className="px-5 py-2 rounded-[6px] border border-[#042C89] font-semibold text-gray-700 hover:bg-gray-100"
        >
          Back
        </button>
        <button
          onClick={validateAndNext}
          disabled={!isValid}
          className={`px-5 py-2 rounded-[6px] font-semibold ${!isValid
            ? "bg-gray-400 text-gray-200 cursor-not-allowed"
            : "bg-[#042C89] text-white hover:bg-blue-700"
            }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StepEmergency;