import { useState } from "react";

const ApplyForm = () => {
    const [step, setStep] = useState(1);

    const [formData, setFormData] = useState({
        firstName: "",
        surname: "",
        phone: "",
        email: "",
        age: "",
        postcode: "",

        qualification: "",
        experience: "",
        venues: [],

        coverNote: "",
        source: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleRadioChange = (name, value) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleVenueChange = (venue) => {
        setFormData((prev) => ({
            ...prev,
            venues: prev.venues.includes(venue)
                ? prev.venues.filter((v) => v !== venue)
                : [...prev.venues, venue],
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("FINAL FORM DATA:", formData);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full bg-white  rounded-2xl shadowBox p-8"
        >
            {/* ===== STEPPER HEADER ===== */}
            <div className="flex gap-8 mb-8">
                {[1, 2, 3].map((s) => (
                    <button
                        key={s}
                        type="button"
                        onClick={() => setStep(s)}
                        className={`pb-3 md:text-[22px] text-[18px] recline  font-medium ${step === s
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
                    <Input label="Age" name="age" type="number" onChange={handleChange} />
                    <Input
                        label="London Postcode"
                        name="postcode"
                        onChange={handleChange}
                    />

                    <NextButton onClick={() => setStep(2)} />
                </div>
            )}

            {/* ===== STEP 2 ===== */}
            {step === 2 && (
                <div className="space-y-8">

                    {/* Qualifications */}
                    <div>
                        <p className="label text-[16px] font-medium mb-3">
                            Please select which qualifications you have below
                        </p>

                        <div className="space-y-2 text-[14px] text-[#5F5F6D] font-semibold">
                            {[
                                "FA Level 1",
                                "FA Level 2",
                                "DBS (within the year)",
                                "Futsal Level 1",
                                "UEFA B",
                                "First Aid (within 2 years)",
                                "None",
                            ].map((q) => (
                                <label key={q} className="flex custom-radio items-center gap-3">
                                    <input
                                        type="radio"
                                        name="qualification"
                                        checked={formData.qualification === q}
                                        onChange={() =>
                                            handleRadioChange("qualification", q)
                                        }
                                        className="accent-green-500"
                                    />
                                    <div className="radio-circle">
                                        <div className="radio-dot" />
                                    </div>
                                    {q}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Experience */}
                    <div>
                        <p className="label text-[16px] font-medium mb-3">
                            How many years football coaching experience do you have?
                        </p>

                        <div className="space-y-2 text-[14px] text-[#5F5F6D] font-semibold">
                            {["None", "1 Year", "2 Years", "More than 3 years"].map(
                                (exp) => (
                                    <label key={exp} className="flex custom-radio  items-center gap-3">
                                        <input
                                            type="radio"
                                            name="experience"
                                            checked={formData.experience === exp}
                                            onChange={() =>
                                                handleRadioChange("experience", exp)
                                            }
                                            className="accent-green-500"
                                        />
                                        <div className="radio-circle">
                                            <div className="radio-dot" />
                                        </div>
                                        {exp}
                                    </label>
                                )
                            )}
                        </div>
                    </div>

                    {/* Venues */}
                    <div>
                        <p className="label text-[16px] font-medium mb-3">
                            Please select which two venues you are available for your
                            voluntary work experience (Select all available options)
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
                                }}
                                className="
                                        w-full
                                        appearance-none
                                        rounded-lg
                                        border border-gray-300
                                        bg-white
                                        px-4 py-3
                                        text-[14px]
                                        text-gray-700
                                        font-medium
                                        shadow-sm
                                        focus:border-[#1fd286]
                                        focus:ring-2 focus:ring-[#1fd286]/30
                                        focus:outline-none
                                        transition
                                        "
                            >
                                <option value="" disabled>
                                    Select Venue
                                </option>

                                {[
                                    "Kings Cross / SAT (11am-1pm)",
                                    "Stratford / SUN (10am-12pm)",
                                    "Wembley / SAT (9am-11am)",
                                ].map((venue) => (
                                    <option key={venue} value={venue}>
                                        {venue}
                                    </option>
                                ))}
                            </select>

                            {/* Custom Dropdown Icon */}
                            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                                <svg
                                    className="h-10 w-6 text-gray-400"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                                        clipRule="evenodd"
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

                    {/* Cover Note */}
                    <div>
                        <label className="label">
                            Please Add a short cover note (500 words max)
                        </label>
                        <textarea
                            name="coverNote"
                            rows="5"
                            placeholder="Message"
                            value={formData.coverNote}
                            onChange={handleChange}
                            className="w-full mt-2 rounded-lg bg-[#F6F6F7] px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>

                    {/* Source */}
                    <div>
                        <p className="label text-[16px] font-medium mb-3">
                            How did you hear about this opportunity?
                        </p>

                        <div className="space-y-2 text-[14px] text-[#5F5F6D] font-semibold">
                            {["Indeed", "Facebook", "Google", "Referral", "Other"].map(
                                (src) => (
                                    <label key={src} className="flex custom-radio items-center gap-3">
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

export default ApplyForm;
