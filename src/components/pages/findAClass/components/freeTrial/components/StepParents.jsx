import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

/* ================= HIGH LEVEL INPUT HELPERS ================= */
const onlyLetters = (v) => v.replace(/[^a-zA-Z\s]/g, "");
const onlyNumbers = (v, max = 12) => v.replace(/\D/g, "").slice(0, max);
const emailSanitizer = (v) =>
  v.replace(/[^a-zA-Z0-9._%+-@]/g, "");
/* ============================================================ */

const relationOptions = [
  { value: "", label: "Select" },
  { value: "father", label: "Father" },
  { value: "mother", label: "Mother" },
  { value: "guardian", label: "Guardian" },
];

const hearOptions = [
  { value: "", label: "Select" },
  { value: "Google", label: "Google" },
  { value: "Facebook", label: "Facebook" },
  { value: "Instagram", label: "Instagram" },
  { value: "Friend", label: "Friend" },
  { value: "Flyer", label: "Flyer" },
];

const interestOptions = [
  { value: "", label: "Select" },
  { value: "To build my child's confidence", label: "To build my child's confidence" },
  { value: "To improve their technical football skills", label: "To improve their technical football skills" },
  { value: "Because my child loves football", label: "Because my child loves football" },
  { value: "To help my child make friends and build social skills", label: "To help my child make friends and build social skills" },
  { value: "To keep my child active and healthy", label: "To keep my child active and healthy" },
  { value: "High-quality coaching in a fun, positive environment", label: "High-quality coaching in a fun, positive environment" },
  { value: "Other", label: "Other" },
];

const emptyParent = () => ({
  id: Date.now(),
  parentFirstName: "",
  parentLastName: "",
  parentEmail: "",
  phoneNumber: "",
  dialCode: "",
  relationChild: "",
  howDidHear: "",
  interestReason: "",
  interestReasonOther: "",
});

const StepParents = ({ parents, setParents, emergency, setEmergency, onNext, onBack }) => {
  const [errors, setErrors] = useState({});
  const [openRelationDropdowns, setOpenRelationDropdowns] = useState({});
  const [openHearDropdowns, setOpenHearDropdowns] = useState({});
  const [openInterestDropdowns, setOpenInterestDropdowns] = useState({});

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
      parent.interestReason &&
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
      if (!parent.interestReason) {
        newErrors[`${parent.id}-interestReason`] = "Interest reason is required";
        valid = false;
      }
    });

    setErrors(newErrors);
    return valid;
  };

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

      case "interestReason":
        if (!value) message = "Interest reason is required";
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
        copy[key] = errorMsg;
      } else {
        delete copy[key];
      }

      return copy;
    });
  };

  const handlePhoneChange = (index, value, data) => {
    const updated = [...parents];
    const formattedPhone = value && !value.startsWith("+") ? `+${value}` : value;
    updated[index].phoneNumber = formattedPhone;
    updated[index].dialCode = data?.dialCode || "";
    setParents(updated);

    const parent = updated[index];
    const key = `${parent.id}-phoneNumber`;

    setErrors((prev) => {
      const copy = { ...prev };
      if (!value.trim()) {
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

  const toggleRelationDropdown = (parentId) => {
    setOpenRelationDropdowns(prev => ({
      ...prev,
      [parentId]: !prev[parentId]
    }));
  };

  const toggleHearDropdown = (parentId) => {
    setOpenHearDropdowns(prev => ({
      ...prev,
      [parentId]: !prev[parentId]
    }));
  };

  const toggleInterestDropdown = (parentId) => {
    setOpenInterestDropdowns(prev => ({
      ...prev,
      [parentId]: !prev[parentId]
    }));
  };

  const selectRelation = (parentId, value) => {
    const index = parents.findIndex(p => p.id === parentId);
    handleParentChange(index, "relationChild", value);
    toggleRelationDropdown(parentId);
  };

  const selectHear = (parentId, value) => {
    const index = parents.findIndex(p => p.id === parentId);
    handleParentChange(index, "howDidHear", value);
    toggleHearDropdown(parentId);
  };

  const selectInterest = (parentId, value) => {
    const index = parents.findIndex(p => p.id === parentId);
    handleParentChange(index, "interestReason", value);
    toggleInterestDropdown(parentId);
  };

  useEffect(() => {
    if (!parents || parents.length === 0) {
      setParents([emptyParent()]);
    }
  }, []);

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
              <label className="block text-[14px] text-[#282829] font-medium mb-1">
                First name<span className="text-red-500 ml-0.5">*</span>
              </label>
              <input
                className={`w-full mt-1 mainShadow bg-white text-[#494949] font-normal placeholder:text-[#494949] placeholder:font-normal rounded-[6px] px-4 py-3 ${errors[`${parent.id}-parentFirstName`] ? "border-red-500" : ""}`}
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
              <label className="block text-[14px] text-[#282829] font-medium mb-1">
                Last name<span className="text-red-500 ml-0.5">*</span>
              </label>
              <input
                className={`w-full mt-1 mainShadow bg-white text-[#494949] font-normal placeholder:text-[#494949] placeholder:font-normal rounded-[6px] px-4 py-3 ${errors[`${parent.id}-parentLastName`] ? "border-red-500" : ""}`}
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
              <label className="block text-[14px] text-[#282829] font-medium mb-1">
                Email<span className="text-red-500 ml-0.5">*</span>
              </label>
              <input
                className={`w-full mt-1 mainShadow bg-white text-[#494949] font-normal placeholder:text-[#494949] placeholder:font-normal rounded-[6px] px-4 py-3 ${errors[`${parent.id}-parentEmail`] ? "border-red-500" : ""}`}
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
              <label className="block text-[14px] text-[#282829] font-medium mb-1">
                Phone number<span className="text-red-500 ml-0.5">*</span>
              </label>
              <div className="mt-1">
                <PhoneInput
                  country={"gb"}
                  value={parent.phoneNumber}
                  onChange={(value, data) => handlePhoneChange(index, value, data)}
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
              </div>
              {errors[`${parent.id}-phoneNumber`] && (
                <span className="text-red-500 text-[12px] mt-1 block">
                  {errors[`${parent.id}-phoneNumber`]}
                </span>
              )}
            </div>
          </div>

          {/* Selects - Custom Dropdowns */}
          <div className="md:flex gap-4">
            <div className="md:w-1/2 mb-5 md:mb-0">
              <label className="block text-[14px] text-[#282829] font-medium mb-1">
                Relation to child<span className="text-red-500 ml-0.5">*</span>
              </label>
              <div className="relative">
                <button
                  onClick={() => toggleRelationDropdown(parent.id)}
                  className={`w-full mt-1 mainShadow bg-white rounded-[6px] px-4 py-3 text-left flex justify-between items-center border ${errors[`${parent.id}-relationChild`] ? "border-red-500" : "border-transparent"} hover:border-[#2563eb] focus:outline-none focus:border-[#2563eb] transition-colors`}
                >
                  <span className="text-[#494949] font-normal">
                    {parent.relationChild
                      ? relationOptions.find(o => o.value === parent.relationChild)?.label
                      : "Select relation"
                    }
                  </span>
                  <svg className={`w-5 h-5 transition-transform ${openRelationDropdowns[parent.id] ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openRelationDropdowns[parent.id] && (
                  <div className="absolute z-10 w-full mt-1 bg-white rounded-[6px] shadow-lg border border-gray-200 max-h-40 overflow-auto">
                    {relationOptions.map((option) => (
                      <div
                        key={option.value}
                        onClick={() => selectRelation(parent.id, option.value)}
                        className="px-4 py-3 cursor-pointer hover:bg-[#EFF6FF] text-[#494949] font-normal border-b border-gray-100 last:border-b-0"
                      >
                        {option.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
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
              <div className="relative">
                <button
                  onClick={() => toggleHearDropdown(parent.id)}
                  className="w-full mt-1 mainShadow bg-white rounded-[6px] px-4 py-3 text-left flex justify-between items-center border border-transparent hover:border-[#2563eb] focus:outline-none focus:border-[#2563eb] transition-colors"
                >
                  <span className="text-[#494949] font-normal">
                    {parent.howDidHear
                      ? hearOptions.find(o => o.value === parent.howDidHear)?.label
                      : "Select from dropdown"
                    }
                  </span>
                  <svg className={`w-5 h-5 transition-transform ${openHearDropdowns[parent.id] ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openHearDropdowns[parent.id] && (
                  <div className="absolute z-10 w-full mt-1 bg-white rounded-[6px] shadow-lg border border-gray-200 max-h-40 overflow-auto">
                    {hearOptions.map((option) => (
                      <div
                        key={option.value}
                        onClick={() => selectHear(parent.id, option.value)}
                        className="px-4 py-3 cursor-pointer hover:bg-[#EFF6FF] text-[#494949] font-normal border-b border-gray-100 last:border-b-0"
                      >
                        {option.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Reason & Other */}
          <div className="grid gap-4">
            <div className=" mb-5 md:mb-0">
              <label className="block text-[14px] text-[#282829] font-medium mb-1">
                What’s the main reason you’re interested in Samba Soccer Schools?<span className="text-red-500 ml-0.5">*</span>
              </label>
              <div className="relative">
                <button
                  onClick={() => toggleInterestDropdown(parent.id)}
                  className={`w-full mt-1 mainShadow bg-white rounded-[6px] px-4 py-3 text-left flex justify-between items-center border ${errors[`${parent.id}-interestReason`] ? "border-red-500" : "border-transparent"} hover:border-[#2563eb] focus:outline-none focus:border-[#2563eb] transition-colors`}
                >
                  <span className="text-[#494949] font-normal">
                    {parent.interestReason
                      ? interestOptions.find(o => o.value === parent.interestReason)?.label
                      : "Select an option"
                    }
                  </span>
                  <svg className={`w-5 h-5 transition-transform ${openInterestDropdowns[parent.id] ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openInterestDropdowns[parent.id] && (
                  <div className="absolute z-10 w-full mt-1 bg-white rounded-[6px] shadow-lg border border-gray-200 max-h-40 overflow-auto">
                    {interestOptions.map((option) => (
                      <div
                        key={option.value}
                        onClick={() => selectInterest(parent.id, option.value)}
                        className="px-4 py-3 cursor-pointer hover:bg-[#EFF6FF] text-[#494949] font-normal border-b border-gray-100 last:border-b-0"
                      >
                        {option.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {errors[`${parent.id}-interestReason`] && (
                <span className="text-red-500 text-[12px] mt-1 block">
                  {errors[`${parent.id}-interestReason`]}
                </span>
              )}
            </div>

            <div className="">
              <label className="block text-[14px] text-[#282829] font-medium mb-1">
                Tell us a bit more (optional)
              </label>
              <textarea
                className="w-full mt-1 mainShadow bg-white text-[#494949] font-normal placeholder:text-[#494949] placeholder:font-normal rounded-[6px] px-4 py-3 resize-none"
                rows="2"
                value={parent.interestReasonOther}
                placeholder="Enter details here..."
                onChange={(e) => handleParentChange(index, "interestReasonOther", e.target.value)}
              />
            </div>
          </div>
        </motion.div>
      ))}

      <div className="md:px-6 my-5 md:my-0 ">
        <button
          onClick={handleAddParent}
          disabled={parents.length === 2}
          type="button"
          className="text-white px-4 py-2.5 bg-[#042C89] text-[15px] rounded-[12px] disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Add Parent
        </button>
      </div>


      <div className="flex md:justify-end md:mt-10 gap-3 mt-5 justify-center mb-5">
        <button
          onClick={onBack}
          className="px-5 py-2 rounded-[6px] border border-[#042C89] font-semibold text-gray-700 hover:bg-gray-100"
        >
          Back
        </button>

        <button
          onClick={handleNext}
          disabled={!isParentValid()}
          className={`px-5 py-2 rounded-[6px] font-semibold ${!isParentValid()
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