import { useContext, useState, useMemo } from "react";
import countryList from "react-select-country-list";
import { BookingContext } from "../context/BookingContext";
import { useToast, Toast } from "../../../../Common/Toast";
import { useNavigate } from "react-router-dom";
import ReactSelect from "react-select";
const CheckoutStep = ({ classDetails, onNext, onBack }) => {
  const navigate = useNavigate();
  const [nameOnCard, setNameOnCard] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [country, setCountry] = useState("United States");
  const [zip, setZip] = useState("");
  const [discountCodeInput, setDiscountCodeInput] = useState("");
  const {
    step,
    setStep,
    childrenCount,
    trialDate,
    selectedPlan,
    students,
    parents,
    emergency,
    paymentDetails,
    setDiscount,
    discount,
    campDates,
    resetBookingData
  } = useContext(BookingContext);
  const [loading, setLoading] = useState(false);
  const [applyingDiscount, setApplyingDiscount] = useState(false);
  const { toasts, addToast, removeToast } = useToast();
  const [errors, setErrors] = useState({});
  const options = useMemo(() => countryList().getData(), []);

  const countryOptions = [
    { value: "United Kingdom", label: "United Kingdom" },

    ...options
      .filter((country) => country.label !== "United Kingdom")
      .sort((a, b) => a.label.localeCompare(b.label))
  ];
  // Use selectedPlan from context
  const plan = selectedPlan || {};

  const parseCurrency = (val) => {
    if (typeof val === "number") return val;
    if (typeof val !== "string") return 0;
    return parseFloat(val.replace(/[^0-9.]/g, '')) || 0;
  };

  const planTitle = plan.title || "Membership Plan";
  const planPriceNumber = parseCurrency(plan.price);
  const planPriceStr = `£${planPriceNumber.toFixed(2)}`;
  const joiningFee = plan.joiningFee ? parseCurrency(plan.joiningFee) : 35.00;
  const joiningFeeStr = `£${joiningFee.toFixed(2)}`;

  const discountAmount = discount?.amount || 0;
  const initialPayment = planPriceNumber + joiningFee - discountAmount;

  // Console all values
  console.log("Plan Title:", planTitle);
  console.log("Plan Price Number:", planPriceNumber);
  console.log("Plan Price String:", planPriceStr);
  console.log("Joining Fee Number:", joiningFee);
  console.log("Joining Fee String:", joiningFeeStr);
  console.log("Discount Amount:", discountAmount);
  console.log("Initial Payment:", initialPayment);

  const startDateStr = trialDate ? trialDate.toISOString().split('T')[0] : "";
  const displayStartDate = trialDate ? trialDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : "TBD";
  const firstPaymentDate = "1st of next month";

  const isStarterPack = classDetails?.venue?.starterPack === true;

  // Validation functions
  const validateField = (field, value) => {
    switch (field) {
      case "nameOnCard":
        if (!value?.trim()) return "Name on card is required";
        if (value.trim().split(' ').length < 2) return "Please enter full name";
        return "";
      case "cardNumber":
        const cleanCard = value.replace(/\s/g, "");
        if (!value?.trim()) return "Card number is required";
        if (cleanCard.length !== 16) return "Card number must be 16 digits";
        if (!/^\d+$/.test(cleanCard)) return "Only numbers are allowed";
        return "";
      case "expiry":
        if (!value?.trim()) return "Expiry date is required";
        const expMatch = value.match(/^(\d{2})\/?(\d{2})$/);
        if (!expMatch) return "Enter MM/YY format";
        const month = parseInt(expMatch[1]);
        const year = parseInt(expMatch[2]) + 2000;
        const expiryDate = new Date(year, month, 0);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (expiryDate < today) return "Card has expired";
        if (month < 1 || month > 12) return "Invalid month";
        return "";
      case "cvc":
        if (!value?.trim()) return "CVC is required";
        if (!/^\d{3,4}$/.test(value)) return "CVC must be 3-4 digits";
        return "";
      case "country":
        if (!value) return "Country is required";
        return "";
      case "zip":
        if (!value?.trim()) return "Zip/postcode is required";
        return "";
      default:
        return "";
    }
  };

  const handleFieldChange = (field, value) => {
    // Update field value based on field type
    switch (field) {
      case "cardNumber":
        setCardNumber(value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim());
        break;
      case "expiry":
        setExpiry(value.replace(/\D/g, '').replace(/(\d{2})(\d{0,2})/, '$1/$2').slice(0, 5));
        break;
      case "cvc":
        setCvc(value.replace(/\D/g, '').slice(0, 4));
        break;
      case "nameOnCard":
        setNameOnCard(value);
        break;
      case "country":
        setCountry(value);
        break;
      case "zip":
        setZip(value);
        break;
      default:
        break;
    }

    // Validate and clear error
    const errorMsg = validateField(field, value);
    setErrors(prev => ({
      ...prev,
      [field]: errorMsg
    }));
  };

  const handleApplyDiscount = async () => {
    if (!discountCodeInput.trim()) return;
    setApplyingDiscount(true);
    try {
      const response = await fetch("https://api.grabbite.com/api/open/discount/apply/holiday", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          code: discountCodeInput,
          planId: plan.id,
          price: joiningFee
        })
      });
      const result = await response.json();

      if (response.ok && (result.success || result.data)) {
        const data = result.data || result;
        setDiscount({
          code: discountCodeInput,
          amount: data.amount || data.discountAmount || 0,
          id: data.id || data.discountId
        });
        addToast("Discount applied successfully! 🎉", "success");
      } else {
        let errorMsg = result.message || "Invalid discount code";
        if (result.error && typeof result.error === 'object') {
          const firstKey = Object.keys(result.error)[0];
          errorMsg = result.error[firstKey];
        }
        addToast(errorMsg, "error");
      }
    } catch (error) {
      console.error("Discount error:", error);
      addToast("Error applying discount", "error");
    } finally {
      setApplyingDiscount(false);
    }
  };

  const isFormValid = Object.values(errors).every(error => !error) &&
    nameOnCard.trim() &&
    cardNumber.replace(/\s/g, "").length === 16 &&
    expiry.trim() &&
    cvc.trim() &&
    country.trim() &&
    zip.trim();

const formatDateSafe = (dateInput) => {
  console.log('dateInput', dateInput);
  if (!dateInput) return null;

  let date;

  // Handle DD/MM/YYYY format
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
    // Final validation
    const newErrors = {};
    ['nameOnCard', 'cardNumber', 'expiry', 'cvc', 'country', 'zip'].forEach(field => {
      const value = field === 'nameOnCard' ? nameOnCard :
        field === 'cardNumber' ? cardNumber :
          field === 'expiry' ? expiry :
            field === 'cvc' ? cvc :
              field === 'country' ? country : zip;
      const error = validateField(field, value);
      if (error) newErrors[field] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    try {
      const payload = {
        venueId: classDetails?.venue?.id,
        totalStudents: parseInt(childrenCount) || 1,
        holidayCampId: classDetails?.id || null,
        paymentPlanId: plan?.id || null,
        students: students.map((s) => ({
          studentFirstName: s.firstName,
          studentLastName: s.lastName,
          dateOfBirth: formatDateSafe(s.dob),
          age: parseInt(s.age) || 0,
          gender: s.gender,
          medicalInformation: s.medical || "None",
          class: s.class || classDetails?.className,
          time: s.time || "7:30 AM - 8:45 AM",
          classScheduleId: s.classScheduleId || classDetails?.id
        })),
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
        })),
        emergency: {
          emergencyFirstName: emergency[0]?.emergencyFirstName || "",
          emergencyLastName: emergency[0]?.emergencyLastName || "",
          emergencyPhoneNumber: emergency[0]?.phoneNumber || "",
          dialCode: emergency[0]?.dialCode || "",
          emergencyRelation: emergency[0]?.relationChild || ""
        },
        payment: {
          firstName: nameOnCard.split(" ")[0] || "",
          lastName: nameOnCard.split(" ").slice(1).join(" ") || "",
          email: parents[0]?.parentEmail || "",
          billingAddress: zip || "",
          cardNumber: cardNumber.replace(/\s/g, ""),
          expiryDate: expiry,
          securityCode: cvc
        },
        discountId: discount?.id || null
      };

      const response = await fetch("https://api.grabbite.com/api/open/book-holiday-camp/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        redirect: "follow"
      });

      const result = await response.json();
      console.log("Booking result:", result);

      if (response.ok) {
        setStep(step + 1);
      } else {
        let errorMsg = result.message || "Unknown error";
        if (result.error && typeof result.error === 'object') {
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

  const inputClass = (field) => `
    w-full mt-1 mainShadow capitalize bg-white placeholder:text-[#494949] placeholder:font-medium 
    rounded-[10px] px-4 py-2.5 text-sm border 
    ${errors[field] ? "border-red-500" : "border-gray-200"} 
    focus:border-[#042C89] focus:outline-none focus:ring-2 focus:ring-[#042C89]/20
  `;

  const selectClass = () => `
    w-full mt-1 mainShadow bg-white placeholder:text-[#494949] placeholder:font-medium 
    rounded-[10px] px-4 py-2.5 text-sm border cursor-pointer
    border-gray-200 focus:border-[#042C89] focus:outline-none focus:ring-2 focus:ring-[#042C89]/20
  `;

  return (
    <div className="lg:max-w-6xl mx-auto md:px-4 md:py-8 poppins min-h-[80vh]">
      <Toast toasts={toasts} removeToast={removeToast} />
      <div className="flex flex-col lg:flex-row gap-8">

        {/* Left Sidebar - Summary (unchanged) */}
        <div className="w-full lg:w-[340px] shrink-0">
          <div className="bg-[#F1F4FC] p-6 rounded-[20px] sticky top-8">
            <h2 className="text-[20px] text-[#042C89] font-bold pb-5">
              {isStarterPack ? "Payment Breakdown" : "Summary"}
            </h2>

            <div className="mb-5">
              <p className="text-[#042C89] font-bold text-[15px] mb-2">Holiday Camp</p>
              <div className="space-y-1 text-[#34353B] text-[13px] font-medium opacity-80">
                <p className="font-medium">x{childrenCount} Student{childrenCount > 1 ? "s" : ""}</p>
                <p><b>Start Date:</b> {campDates[0]?.startDate}</p>
                <p><b>End Date:</b> {campDates[0]?.endDate}</p>
              </div>
            </div>

            <hr className="mb-5 border-[#D1D9EF]" />

            {discount?.amount > 0 && (
              <>
                <div className="mb-5">
                  <p className="text-[#042C89] font-bold text-[15px] mb-2">
                    {discount.label || "Sibling Discount"}
                  </p>
                  <div className="flex justify-between items-center text-[13px] font-medium text-[#34353B] opacity-80">
                    <span>{discount.description || `X${childrenCount} student discount`}.</span>
                    <span className="text-[#34353B] font-semibold">- £{discountAmount.toFixed(2)}</span>
                  </div>
                </div>
                <hr className="mb-5 border-[#D1D9EF]" />
              </>
            )}

            <div className="mb-5">
              <p className="text-[#042C89] font-bold text-[15px] mb-3">Discount Code</p>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={discountCodeInput}
                  onChange={(e) => setDiscountCodeInput(e.target.value)}
                  placeholder="Enter discount code here"
                  className="flex-1 bg-white rounded-[10px] px-4 py-2.5 text-sm focus:outline-none placeholder:text-[#494949] shadow-sm border border-gray-200"
                />
                <button
                  type="button"
                  onClick={handleApplyDiscount}
                  disabled={applyingDiscount || !discountCodeInput.trim()}
                  className="bg-[#042C89] text-white rounded-[10px] px-4 py-2 text-xs font-semibold hover:bg-blue-800 disabled:opacity-50 transition-colors"
                >
                  {applyingDiscount ? "..." : "Apply"}
                </button>
              </div>
            </div>

            <hr className="mb-5 border-[#D1D9EF]" />

            <div className="flex justify-between items-center">
              <span className="text-[#042C89] font-semibold text-[14px]">Total to pay now</span>
              <span className="text-[#042C89] font-bold text-[22px]">£{initialPayment.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Right Content - Checkout Form */}
        <div className="flex-1">
          <h5 className="text-[22px] font-semibold text-[#34353B] poppins pb-2" style={{ fontSize: '22px' }}>Checkout</h5>
          <p className="text-[#797A88] text-[14px] mb-5">
            Fill out your card details below to pay for the Joining Fee and Pro-Rata lessons.
          </p>

          <form className="space-y-5">
            {/* Name on card */}
            <div className="space-y-1">
              <label className="block text-[14px] text-[#282829]">
                Name on card<span className="text-red-500 ml-0.5">*</span>
              </label>
              <input
                type="text"
                value={nameOnCard}
                onChange={(e) => handleFieldChange("nameOnCard", e.target.value)}
                placeholder="Enter name on card"
                className={inputClass("nameOnCard")}
              />
              {errors.nameOnCard && (
                <span className="text-red-500 text-[12px] mt-1 block">
                  {errors.nameOnCard}
                </span>
              )}
            </div>

            {/* Card information */}
            <div className="space-y-1">
              <label className="block text-[14px] text-[#282829]">
                Card number<span className="text-red-500 ml-0.5">*</span>
              </label>
              <input
                type="text"
                maxLength={19} // 16 digits + 3 spaces
                value={cardNumber}
                onChange={(e) => {
                  let value = e.target.value.replace(/\D/g, ""); // remove non-digits
                  value = value.substring(0, 16); // limit to 16 digits

                  // add space every 4 digits
                  value = value.replace(/(.{4})/g, "$1 ").trim();

                  handleFieldChange("cardNumber", value);
                }}
                placeholder="1234 1234 1234 1234"
                className={inputClass("cardNumber")}
              />
              {errors.cardNumber && (
                <span className="text-red-500 text-[12px] mt-1 block">
                  {errors.cardNumber}
                </span>
              )}
            </div>

            {/* Expiry + CVC */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="block text-[14px] text-[#282829]">
                  Expiration date<span className="text-red-500 ml-0.5">*</span>
                </label>
                <input
                  type="text"
                  value={expiry}
                  onChange={(e) => handleFieldChange("expiry", e.target.value)}
                  placeholder="MM/YY"
                  className={inputClass("expiry")}
                />
                {errors.expiry && (
                  <span className="text-red-500 text-[12px] mt-1 block">
                    {errors.expiry}
                  </span>
                )}
              </div>
              <div className="space-y-1">
                <label className="block text-[14px] text-[#282829]">
                  CVC<span className="text-red-500 ml-0.5">*</span>
                </label>
                <input
                  type="text"
                  value={cvc}
                  onChange={(e) => handleFieldChange("cvc", e.target.value)}
                  placeholder="123"
                  className={inputClass("cvc")}
                />
                {errors.cvc && (
                  <span className="text-red-500 text-[12px] mt-1 block">
                    {errors.cvc}
                  </span>
                )}
              </div>
            </div>

            {/* Country + Zip */}
            <div className="grid grid-cols-2 gap-4">
              <div className="">
                <label className="block text-gray-700 text-[14px] font-medium mb-1">
                  Country or region<span className="text-red-500 ml-0.5">*</span>
                </label>

                <ReactSelect
                  options={countryOptions}
                  value={countryOptions.find((opt) => opt.value === country) || null}
                  onChange={(selectedOption) =>
                    handleChange("country", selectedOption?.value || "")
                  }
                  placeholder="Select Country"
                  classNamePrefix="react-select"
                  className={errors.country ? "border border-red-500 rounded-[6px]" : ""}
                  styles={{
                    control: (base, state) => ({
                      ...base,
                      minHeight: "44px",
                      borderRadius: "6px",
                      borderColor: errors.country
                        ? "#ef4444"
                        : state.isFocused
                          ? "#2563EB"
                          : "#e5e7eb",
                      boxShadow: "none",
                      "&:hover": {
                        borderColor: errors.country ? "#ef4444" : "#2563EB",
                      },
                    }),
                    placeholder: (base) => ({
                      ...base,
                      color: "#494949",
                      fontWeight: 500,
                    }),
                  }}
                />

                {errors.country && (
                  <span className="text-red-500 text-[12px] mt-1 block">
                    {errors.country}
                  </span>
                )}
              </div>
              <div className="space-y-1">
                <label className="block text-[14px] text-[#282829]">
                   Postal Code<span className="text-red-500 ml-0.5">*</span>
                </label>
                <input
                  type="text"
                  value={zip}
                  onChange={(e) => handleFieldChange("zip", e.target.value)}
                  placeholder="Enter Postal Code"
                  className={inputClass("zip")}
                />
                {errors.zip && (
                  <span className="text-red-500 text-[12px] mt-1 block">
                    {errors.zip}
                  </span>
                )}
              </div>
            </div>

            {/* Rest of the form remains the same... */}
            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#E5E7EB]"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-6 bg-white text-black font-medium text-[14px]">Or pay with</span>
              </div>
            </div>

            <button
              type="button"
              className="w-full bg-[#111] text-white rounded-[10px] py-2.5 flex justify-center items-center gap-2 hover:bg-black transition-all active:scale-[0.98]"
            >
              <svg width="18" height="22" viewBox="0 0 17 21" fill="currentColor">
                <path d="M12.637 10.603C12.623 8.163 14.636 7.001 14.73 6.945C13.593 5.302 11.83 5.066 11.201 5.04C9.697 4.888 8.272 5.922 7.509 5.922C6.746 5.922 5.564 5.068 4.314 5.093C2.668 5.118 1.157 6.046 0.306 7.514C-1.408 10.472 -0.117 14.862 1.55 17.25C2.364 18.423 3.328 19.743 4.597 19.698C5.816 19.65 6.279 18.914 7.759 18.914C9.237 18.914 9.655 19.698 10.949 19.673C12.269 19.65 13.096 18.47 13.905 17.295C14.84 15.938 15.228 14.621 15.247 14.555C15.22 14.542 12.68 13.579 12.637 10.603ZM10.518 3.515C11.18 2.715 11.623 1.597 11.5 0.5C10.55 0.54 9.4 1.133 8.718 1.933C8.109 2.636 7.575 3.768 7.712 4.845C8.77 4.927 9.855 4.316 10.518 3.515Z" />
              </svg>
              <span className="text-[17px] font-semibold">Pay</span>
            </button>

            <div className="flex justify-between items-center pt-3 ">
              <span className="text-[#042C89] font-semibold text-[16px]">Total to pay now</span>
              <span className="text-[#042C89] font-bold text-[24px]">£{initialPayment.toFixed(2)}</span>
            </div>

            {/* Checkboxes */}
            <div className="space-y-4 flex flex-col items-end">
              <label className="flex items-center justify-end gap-3 cursor-pointer">
                <input type="checkbox" className="hidden peer " defaultChecked />
                <div className=" w-4 h-4 rounded-[5px] border-2 border-[#10B981] flex items-center justify-center peer-checked:bg-[#10B981] transition-all shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[13px] text-[#4B5563] font-medium leading-[1.5] flex-1">
                  You agree to the <span className="font-bold border-b border-[#4B5563]">Terms Conditions</span> and <span className="underline">Privacy Policy.</span>
                </span>
              </label>

              <label className="flex items-center justify-end gap-3 cursor-pointer">
                <input type="checkbox" className="hidden peer " defaultChecked />
                <div className=" w-4 h-4 rounded-[5px] border-2 border-[#10B981] flex items-center justify-center peer-checked:bg-[#10B981] transition-all shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[13px] text-[#4B5563] font-medium leading-[1.5] underline flex-1">
                  You provide consent for your child to be included in photos.
                </span>
              </label>
            </div>

            {/* Footer actions */}
            <div className="flex sm:flex-row items-center justify-end md:gap-4 gap-2 pt-8 border-t border-[#F3F4F6]">
              <button
                type="button"
                onClick={() => { resetBookingData(); navigate("/find-a-camp"); }}
                className="text-[#666] font-bold hover:text-[#333] transition-colors md:px-4 px-2 py-2 text-[14px]"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={onBack}
                className=" sm:w-auto md:px-8 px-3  py-2.5 border border-[#D1D5DB] text-[#042C89] font-bold rounded-[10px] hover:bg-[#F9FAFB] transition-all text-[14px]"
              >
                Back
              </button>
              <button
                type="button"
                disabled={!isFormValid || loading}
                onClick={handleCompleteBooking}
                className="sm:w-auto md:px-8 px-3 py-2.5 bg-[#042C89] text-white font-bold rounded-[10px] hover:bg-[#032574] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md text-[14px]"
              >
                {loading ? "Processing..." : "Complete booking"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutStep;