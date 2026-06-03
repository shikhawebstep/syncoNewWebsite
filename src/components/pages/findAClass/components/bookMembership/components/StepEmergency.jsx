import { motion } from "framer-motion";
import Select from "react-select";
import { useContext, useEffect, useState } from "react";
import { BookingContext } from "../context/BookingContext";

/* ================= HELPERS ================= */
const onlyLetters = (v) => v.replace(/[^a-zA-Z\s]/g, "");
const onlyNumbers = (v, max = 12) => v.replace(/\D/g, "").slice(0, max);
/* =========================================== */

const relationOptions = [
  { value: "father", label: "Father" },
  { value: "mother", label: "Mother" },
  { value: "guardian", label: "Guardian" },
];

const emptyEmergency = () => ({
  id: Date?.now(),
  emergencyFirstName: "",
  emergencyLastName: "",
  phoneNumber: "",
  relationChild: "",
});
const selectStyles = {
  control: (base, state) => ({
    ...base,
    minHeight: "48px",
    borderRadius: "6px",
    borderColor: state.isFocused ? "#2563eb" : "#d1d5db", // subtle blue focus, default gray
    boxShadow:
      state.isFocused
        ? "0 0 0 1px #2563eb"
        : "rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
    ":hover": { borderColor: "#2563eb" },
    paddingLeft: "6px",
  }),
  valueContainer: (base) => ({ ...base, padding: "0 12px" }),
  indicatorsContainer: (base) => ({ ...base, paddingRight: "8px" }),
  menu: (base) => ({ ...base, borderRadius: "12px", overflow: "hidden" }),
  option: (base, state) => ({
    ...base,
    fontWeight: "600",
    backgroundColor: state.isFocused ? "#eff6ff" : "white",
    color: "#111827",
    cursor: "pointer",
  }),
};

const StepEmergency = ({ onNext, onBack }) => {
  const { parents, emergency, setEmergency } = useContext(BookingContext);
  const [fillSame, setFillSame] = useState(false);

  /* ✅ Initialize once */
  useEffect(() => {
    if (!emergency || emergency.length === 0) {
      setEmergency([emptyEmergency()]);
    }
  }, []); // 👈 IMPORTANT

  /* ✅ Copy parent ONLY when checkbox toggles */
  useEffect(() => {
    console.log('parents',parents)
    if (!parents?.length) return;

    if (fillSame) {


      console.log('cccccccccc')
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
    }
  }, [fillSame]);

  const handleEmergencyChange = (field, value) => {
    setEmergency([
      {
        ...emergency[0],
        [field]: value,
      },
    ]);
  };

  const e = emergency?.[0];


  return (
    <div className="lg:max-w-[80%] m-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="md:p-6 rounded-3xl space-y-6"
      >
        <h2 className="text-[20px] text-center font-semibold">
          Emergency Contact Details
        </h2>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={fillSame}
            onChange={() => setFillSame((v) => !v)}
          />
          <span className="text-sm font-medium">Fill Same as Parent</span>
        </label>

        <div className="grid md:grid-cols-2 gap-4">
          {/* First Name */}
          <div>
            <label className="text-sm font-medium">First name</label>
            <input
              className="input w-full mt-1 mainShadow bg-white placeholder:text-[#494949] placeholder:font-medium rounded-[6px] px-4 py-3"
              value={e?.emergencyFirstName}
              disabled={fillSame}
              onChange={(ev) =>
                handleEmergencyChange(
                  "emergencyFirstName",
                  onlyLetters(ev.target.value)
                )
              }
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="text-sm font-medium">Last name</label>
            <input
              className="input w-full mt-1 mainShadow bg-white placeholder:text-[#494949] placeholder:font-medium rounded-[6px] px-4 py-3"
              value={e?.emergencyLastName}
              disabled={fillSame}
              onChange={(ev) =>
                handleEmergencyChange(
                  "emergencyLastName",
                  onlyLetters(ev.target.value)
                )
              }
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm font-medium">Phone</label>
            <input
              className="input w-full mt-1 mainShadow bg-white placeholder:text-[#494949] placeholder:font-medium rounded-[6px] px-4 py-3"
              value={e?.phoneNumber}
              disabled={fillSame}
              onChange={(ev) =>
                handleEmergencyChange(
                  "phoneNumber",
                  onlyNumbers(ev.target.value)
                )
              }
            />
          </div>

          {/* Relation */}
          <div>
            <label className="text-sm font-medium mb-2 block">Relation</label>
            <Select
              options={relationOptions}
              value={relationOptions.find(
                (o) => o.value === e?.relationChild
              )}
              onChange={(opt) =>
                handleEmergencyChange("relationChild", opt?.value || "")
              }
              styles={selectStyles}
            />
          </div>
        </div>
      </motion.div>

      <div className="flex justify-end gap-3 mt-10">
        <button  onClick={onBack}  className={`px-5 py-2 rounded-[6px] border border-[#042C89] font-semibold text-gray-700 hover:bg-gray-100
          `}>
          Back
        </button>
        <button onClick={onNext} className={`px-5 py-2 rounded-[6px] font-semibold 
            bg-[#042C89] text-white hover:bg-blue-700`}>
          Next
        </button>
      </div>
    </div>
  );
};

export default StepEmergency;
