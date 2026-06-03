import { useState } from "react";
import { useToast, Toast } from "../../../Common/Toast";

const initialState = {
  firstName: "",
  surname: "",
  email: "",
  phone: "+44",
  postcode: "",
  childName: "",
  age: "",
  partyDate: "",
  availableDays: "",
  package: "Gold",
  notes: "",
};

const validate = (formData) => {
  const errors = {};

  if (!formData.firstName.trim()) errors.firstName = "First name is required";
  if (!formData.surname.trim()) errors.surname = "Surname is required";

  if (!formData.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
    errors.email = "Enter a valid email address";
  }

  if (!formData.phone.trim()) {
    errors.phone = "Phone number is required";
  } else if (!/^\+?[\d\s\-().]{7,15}$/.test(formData.phone.trim())) {
    errors.phone = "Enter a valid phone number (7–15 digits)";
  }

  if (!formData.postcode.trim()) errors.postcode = "Postcode is required";
  if (!formData.childName.trim()) errors.childName = "Child's name is required";

  if (!formData.age) {
    errors.age = "Age is required";
  } else {
    const n = Number(formData.age);
    if (!Number.isInteger(n) || n < 1 || n > 18)
      errors.age = "Enter age between 1 and 18";
  }

  if (!formData.partyDate) {
    errors.partyDate = "Party date is required";
  } else if (new Date(formData.partyDate) <= new Date()) {
    errors.partyDate = "Date must be in the future";
  }

  if (!formData.availableDays)
    errors.availableDays = "Please select an available day";

  return errors;
};

const EnquiryForm = () => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toasts, addToast, removeToast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const newErrors = validate({ ...formData, [name]: value });
      setErrors((prev) => ({ ...prev, [name]: newErrors[name] }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const newErrors = validate(formData);
    setErrors((prev) => ({ ...prev, [name]: newErrors[name] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const allTouched = Object.keys(initialState).reduce(
      (acc, k) => ({ ...acc, [k]: true }),
      {}
    );
    setTouched(allTouched);

    const validationErrors = validate(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);

    const payload = {
      parentName: `${formData.firstName.trim()} ${formData.surname.trim()}`,
      childName: formData.childName.trim(),
      age: Number(formData.age),
      partyDate: formData.partyDate,
      packageInterest: formData.package,
      phoneNumber: formData.phone.trim(),
      email: formData.email.trim(),
      postCode: formData.postcode.trim(),
      availableDays: formData.availableDays,
      notes: formData.notes.trim(),
    };

    try {
      const res = await fetch(
        "https://api.grabbite.com/api/open/birthday-party/inqury-create",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          redirect: "follow",
        }
      );
      const result = await res.json();
      if (res.ok) {
        setSubmitted(true);
      } else {
        let errorMsg = result.message || "Failed to submit enquiry.";
        if (result.error && typeof result.error === 'object') {
          const firstKey = Object.keys(result.error)[0];
          errorMsg = result.error[firstKey];
        }
        addToast(errorMsg, "error");
      }
    } catch (err) {
      addToast("Something went wrong. Please try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData(initialState);
    setErrors({});
    setTouched({});
    setSubmitted(false);
  };

  const inputClass = (field) =>
    `w-full mt-1 rounded-lg bg-[#F6F6F7] px-4 py-3 outline-none focus:ring-2 ${errors[field] && touched[field]
      ? "ring-2 ring-red-400"
      : "focus:ring-green-400"
    }`;

  if (submitted) {
    return (
      <div className="w-full bg-white rounded-2xl shadowBox p-8 flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="text-[22px] font-bold text-[#101014]">Enquiry Sent!</h2>
        <p className="text-gray-500 text-[15px]">
          Thanks for getting in touch. We'll review your details and get back to
          you shortly.
        </p>
        <button
          onClick={handleReset}
          className="mt-4 px-8 py-2 border border-gray-300 rounded-full text-[15px] hover:bg-gray-50 transition"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="w-full bg-white rounded-2xl shadowBox p-8 space-y-5"
    >
      <Toast toasts={toasts} removeToast={removeToast} />
      {/* First Name */}
      <div>
        <label className="text-[#101014] text-[16px]">First Name<span className="text-red-500 ml-0.5">*</span></label>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          className={inputClass("firstName")}
        />
        {errors.firstName && touched.firstName && (
          <p className="text-red-500 text-[12px] mt-1">{errors.firstName}</p>
        )}
      </div>

      {/* Surname */}
      <div>
        <label className="text-[#101014] text-[16px]">Surname<span className="text-red-500 ml-0.5">*</span></label>
        <input
          type="text"
          name="surname"
          placeholder="Surname"
          value={formData.surname}
          onChange={handleChange}
          onBlur={handleBlur}
          className={inputClass("surname")}
        />
        {errors.surname && touched.surname && (
          <p className="text-red-500 text-[12px] mt-1">{errors.surname}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="text-[#101014] text-[16px]">Email<span className="text-red-500 ml-0.5">*</span></label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={inputClass("email")}
        />
        {errors.email && touched.email && (
          <p className="text-red-500 text-[12px] mt-1">{errors.email}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label className="text-[#101014] text-[16px]">Telephone Number<span className="text-red-500 ml-0.5">*</span></label>
        <input
          type="tel"
          name="phone"
          placeholder="Telephone Number"
          value={formData.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          className={inputClass("phone")}
        />
        {errors.phone && touched.phone && (
          <p className="text-red-500 text-[12px] mt-1">{errors.phone}</p>
        )}
      </div>

      {/* Postcode */}
      <div>
        <label className="text-[#101014] text-[16px]">Postcode<span className="text-red-500 ml-0.5">*</span></label>
        <input
          type="text"
          name="postcode"
          placeholder="Postcode"
          value={formData.postcode}
          onChange={handleChange}
          onBlur={handleBlur}
          className={inputClass("postcode")}
        />
        {errors.postcode && touched.postcode && (
          <p className="text-red-500 text-[12px] mt-1">{errors.postcode}</p>
        )}
      </div>

      {/* Child Name */}
      <div>
        <label className="text-[#101014] text-[16px]">Name of child<span className="text-red-500 ml-0.5">*</span></label>
        <input
          type="text"
          name="childName"
          placeholder="Name of child"
          value={formData.childName}
          onChange={handleChange}
          onBlur={handleBlur}
          className={inputClass("childName")}
        />
        {errors.childName && touched.childName && (
          <p className="text-red-500 text-[12px] mt-1">{errors.childName}</p>
        )}
      </div>

      {/* Age */}
      <div>
        <label className="text-[#101014] text-[16px]">Age of child<span className="text-red-500 ml-0.5">*</span></label>
        <input
          type="number"
          name="age"
          placeholder="Age of child"
          value={formData.age}
          onChange={handleChange}
          onBlur={handleBlur}
          min={1}
          max={18}
          className={inputClass("age")}
        />
        {errors.age && touched.age && (
          <p className="text-red-500 text-[12px] mt-1">{errors.age}</p>
        )}
      </div>

      {/* Date of Party */}
      <div>
        <label className="text-[#101014] text-[16px]">Date of party<span className="text-red-500 ml-0.5">*</span></label>
        <input
          type="date"
          name="partyDate"
          value={formData.partyDate}
          onChange={handleChange}
          onBlur={handleBlur}
          className={inputClass("partyDate")}
        />
        {errors.partyDate && touched.partyDate && (
          <p className="text-red-500 text-[12px] mt-1">{errors.partyDate}</p>
        )}
      </div>

      {/* Available Days */}
      <div>
        <label className="text-[#101014] text-[16px]">Available days<span className="text-red-500 ml-0.5">*</span></label>
        <select
          name="availableDays"
          value={formData.availableDays}
          onChange={handleChange}
          onBlur={handleBlur}
          className={inputClass("availableDays")}
        >
          <option value="">Select a day</option>
          <option value="mon">Monday</option>
          <option value="tue">Tuesday</option>
          <option value="wed">Wednesday</option>
          <option value="thu">Thursday</option>
          <option value="fri">Friday</option>
          <option value="sat">Saturday</option>
          <option value="sun">Sunday</option>
        </select>
        {errors.availableDays && touched.availableDays && (
          <p className="text-red-500 text-[12px] mt-1">
            {errors.availableDays}
          </p>
        )}
      </div>

      {/* Package */}
      <div>
        <label className="text-[#101014] text-[16px] block mb-2">
          Which package are you interested in?
        </label>
        <div className="flex gap-6">
          {["Gold", "Silver"].map((pkg) => (
            <label key={pkg} className="flex items-center gap-2">
              <input
                type="radio"
                name="package"
                value={pkg}
                checked={formData.package === pkg}
                onChange={handleChange}
                className="accent-green-500"
              />
              {pkg}
            </label>
          ))}
        </div>
      </div>

      {/* Notes */}
      <div>
        <label className="text-[#101014] text-[16px]">
          Notes{" "}
          <span className="text-gray-400 text-[13px]">(optional)</span>
        </label>
        <textarea
          name="notes"
          rows="4"
          placeholder="Any additional notes..."
          value={formData.notes}
          onChange={handleChange}
          className="w-full mt-1 rounded-lg border border-[#D0D5DD] px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-green-400"
        />
      </div>



      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#0DD180] hover:bg-green-600 disabled:bg-green-300 text-white font-bold py-3 text-[18px] rounded-full transition flex items-center justify-center gap-2"
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
                d="M4 12a8 8 0 018-8v8H4z"
              />
            </svg>
            Sending...
          </>
        ) : (
          "Send"
        )}
      </button>
    </form>
  );
};

export default EnquiryForm;