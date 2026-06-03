import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { BookingContext } from "../context/BookingContext";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const onlyLetters = (v) => v.replace(/[^a-zA-Z\s]/g, "");
const onlyNumbers = (v, max = 12) => v.replace(/\D/g, "").slice(0, max);

const relationOptions = [
  { value: "father", label: "Father" },
  { value: "mother", label: "Mother" },
  { value: "guardian", label: "Guardian" },
];

const emptyEmergency = () => ({
  id: Date.now(),
  emergencyFirstName: "",
  emergencyLastName: "",
  phoneNumber: "",
  relationChild: "",
});

const inputClass = "w-full mt-1 mainShadow bg-white text-[#494949] font-normal placeholder:text-[#494949] placeholder:font-normal rounded-[6px] px-4 py-3 outline-none";

const StepEmergency = ({ onNext, onBack }) => {
  const { parents, emergency, setEmergency } = useContext(BookingContext);
  
  const [fillSame, setFillSame] = useState(() => {
    if (!parents?.length || !emergency?.length) return false;
    const p = parents[0];
    const e = emergency[0];
    return (
      e.emergencyFirstName === p.parentFirstName &&
      e.emergencyLastName === p.parentLastName &&
      e.phoneNumber === p.phoneNumber &&
      e.relationChild === p.relationChild
    );
  });

  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (!emergency || emergency.length === 0) {
      setEmergency([emptyEmergency()]);
    }
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (!isInitialized) return;
    if (!parents?.length) return;
    if (fillSame) {
      const p = parents[0];
      setEmergency([
        {
          ...emergency[0],
          emergencyFirstName: p.parentFirstName || "",
          emergencyLastName: p.parentLastName || "",
          phoneNumber: p.phoneNumber || "",
          relationChild: p.relationChild || "",
        },
      ]);
    } else {
      setEmergency([emptyEmergency()]);
    }
  }, [fillSame, parents, isInitialized]);

  const handleEmergencyChange = (field, value, data) => {
    const updated = { ...emergency[0] };
    if (field === "phoneNumber") {
      const formattedPhone = value && !value.startsWith("+") ? `+${value}` : value;
      updated[field] = formattedPhone;
      updated.dialCode = data?.dialCode || "";
    } else {
      updated[field] = value;
    }
    setEmergency([updated]);
  };

  const e = emergency?.[0];

  return (
    <div className="lg:max-w-[80%] m-auto py-7 md:py-0">
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
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="md:p-6 rounded-3xl space-y-6"
      >
        <h2 className="text-[20px] text-center font-semibold pb-5 md:pb-0">
          Emergency Contact Details
        </h2>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={fillSame}
            onChange={() => setFillSame((v) => !v)}
          />
          <span className="text-sm">Fill Same as above</span>
        </label>

        <div className="grid md:grid-cols-2 gap-4">
          {/* First Name */}
          <div>
            <label className="text-sm font-medium block mb-1">
              First name<span className="text-red-500 ml-0.5">*</span>
            </label>
            <input
              className={inputClass}
              value={e?.emergencyFirstName || ""}
              placeholder="Enter first name"
              disabled={fillSame}
              onChange={(ev) => handleEmergencyChange("emergencyFirstName", onlyLetters(ev.target.value))}
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="text-sm font-medium block mb-1">
              Last name<span className="text-red-500 ml-0.5">*</span>
            </label>
            <input
              className={inputClass}
              value={e?.emergencyLastName || ""}
              placeholder="Enter last name"
              disabled={fillSame}
              onChange={(ev) => handleEmergencyChange("emergencyLastName", onlyLetters(ev.target.value))}
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm font-medium block mb-1">
              Phone<span className="text-red-500 ml-0.5">*</span>
            </label>
            <div className="mt-1">
              <PhoneInput
                country={"gb"}
                value={e?.phoneNumber || ""}
                disabled={fillSame}
                onChange={(value, data) => handleEmergencyChange("phoneNumber", value, data)}
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
          </div>

          {/* Relation */}
          <div>
            <label className="text-sm font-medium block mb-1">
              Relation<span className="text-red-500 ml-0.5">*</span>
            </label>
            <select
              className={`${inputClass} text-[#494949] font-normal`}
              value={e?.relationChild || ""}
              disabled={fillSame}
              onChange={(ev) => handleEmergencyChange("relationChild", ev.target.value)}
            >
              <option value="" className="text-[#494949] font-normal">Select relation</option>
              {relationOptions.map((o) => (
                <option key={o.value} value={o.value} className="text-[#282829]">{o.label}</option>
              ))}
            </select>
          </div>
        </div>
      </motion.div>

      <div className="flex justify-end gap-3 mt-10">
        <button
          onClick={onBack}
          className="px-5 py-2 rounded-[6px] border border-[#042C89] font-semibold text-gray-700 hover:bg-gray-100"
        >
          Back
        </button>
        <button
          onClick={onNext}
          className="px-5 py-2 rounded-[6px] font-semibold bg-[#042C89] text-white hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StepEmergency;