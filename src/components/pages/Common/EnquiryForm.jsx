import { useState, useEffect } from "react";
import { useToast, Toast } from "./Toast";

const validate = (formData) => {
  const errors = {};

  if (!formData.parentName.trim())
    errors.parentName = "Parent full name is required.";

  if (!formData.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!formData.phone.trim()) {
    errors.phone = "Telephone number is required.";
  } else if (formData.phone.trim().length < 7) {
    errors.phone = "Phone number must be at least 7 digits";
  }
  if (!formData.postcode.trim()) {
    errors.postcode = "Postcode is required.";
  } else if (
    !/^[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2}$/i.test(formData.postcode.trim())
  ) {
    errors.postcode = "Enter a valid London postcode (e.g. SW1A 1AA).";
  }

  if (!formData.childName.trim())
    errors.childName = "Child full name is required.";

  if (!formData.age) {
    errors.age = "Age is required.";
  } else if (
    isNaN(formData.age) ||
    Number(formData.age) < 1 ||
    Number(formData.age) > 18
  ) {
    errors.age = "Age must be between 1 and 18.";
  }

  if (!formData.packageId) errors.packageId = "Please select a package.";

  if (!formData.days) errors.days = "Please select at least one day.";

  return errors;
};

const initialState = {
  parentName: "",
  email: "",
  phone: "+44",
  postcode: "",
  childName: "",
  age: "",
  packageId: "",
  days: "",
  notes: "",
};



const R = () => <span className="text-red-500 ml-0.5">*</span>;

const EnquiryForm = () => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toasts, addToast, removeToast } = useToast();
  const [packages, setPackages] = useState([]);
  const [packagesLoading, setPackagesLoading] = useState(true);

  // 2. Fetch packages on mount
  useEffect(() => {
    fetch("https://api.grabbite.com/api/open/one-to-one/packages", {
    })
      .then(r => r.json())
      .then(data => {
        const list = Array.isArray(data) ? data : (data.data || []);
        setPackages(list);
        setPackagesLoading(false);
      });
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };




  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    const payload = {
      parentName: formData.parentName.trim(),
      childName: formData.childName.trim(),
      email: formData.email.trim(),
      phoneNumber: formData.phone,
      age: Number(formData.age),
      postCode: formData.postcode.trim(),
      packageId: formData.packageId,
      availability: formData.days,
      notes: formData.notes.trim(),
    };

    try {
      const response = await fetch(
        "https://api.grabbite.com/api/open/one-to-one/inqury-create",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          redirect: "follow",
        }
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

      setFormData(initialState);
      setErrors({});
      addToast(result.message ||
        "Your enquiry has been submitted successfully! We'll be in touch soon.",
        "success"
      );
    } catch (error) {
      console.error("Submission error:", error);
      addToast(
        "Something went wrong. Please try again or contact us directly.",
        "error"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (name) =>
    `w-full mt-1 rounded-lg px-4 py-3 outline-none focus:ring-2 ${errors[name]
      ? "bg-red-50 border border-red-400 focus:ring-red-300"
      : "bg-[#F6F6F7] focus:ring-green-400"
    }`;

  const ErrorMsg = ({ name }) =>
    errors[name] ? (
      <p className="text-red-500 text-sm mt-1">{errors[name]}</p>
    ) : null;

  return (
    <>
      <Toast toasts={toasts} removeToast={removeToast} />

      <form
        onSubmit={handleSubmit}
        noValidate
        className="w-full bg-white rounded-2xl shadowBox md:p-10 p-5 space-y-5"
      >
        {/* Parent Name */}
        <div>
          <label className="text-[#101014] poppins text-[16px] font-regular">
            Parent Full Name <R />
          </label>
          <input
            type="text"
            name="parentName"
            value={formData.parentName}
            placeholder="Parent Full Name"
            onChange={handleChange}
            disabled={isSubmitting}
            className={inputClass("parentName")}
          />
          <ErrorMsg name="parentName" />
        </div>

        {/* Email */}
        <div>
          <label className="text-[#101014] poppins text-[16px] font-regular">
            Email Address <R />
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email Address"
            onChange={handleChange}
            disabled={isSubmitting}
            className={inputClass("email")}
          />
          <ErrorMsg name="email" />
        </div>

        {/* Phone */}
        <div>
          <label className="text-[#101014] poppins text-[16px] font-regular">
            Telephone Number <R />
          </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            placeholder="Telephone Number"
            onChange={handleChange}
            disabled={isSubmitting}
            className={inputClass("phone")}
          />
          <ErrorMsg name="phone" />
        </div>

        {/* Postcode */}
        <div>
          <label className="text-[#101014] poppins text-[16px] font-regular">
            London Postcode <R />
          </label>
          <input
            type="text"
            name="postcode"
            value={formData.postcode}
            placeholder="e.g. SW1A 1AA"
            onChange={handleChange}
            disabled={isSubmitting}
            className={inputClass("postcode")}
          />
          <ErrorMsg name="postcode" />
        </div>

        {/* Child Name */}
        <div>
          <label className="text-[#101014] poppins text-[16px] font-regular">
            Child Full Name <R />
          </label>
          <input
            type="text"
            name="childName"
            value={formData.childName}
            placeholder="Child Full Name"
            onChange={handleChange}
            disabled={isSubmitting}
            className={inputClass("childName")}
          />
          <ErrorMsg name="childName" />
        </div>

        {/* Age */}
        <div>
          <label className="text-[#101014] poppins text-[16px] font-regular">
            Age of child <R />
          </label>
          <input
            type="number"
            name="age"
            value={formData.age}
            placeholder="Age of child"
            min="1"
            max="18"
            onChange={handleChange}
            disabled={isSubmitting}
            className={inputClass("age")}
          />
          <ErrorMsg name="age" />
        </div>

        {/* Package */}
        <div>
          <label className="text-[#101014] poppins text-[16px] font-regular">
            Which package are you interested in? <R />
          </label>
          <select
            name="packageId"
            value={formData.packageId}
            onChange={handleChange}
            disabled={isSubmitting}
            className={inputClass("packageId")}
          >
            <option value="">Choose package</option>
            {packages.map(pkg => (
              <option key={pkg.id} value={pkg.id}>{pkg.packageName}</option>
            ))}

          </select>
          <ErrorMsg name="package" />
        </div>

        {/* Days */}
        <div>
          <label className="text-[#101014] poppins text-[16px] font-regular block mb-2">
            Select which day(s) you are available for lessons <R />
          </label>
          <div className="flex gap-6 text-[#101014] poppins text-[16px]">
            {["Sat", "Sun", "Mon-Fri"].map((day) => (
              <label key={day} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="days"
                  value={day}
                  checked={formData.days === day}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="accent-green-500"
                />
                {day}
              </label>
            ))}
          </div>
          <ErrorMsg name="days" />
        </div>

        {/* Notes — optional, no asterisk */}
        <div>
          <label className="text-[#101014] poppins text-[16px] font-regular">
            Notes
          </label>
          <textarea
            name="notes"
            rows="4"
            value={formData.notes}
            placeholder="Enter any supporting notes..."
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full mt-1 rounded-lg border border-[#D0D5DD] px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#0DD180] hover:bg-green-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold poppins py-3 text-[18px] rounded-full transition flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
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
    </>
  );
};

export default EnquiryForm;