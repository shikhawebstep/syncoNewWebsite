import { useState } from "react";
import { useToast, Toast } from "./Toast";

const calculateAge = (dob) => {
  if (!dob) return "";
  const today = new Date();
  const birthDate = new Date(dob);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
  return age >= 0 ? age : "";
};

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  gender: "",
  dateOfBirth: "",
  postcode: "",
  desiredFranchiseLocation: "",
  liquidCapital: "",
  managementExperience: "",
  heardFrom: "",
  message: "",
};

const validate = (fields) => {
  const errors = {};
  if (!fields.firstName.trim()) errors.firstName = "First name is required.";
  if (!fields.lastName.trim()) errors.lastName = "Surname is required.";
  if (!fields.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!fields.phoneNumber.trim()) {
    errors.phoneNumber = "Telephone number is required.";
  } else if (!/^\+?[\d\s\-().]{7,20}$/.test(fields.phoneNumber)) {
    errors.phoneNumber = "Please enter a valid phone number.";
  }
  if (!fields.gender.trim()) errors.gender = "Gender is required.";
  if (!fields.dateOfBirth) {
    errors.dateOfBirth = "Date of birth is required.";
  } else {
    const age = calculateAge(fields.dateOfBirth);
    if (age === "" || age < 18) errors.dateOfBirth = "You must be at least 18 years old.";
  }
  if (!fields.postcode.trim()) errors.postcode = "Postcode is required.";
  if (!fields.desiredFranchiseLocation.trim())
    errors.desiredFranchiseLocation = "Desired location is required.";
  if (!fields.liquidCapital.trim())
    errors.liquidCapital = "Liquid capital is required.";
  if (!fields.managementExperience.trim())
    errors.managementExperience = "Management experience is required.";
  if (!fields.heardFrom.trim())
    errors.heardFrom = "Please tell us how you heard about us.";
  return errors;
};

const R = () => <span className="text-red-500 ml-0.5">*</span>;

export default function FranchiseForm() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const { toasts, addToast, removeToast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    // Clear DOB error when DOB changes
    if (name === "dob" && errors.dob) {
      setErrors((prev) => ({ ...prev, dob: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        phoneNumber: form.phoneNumber,
        gender: form.gender,
        dateOfBirth: form.dateOfBirth || form.dob,
        age: calculateAge(form.dateOfBirth || form.dob),
        postcode: form.postcode,
        desiredFranchiseLocation: form.desiredFranchiseLocation,
        liquidCapital: form.liquidCapital,
        managementExperience: form.managementExperience,
        heardFrom: form.heardFrom,
        message: form.message,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      const response = await fetch(
        "https://api.grabbite.com/api/open/recruitment/franchise/enquiry-create",
        requestOptions
      );

      const result = await response.json();

      if (!response.ok) {
        let errorMsg = result.message || "Something went wrong. Please try again.";
        if (result.error && typeof result.error === 'object') {
          const firstKey = Object.keys(result.error)[0];
          errorMsg = result.error[firstKey];
        }
        addToast(errorMsg, "error");
        return;
      }

      setForm(initialState);
      setErrors({});
      addToast(
        "Your franchise enquiry has been submitted. We'll be in touch soon!",
        "success"
      );
    } catch (error) {
      console.error("Submission error:", error);
      addToast(
        "Something went wrong. Please try again.",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field) =>
    `w-full px-3 py-2 rounded-md bg-[#F6F6F7] placeholder-[#9E9FAA] text-gray-700 focus:outline-none focus:ring-2 ${
      errors[field]
        ? "ring-2 ring-red-400 border-red-400"
        : "focus:ring-green-400 focus:border-green-400"
    }`;

  return (
    <>
      <Toast toasts={toasts} removeToast={removeToast} />

      <div className="md:p-10 p-5 bg-white mainShadow rounded-[20px]">
        <form className="space-y-6" onSubmit={handleSubmit} noValidate>
          {/* First Name */}
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-[#101014] poppins mb-1"
            >
              First Name <R />
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="First Name"
              value={form.firstName}
              onChange={handleChange}
              className={inputClass("firstName")}
              disabled={loading}
            />
            {errors.firstName && (
              <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>
            )}
          </div>

          {/* Surname */}
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-[#101014] poppins mb-1"
            >
              Surname <R />
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Surname"
              value={form.lastName}
              onChange={handleChange}
              className={inputClass("lastName")}
              disabled={loading}
            />
            {errors.lastName && (
              <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#101014] poppins mb-1"
            >
              Email <R />
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className={inputClass("email")}
              disabled={loading}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Telephone */}
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-[#101014] poppins mb-1"
            >
              Telephone Number <R />
            </label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              placeholder="Telephone Number"
              value={form.phoneNumber}
              onChange={handleChange}
              className={inputClass("phoneNumber")}
              disabled={loading}
            />
            {errors.phoneNumber && (
              <p className="mt-1 text-xs text-red-500">{errors.phoneNumber}</p>
            )}
          </div>

          {/* Gender */}
          <div>
            <label
              htmlFor="gender"
              className="block text-sm font-medium text-[#101014] poppins mb-1"
            >
              Gender <R />
            </label>
            <select
              id="gender"
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className={inputClass("gender")}
              disabled={loading}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            {errors.gender && (
              <p className="mt-1 text-xs text-red-500">{errors.gender}</p>
            )}
          </div>

          {/* Date of Birth + Age (side by side) */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label
                htmlFor="dob"
                className="block text-sm font-medium text-[#101014] poppins mb-1"
              >
                Date of Birth <R />
              </label>
              <input
                id="dob"
                name="dob"
                type="date"
                max={new Date().toISOString().split("T")[0]}
                value={form.dob}
                onChange={handleChange}
                className={inputClass("dob")}
                disabled={loading}
              />
              {errors.dob && (
                <p className="mt-1 text-xs text-red-500">{errors.dob}</p>
              )}
            </div>

            <div className="w-[110px]">
              <label
                htmlFor="age"
                className="block text-sm font-medium text-[#101014] poppins mb-1"
              >
                Age
              </label>
              <input
                id="age"
                name="age"
                type="text"
                value={form.dob ? calculateAge(form.dob) : ""}
                readOnly
                placeholder="Auto"
                className="w-full px-3 py-2 rounded-md bg-[#EFEFEF] text-gray-500 cursor-not-allowed focus:outline-none"
              />
            </div>
          </div>

          {/* Postcode */}
          <div>
            <label
              htmlFor="postcode"
              className="block text-sm font-medium text-[#101014] poppins mb-1"
            >
              Postcode <R />
            </label>
            <input
              id="postcode"
              name="postcode"
              type="text"
              placeholder="e.g. SW1A 1AA"
              value={form.postcode}
              onChange={handleChange}
              className={inputClass("postcode")}
              disabled={loading}
            />
            {errors.postcode && (
              <p className="mt-1 text-xs text-red-500">{errors.postcode}</p>
            )}
          </div>

          {/* Desired Location */}
          <div>
            <label
              htmlFor="desiredFranchiseLocation"
              className="block text-sm font-medium text-[#101014] poppins mb-1"
            >
              Desired location of the franchise <R />
            </label>
            <input
              id="desiredFranchiseLocation"
              name="desiredFranchiseLocation"
              type="text"
              placeholder="Desired location of the franchise"
              value={form.desiredFranchiseLocation}
              onChange={handleChange}
              className={inputClass("desiredFranchiseLocation")}
              disabled={loading}
            />
            {errors.desiredFranchiseLocation && (
              <p className="mt-1 text-xs text-red-500">
                {errors.desiredFranchiseLocation}
              </p>
            )}
          </div>

          {/* Liquid Capital */}
          <div>
            <label
              htmlFor="liquidCapital"
              className="block text-sm font-medium text-[#101014] poppins mb-1"
            >
              How much liquid capital do you have available? <R />
            </label>
            <input
              id="liquidCapital"
              name="liquidCapital"
              type="text"
              placeholder="How much liquid capital do you have available?"
              value={form.liquidCapital}
              onChange={handleChange}
              className={inputClass("liquidCapital")}
              disabled={loading}
            />
            {errors.liquidCapital && (
              <p className="mt-1 text-xs text-red-500">{errors.liquidCapital}</p>
            )}
          </div>

          {/* Management Experience */}
          <div>
            <label
              htmlFor="managementExperience"
              className="block text-sm font-medium text-[#101014] poppins mb-1"
            >
              Management Experience <R />
            </label>
            <select
              id="managementExperience"
              name="managementExperience"
              value={form.managementExperience}
              onChange={handleChange}
              className={inputClass("managementExperience")}
              disabled={loading}
            >
              <option value="">Select your management experience</option>
              <option value="No experience">No experience</option>
              <option value="Less than 1 year">Less than 1 year</option>
              <option value="1-2 years">1–2 years</option>
              <option value="3-5 years">3–5 years</option>
              <option value="5-10 years">5–10 years</option>
              <option value="10+ years">10+ years</option>
            </select>
            {errors.managementExperience && (
              <p className="mt-1 text-xs text-red-500">{errors.managementExperience}</p>
            )}
          </div>

          {/* How did you hear */}
          <div>
            <label
              htmlFor="heardFrom"
              className="block text-sm font-medium text-[#101014] poppins mb-1"
            >
              How did you hear about our franchise opportunity? <R />
            </label>
            <input
              id="heardFrom"
              name="heardFrom"
              type="text"
              placeholder="How did you hear about our franchise opportunity?"
              value={form.heardFrom}
              onChange={handleChange}
              className={inputClass("heardFrom")}
              disabled={loading}
            />
            {errors.heardFrom && (
              <p className="mt-1 text-xs text-red-500">{errors.heardFrom}</p>
            )}
          </div>

          {/* Message — optional, no asterisk */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-[#101014] poppins mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 shadow rounded-md placeholder-[#5F5F6D] text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
              disabled={loading}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-[#0DD180] hover:bg-green-600 text-white font-bold rounded-full text-[18px] poppins focus:outline-none focus:ring-2 focus:ring-green-400 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
                Sending...
              </>
            ) : (
              "Send"
            )}
          </button>
        </form>
      </div>
    </>
  );
}