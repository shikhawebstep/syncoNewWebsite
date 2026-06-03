import { useState, useCallback, useEffect, useRef } from "react";

import { useToast, Toast } from "./Toast";

/* ───────────────────────── VALIDATORS ───────────────────────── */
const validateStep = (step, data) => {
    const errs = {};

    if (step === 1) {
        if (!data.firstName.trim()) errs.firstName = "First name is required.";
        if (!data.surname.trim()) errs.surname = "Surname is required.";
        if (!data.phone.trim()) errs.phone = "Phone number is required.";
        else if (!/^\+?[0-9\s\-()\u2010-\u2015]{7,15}$/.test(data.phone.trim()))
            errs.phone = "Enter a valid phone number.";
        if (!data.email.trim()) errs.email = "Email is required.";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim()))
            errs.email = "Enter a valid email address.";
        if (!data.age) {
            errs.age = "Age is required.";
        } else if (isNaN(data.age) || Number(data.age) <= 0) {
            errs.age = "Age must be a valid number.";
        }
        if (!data.postcode.trim()) errs.postcode = "Postcode is required.";
    }

    if (step === 2) {
        if (!data.qualification) errs.qualification = "Please select a qualification.";
        if (!data.experience) errs.experience = "Please select your experience.";
        if (!data.venues.length) errs.venues = "Please select at least one venue.";
    }

    if (step === 3) {
        if (!data.coverNote.trim()) errs.coverNote = "Cover note is required.";
        else if (data.coverNote.trim().split(/\s+/).length > 500)
            errs.coverNote = "Cover note must be 500 words or fewer.";
        if (!data.source) errs.source = "Please select how you heard about us.";
    }

    return errs;
};

/* ───────────────────────── MAIN FORM ───────────────────────── */
const ApplyForm = () => {
    const { toasts, addToast, removeToast } = useToast();
    const [step, setStep] = useState(1);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        firstName: "",
        surname: "",
        phone: "+44",
        email: "",
        age: "",
        postcode: "",
        qualification: "",
        experience: "",
        venues: [],
        coverNote: "",
        source: "",
    });

    const [venueOptions, setVenueOptions] = useState([]);
    const [venuesLoading, setVenuesLoading] = useState(false);

    // Keep a stable ref to addToast so it never causes useCallback to re-run
    const addToastRef = useRef(addToast);
    useEffect(() => { addToastRef.current = addToast; }, [addToast]);

    const getVenues = useCallback(() => {
        setVenuesLoading(true);
        fetch("https://api.grabbite.com/api/open/find-class", {
            method: "GET",
            redirect: "follow",
        })
            .then((response) => response.json())
            .then((result) => {
                const list = result?.data ?? result?.venues ?? result ?? [];
                const normalised = list.map((item) => ({
                    label: item.name ?? item.title ?? item.venueName ?? String(item),
                    value: item.venueId ?? item._id ?? item.name ?? String(item),
                }));
                setVenueOptions(normalised);
            })
            .catch((error) => {
                console.error(error);
                addToastRef.current("Failed to load venues. Please refresh.", "error");
            })
            .finally(() => setVenuesLoading(false));
    }, []); // stable — empty deps, addToast accessed via ref

    // Fetch venues once on mount only
    useEffect(() => {
        getVenues();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors((p) => ({ ...p, [name]: "" }));
    };

    const handleRadioChange = (name, value) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors((p) => ({ ...p, [name]: "" }));
    };

    const goNext = (nextStep) => {
        const errs = validateStep(step, formData);
        if (Object.keys(errs).length) {
            setErrors(errs);
            addToast("Please fix the highlighted errors before continuing.", "warning");
            return;
        }
        setErrors({});
        setStep(nextStep);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errs = validateStep(3, formData);
        if (Object.keys(errs).length) {
            setErrors(errs);
            addToast("Please fix the highlighted errors before submitting.", "warning");
            return;
        }

        setLoading(true);
        try {
            const fd = new FormData();
            fd.append("firstName", formData.firstName);
            fd.append("lastName", formData.surname);
            fd.append("email", formData.email);
            fd.append("phoneNumber", formData.phone);
            fd.append("age", formData.age); // FIX 4: `age` was collected but never sent.
            fd.append("postcode", formData.postcode);
            fd.append("howDidYouHear", formData.source);
            fd.append("whichQualificationYouHave", JSON.stringify([formData.qualification]));
            fd.append("footballExperience", formData.experience);
            fd.append("availableVenueWork", JSON.stringify(formData.venues));
            fd.append("coverNote", formData.coverNote);

            const res = await fetch(
                "https://api.grabbite.com/api/open/recruitment/coach/candidate-profile",
                { method: "POST", body: fd, redirect: "follow" }
            );

            const result = await res.json();

            if (!res.ok) {
                let errorMsg = result.message || "Something went wrong. Please try again.";
                if (result.error && typeof result.error === "object") {
                    const firstKey = Object.keys(result.error)[0];
                    errorMsg = result.error[firstKey];
                }
                addToast(errorMsg, "error");
                return;
            }

            addToast("Application submitted successfully! 🎉", "success");
            setFormData({
                firstName: "", surname: "", phone: "", email: "",
                age: "", postcode: "", qualification: "", experience: "",
                venues: [], coverNote: "", source: "",
            });
            setStep(1);
        } catch (err) {
            console.error(err);
            addToast("Something went wrong. Please try again.", "error");
        } finally {
            setLoading(false);
        }
    };

    const ErrMsg = ({ field }) =>
        errors[field] ? <p className="text-red-500 text-xs mt-1">{errors[field]}</p> : null;

    const wordCount = formData.coverNote.trim()
        ? formData.coverNote.trim().split(/\s+/).length : 0;

    return (
        <>
            <Toast toasts={toasts} removeToast={removeToast} />

            <form onSubmit={handleSubmit} noValidate
                className="w-full bg-white rounded-2xl shadowBox p-8">

                {/* STEPPER */}
                <div className="flex md:gap-8 justify-between md:justify-start gap-5 mb-8">
                    {[1, 2, 3].map((s) => (
                        <button key={s} type="button"
                            onClick={() => {
                                if (s < step) {
                                    setStep(s);
                                } else if (s === step + 1) {
                                    goNext(s);
                                }
                            }}
                            className={`pb-3 md:text-[22px] text-[18px] recline font-medium
                                ${step === s
                                    ? "text-[#0DD180] border-b-4 rounded-sm border-[#0DD180]"
                                    : "text-gray-400 border-b-4 rounded-sm border-[#fff]"}`}>
                            Section {s}
                        </button>
                    ))}
                </div>

                {/* ══════ STEP 1 ══════ */}
                {step === 1 && (
                    <div className="space-y-5">
                        <Input label="First Name" name="firstName" value={formData.firstName}
                            onChange={handleChange} error={errors.firstName} required />
                        <Input label="Surname" name="surname" value={formData.surname}
                            onChange={handleChange} error={errors.surname} required />
                        <Input label="Telephone Number" name="phone" value={formData.phone}
                            onChange={handleChange} error={errors.phone} required />
                        <Input label="Email Address" name="email" type="email" value={formData.email}
                            onChange={handleChange} error={errors.email} required />
                        <Input label="Age" name="age" type="number" value={formData.age}
                            onChange={handleChange} error={errors.age} required />
                        <Input label="London Postcode" name="postcode" value={formData.postcode}
                            onChange={handleChange} error={errors.postcode} required />

                        <NextButton onClick={() => goNext(2)} />
                    </div>
                )}

                {/* ══════ STEP 2 ══════ */}
                {step === 2 && (
                    <div className="space-y-8">

                        {/* Qualifications */}
                        <div>
                            <p className="label text-[16px] font-medium mb-3">
                                Please select which qualifications you have below <span className="text-red-500">*</span>
                            </p>
                            <div className="space-y-2 text-[14px] text-[#5F5F6D] font-semibold">
                                {["FA Level 1", "FA Level 2", "DBS (within the year)",
                                    "Futsal Level 1", "UEFA B", "First Aid (within 2 years)", "None"].map((q) => (
                                        <label key={q} className="flex custom-radio items-center gap-3">
                                            <input type="radio" name="qualification"
                                                checked={formData.qualification === q}
                                                onChange={() => handleRadioChange("qualification", q)}
                                                className="accent-green-500" />
                                            <div className="radio-circle"><div className="radio-dot" /></div>
                                            {q}
                                        </label>
                                    ))}
                            </div>
                            <ErrMsg field="qualification" />
                        </div>

                        {/* Experience */}
                        <div>
                            <p className="label text-[16px] font-medium mb-3">
                                How many years football coaching experience do you have? <span className="text-red-500">*</span>
                            </p>
                            <div className="space-y-2 text-[14px] text-[#5F5F6D] font-semibold">
                                {["None", "1 Year", "2 Years", "More than 3 years"].map((exp) => (
                                    <label key={exp} className="flex custom-radio items-center gap-3">
                                        <input type="radio" name="experience"
                                            checked={formData.experience === exp}
                                            onChange={() => handleRadioChange("experience", exp)}
                                            className="accent-green-500" />
                                        <div className="radio-circle"><div className="radio-dot" /></div>
                                        {exp}
                                    </label>
                                ))}
                            </div>
                            <ErrMsg field="experience" />
                        </div>

                        {/* Venues */}
                        <div>
                            <p className="label text-[16px] font-medium mb-3">
                                Please select which two venues you are available for your
                                voluntary work experience (Select all available options) <span className="text-red-500">*</span>
                            </p>
                            <div className="space-y-2 relative">
                                <select
                                    value={formData.venues}
                                    onChange={(e) => {
                                        const selected = Array.from(
                                            e.target.selectedOptions,
                                            (option) => option.value
                                        );
                                        setFormData({ ...formData, venues: selected });
                                        if (errors.venues) setErrors((p) => ({ ...p, venues: "" }));
                                    }}
                                    multiple
                                    disabled={venuesLoading}
                                    className={`w-full appearance-none rounded-lg border bg-white px-4 py-3
                                        text-[14px] text-gray-700 font-medium shadow-sm focus:outline-none transition
                                        ${errors.venues ? "border-red-400 bg-red-50" : "border-gray-300 focus:border-[#1fd286] focus:ring-2 focus:ring-[#1fd286]/30"}
                                        ${venuesLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                                >
                                    {venuesLoading ? (
                                        <option disabled>Loading venues…</option>
                                    ) : venueOptions.length === 0 ? (
                                        <option disabled>No venues available</option>
                                    ) : (
                                        venueOptions.map((venue) => (
                                            <option key={venue.value} value={venue.value}>
                                                {venue.label}
                                            </option>
                                        ))
                                    )}
                                </select>
                                <div className="pointer-events-none absolute top-3 right-4 flex items-center">
                                    <svg className="h-6 w-6 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd"
                                            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                                            clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <ErrMsg field="venues" />
                        </div>

                        <NextButton onClick={() => goNext(3)} />
                    </div>
                )}

                {/* ══════ STEP 3 ══════ */}
                {step === 3 && (
                    <div className="space-y-8">

                        {/* Cover Note */}
                        <div>
                            <div className="flex justify-between items-center">
                                <label className="label">
                                    Please Add a short cover note (500 words max) <span className="text-red-500">*</span>
                                </label>
                                <span className={`text-xs font-medium ml-2 flex-shrink-0 ${wordCount > 500 ? "text-red-500" : "text-gray-400"}`}>
                                    {wordCount} / 500
                                </span>
                            </div>
                            <textarea name="coverNote" rows="5" placeholder="Message"
                                value={formData.coverNote} onChange={handleChange}
                                className={`w-full mt-2 rounded-lg px-4 py-3 outline-none resize-none transition border
                                    ${errors.coverNote
                                        ? "bg-red-50 border-red-400 focus:ring-2 focus:ring-red-300"
                                        : "bg-[#F6F6F7] border-transparent focus:ring-2 focus:ring-green-400"}`} />
                            <ErrMsg field="coverNote" />
                        </div>

                        {/* Source */}
                        <div>
                            <p className="label text-[16px] font-medium mb-3">
                                How did you hear about this opportunity? <span className="text-red-500">*</span>
                            </p>
                            <div className="space-y-2 text-[14px] text-[#5F5F6D] font-semibold">
                                {["Indeed", "Facebook", "Google", "Referral", "Other"].map((src) => (
                                    <label key={src} className="flex custom-radio items-center gap-3">
                                        <input type="radio" name="source"
                                            checked={formData.source === src}
                                            onChange={() => handleRadioChange("source", src)}
                                            className="accent-green-500" />
                                        <div className="radio-circle"><div className="radio-dot" /></div>
                                        {src}
                                    </label>
                                ))}
                            </div>
                            <ErrMsg field="source" />
                        </div>

                        <div className="flex gap-4">
                            <button type="submit" disabled={loading}
                                className="w-full bg-[#0DD180] hover:bg-green-600 text-white font-bold poppins py-3
                                text-[18px] rounded-full transition disabled:opacity-60 disabled:cursor-not-allowed
                                flex items-center justify-center gap-2">
                                {loading ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5 text-white"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10"
                                                stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                                        </svg>
                                        Submitting...
                                    </>
                                ) : "Send"}
                            </button>
                        </div>
                    </div>
                )}
            </form>
        </>
    );
};

/* ───────────────────────── REUSABLE COMPONENTS ───────────────────────── */
const Input = ({ label, name, type = "text", value, onChange, error, required }) => (
    <div>
        <label className="text-[#101014] poppins text-[16px]">
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        <input type={type} name={name} value={value} onChange={onChange}
            placeholder={label}
            className={`w-full mt-1 rounded-lg px-4 py-3 outline-none transition border
                ${error
                    ? "bg-red-50 border-red-400 focus:ring-2 focus:ring-red-300"
                    : "bg-[#F6F6F7] border-transparent focus:ring-2 focus:ring-green-400"}`} />
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
);

const NextButton = ({ onClick }) => (
    <button type="button" onClick={onClick}
        className="w-full mt-5 bg-[#0DD180] text-white poppins py-3 text-[18px] rounded-full">
        Next
    </button>
);

// FIX 5: BackButton was defined but never used in JSX — kept here for future use.
const BackButton = ({ onClick }) => (
    <button type="button" onClick={onClick}
        className="w-full border border-gray-300 text-gray-600 poppins py-3 text-[18px] rounded-full">
        Back
    </button>
);

export default ApplyForm;