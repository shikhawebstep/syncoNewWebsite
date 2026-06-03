import { useState } from "react";
import { useRef } from "react";

const ApplicationForm = () => {
    const [step, setStep] = useState(1);

    const [formData, setFormData] = useState({
        firstName: "",
        surname: "",
        phone: "",
        email: "",
        dob: "",
        postcode: "",

        hasVehicle: "",
        weekendAvailability:"",
        qualifications: [],
        coachingExperience: "",
        managementExperience:"",
        ageGroups: [],
        cv: null,

        coverNote: "",
        source: "",
    });
    const fileRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleRadioChange = (name, value) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const toggleArrayValue = (field, value) => {
        if (!value) return;

        setFormData((prev) => ({
            ...prev,
            [field]: prev[field].includes(value)
                ? prev[field].filter((v) => v !== value)
                : [...prev[field], value],
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("FINAL FORM DATA:", formData);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full bg-[#FDFDFF] md:mt-0 mt-10  rounded-2xl shadowBox p-8"
        >
            {/* ===== STEPPER HEADER ===== */}
            <div className="flex gap-8 mb-8">
                {[1, 2, 3].map((s) => (
                    <button
                        key={s}
                        type="button"
                        onClick={() => setStep(s)}
                        className={`pb-3 md:text-[22px] text-[18px] recline font-medium ${step === s
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
                    <Input label="First Name" name="firstName" onChange={handleChange} />
                    <Input label="Surname" name="surname" onChange={handleChange} />
                    <Input label="Telephone Number" name="phone" onChange={handleChange} />
                    <Input
                        label="Email Address"
                        name="email"
                        type="email"
                        onChange={handleChange}
                    />
                    {/* <Input label="Date of Birth" name="dob" type="date" onChange={handleChange} /> */}
                    <Input label="Age" name="Age" type="text" onChange={handleChange} />
                    <Input
                        label="London Postcode"
                        name="postcode"
                        onChange={handleChange}
                    />

                    <div>
                        <p className="label mb-3">Do you have access to your own vehicle?</p>
                        <div className="flex gap-5 ">
                            {["Yes", "No"].map((v) => (
                                <label key={v} className="flex custom-radio text-[#5F5F6D]  items-center gap-3 mb-2">
                                    <input
                                        type="radio"
                                        checked={formData.hasVehicle === v}
                                        onChange={() => handleRadioChange("hasVehicle", v)}
                                    />
                                    <div className="radio-circle">
                                        <div className="radio-dot" />
                                    </div>
                                    {v}
                                </label>
                            ))}
                        </div>
                    </div>
                    <NextButton onClick={() => setStep(2)} />
                </div>
            )}

            {/* ===== STEP 2 ===== */}
            {step === 2 && (
                <div className="space-y-8">


                    <div>
                        <p className="text-[16px] text-[#101014] font-normal mb-4">
                            Please select which qualifications you have
                        </p>

                        {[
                            "FA Level 1",
                            "FA Level 2",
                            "DBS (within the year)",
                            "Futsal Level 1",
                            "UEFA B",
                            "First Aid (within 2 years)",
                        ].map((q) => {
                            const checked = formData.qualifications.includes(q);

                            return (
                                <label
                                    key={q}
                                    className="flex items-center gap-3 mb-3 cursor-pointer poppins select-none"
                                >
                                    {/* Hidden native checkbox */}
                                    <input
                                        type="checkbox"
                                        checked={checked}
                                        onChange={() => toggleArrayValue("qualifications", q)}
                                        className="hidden"
                                    />

                                    {/* Custom checkbox */}
                                    <span
                                        className={`w-[16px] h-[16px] flex items-center justify-center rounded-sm border-2 transition-all
                        ${checked
                                                ? "border-[#12B76A] bg-[#ECFDF3]"
                                                : "border-[#D0D5DD] bg-white"
                                            }`}
                                    >
                                        {checked && (
                                            <svg
                                                width="10"
                                                height="10"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#12B76A"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        )}
                                    </span>

                                    {/* Label text */}
                                    <span className="text-[14px] text-[#5F5F6D] font-normal poppins">
                                        {q}
                                    </span>
                                </label>
                            );
                        })}
                    </div>


                    <div className="mb-6">
                        <p className="label text-[16px] text-[#101014] font-normal mb-3">
                            How many years football coaching experience do you have?
                        </p>

                        <div className="relative w-full">
                            <select
                                name="coachingExperience"
                                value={formData.coachingExperience}
                                onChange={handleChange}
                                className={`w-full appearance-none rounded-lg border-2 px-4 py-3 pr-12 bg-white
                ${formData.coachingExperience === "" ? "text-[#9CA3AF]" : "text-[#5F5F6D]"}
                border-[#E5E7EB] focus:outline-none focus:border-[#1c3c87]`}
                            >
                                <option value="" disabled>
                                    Select experience
                                </option>
                                <option value="1 Year">1 Year</option>
                                <option value="2 Years">2 Years</option>
                                <option value="3+ Years">3+ Years</option>
                            </select>

                            {/* Custom arrow */}
                            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                                <svg
                                    className="w-5 h-5 text-[#1c3c87]"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>


                    <div>
                        <p className="text-[16px] text-[#101014] font-normal mb-4">
                            Which age groups do you have experience working with? Please select from the options
                        </p>

                        {["4–5 years", "6–7 years", "8–9 years", "10–11 years"].map((age) => {
                            const checked = formData.ageGroups.includes(age);

                            return (
                                <label
                                    key={age}
                                    className="flex items-center gap-3 mb-3 cursor-pointer poppins select-none"
                                >
                                    {/* Hidden native checkbox */}
                                    <input
                                        type="checkbox"
                                        checked={checked}
                                        onChange={() => toggleArrayValue("ageGroups", age)}
                                        className="hidden"
                                    />

                                    {/* Custom checkbox */}
                                    <span
                                        className={`w-[16px] h-[16px] flex items-center justify-center rounded-sm border-2 transition-all
            ${checked
                                                ? "border-[#12B76A] bg-[#ECFDF3]"
                                                : "border-[#D0D5DD] bg-white"
                                            }`}
                                    >
                                        {checked && (
                                            <svg
                                                width="10"
                                                height="10"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#12B76A"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        )}
                                    </span>

                                    {/* Label text */}
                                    <span className="text-[14px] text-[#5F5F6D] font-normal poppins">
                                        {age}
                                    </span>
                                </label>
                            );
                        })}
                    </div>
                    <div className="mb-6">
                        <p className="label text-[16px] text-[#101014] font-normal mb-3">
                            How many years of management experience do you have?
                        </p>

                        <div className="relative w-full">
                            <select
                                name="managementExperience"
                                value={formData.managementExperience}
                                onChange={handleChange}
                                className={`w-full appearance-none rounded-lg border-2 px-4 py-3 pr-12 bg-white
                ${formData.managementExperience === "" ? "text-[#9CA3AF]" : "text-[#5F5F6D]"}
                border-[#E5E7EB] focus:outline-none focus:border-[#1c3c87]`}
                            >
                                <option value="" disabled>
                                    Select experience
                                </option>
                                <option value="1 Year">1 Year</option>
                                <option value="2 Years">2 Years</option>
                                <option value="3+ Years">3+ Years</option>
                            </select>

                            {/* Custom arrow */}
                            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                                <svg
                                    className="w-5 h-5 text-[#1c3c87]"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>



                    <div className="flex gap-4">
                        {/* <BackButton onClick={() => setStep(1)} /> */}
                        <NextButton onClick={() => setStep(3)} />
                    </div>
                </div>
            )}

            {/* ===== STEP 3 ===== */}
            {step === 3 && (
                <div className="space-y-8">
                    <div>
                        <p className="label mb-3">Do you have full time weekend availability?</p>
                        <div className="flex gap-5 ">
                            {["Yes", "No"].map((v) => (
                                <label key={v} className="flex custom-radio text-[#5F5F6D]  items-center gap-3 mb-2">
                                    <input
                                        type="radio"
                                        checked={formData.weekendAvailability === v}
                                        onChange={() => handleRadioChange("weekendAvailability", v)}
                                    />
                                    <div className="radio-circle">
                                        <div className="radio-dot" />
                                    </div>
                                    {v}
                                </label>
                            ))}
                        </div>
                    </div>
                  
                    <div className="w-full">
                        <label className="  label text-[16px] text-[#101014] font-normal ">
                            Please upload your CV
                        </label>

                        {/* Upload Box */}
                        <div
                            onClick={() => fileRef.current.click()}
                            className="cursor-pointer mt-6  bg-white md:w-10/12 flex flex-col items-center justify-center
        border-2 border border-[#E5E7EB]
        rounded-xl px-6 py-4 text-center
        hover:border-[#0DD180] transition"
                        >
                            {/* Icon */}
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#EEF2FF]">
                                <img src="/assets/uploadCvIcon.png" alt="" />
                            </div>

                            {/* Text */}
                            <p className="text-[15px] text-[#6941C6] font-medium">
                                Click to upload <span className="text-[#6B7280] font-normal">or drag and drop</span>
                            </p>

                            <p className="mt-1 text-[13px] text-[#9CA3AF]">
                                SVG, PNG,JPG or or GIF (max. 800x400px)
                            </p>

                            {/* Hidden Input */}
                            <input
                                ref={fileRef}
                                type="file"
                                accept=".pdf,.doc,.docx"
                                className="hidden"
                                onChange={(e) =>
                                    setFormData({ ...formData, cv: e.target.files[0] })
                                }
                            />
                        </div>

                        {/* File name preview */}
                        {formData.cv && (
                            <p className="mt-2 text-[14px] text-green-600">
                                Selected: {formData.cv.name}
                            </p>
                        )}
                    </div>
                    <div>
                        <label className="label text-[16px] text-[#101014] font-normal mb-3">
                            Please Add a short cover note (500 words max)
                        </label>
                        <textarea
                            name="coverNote"
                            rows="5"
                            placeholder="Message"
                            value={formData.coverNote}
                            onChange={handleChange}
                            className="w-full mt-2 rounded-lg border border-[#E5E7EB]  bg-white  px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>

                    {/* Source */}
                    <div>
                        <p className="label text-[16px] text-[#101014] font-normal mb-3">
                            How did you hear about this opportunity?
                        </p>

                        <div className="space-y-2 text-[14px] text-[#5F5F6D] font-semibold">
                            {["Indeed", "Facebook", "Google", "Referral", "Other"].map(
                                (src) => (
                                    <label key={src} className="flex poppins font-medium text-[14px]  custom-radio items-center gap-3">
                                        <input
                                            type="radio"
                                            name="source"
                                            checked={formData.source === src}
                                            onChange={() => handleRadioChange("source", src)}
                                            className="accent-green-500"
                                        />
                                        <div className="radio-circle">
                                            <div className="radio-dot" />
                                        </div>
                                        {src}
                                    </label>
                                )
                            )}
                        </div>
                    </div>

                    <div className="flex gap-4">
                        {/* <BackButton onClick={() => setStep(2)} /> */}
                        <button
                            type="submit"
                            className="w-full bg-[#0DD180] hover:bg-green-600 text-white font-bold poppins py-3 text-[18px] rounded-full transition"
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </form>
    );
};

/* ===== REUSABLE COMPONENTS ===== */

const Input = ({ label, name, type = "text", onChange }) => (
    <div>
        <label className="text-[#101014] poppins text-[16px]">
            {label}
        </label>
        <input
            type={type}
            name={name}
            onChange={onChange}
            placeholder={label}
            className="w-full mt-1 rounded-lg bg-[#F6F6F7] px-4 py-3 outline-none focus:ring-2 focus:ring-green-400"
        />
    </div>
);

const NextButton = ({ onClick }) => (
    <button
        type="button"
        onClick={onClick}
        className="w-full mt-5 bg-[#0DD180] text-white poppins py-3 text-[18px] rounded-full"
    >
        Next
    </button>
);

const BackButton = ({ onClick }) => (
    <button
        type="button"
        onClick={onClick}
        className="w-full border border-gray-300 text-gray-600 poppins py-3 text-[18px] rounded-full"
    >
        Back
    </button>
);

export default ApplicationForm;
