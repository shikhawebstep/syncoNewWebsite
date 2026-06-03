import { useContext, useState, useMemo } from "react";
import countryList from "react-select-country-list";
import { BookingContext } from "../context/BookingContext";
import { useToast, Toast } from "../../../../Common/Toast";
import ReactSelect from "react-select";

const CheckoutStep = ({ classDetails }) => {
  const [nameOnCard, setNameOnCard] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [country, setCountry] = useState("United States");
  const [zip, setZip] = useState("");
  const [errors, setErrors] = useState({});

  const options = useMemo(() => countryList().getData(), []);

  const countryOptions = [
    { value: "United Kingdom", label: "United Kingdom" },
    ...options
      .filter((country) => country.label !== "United Kingdom")
      .sort((a, b) => a.label.localeCompare(b.label))
  ];

  const {
    step, setStep, childrenCount, trialDate, selectedPlan,
    students, parents, emergency, paymentDetails, discount
  } = useContext(BookingContext);

  const [loading, setLoading] = useState(false);
  const { toasts, addToast, removeToast } = useToast();

  const plan = selectedPlan || {};

  const parseCurrency = (val) => {
    if (typeof val === "number") return val;
    if (typeof val !== "string") return 0;
    return parseFloat(val.replace(/[^0-9.]/g, "")) || 0;
  };

  const startDate = trialDate
    ? trialDate.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })
    : "TBD";

  const planTitle = plan.title || "Membership Plan";
  const planPrice = plan.price || "£0.00";
  const isStarterPack = classDetails?.venue?.starterPack === true;
  const starterPackItem = classDetails?.starterPack?.[0];
  const starterPackPrice = starterPackItem?.price || 0;

  // ✅ Delivery fee: £3.99 only when isStarterPack is true
  const deliveryFee = isStarterPack ? 3.99 : 0;

  const joiningFee = isStarterPack
    ? starterPackPrice * (childrenCount || 1)
    : plan.joiningFee ? parseCurrency(plan.joiningFee) : 35.0;

  const joiningFeeStr = isStarterPack
    ? `£${joiningFee.toFixed(2)}`
    : plan.joiningFee || `£${joiningFee.toFixed(2)}`;

  const discountAmount = discount?.amount || 0;
  const allTermGroups = classDetails?.venue?.termGroups || [];
  const sessionDates = new Set();

  allTermGroups.forEach((tg) => {
    (tg.terms || []).forEach((term) => {
      (term.sessionsMap || []).forEach((session) => {
        if (session.sessionDate) sessionDates.add(session.sessionDate);
      });
    });
  });

  const formatDate = (date) => {
    if (!date) return null;
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const selectedDateStr = formatDate(trialDate);
  const refDate = trialDate || new Date();
  const refYear = refDate.getFullYear();
  const refMonth = refDate.getMonth();

  const monthSessionDates = Array.from(sessionDates).filter((dStr) => {
    const parts = dStr.split("-");
    if (parts.length === 3) {
      const y = parseInt(parts[0], 10);
      const m = parseInt(parts[1], 10) - 1;
      return y === refYear && m === refMonth;
    }
    return false;
  });
  monthSessionDates.sort();

  const nextMonthFirst = trialDate
    ? new Date(trialDate.getFullYear(), trialDate.getMonth() + 1, 1)
    : null;
  const nextMonthStr = formatDate(nextMonthFirst);

  const proRataLessonsCountRaw = Array.from(sessionDates)
    .filter(d => d >= selectedDateStr && d < nextMonthStr)
    .length;

  const monthlyPriceNum = parseCurrency(planPrice);
  const totalLessonsPerYear = 40;
  const perSessionPrice = Number(((monthlyPriceNum * plan?.duration) / totalLessonsPerYear).toFixed(2));
  const proRataAmountRaw = proRataLessonsCountRaw * perSessionPrice;

  const totalAvailableSessions = monthSessionDates.length;
  const isFirstSessionSelected = monthSessionDates.length > 0 && selectedDateStr === monthSessionDates[0];
  const showProRata = totalAvailableSessions >= 3 && !isFirstSessionSelected;

  const proRataLessonsCount = showProRata ? proRataLessonsCountRaw : 0;
  const proRataAmount = showProRata ? proRataAmountRaw : 0;

  const joiningFeeAfterDiscount = discountAmount > 0 ? discountAmount : joiningFee;

  // ✅ Starter pack: joiningFee + deliveryFee + proRataAmount
  // ✅ Regular: joiningFee + proRataAmount
  const initialPayment = isStarterPack
    ? joiningFeeAfterDiscount +deliveryFee 
    : joiningFeeAfterDiscount + proRataAmount;

  const firstPaymentDate = "1st of next month";

  /* ─── Formatters ─── */
  const formatCardNumber = (val) => {
    const digits = val.replace(/\D/g, "").slice(0, 16);
    return digits.replace(/(.{4})/g, "$1 ").trim();
  };

  const formatExpiry = (val) => {
    const digits = val.replace(/\D/g, "").slice(0, 4);
    if (digits.length >= 3) return digits.slice(0, 2) + "/" + digits.slice(2);
    return digits;
  };

  const formatCvc = (val) => val.replace(/\D/g, "").slice(0, 4);
  const formatZip = (val) => val.replace(/[^a-zA-Z0-9 ]/g, "").slice(0, 10);

  /* ─── Field-level validation ─── */
  const validateField = (field, value) => {
    switch (field) {
      case "nameOnCard":
        return value.trim() ? "" : "Name on card is required";
      case "cardNumber":
        return value.replace(/\s/g, "").length === 16 ? "" : "Enter a valid 16-digit card number";
      case "expiry": {
        if (!value || value.length < 5) return "Enter expiry as MM/YY";
        const [mm, yy] = value.split("/");
        const month = parseInt(mm, 10);
        const year = parseInt("20" + yy, 10);
        const now = new Date();
        const expDate = new Date(year, month - 1, 1);
        if (month < 1 || month > 12) return "Invalid month";
        if (expDate < new Date(now.getFullYear(), now.getMonth(), 1)) return "Card has expired";
        return "";
      }
      case "cvc":
        return value.length >= 3 ? "" : "Enter a valid CVC";
      case "country":
        return value.trim() ? "" : "Country is required";
      case "zip":
        return value.trim() ? "" : "Postal Code is required";
      default:
        return "";
    }
  };

  const handleChange = (field, rawValue) => {
    let value = rawValue;
    if (field === "cardNumber") value = formatCardNumber(rawValue);
    if (field === "expiry") value = formatExpiry(rawValue);
    if (field === "cvc") value = formatCvc(rawValue);
    if (field === "zip") value = formatZip(rawValue);

    const setters = {
      nameOnCard: setNameOnCard, cardNumber: setCardNumber,
      expiry: setExpiry, cvc: setCvc, country: setCountry, zip: setZip
    };
    setters[field]?.(value);

    const msg = validateField(field, value);
    setErrors((prev) => {
      const copy = { ...prev };
      if (msg) copy[field] = msg;
      else delete copy[field];
      return copy;
    });
  };

  const validateAll = () => {
    const fields = { nameOnCard, cardNumber, expiry, cvc, country, zip };
    const newErrors = {};
    Object.entries(fields).forEach(([field, value]) => {
      const msg = validateField(field, value);
      if (msg) newErrors[field] = msg;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isFormValid = !Object.keys(errors).length &&
    nameOnCard.trim() && cardNumber && expiry && cvc && country && zip;

  const inputClass = (field) =>
    `w-full mt-1 mainShadow bg-white placeholder:text-[#494949] placeholder:font-medium rounded-[6px] px-4 py-2 outline-none${errors[field] ? " border border-red-500" : ""}`;

  const formatDateSafe = (dateInput) => {
    console.log('dateInput', dateInput);
    if (!dateInput) return null;
    let date;
    if (typeof dateInput === "string" && /^\d{2}\/\d{2}\/\d{4}$/.test(dateInput)) {
      const [day, month, year] = dateInput.split("/");
      date = new Date(`${year}-${month}-${day}`);
    } else {
      date = new Date(dateInput);
    }
    if (isNaN(date.getTime())) return null;
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  };

  const handleCompleteBooking = async () => {
    if (!validateAll()) return;
    setLoading(true);
    try {
      const payload = {
        venueId: classDetails?.venue?.id,
        startDate: formatDateSafe(trialDate),
        totalStudents: childrenCount,
        students: students.map((s) => ({
          studentFirstName: s.firstName,
          studentLastName: s.lastName,
          dateOfBirth: formatDateSafe(s.dob),
          age: parseInt(s.age) || 0,
          gender: s.gender,
          medicalInformation: s.medical || "None",
          classScheduleId: s.classScheduleId || classDetails?.id,
        })),
        password: parents[0]?.password || "",
        parents: parents.map((p) => ({
          parentFirstName: p.parentFirstName,
          parentLastName: p.parentLastName,
          parentEmail: p.parentEmail,
          parentPhoneNumber: p.phoneNumber,
          dialCode: p.dialCode || "",
          relationToChild: p.relationChild || "Parent",
          howDidYouHear: p.howDidHear || "Website",
          interestReason: p.interestReason,
          interestReasonOther: p.interestReasonOther,
          password: p.password || "",
        })),
        emergency: {
          emergencyFirstName: emergency[0]?.emergencyFirstName || "",
          emergencyLastName: emergency[0]?.emergencyLastName || "",
          emergencyPhoneNumber: emergency[0]?.phoneNumber || "",
          dialCode: emergency[0]?.dialCode || "",
          emergencyRelation: emergency[0]?.relationChild || "",
        },
        starterPack: joiningFee,
        paymentPlanId: plan.id,
        discountId: discount?.id || null,
        size: parents[0]?.starterPackSize || "",
        payment: {
          paymentType: "bank",
          firstName: nameOnCard.split(" ")[0] || "",
          lastName: nameOnCard.split(" ").slice(1).join(" ") || "",
          email: parents[0]?.parentEmail || "",
          account_number: paymentDetails?.accountNumber || "",
          branch_code: paymentDetails?.sortCode || "",
          account_holder_name: paymentDetails?.accountHolder || "",
          authorise: true,
          price: planPrice,
          calculateAmount: initialPayment,
          proRataAmount: proRataAmount.toFixed(2), // ✅ always send
          deliveryFee: isStarterPack ? deliveryFee : 0,                 // ✅ send delivery fee in payload
          nameOnCard: nameOnCard,
          cardNumber: cardNumber.replace(/\s/g, ""),
          expiryDate: expiry,
          cvc: cvc,
          country: country,
          zipCode: zip
        },
      };

      console.log('payload', payload);

      const response = await fetch("https://api.grabbite.com/api/open/book-membership/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        redirect: "follow",
      });

      const result = await response.json();

      if (response.ok) {
        setStep(step + 1);
      } else {
        let errorMsg = result.message || "Unknown error";
        if (result.error && typeof result.error === "object") {
          const firstKey = Object.keys(result.error)[0];
          errorMsg = result.error[firstKey];
        }
        addToast("Booking failed: " + errorMsg, "error");
      }
    } catch (error) {
      console.error("Booking error:", error);
      addToast("An error occurred during booking. Please try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Toast toasts={toasts} removeToast={removeToast} />
      <div className="md:flex grid gap-6 poppins">

        {/* Summary */}
        <div className="bg-[#F1F4FC] p-6 rounded-xl md:w-[365px] text-sm text-gray-800">
          <p className="text-[20px] text-[#042C89] font-bold mb-4">Summary</p>

          <div className="mb-4 grid gap-3">
            <p>
              <span className="font-semibold text-[#042C89] text-[16px]">{planTitle}</span>
              <span className="float-right font-semibold">£{planPrice}</span>
            </p>
            <p>
              <span className="text-[14px] font-medium text-[#34353B]">
                {childrenCount} Student{childrenCount > 1 ? "s" : ""}
              </span>
              <span className="float-right">per month</span>
            </p>
            <p><span className="text-[14px] font-medium text-[#34353B]">Start Date:</span> {startDate}</p>
            <p><span className="text-[14px] font-medium text-[#34353B]">First monthly payment:</span> {firstPaymentDate}</p>
          </div>

          <hr className="my-4 border-gray-300" />

          {/* Starter Pack / Joining Fee */}
          <div className="mb-4 grid gap-3">
            <p>
              <span className="font-semibold text-[#042C89] text-[16px]">
                {classDetails?.venue?.name || "Venue"}
              </span>
              <span className="float-right">
                {discountAmount > 0 ? `£${discountAmount.toFixed(2)}` : joiningFeeStr}
              </span>
            </p>
            <p>{isStarterPack ? starterPackItem?.title || "Starter Pack Price" : "Joining Fee"}</p>

            {/* ✅ Delivery Fee row — only shown when isStarterPack */}
            {isStarterPack && (
              <p>
                <span className="text-[14px] font-medium text-[#34353B]">Delivery Fee</span>
                <span className="float-right">£{deliveryFee.toFixed(2)}</span>
              </p>
            )}
          </div>

          {/* ✅ Pro-rata — shown for all plan types */}
          {showProRata && (
            <>
              <hr className="my-4 border-gray-300" />
              <div className="mb-4 grid gap-2">
                <p><span className="font-semibold text-[#042C89] text-[16px]">Pro-rata lessons</span></p>
                <p>Number of lessons <span className="float-right">{proRataLessonsCount}</span></p>
                <p>Fee <span className="float-right">£{proRataAmount.toFixed(2)}</span></p>
              </div>
            </>
          )}

          <hr className="my-4 border-gray-300" />

          {/* ✅ Total */}
          <p className="font-bold text-[16px] text-[#042C89]">
            Total to pay now{" "}
            <span className="float-right text-[22px] font-bold">£{initialPayment.toFixed(2)}</span>
          </p>
        </div>

        {/* Checkout Form */}
        <div className="flex-1 flex flex-col">
          <h2 className="text-xl font-semibold pb-4">Checkout</h2>
          <p className="text-gray-600 mb-12 text-sm">
            Fill out your card details below to pay for the{" "}
            {isStarterPack ? "Starter Pack and Delivery Fee" : "Joining Fee and Pro-Rata lessons"}
          </p>

          {/* Name on Card */}
          <div className="mb-4">
            <label className="block text-gray-700 text-[14px] font-medium mb-1">
              Name on card<span className="text-red-500 ml-0.5">*</span>
            </label>
            <input
              type="text"
              value={nameOnCard}
              onChange={(e) => handleChange("nameOnCard", e.target.value)}
              placeholder="Enter name on card"
              className={inputClass("nameOnCard")}
            />
            {errors.nameOnCard && <span className="text-red-500 text-[12px] mt-1 block">{errors.nameOnCard}</span>}
          </div>

          {/* Card Number */}
          <div className="mb-4">
            <label className="block text-gray-700 text-[14px] font-medium mb-1">
              Card number<span className="text-red-500 ml-0.5">*</span>
            </label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => handleChange("cardNumber", e.target.value)}
              placeholder="1234 1234 1234 1234"
              maxLength={19}
              inputMode="numeric"
              className={inputClass("cardNumber")}
            />
            {errors.cardNumber && <span className="text-red-500 text-[12px] mt-1 block">{errors.cardNumber}</span>}
          </div>

          {/* Expiry + CVC */}
          <div className="flex gap-4 mb-4">
            <div className="flex-1">
              <label className="block text-gray-700 text-[14px] font-medium mb-1">
                Expiration date<span className="text-red-500 ml-0.5">*</span>
              </label>
              <input
                type="text"
                value={expiry}
                onChange={(e) => handleChange("expiry", e.target.value)}
                placeholder="MM/YY"
                maxLength={5}
                inputMode="numeric"
                className={inputClass("expiry")}
              />
              {errors.expiry && <span className="text-red-500 text-[12px] mt-1 block">{errors.expiry}</span>}
            </div>

            <div className="flex-1">
              <label className="block text-gray-700 text-[14px] font-medium mb-1">
                CVC<span className="text-red-500 ml-0.5">*</span>
              </label>
              <input
                type="text"
                value={cvc}
                onChange={(e) => handleChange("cvc", e.target.value)}
                placeholder="CVC"
                maxLength={4}
                inputMode="numeric"
                className={inputClass("cvc")}
              />
              {errors.cvc && <span className="text-red-500 text-[12px] mt-1 block">{errors.cvc}</span>}
            </div>
          </div>

          {/* Country + Zip */}
          <div className="flex gap-4 mb-6">
            <div className="flex-1">
              <label className="block text-gray-700 text-[14px] font-medium mb-1">
                Country or region<span className="text-red-500 ml-0.5">*</span>
              </label>
              <ReactSelect
                options={countryOptions}
                value={countryOptions.find((opt) => opt.value === country) || null}
                onChange={(selectedOption) => handleChange("country", selectedOption?.value || "")}
                placeholder="Select Country"
                classNamePrefix="react-select"
                className={errors.country ? "border border-red-500 rounded-[6px]" : ""}
                styles={{
                  control: (base, state) => ({
                    ...base,
                    minHeight: "44px",
                    borderRadius: "6px",
                    borderColor: errors.country ? "#ef4444" : state.isFocused ? "#2563EB" : "#e5e7eb",
                    boxShadow: "none",
                    "&:hover": { borderColor: errors.country ? "#ef4444" : "#2563EB" },
                  }),
                  placeholder: (base) => ({ ...base, color: "#494949", fontWeight: 500 }),
                }}
              />
              {errors.country && <span className="text-red-500 text-[12px] mt-1 block">{errors.country}</span>}
            </div>

            <div className="flex-1">
              <label className="block text-gray-700 text-[14px] font-medium mb-1">
                Postal Code<span className="text-red-500 ml-0.5">*</span>
              </label>
              <input
                type="text"
                value={zip}
                onChange={(e) => handleChange("zip", e.target.value)}
                placeholder="Enter Postal Code"
                className={inputClass("zip")}
              />
              {errors.zip && <span className="text-red-500 text-[12px] mt-1 block">{errors.zip}</span>}
            </div>
          </div>

          <p className="font-semibold text-md">
            Total to pay now{" "}
            <span className="float-right text-blue-900">£{initialPayment.toFixed(2)}</span>
          </p>

          <div className="flex justify-end gap-4">
            <button
              onClick={() => setStep(step - 1)}
              className="mt-6 px-6 py-2 rounded-[6px] border-2 border-[#2563EB] text-[#2563EB] font-semibold hover:bg-[#2563EB] hover:text-white transition-colors"
            >
              Back
            </button>
            <button
              disabled={!isFormValid || loading}
              onClick={handleCompleteBooking}
              className={`mt-6 px-6 py-2 rounded-[6px] bg-blue-900 text-white font-semibold ${
                !isFormValid || loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-800"
              }`}
              type="button"
            >
              {loading ? "Processing..." : "Complete Booking"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutStep;





