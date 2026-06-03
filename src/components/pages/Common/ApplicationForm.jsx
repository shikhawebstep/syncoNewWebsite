import { useState, useRef, useEffect, useCallback } from "react";
import { useToast, Toast } from "./Toast";
import Select from "react-select";

// ===== VALIDATION =====
const validateStep1 = (data) => {
  const errors = {};
  if (!data.firstName.trim()) errors.firstName = "First name is required.";
  if (!data.surname.trim()) errors.surname = "Surname is required.";
  if (!data.phone.trim()) {
    errors.phone = "Telephone number is required.";
  } else if (!/^\+?[\d\s\-(). ]{7,20}$/.test(data.phone)) {
    errors.phone = "Enter a valid phone number.";
  }
  if (!data.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!data.dob) errors.dob = "Date of birth is required.";
  if (!data.postcode.trim()) errors.postcode = "Postcode is required.";
  return errors;
};

const validateStep2 = (data) => {
  const errors = {};
  if (!data.hasVehicle) errors.hasVehicle = "Please select an option.";
  if (data.qualifications.length === 0)
    errors.qualifications = "Please select at least one qualification.";
  if (!data.experience) errors.experience = "Please select coaching experience.";
  if (data.ageGroups.length === 0)
    errors.ageGroups = "Please select at least one age group.";
  return errors;
};

const validateStep3 = (data) => {
  const errors = {};
  // FIX 1: venues is an array — check length, not truthiness
  if (!data.venues || data.venues.length === 0)
    errors.venues = "Please select at least one venue.";
  if (!data.cv) errors.cv = "Please upload your CV.";
  if (!data.coverNote.trim()) {
    errors.coverNote = "Cover note is required.";
  } else if (data.coverNote.trim().split(/\s+/).length > 500) {
    errors.coverNote = "Cover note must be 500 words or less.";
  }
  if (!data.source) errors.source = "Please select how you heard about this.";
  return errors;
};

// ===== INITIAL STATE =====
// FIX 2: venues must start as [] (array), not "" (string)
const initialState = {
  firstName: "",
  surname: "",
  phone: "+44",
  email: "",
  dob: "",
  postcode: "",
  hasVehicle: "",
  qualifications: [],
  experience: "",
  ageGroups: [],
  venues: [],
  cv: null,
  coverNote: "",
  source: "",
};

const R = () => <span className="text-red-500 ml-0.5">*</span>;

// ===== MAIN COMPONENT =====
const ApplicationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toasts, addToast, removeToast } = useToast();
  const fileRef = useRef(null);

  // ===== VENUE STATE =====
  const [venueOptions, setVenueOptions] = useState([]);
  const [venuesLoading, setVenuesLoading] = useState(false);

  // Stable ref so addToast never causes the fetch to re-run
  const addToastRef = useRef(addToast);
  useEffect(() => { addToastRef.current = addToast; }, [addToast]);

  const getVenues = useCallback(() => {
    setVenuesLoading(true);
    fetch("https://api.grabbite.com/api/open/find-class", {
      method: "GET",
      redirect: "follow",
    })
      .then((res) => res.json())
      .then((result) => {
        const list = result?.data ?? result?.venues ?? result?.classes ?? [];
        const normalised = Array.isArray(list)
          ? list.map((item) => ({
            id: item.id ?? item._id ?? item.venueId ?? item.classId,
            label: item.name ?? item.title ?? item.venueName ?? String(item),
          }))
          : [];
        setVenueOptions(normalised);
      })
      .catch((err) => {
        console.error(err);
        addToastRef.current("Failed to load venues. Please refresh.", "error");
      })
      .finally(() => setVenuesLoading(false));
  }, []); // empty deps — stable forever

  // Fetch once on mount
  useEffect(() => {
    getVenues();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ===== HANDLERS =====
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleRadioChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const toggleArrayValue = (field, value) => {
    if (!value) return;
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((v) => v !== value)
        : [...prev[field], value],
    }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const goToStep = (targetStep) => {
    if (targetStep > step) {
      let stepErrors = {};
      if (step === 1) stepErrors = validateStep1(formData);
      if (step === 2) stepErrors = validateStep2(formData);
      if (Object.keys(stepErrors).length > 0) {
        setErrors(stepErrors);
        return;
      }
      setErrors({});
    }
    setStep(targetStep);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const stepErrors = validateStep3(formData);

    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // venues array
      const venueIds = formData.venues;

      // Calculate age from DOB
      const calculateAge = (dob) => {
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

        return age;
      };

      const age = calculateAge(formData.dob);

      const fd = new FormData();

      fd.append("firstName", formData.firstName.trim());
      fd.append("lastName", formData.surname.trim());
      fd.append("dob", formData.dob);

      // Send calculated age
      fd.append("age", age);

      fd.append("email", formData.email.trim());
      fd.append("phoneNumber", formData.phone.replace(/\s+/g, ""));
      fd.append("postcode", formData.postcode.trim());
      fd.append("howDidYouHear", formData.source);
      fd.append(
        "accessToOwnVehicle",
        formData.hasVehicle === "Yes" ? "true" : "false"
      );

      fd.append(
        "whichQualificationYouHave",
        JSON.stringify(formData.qualifications)
      );

      fd.append("footballExperience", formData.experience);

      fd.append(
        "availableVenueWork",
        JSON.stringify(venueIds)
      );

      fd.append("uploadCv", formData.cv);

      fd.append("coverNote", formData.coverNote.trim());

      fd.append(
        "ageGroupExperience",
        formData.ageGroups.join(", ")
      );

      const response = await fetch(
        "https://api.grabbite.com/api/open/recruitment/coach/candidate-profile",
        {
          method: "POST",
          body: fd,
          redirect: "follow",
        }
      );

      const result = await response.json();

      if (!response.ok) {
        let errorMsg =
          result.message || "Something went wrong. Please try again.";

        if (result.error && typeof result.error === "object") {
          const firstKey = Object.keys(result.error)[0];
          errorMsg = result.error[firstKey];
        }

        addToast(errorMsg, "error");
        return;
      }

      setFormData(initialState);
      setErrors({});
      setStep(1);

      addToast(
        "Your application has been submitted successfully! We'll be in touch soon.",
        "success"
      );
    } catch (error) {
      console.error("Submission error:", error);
      addToast("Something went wrong. Please try again.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const ErrorMsg = ({ name }) =>
    errors[name] ? <p className="text-red-500 text-sm mt-1">{errors[name]}</p> : null;

  return (
    <>
      <Toast toasts={toasts} removeToast={removeToast} />

      <form
        onSubmit={handleSubmit}
        noValidate
        className="w-full bg-[#FDFDFF] rounded-2xl shadowBox p-8 md:mt-0 mt-10"
      >
        {/* ===== STEPPER HEADER ===== */}
        <div className="flex gap-8 mb-8">
          {[1, 2, 3].map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => goToStep(s)}
              className={`pb-3 md:text-[22px] text-[15px] recline font-medium ${step === s
                ? "text-[#0DD180] border-b-4 rounded-sm border-[#0DD180]"
                : "text-gray-400 border-b-4 rounded-sm border-[#fff]"
                }`}
            >
              Section {s}
            </button>
          ))}
        </div>

        {/* ===== STEP 1 ===== */}
        {step === 1 && (
          <div className="space-y-5">
            <ValidatedInput label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} error={errors.firstName} disabled={isSubmitting} required />
            <ValidatedInput label="Surname" name="surname" value={formData.surname} onChange={handleChange} error={errors.surname} disabled={isSubmitting} required />
            <ValidatedInput label="Telephone Number" name="phone" value={formData.phone} onChange={handleChange} error={errors.phone} disabled={isSubmitting} required />
            <ValidatedInput label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} error={errors.email} disabled={isSubmitting} required />
            <ValidatedInput label="Date of Birth" name="dob" type="date" value={formData.dob} onChange={handleChange} error={errors.dob} disabled={isSubmitting} required />
            <ValidatedInput label="London Postcode" name="postcode" value={formData.postcode} onChange={handleChange} error={errors.postcode} disabled={isSubmitting} required />
            <NextButton onClick={() => goToStep(2)} disabled={isSubmitting} />
          </div>
        )}

        {/* ===== STEP 2 ===== */}
        {step === 2 && (
          <div className="space-y-8">
            {/* Vehicle */}
            <div>
              <p className="label mb-3">
                Do you have access to your own vehicle? <R />
              </p>
              {["Yes", "No"].map((v) => (
                <label key={v} className="flex custom-radio text-[#5F5F6D] items-center gap-3 mb-2">
                  <input
                    type="radio"
                    checked={formData.hasVehicle === v}
                    onChange={() => handleRadioChange("hasVehicle", v)}
                    disabled={isSubmitting}
                  />
                  <div className="radio-circle"><div className="radio-dot" /></div>
                  {v}
                </label>
              ))}
              <ErrorMsg name="hasVehicle" />
            </div>

            {/* Qualifications */}
            <div>
              <p className="text-[16px] text-[#101014] font-normal mb-4">
                Please select which qualifications you have <R />
              </p>
              {["FA Level 1", "FA Level 2", "DBS (within the year)", "Futsal Level 1", "UEFA B", "First Aid (within 2 years)"].map((q) => {
                const checked = formData.qualifications.includes(q);
                return (
                  <label key={q} className="flex items-center gap-3 mb-3 cursor-pointer poppins select-none">
                    <input type="checkbox" checked={checked} onChange={() => toggleArrayValue("qualifications", q)} className="hidden" disabled={isSubmitting} />
                    <span className={`w-[16px] h-[16px] flex items-center justify-center rounded-sm border-2 transition-all ${checked ? "border-[#12B76A] bg-[#ECFDF3]" : "border-[#D0D5DD] bg-white"}`}>
                      {checked && (
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#12B76A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </span>
                    <span className="text-[14px] text-[#5F5F6D] font-normal poppins">{q}</span>
                  </label>
                );
              })}
              <ErrorMsg name="qualifications" />
            </div>

            {/* Coaching Experience */}
            <div className="mb-6">
              <p className="label text-[16px] text-[#101014] font-normal mb-3">
                How many years football coaching experience do you have? <R />
              </p>
              <div className="relative w-full">
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={`w-full appearance-none rounded-lg border-2 px-4 py-3 pr-12 bg-white focus:outline-none focus:border-[#1c3c87] ${errors.experience ? "border-red-400" : "border-[#E5E7EB]"
                    } ${formData.experience === "" ? "text-[#9CA3AF]" : "text-[#5F5F6D]"}`}
                >
                  <option value="" disabled>Select experience</option>
                  <option value="1 Year">1 Year</option>
                  <option value="2 Years">2 Years</option>
                  <option value="3+ Years">3+ Years</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                  <svg className="w-5 h-5 text-[#1c3c87]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              <ErrorMsg name="experience" />
            </div>

            {/* Age Groups */}
            <div>
              <p className="text-[16px] text-[#101014] font-normal mb-4">
                Which age groups do you have experience working with? <R />
              </p>
              {["4–5 years", "6–7 years", "8–9 years", "10–11 years"].map((age) => {
                const checked = formData.ageGroups.includes(age);
                return (
                  <label key={age} className="flex items-center gap-3 mb-3 cursor-pointer poppins select-none">
                    <input type="checkbox" checked={checked} onChange={() => toggleArrayValue("ageGroups", age)} className="hidden" disabled={isSubmitting} />
                    <span className={`w-[16px] h-[16px] flex items-center justify-center rounded-sm border-2 transition-all ${checked ? "border-[#12B76A] bg-[#ECFDF3]" : "border-[#D0D5DD] bg-white"}`}>
                      {checked && (
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#12B76A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </span>
                    <span className="text-[14px] text-[#5F5F6D] font-normal poppins">{age}</span>
                  </label>
                );
              })}
              <ErrorMsg name="ageGroups" />
            </div>

            <NextButton onClick={() => goToStep(3)} disabled={isSubmitting} />
          </div>
        )}

        {/* ===== STEP 3 ===== */}
        {step === 3 && (
          <div className="space-y-8">

            {/* Venues — dynamic from API, multi-select */}
            <div className="mb-2">
              <p className="label text-[16px] text-[#101014] font-normal mb-3">
                Please select which venues you are available for work <R />
              </p>

              {/* FIX 4: removed wrapping relative div + duplicate chevron SVG.
                  react-select renders its own indicators; the absolute-positioned
                  custom SVG was overlapping them and blocking clicks. */}
              <Select
                isMulti
                isLoading={venuesLoading}
                isDisabled={isSubmitting || venuesLoading}
                options={venueOptions.map((v) => ({ value: v.id, label: v.label }))}
                value={venueOptions
                  .filter((v) => formData.venues.includes(v.id))
                  .map((v) => ({ value: v.id, label: v.label }))}
                onChange={(selected) => {
                  setFormData((prev) => ({
                    ...prev,
                    venues: selected ? selected.map((item) => item.value) : [],
                  }));
                  if (errors.venues)
                    setErrors((prev) => ({ ...prev, venues: undefined }));
                }}
                placeholder={venuesLoading ? "Loading venues…" : "Select venues"}
                noOptionsMessage={() =>
                  venuesLoading ? "Loading…" : "No venues available"
                }
                className="w-full"
                classNamePrefix="react-select"
                styles={{
                  control: (base, state) => ({
                    ...base,
                    minHeight: "50px",
                    borderRadius: "0.5rem",
                    borderWidth: "2px",
                    borderColor: errors.venues
                      ? "#f87171"
                      : state.isFocused
                        ? "#1c3c87"
                        : "#E5E7EB",
                    boxShadow: "none",
                    "&:hover": { borderColor: "#1c3c87" },
                    opacity: venuesLoading ? 0.5 : 1,
                    cursor: venuesLoading ? "not-allowed" : "pointer",
                  }),
                  placeholder: (base) => ({ ...base, color: "#9CA3AF" }),
                  multiValue: (base) => ({ ...base, backgroundColor: "#E8EEFf" }),
                  multiValueLabel: (base) => ({ ...base, color: "#1c3c87" }),
                  multiValueRemove: (base) => ({
                    ...base,
                    color: "#1c3c87",
                    ":hover": { backgroundColor: "#1c3c87", color: "#fff" },
                  }),
                }}
              />
              <ErrorMsg name="venues" />
            </div>

            {/* CV Upload */}
            <div className="w-full">
              <label className="label text-[16px] text-[#101014] font-normal">
                Please upload your CV <R />
              </label>
              <div
                onClick={() => fileRef.current.click()}
                className={`cursor-pointer mt-6 bg-white md:w-10/12 flex flex-col items-center justify-center border-2 rounded-xl px-6 py-4 text-center hover:border-[#0DD180] transition ${errors.cv ? "border-red-400" : "border-[#E5E7EB]"
                  }`}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#EEF2FF]">
                  <img src="/assets/uploadCvIcon.png" alt="" />
                </div>
                <p className="text-[15px] text-[#6941C6] font-medium">
                  Click to upload <span className="text-[#6B7280] font-normal">or drag and drop</span>
                </p>
                <p className="mt-1 text-[13px] text-[#9CA3AF]">PDF, DOC or DOCX</p>
                <input
                  ref={fileRef}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  disabled={isSubmitting}
                  onChange={(e) => {
                    setFormData((prev) => ({ ...prev, cv: e.target.files[0] }));
                    if (errors.cv) setErrors((prev) => ({ ...prev, cv: undefined }));
                  }}
                />
              </div>
              {formData.cv && (
                <p className="mt-2 text-[14px] text-green-600">Selected: {formData.cv.name}</p>
              )}
              <ErrorMsg name="cv" />
            </div>

            {/* Cover Note */}
            <div>
              <label className="label text-[16px] text-[#101014] font-normal mb-3">
                Please add a short cover note (500 words max) <R />
              </label>
              <textarea
                name="coverNote"
                rows="5"
                placeholder="Message"
                value={formData.coverNote}
                onChange={handleChange}
                disabled={isSubmitting}
                className={`w-full mt-2 rounded-lg border bg-white px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-green-400 ${errors.coverNote ? "border-red-400" : "border-[#E5E7EB]"
                  }`}
              />
              <div className="flex justify-between items-center mt-1">
                <ErrorMsg name="coverNote" />
                <span className="text-xs text-gray-400 ml-auto">
                  {formData.coverNote.trim()
                    ? formData.coverNote.trim().split(/\s+/).length
                    : 0}{" "}
                  / 500 words
                </span>
              </div>
            </div>

            {/* Source */}
            <div>
              <p className="label text-[16px] text-[#101014] font-normal mb-3">
                How did you hear about this opportunity? <R />
              </p>
              <div className="space-y-2 text-[14px] text-[#5F5F6D] font-semibold">
                {["Indeed", "Facebook", "Google", "Referral", "Other"].map((src) => (
                  <label key={src} className="flex poppins font-medium text-[14px] custom-radio items-center gap-3">
                    <input
                      type="radio"
                      name="source"
                      checked={formData.source === src}
                      onChange={() => handleRadioChange("source", src)}
                      disabled={isSubmitting}
                      className="accent-green-500"
                    />
                    <div className="radio-circle"><div className="radio-dot" /></div>
                    {src}
                  </label>
                ))}
              </div>
              <ErrorMsg name="source" />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#0DD180] hover:bg-green-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold poppins py-3 text-[18px] rounded-full transition flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                  </svg>
                  Sending...
                </>
              ) : (
                "Send"
              )}
            </button>
          </div>
        )}
      </form>
    </>
  );
};

// ===== REUSABLE COMPONENTS =====

const ValidatedInput = ({ label, name, type = "text", value, onChange, error, disabled, required }) => (
  <div>
    <label className="text-[#101014] poppins text-[16px]">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={label}
      disabled={disabled}
      className={`w-full mt-1 rounded-lg px-4 py-3 outline-none focus:ring-2 ${error
        ? "bg-red-50 border border-red-400 focus:ring-red-300"
        : "bg-[#F6F6F7] focus:ring-green-400"
        }`}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

const NextButton = ({ onClick, disabled }) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    className="w-full mt-5 bg-[#0DD180] hover:bg-green-600 disabled:opacity-60 text-white poppins py-3 text-[18px] rounded-full transition"
  >
    Next
  </button>
);

export default ApplicationForm;