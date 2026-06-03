import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

/* ================= INPUT HELPERS ================= */
const onlyLetters = (v) => v.replace(/[^a-zA-Z\s]/g, "");
const onlyNumbers = (v, max = 12) => v.replace(/\D/g, "").slice(0, max);
const emailSanitizer = (v) => v.replace(/[^a-zA-Z0-9._%+-@]/g, "");

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
  id: Date.now(),
  parentFirstName: "",
  parentLastName: "",
  parentEmail: "",
  phoneNumber: "",
  relationChild: "",
  howDidHear: "",
});

const selectClass = (hasError = false) =>
  `w-full mt-1 mainShadow bg-white text-[#494949] font-normal placeholder:text-[#494949] placeholder:font-normal rounded-[6px] px-4 py-3 appearance-none ${hasError ? "border border-red-500" : ""
  }`;

const StepParents = ({ parents, setParents, onNext, onBack }) => {
  const [errors, setErrors] = useState({});
  const [emailMessages, setEmailMessages] = useState({});
  const [emailExists, setEmailExists] = useState(false);
  const [showAccountScreen, setShowAccountScreen] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [accountError, setAccountError] = useState("");

  const checkEmail = (parentId, email) => {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailMessages(prev => {
        const copy = { ...prev };
        delete copy[parentId];
        return copy;
      });
      return;
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "email": email
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("https://api.grabbite.com/api/check-parent-email", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        let msg = result;
        let exists = false;
        try {
          const parsed = JSON.parse(result);
          msg = parsed.message || parsed.msg || parsed.error || result;
          if (typeof parsed.exists !== 'undefined') exists = parsed.exists;
        } catch (e) { }
        if (parents[0] && parentId === parents[0].id) {
          setEmailExists(exists);
        }
        setEmailMessages((prev) => ({ ...prev, [parentId]: msg }));
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    if (!parents || parents.length === 0) {
      setParents([emptyParent()]);
    }
  }, []);

  const validateField = (field, value) => {
    switch (field) {
      case "parentFirstName":
        return value.trim() ? "" : "First name is required";
      case "parentLastName":
        return value.trim() ? "" : "Last name is required";
      case "parentEmail":
        if (!value.trim()) return "Email is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Invalid email address";
        return "";
      case "phoneNumber":
        return value.trim() ? "" : "Phone number is required";
      case "relationChild":
        return value ? "" : "Relation is required";
      default:
        return "";
    }
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

    const key = `${updated[index].id}-${field}`;
    const errorMsg = validateField(field, value);

    setErrors((prev) => {
      const copy = { ...prev };
      if (errorMsg) copy[key] = errorMsg;
      else delete copy[key];
      return copy;
    });
  };

  const validateAll = () => {
    const newErrors = {};
    let valid = true;

    const parent = parents[0];
    if (!parent) return false;

    ["parentFirstName", "parentLastName", "parentEmail", "phoneNumber", "relationChild"].forEach(
      (field) => {
        const msg = validateField(field, parent[field]);
        if (msg) {
          newErrors[`${parent.id}-${field}`] = msg;
          valid = false;
        }
      }
    );

    setErrors(newErrors);
    return valid;
  };

  const isParentValid = () => {
    const parent = parents[0];
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

  const handleAddParent = () => {
    if (parents.length < 2) setParents([...parents, emptyParent()]);
  };

  const handleRemoveParent = (id) => {
    setParents(parents.filter((p) => p.id !== id));
    setErrors((prev) => {
      const copy = { ...prev };
      Object.keys(copy).forEach((k) => { if (k.startsWith(id)) delete copy[k]; });
      return copy;
    });
  };

  const handleNext = () => {
    if (validateAll()) setShowAccountScreen(true);
  };

  const handleAccountNext = () => {
    if (!password) {
      setAccountError("Password is required");
      return;
    }
    if (!emailExists && password.length < 6) {
      setAccountError("Password must be at least 6 characters");
      return;
    }
    if (!emailExists && password !== confirmPassword) {
      setAccountError("Passwords do not match");
      return;
    }

    const updated = [...parents];
    updated[0].password = password;
    setParents(updated);

    onNext();
  };

  const disableNext = !isParentValid();

  if (showAccountScreen) {
    return (
      <div className="lg:max-w-[80%] m-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-2 poppins md:p-6 p-4 rounded-3xl space-y-6 relative text-center bg-[#FDFDFF]"
        >
          <h2 className="text-[18px] font-semibold text-[#282829] mb-2">
            {emailExists ? "Parent Connect Account Found" : "Setup Your Parent Connect Account"}
          </h2>
          <p className="text-[14px] text-[#5F5F6D] mb-8 leading-relaxed pt-5">
            <span>You're Almost Done! 🎉</span><br />
            {emailExists
              ? "We found an existing Parent Connect account linked to your email address.\nPlease enter your password to continue your booking."
              : "Set your password below to create your Parent Connect account and manage your bookings."}
          </p>

          <div className="max-w-[500px] m-auto text-left space-y-5">
            {/* Email Field */}
            <div>
              <label className="block text-[14px] text-[#282829] font-medium mb-1">
                Account Email {!emailExists && <span className="text-gray-500 font-normal italic text-[12px]">(This will be used to log in to Parent Connect)</span>}
              </label>
              <input
                disabled
                className="w-full mt-1 mainShadow bg-gray-50 text-gray-500 font-normal rounded-[6px] px-4 py-3 outline-none cursor-not-allowed"
                value={parents[0]?.parentEmail || ""}
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-[14px] text-[#282829] font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your Password"
                className={`w-full mt-1 mainShadow bg-white text-[#494949] font-normal placeholder:text-[#494949] placeholder:font-normal rounded-[6px] px-4 py-3 outline-none ${accountError && !password ? "border border-red-500" : ""}`}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setAccountError("");
                }}
              />
            </div>

            {/* Confirm Password Field (Only for Setup) */}
            {!emailExists && (
              <div>
                <label className="block text-[14px] text-[#282829] font-medium mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your Password"
                  className={`w-full mt-1 mainShadow bg-white text-[#494949] font-normal placeholder:text-[#494949] placeholder:font-normal rounded-[6px] px-4 py-3 outline-none ${accountError && accountError.includes("match") ? "border border-red-500" : ""}`}
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    setAccountError("");
                  }}
                />
              </div>
            )}

            {/* Forgot Password (Only for Login) */}
            {emailExists && (
              <div className="mt-4">
                <a href="#" className="text-[#00A6E3] text-[14px] font-semibold hover:underline">
                  Forgot Password?
                </a>
              </div>
            )}

            {/* Error Message */}
            {accountError && (
              <p className="text-red-500 text-[13px] text-center mt-2">{accountError}</p>
            )}

            {/* OR Log In (Only for Setup) */}
            {!emailExists && (
              <div className="text-center mt-8">
                <div className="relative flex items-center justify-center mb-4">
                  <div className="w-full border-t border-gray-300"></div>
                  <span className="absolute px-4 bg-[#FDFDFF] text-gray-400 text-sm font-medium">OR</span>
                </div>
                <p className="pt-2 text-[14px] text-[#282829] font-bold">
                  Already have a Parent Connect account?{" "}
                  <button
                    type="button"
                    onClick={() => {
                      setEmailExists(true);
                      setAccountError("");
                    }}
                    className="text-[#00A6E3] font-semibold hover:underline"
                  >
                    Log in
                  </button>
                </p>
              </div>
            )}
          </div>
        </motion.div>

        {/* Buttons */}
        <div className="flex md:justify-center md:mt-10 gap-3 mt-5 justify-center mb-5">
          <button
            onClick={() => setShowAccountScreen(false)}
            className="px-8 py-2.5 rounded-[8px] border border-[#042C89] font-semibold text-[#042C89] hover:bg-gray-50 transition-colors"
          >
            Back
          </button>
          <button
            onClick={handleAccountNext}
            className="px-8 py-2.5 rounded-[8px] font-semibold bg-[#042C89] text-white hover:bg-blue-800 transition-colors"
          >
            Continue
          </button>
        </div>
      </div>
    );
  }

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
                className={selectClass(!!errors[`${parent.id}-parentFirstName`])}
                value={parent.parentFirstName}
                placeholder="Enter first name"
                onChange={(e) =>
                  handleParentChange(index, "parentFirstName", onlyLetters(e.target.value))
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
                className={selectClass(!!errors[`${parent.id}-parentLastName`])}
                value={parent.parentLastName}
                placeholder="Enter last name"
                onChange={(e) =>
                  handleParentChange(index, "parentLastName", onlyLetters(e.target.value))
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
                className={selectClass(!!errors[`${parent.id}-parentEmail`])}
                value={parent.parentEmail}
                placeholder="Enter email address"
                onChange={(e) => {
                  handleParentChange(index, "parentEmail", emailSanitizer(e.target.value));
                  if (emailMessages[parent.id]) {
                    setEmailMessages(prev => {
                      const copy = { ...prev };
                      delete copy[parent.id];
                      return copy;
                    });
                  }
                }}
                onBlur={() => checkEmail(parent.id, parent.parentEmail)}
              />
              {errors[`${parent.id}-parentEmail`] ? (
                <span className="text-red-500 text-[12px] mt-1 block">
                  {errors[`${parent.id}-parentEmail`]}
                </span>
              ) : emailMessages[parent.id] ? (
                <span className="text-green-500 text-[15px] mt-1 block">
                  {emailMessages[parent.id]}
                </span>
              ) : null}
            </div>

            <div className="md:w-1/2">
              <label className="block text-[14px] text-[#282829] font-medium mb-1">
                Phone number<span className="text-red-500 ml-0.5">*</span>
              </label>
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

          {/* Dropdowns */}
          <div className="md:flex gap-4">
            <div className="md:w-1/2 mb-5 md:mb-0">
              <label className="block text-[14px] text-[#282829] font-medium mb-1">
                Relation to child<span className="text-red-500 ml-0.5">*</span>
              </label>
              <select
                className={`${selectClass(!!errors[`${parent.id}-relationChild`])} text-[#494949] font-normal`}
                value={parent.relationChild}
                onChange={(e) =>
                  handleParentChange(index, "relationChild", e.target.value)
                }
              >
                <option value="" disabled hidden className="text-[#494949] font-normal">
                  Relation to child:
                </option>
                {relationOptions.map((o) => (
                  <option key={o.value} value={o.value} className="text-[#494949] font-normal">
                    {o.label}
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
                className={`${selectClass()} text-[#494949] font-normal`}
                value={parent.howDidHear}
                onChange={(e) =>
                  handleParentChange(index, "howDidHear", e.target.value)
                }
              >
                <option value="" disabled hidden className="text-[#494949] font-normal">
                  Select an option
                </option>
                {hearOptions.map((o) => (
                  <option key={o.value} value={o.value} className="text-[#494949] font-normal">
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Add Parent Button */}
      <div className="md:px-6 my-5 md:my-0 ">
        <button
          onClick={handleAddParent}
          disabled={parents.length === 2}
          type="button"
          className="text-white px-4 py-2.5 bg-[#042C89] text-[15px] rounded-[12px] disabled:opacity-50"
        >
          Add Parent
        </button>
      </div>

      {/* Navigation */}
      <div className="flex md:justify-end md:mt-10 gap-3 mt-5 justify-center mb-5">
        <button
          onClick={onBack}
          className="px-5 py-2 rounded-[6px] border border-[#042C89] font-semibold text-gray-700 hover:bg-gray-100"
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