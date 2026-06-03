import { motion } from "framer-motion";
import { X } from "lucide-react";
import Select from "react-select";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useEffect, useState } from "react";

/* ================= HIGH LEVEL INPUT HELPERS ================= */
const onlyLetters = (v) => v.replace(/[^a-zA-Z\s]/g, "");
const onlyNumbers = (v, max = 12) => v.replace(/\D/g, "").slice(0, max);
const emailSanitizer = (v) =>
  v.replace(/[^a-zA-Z0-9._%+-@]/g, "");
/* ============================================================ */

const relationOptions = [
  { value: "father", label: "Father" },
  { value: "mother", label: "Mother" },
  { value: "guardian", label: "Guardian" },
];

const hearOptions = [
  { value: "google", label: "Google" },
  { value: "friend", label: "Friend" },
  { value: "social", label: "Social Media" },
];

const selectStyles = {
  control: (base, state) => ({
    ...base,
    minHeight: "48px",
    borderRadius: "6px",
    borderColor: state.isFocused ? "#fff" : "#fff",
    boxShadow: "rgba(9, 30, 66, 0.25) 0px 0px 3px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
    ":hover": { borderColor: "#2563eb" },
    paddingLeft: "6px",
  }),
  valueContainer: (base) => ({ ...base, padding: "0 12px" }),
  indicatorsContainer: (base) => ({ ...base, paddingRight: "8px" }),
  menu: (base) => ({ ...base, borderRadius: "12px", overflow: "hidden" }),
  option: (base, state) => ({
    ...base,
    fontWeight: "600",
    backgroundColor: state.isFocused ? "#eff6ff" : "white",
    color: "#111827",
    cursor: "pointer",
  }),
};

const emptyParent = () => ({
  id: Date.now(),
  parentFirstName: "",
  parentLastName: "",
  parentEmail: "",
  phoneNumber: "",
  dialCode: "",
  relationChild: "",
  howDidHear: "",
});

const StepParents = ({ parents, setParents, onNext, onBack }) => {
  const [errors, setErrors] = useState({});
  const isParentValid = () => {
    const parent = parents[0]; // only first parent required

    if (!parent) return false;

    return (
      parent.parentFirstName.trim() &&
      parent.parentLastName.trim() &&
      parent.parentEmail.trim() &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(parent.parentEmail) &&
      parent.phoneNumber.trim() &&
      parent.relationChild &&
      Object.keys(errors).length === 0
    );
  };

  const validateParents = () => {
    const newErrors = {};
    let valid = true;

    parents.forEach((parent, index) => {
      if (index > 0) return;

      if (!parent.parentFirstName.trim()) {
        newErrors[`${parent.id}-parentFirstName`] = "First name is required";
        valid = false;
      }

      if (!parent.parentLastName.trim()) {
        newErrors[`${parent.id}-parentLastName`] = "Last name is required";
        valid = false;
      }

      if (!parent.parentEmail.trim()) {
        newErrors[`${parent.id}-parentEmail`] = "Email is required";
        valid = false;
      } else if (
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(parent.parentEmail)
      ) {
        newErrors[`${parent.id}-parentEmail`] = "Invalid email address";
        valid = false;
      }

      if (!parent.phoneNumber.trim()) {
        newErrors[`${parent.id}-phoneNumber`] = "Phone number is required";
        valid = false;
      }

      if (!parent.relationChild) {
        newErrors[`${parent.id}-relationChild`] = "Relation is required";
        valid = false;
      }
    });

    setErrors(newErrors);
    return valid;
  };


  const disableNext = !isParentValid();
  const validateField = (parent, field, value) => {
    let message = "";

    switch (field) {
      case "parentFirstName":
        if (!value.trim()) message = "First name is required";
        break;

      case "parentLastName":
        if (!value.trim()) message = "Last name is required";
        break;

      case "parentEmail":
        if (!value.trim()) {
          message = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          message = "Invalid email address";
        }
        break;

      case "phoneNumber":
        if (!value.trim()) message = "Phone number is required";
        break;

      case "relationChild":
        if (!value) message = "Relation is required";
        break;

      default:
        break;
    }

    return message;
  };

  const handleParentChange = (index, field, value) => {
    const updated = [...parents];
    updated[index][field] = value;
    setParents(updated);

    const parent = updated[index];
    const errorMsg = validateField(parent, field, value);
    const key = `${parent.id}-${field}`;

    setErrors((prev) => {
      const copy = { ...prev };

      if (errorMsg) {
        copy[key] = errorMsg; // show error immediately
      } else {
        delete copy[key]; // remove error immediately
      }

      return copy;
    });
  };


  const handlePhoneChange = (index, value, countryData) => {
    const updated = [...parents];
    updated[index].phoneNumber = onlyNumbers(value);
    updated[index].dialCode = countryData?.dialCode || "";
    setParents(updated);

    const parent = updated[index];
    const key = `${parent.id}-phoneNumber`;

    setErrors((prev) => {
      const copy = { ...prev };
      if (!updated[index].phoneNumber.trim()) {
        copy[key] = "Phone number is required";
      } else {
        delete copy[key];
      }
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

  const handleNext = () => {
    if (validateParents()) onNext();
  };

  useEffect(() => {
    if (!parents || parents.length === 0) {
      setParents([emptyParent()]);
    }
  }, []);

  /* ===== FIXED ===== */

  return (
    <div className="lg:max-w-[80%] m-auto">
      {parents.map((parent, index) => (
        <motion.div
          key={parent.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className=" mb-2 poppins md:p-6 rounded-3xl space-y-6 relative"
        >
          {/* Header */}
          <div className="flex justify-between items-start">
            <h2 className="text-[20px] font-semibold">
              {index === 0
                ? "Parent information"
                : `Parent ${index + 1} information`}
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
              <label className="block text-[14px] text-[#282829] font-medium mb-1">First name</label>
              <input
                className={`w-full mt-1 mainShadow bg-white placeholder:text-[#494949] placeholder:font-medium rounded-[6px] px-4 py-3 ${errors[`${parent.id}-parentFirstName`] ? "border-red-500" : ""}`}
                value={parent.parentFirstName}
                placeholder="Enter first name"

                onChange={(e) =>
                  handleParentChange(
                    index,
                    "parentFirstName",
                    onlyLetters(e.target.value)
                  )
                }
              />
              {errors[`${parent.id}-parentFirstName`] && (
                <span className="text-red-500 text-[12px] mt-1 block">
                  {errors[`${parent.id}-parentFirstName`]}
                </span>
              )}
            </div>

            <div className="md:w-1/2">
              <label className="block text-[14px] text-[#282829] font-medium mb-1">Last name</label>
              <input
                className={`w-full mt-1 mainShadow bg-white placeholder:text-[#494949] placeholder:font-medium rounded-[6px] px-4 py-3 ${errors[`${parent.id}-parentLastName`] ? "border-red-500" : ""}`}
                value={parent.parentLastName}
                placeholder="Enter last name"
                onChange={(e) =>
                  handleParentChange(
                    index,
                    "parentLastName",
                    onlyLetters(e.target.value)
                  )
                }
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
              <label className="block text-[14px] text-[#282829] font-medium mb-1">Email</label>
              <input
                className={`w-full mt-1 mainShadow bg-white  placeholder:text-[#494949]  rounded-[6px] px-4 py-3 ${errors[`${parent.id}-parentEmail`] ? "border-red-500" : ""}`}
                value={parent.parentEmail}
                placeholder="Enter email address"
                onChange={(e) =>
                  handleParentChange(
                    index,
                    "parentEmail",
                    emailSanitizer(e.target.value)
                  )
                }
              />
              {errors[`${parent.id}-parentEmail`] && (
                <span className="text-red-500 text-[12px] mt-1 block">
                  {errors[`${parent.id}-parentEmail`]}
                </span>
              )}
            </div>

            <div className="md:w-1/2">
              <label className="block text-[14px] text-[#282829] font-medium mb-1">Phone number</label>
              <input
                className={`w-full mt-1 mainShadow bg-white placeholder:text-[#494949] placeholder:font-medium rounded-[6px] px-4 py-3 ${errors[`${parent.id}-phoneNumber`] ? "border-red-500" : ""}`}
                value={parent.phoneNumber}
                placeholder="+44 1234568"
                onChange={(e) =>
                  handleParentChange(
                    index,
                    "phoneNumber",
                    onlyNumbers(e.target.value)
                  )
                }
              />
              {errors[`${parent.id}-phoneNumber`] && (
                <span className="text-red-500 text-[12px] mt-1 block">
                  {errors[`${parent.id}-phoneNumber`]}
                </span>
              )}
            </div>
          </div>

          {/* Selects */}
          <div className="md:flex gap-4">
            <div className="md:w-1/2 mb-5 md:mb-0">
              <label className="block text-[14px] text-[#282829] font-medium mb-1">
                Relation to child
              </label>
              <Select
                options={relationOptions}
                styles={selectStyles}
                value={relationOptions.find(
                  (o) => o.value === parent.relationChild
                )}
                onChange={(opt) =>
                  handleParentChange(index, "relationChild", opt?.value || "")
                }
              />
              {errors[`${parent.id}-relationChild`] && (
                <span className="text-red-500 text-[12px] mt-1 block">
                  {errors[`${parent.id}-relationChild`]}
                </span>
              )}
            </div>

            <div className="md:w-1/2">
              <label className="block text-[14px] text-[#282829] font-medium mb-1">
                How did you hear about us?
              </label>
              <Select
                options={hearOptions}
                styles={selectStyles}
                value={hearOptions.find(
                  (o) => o.value === parent.howDidHear
                )}
                onChange={(opt) =>
                  handleParentChange(index, "howDidHear", opt?.value || "")
                }
              />
            </div>
          </div>
        </motion.div>
      ))}

      <div className="md:px-6 mt-5 md:mt-0">
        <button
          onClick={handleAddParent}
          disabled={parents.length === 2}
          type="button"
          className="text-white px-4 py-2.5 bg-[#042C89] text-[15px] rounded-[12px]"
        >
          Add Parent
        </button>
      </div>

     <div className="flex justify-end mt-10 gap-3">
       <button
        onClick={onBack}
        disabled={disableNext}
        className={`px-5 py-2 rounded-[6px] border border-[#042C89] font-semibold ${disableNext
          ? "text-gray-400 cursor-not-allowed"
          : "text-gray-700 hover:bg-gray-100"
          }`}
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
      >
        Next
      </button>
     </div>

    </div>
  );
};

export default StepParents;
