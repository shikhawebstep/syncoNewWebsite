import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { BookingContext } from "../context/BookingContext";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

/* ================= INPUT HELPERS ================= */
const onlyLetters = (v) => v.replace(/[^a-zA-Z\s]/g, "");
const onlyNumbers = (v, max = 15) => v.replace(/\D/g, "").slice(0, max);
const emailSanitizer = (v) => v.replace(/[^a-zA-Z0-9._%+-@]/g, "");
/* ================================================= */

const relationOptions = [
  { value: "father", label: "Father" },
  { value: "mother", label: "Mother" },
  { value: "guardian", label: "Guardian" },
];

const hearOptions = [
  { value: "Google", label: "Google" },
  { value: "Facebook", label: "Facebook" },
  { value: "Instagram", label: "Instagram" },
  { value: "Friend", label: "Friend" },
  { value: "Flyer", label: "Flyer" },
];


const emptyParent = () => ({
  id: Date.now() + Math.random(),
  parentFirstName: "",
  parentLastName: "",
  parentEmail: "",
  phoneNumber: "",
  dialCode: "+44",
  relationChild: "",
  howDidHear: "",
});

const StepParents = () => {
  const { parents, setParents, setStep, step } = useContext(BookingContext);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!parents || parents.length === 0) {
      setParents([emptyParent()]);
    }
  }, [parents, setParents]);

  const validateField = (parent, field, value) => {
    switch (field) {
      case "parentFirstName":
        if (!value.trim()) return "First name is required";
        break;
      case "parentLastName":
        if (!value.trim()) return "Last name is required";
        break;
      case "parentEmail":
        if (!value.trim()) return "Email is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Invalid email address";
        break;
      case "phoneNumber":
        if (!value.trim()) return "Phone number is required";
        break;
      case "relationChild":
        if (!value) return "Relation is required";
        break;
      default:
        return "";
    }
    return "";
  };

  const handleParentChange = (index, field, value, data) => {
    const updated = [...parents];
    if (field === "phoneNumber") {
      const formattedPhone = value && !value.startsWith("+") ? `+${value}` : value;
      updated[index][field] = formattedPhone;
      updated[index].dialCode = data?.dialCode || "";
    } else {
      updated[index][field] = value;
    }
    setParents(updated);

    const errorMsg = validateField(updated[index], field, value);
    const key = `${updated[index].id}-${field}`;
    setErrors((prev) => {
      const copy = { ...prev };
      if (errorMsg) copy[key] = errorMsg;
      else delete copy[key];
      return copy;
    });
  };

  const handleAddParent = () => {
    if (parents.length < 3) {
      setParents([...parents, emptyParent()]);
    }
  };

  const handleRemoveParent = (id) => {
    setParents(parents.filter((p) => p.id !== id));
    setErrors((prev) => {
      const copy = { ...prev };
      Object.keys(copy).forEach((k) => {
        if (k.startsWith(id)) delete copy[k];
      });
      return copy;
    });
  };

  const validateParents = () => {
    const newErrors = {};
    let valid = true;
    parents.forEach((parent, index) => {
      if (index > 0) return;
      ["parentFirstName", "parentLastName", "parentEmail", "phoneNumber", "relationChild"].forEach(
        (field) => {
          const errorMsg = validateField(parent, field, parent[field] || "");
          if (errorMsg) {
            newErrors[`${parent.id}-${field}`] = errorMsg;
            valid = false;
          }
        }
      );
    });
    setErrors(newErrors);
    return valid;
  };

  const isParentValid = () => {
    const parent = parents[0];
    if (!parent) return false;
    const relevantKeys = Object.keys(errors).filter((k) => k.startsWith(parent.id));
    return (
      parent.parentFirstName?.trim() &&
      parent.parentLastName?.trim() &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(parent.parentEmail) &&
      parent.phoneNumber?.trim() &&
      parent.relationChild &&
      relevantKeys.length === 0
    );
  };

  const disableNext = !isParentValid();

  const handleNext = () => {
    if (validateParents()) {
      setStep(step + 1);
    }
  };

  const inputClass = (errorKey) => `
    w-full mt-1 mainShadow bg-white text-[#494949] font-normal placeholder:text-[#494949] placeholder:font-normal 
    rounded-[6px] px-4 py-3 text-sm border 
    ${errors[errorKey] ? "border-red-500" : "border-gray-200"} 
    focus:border-[#042C89] focus:outline-none focus:ring-2 focus:ring-[#042C89]/20
  `;

  const selectClass = (errorKey) => `
    w-full mt-1 mainShadow bg-white text-[#494949] font-normal border rounded-[6px] px-4 py-3 text-sm cursor-pointer
    ${errors[errorKey] ? "border-red-500" : "border-gray-200"} 
    focus:border-[#042C89] focus:outline-none focus:ring-2 focus:ring-[#042C89]/20
  `;

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
      {parents.map((parent, index) => (
        <motion.div
          key={parent.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="mb-2 poppins md:p-6 rounded-3xl space-y-6 relative"
        >
          {/* Header */}
          <div className="md:flex justify-between items-start text-center">
            <h2 className="text-[20px] font-semibold">
              {index === 0 ? "Parent information" : `Parent ${index + 1} information`}
            </h2>
            {index > 0 && (
              <button
                onClick={() => handleRemoveParent(parent.id)}
                className="text-gray-500 hover:text-red-600"
                type="button"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* First + Last Name */}
          <div className="md:flex gap-4">
            <div className="md:w-1/2 mb-5 md:mb-0">
              <label className="block text-[14px] text-[#282829] font-medium mb-1">
                First name<span className="text-red-500 ml-0.5">*</span>
              </label>
              <input
                className={inputClass(`${parent.id}-parentFirstName`)}
                value={parent.parentFirstName}
                placeholder="Enter first name"
                onChange={(e) =>
                  handleParentChange(index, "parentFirstName", onlyLetters(e.target.value))
                }
                type="text"
              />
              {errors[`${parent.id}-parentFirstName`] && (
                <span className="text-red-500 text-[12px] mt-1 block">
                  {errors[`${parent.id}-parentFirstName`]}
                </span>
              )}
            </div>

            <div className="md:w-1/2">
              <label className="block text-[14px] text-[#282829] font-medium mb-1">
                Last name<span className="text-red-500 ml-0.5">*</span>
              </label>
              <input
                className={inputClass(`${parent.id}-parentLastName`)}
                value={parent.parentLastName}
                placeholder="Enter last name"
                onChange={(e) =>
                  handleParentChange(index, "parentLastName", onlyLetters(e.target.value))
                }
                type="text"
              />
              {errors[`${parent.id}-parentLastName`] && (
                <span className="text-red-500 text-[12px] mt-1 block">
                  {errors[`${parent.id}-parentLastName`]}
                </span>
              )}
            </div>
          </div>

          {/* Email + Phone */}
          <div className="md:flex gap-4">
            <div className="md:w-1/2 mb-5 md:mb-0">
              <label className="block text-[14px] text-[#282829] font-medium mb-1">
                Email<span className="text-red-500 ml-0.5">*</span>
              </label>
              <input
                className={inputClass(`${parent.id}-parentEmail`)}
                value={parent.parentEmail}
                placeholder="Enter email address"
                onChange={(e) =>
                  handleParentChange(index, "parentEmail", emailSanitizer(e.target.value))
                }
                type="email"
                autoComplete="email"
              />
              {errors[`${parent.id}-parentEmail`] && (
                <span className="text-red-500 text-[12px] mt-1 block">
                  {errors[`${parent.id}-parentEmail`]}
                </span>
              )}
            </div>

            <div className="md:w-1/2">
              <label className="block text-[14px] text-[#282829] font-medium mb-1">
                Phone number<span className="text-red-500 ml-0.5">*</span>
              </label>

              {/* Phone Number Input */}
              <PhoneInput
                country={"gb"}
                value={parent.phoneNumber}
                onChange={(value, data) => handleParentChange(index, "phoneNumber", value, data)}
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
              {errors[`${parent.id}-phoneNumber`] && (
                <span className="text-red-500 text-[12px] mt-1 block">
                  {errors[`${parent.id}-phoneNumber`]}
                </span>
              )}
            </div>
          </div>

          {/* Relation + How did you hear */}
          <div className="md:flex gap-4">
            <div className="md:w-1/2 mb-5 md:mb-0">
              <label className="block text-[14px] text-[#282829] font-medium mb-1">
                Relation to child:<span className="text-red-500 ml-0.5">*</span>
              </label>
              <select
                value={parent.relationChild || ""}
                onChange={(e) => handleParentChange(index, "relationChild", e.target.value)}
                className={selectClass(`${parent.id}-relationChild`)}
              >
                <option value="">Select relation</option>
                {relationOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors[`${parent.id}-relationChild`] && (
                <span className="text-red-500 text-[12px] mt-1 block">
                  {errors[`${parent.id}-relationChild`]}
                </span>
              )}
            </div>

            <div className="md:w-1/2">
              <label className="block text-[14px] text-[#282829] font-medium mb-1">
                How did you hear about us?:
              </label>
              <select
                value={parent.howDidHear || ""}
                onChange={(e) => handleParentChange(index, "howDidHear", e.target.value)}
                className={selectClass(`${parent.id}-howDidHear`)}
              >
                <option value="">Select from dropdown</option>
                {hearOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>
      ))}

      <div className="md:px-6 my-5 md:my-0 ">
        <button
          onClick={handleAddParent}
          disabled={parents.length >= 3}
          type="button"
          className={`text-white px-4 py-2.5 rounded-[12px] ${parents.length >= 3 ? "bg-gray-400 cursor-not-allowed" : "bg-[#042C89]"
            } text-[15px]`}
        >
          Add Parent
        </button>
      </div>

      <div className="flex md:justify-end md:mt-10 gap-3 mt-5 justify-center mb-5">
        <button
          onClick={() => setStep(step - 1)}
          className="px-5 py-2 rounded-[6px] border border-[#042C89] font-semibold text-gray-700 hover:bg-gray-100"
          type="button"
        >
          Back
        </button>

        <button
          onClick={handleNext}
          disabled={disableNext}
          className={`px-5 py-2 rounded-[6px] font-semibold ${disableNext
            ? "bg-gray-400 text-gray-200 cursor-not-allowed"
            : "bg-[#042C89] text-white hover:bg-blue-700"
            }`}
          type="button"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StepParents;