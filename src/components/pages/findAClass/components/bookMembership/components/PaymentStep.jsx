import { useContext, useState, useMemo } from "react";
import { Truck, AlertTriangle, MapPin, Check } from "lucide-react";
import Select from "react-select";
import { BookingContext } from "../context/BookingContext";
import { useToast, Toast } from "../../../../Common/Toast";
import { getAddressesByPostcode } from "../../../../Common/getAddressesByPostcode";

// simple react-select style helper (replace with your design tokens if you have shared one)
const rsStyles = (hasError = false) => ({
  control: (base, state) => ({
    ...base,
    borderRadius: 10,
    borderColor: hasError ? "#e53e3e" : state.isFocused ? "#3b7df6" : "#e7ebf1",
    boxShadow: "none",
    minHeight: 46,
    "&:hover": { borderColor: "#3b7df6" },
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected ? "#3b7df6" : state.isFocused ? "#eff6ff" : "white",
    color: state.isSelected ? "white" : "#282829",
  }),
});

const PaymentStep = ({ classDetails }) => {
  const {
    step,
    setStep,
    childrenCount,
    trialDate,
    selectedPlan,
    paymentDetails,
    setPaymentDetails,
    discount,
    setDiscount,selectedAddressData, setSelectedAddressData
  } = useContext(BookingContext);

  const { accountHolder, sortCode, accountNumber } = paymentDetails;

  const [agreeTerms, setAgreeTerms] = useState(true);
  const [consentPhotos, setConsentPhotos] = useState(true);
  const [discountCode, setDiscountCode] = useState(discount?.code || "");
  const [applyingDiscount, setApplyingDiscount] = useState(false);
  const { toasts, addToast, removeToast } = useToast();
  const [addressList, setAddressList] = useState([]);
  const [showAddrSelect, setShowAddrSelect] = useState(false);
  const [addressLoading, setAddressLoading] = useState(false);
  const [addressError, setAddressError] = useState("");
  const [postcode, setPostcode] = useState("");
  const [selectedAddress, setSelectedAddress] = useState("");

  // ✅ FIX: build options from addressList instead of undefined addressOptions
  const addressOptions = (addressList || [])
        .filter((a) => a && a.address)
        .map((a) => ({ value: a.address, label: a.address, all: a }));

  const setAccountHolder = (val) => setPaymentDetails(prev => ({ ...prev, accountHolder: val }));
  const setSortCode = (val) => setPaymentDetails(prev => ({ ...prev, sortCode: val }));
  const setAccountNumber = (val) => setPaymentDetails(prev => ({ ...prev, accountNumber: val }));

  const isSortCodeValid = sortCode.replace(/\D/g, "").length === 6;
  const isAccountNumberValid = accountNumber.replace(/\D/g, "").length === 8;

  const canSubmit =
    accountHolder.trim() &&
    isSortCodeValid &&
    isAccountNumberValid &&
    agreeTerms &&
    consentPhotos;

  const plan = selectedPlan || {};

  const parseCurrency = (val) => {
    if (typeof val === "number") return val;
    if (typeof val !== "string") return 0;
    return parseFloat(val.replace(/[^0-9.]/g, '')) || 0;
  };

  const planTitle = plan.title || "Membership Plan";
  const planPrice = plan.price || "£0.00";
  const isStarterPack = classDetails?.venue?.starterPack === true;
  const starterPackItem = classDetails?.starterPack?.[0];

  const starterPackPrice = starterPackItem?.price || 0;
  const deliveryFee = isStarterPack ? 3.99 : 0;

  const joiningFee = isStarterPack
    ? starterPackPrice
    : (plan.joiningFee ? parseCurrency(plan.joiningFee) : 0);

  const joiningFeeStr = isStarterPack
    ? `£${joiningFee.toFixed(2)}`
    : (plan.joiningFee || `£${joiningFee.toFixed(2)}`);

  // ✅ FIX: track "is a discount actually applied" instead of amount > 0
  const isDiscountApplied = !!discount?.code;
  const discountAmount = discount?.amount ?? 0;
  const joiningFeeAfterDiscount = isDiscountApplied ? discountAmount : joiningFee;

  const allTermGroups = classDetails?.venue?.termGroups || [];
  const sessionDates = new Set();

  allTermGroups.forEach(tg => {
    (tg.terms || []).forEach(term => {
      (term.sessionsMap || []).forEach(session => {
        if (session.sessionDate) {
          sessionDates.add(session.sessionDate);
        }
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

  // ✅ FIX: guard against null selectedDateStr / nextMonthStr
  const proRataLessonsCountRaw = selectedDateStr && nextMonthStr
    ? Array.from(sessionDates).filter(d => d >= selectedDateStr && d < nextMonthStr).length
    : 0;

  const totalAvailableSessions = monthSessionDates.length;
  const isFirstSessionSelected =
    monthSessionDates.length > 0 && selectedDateStr === monthSessionDates[0];
  const showProRata = totalAvailableSessions >= 3 && !isFirstSessionSelected;

  const proRataLessonsCount = showProRata ? proRataLessonsCountRaw : 0;

  const monthlyPriceNum = parseCurrency(planPrice);
  const totalLessonsPerYear = 40;
  const perSessionPrice = Number(
    ((monthlyPriceNum * plan?.duration) / totalLessonsPerYear).toFixed(2)
  );
  const proRataAmount = proRataLessonsCount * perSessionPrice;

  const initialPayment = isStarterPack
    ? joiningFeeAfterDiscount + deliveryFee
    : joiningFeeAfterDiscount + proRataAmount;

  const startDate = trialDate
    ? trialDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
    : "TBD";
  const firstPaymentDate = "1st of next month";

  const handleApplyDiscount = async () => {
    if (!discountCode.trim()) return;
    setApplyingDiscount(true);
    try {
      const response = await fetch("https://api.grabbite.com/api/open/discount/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          starterPack: joiningFee,
          code: discountCode
        })
      });

      const result = await response.json();
      const data = result?.data;

      if (response.ok) {
        const finalPrice = parseFloat(data.finalPrice);
        setDiscount({
          code: discountCode,
          amount: isNaN(finalPrice) ? 0 : finalPrice,
          id: data.discountId
        });
        addToast("Discount applied successfully! 🎉", "success");
      } else {
        addToast(result.message || "Invalid discount code", "error");
      }
    } catch (error) {
      console.error("Discount error:", error);
      addToast("Error applying discount", "error");
    } finally {
      setApplyingDiscount(false);
    }
  };

  return (
    <div className="md:flex grid gap-4 poppins py-7">
      <Toast toasts={toasts} removeToast={removeToast} />

      {/* Left summary box */}
      <div className="bg-[#F1F4FC] p-6 rounded-xl md:w-[365px] text-sm text-gray-800">
        <p className="text-[20px] text-[#042C89] font-bold mb-4">Summary</p>

        <div className="mb-4 grid gap-3">
          <p>
            <span className="font-semibold text-[#042C89] text-[16px]">{planTitle}</span>
            <span className="float-right font-semibold">£ {planPrice}</span>
          </p>
          <p>
            <span className="text-[14px] font-medium text-[#34353B]">
              {childrenCount} Student{childrenCount > 1 ? "s" : ""}
            </span>
            <span className="float-right">per month</span>
          </p>
          <p>
            <span className="text-[14px] font-medium text-[#34353B]">Start Date:</span> {startDate}
          </p>
          <p>
            <span className="text-[14px] font-medium text-[#34353B]">First monthly payment:</span>{" "}
            {firstPaymentDate}
          </p>
        </div>

        <hr className="my-4 border-gray-300" />

        <div className="mb-4 grid gap-3">
          <p>
            <span className="font-semibold text-[#042C89] text-[16px]">
              {classDetails?.venue?.name || "Venue"}
            </span>
            <span className="float-right">
              {isDiscountApplied ? `£${discountAmount.toFixed(2)}` : joiningFeeStr}
            </span>
          </p>
          <p>{isStarterPack ? starterPackItem?.title || "Starter Pack Price" : "Joining Fee"}</p>

          {isStarterPack && (
            <p>
              <span className="text-[14px] font-medium text-[#34353B]">Delivery Fee</span>
              <span className="float-right">£{deliveryFee.toFixed(2)}</span>
            </p>
          )}
        </div>

        <hr className="my-4 border-gray-300" />

        <div className="mb-4 grid gap-2">
          <p>
            <span className="font-semibold text-[#042C89] text-[16px]">Pro-rata lessons</span>
          </p>
          <p>
            Number of lessons{" "}
            <span className="float-right">{proRataLessonsCount}</span>
          </p>
          <p>
            Fee <span className="float-right">£{proRataAmount.toFixed(2)}</span>
          </p>
        </div>

        <hr className="my-4 border-gray-300" />

        <p className="font-bold text-lg font-semibold text-[#042C89] text-[16px]">
          Total to pay now{" "}
          <span className="float-right text-[22px] font-bold">
            £{initialPayment.toFixed(2)}
          </span>
        </p>
      </div>

      {/* Right form */}
      <div className="md:flex-1 rounded-xl md:flex flex-col">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-xl font-semibold">Set up your direct debit</h2>
          <img src="/assets/debit.png" alt="Direct Debit" className="h-8" />
        </div>

        <p className="text-[#797A88] text-[14px] mb-6 text-sm">
          Your regular Direct Debit payments will be collected <br /> from this account starting
          from the 1st of next month.
        </p>

        <label className="block mb-4">
          <span className="block text-gray-700 font-regular text-[14px] mb-1">
            Account Holder Name<span className="text-red-500 ml-0.5">*</span>
          </span>
          <input
            type="text"
            value={accountHolder}
            onChange={(e) => setAccountHolder(e.target.value)}
            className="input w-full mt-1 mainShadow bg-white placeholder:text-[#494949] placeholder:font-medium rounded-[6px] px-4 py-2"
          />
        </label>

        <div className="md:flex grid gap-4 mb-4">
          <label className="flex-1">
            <span className="block text-gray-700 font-regular text-[14px] mb-1">
              Sort Code<span className="text-red-500 ml-0.5">*</span>
            </span>
            <input
              type="text"
              maxLength={6}
              value={sortCode}
              onChange={(e) => setSortCode(e.target.value)}
              className={`input w-full mt-1 mainShadow bg-white placeholder:text-[#494949] placeholder:font-medium rounded-[6px] px-4 py-2 ${!isSortCodeValid && sortCode ? "border-red-500" : ""}`}
            />
            <span className="text-[11px] text-[#797A88]">Must be 6 digits long</span>
          </label>
          <label className="flex-1">
            <span className="block text-gray-700 font-regular text-[14px] mb-1">
              Account Number<span className="text-red-500 ml-0.5">*</span>
            </span>
            <input
              type="text"
              maxLength={8}
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              className={`input w-full mt-1 mainShadow bg-white placeholder:text-[#494949] placeholder:font-medium rounded-[6px] px-4 py-2 ${!isAccountNumberValid && accountNumber ? "border-red-500" : ""}`}
            />
            <span className="text-[11px] text-[#797A88]">Must be 8 digits long</span>
          </label>
        </div>

        {isStarterPack && (
          <div className="border border-[#e7ebf1] rounded-[14px] p-4 mt-1 mb-5">
            <div className="font-bold text-[14px] mb-3 flex flex-wrap items-center gap-2">
              <Truck size={16} /> Delivery address <span className="font-medium text-[#6b7685] text-[14px]">— where should we send the starter pack?</span>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-end gap-3">
              <div className="flex-1">
                <label className="block text-[14px] font-semibold mb-1.5">Postcode</label>
                <input
                  className="w-full font-inherit text-[14px] border border-[#e7ebf1] rounded-[10px] px-3.5 py-3 focus:outline-none focus:ring-2 focus:ring-[#3b7df6]"
                  value={postcode}
                  onChange={(e) => {
                    setPostcode(e.target.value);
                    setAddressError("");
                    setAddressList([]);
                    setSelectedAddress("");
                    setSelectedAddressData(null);
                  }}
                  placeholder="e.g. OX25 4JT"
                />
              </div>
              <button
                className="bg-[#3b7df6] text-white rounded-[12px] px-5 py-[11px] font-semibold text-[14px] whitespace-nowrap border border-[#3b7df6] disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto flex items-center justify-center"
                disabled={!postcode || addressLoading}
                onClick={async () => {
                  setAddressLoading(true);
                  setAddressError("");
                  try {
                    const result = await getAddressesByPostcode(postcode);
                    if (result?.success) {
                      setAddressList(result.addresses || []);
                      setShowAddrSelect(true);
                    } else {
                      setAddressError(result?.message || "Could not find addresses for this postcode.");
                      setShowAddrSelect(false);
                    }
                  } catch (err) {
                    setAddressError(err?.message || "Could not find addresses for this postcode.");
                    setShowAddrSelect(false);
                  } finally {
                    setAddressLoading(false);
                  }
                }}
              >
                {addressLoading ? "Searching..." : "Find address"}
              </button>
            </div>
            {addressError && (
              <div className="mt-3 text-[14px] text-[#e53e3e] bg-[#fff5f5] border border-[#feb2b2] rounded-lg px-3.5 py-2.5 flex items-start gap-2">
                <AlertTriangle size={16} className="shrink-0 mt-0.5" />
                <span>{addressError}</span>
              </div>
            )}
            {showAddrSelect && addressOptions.length > 0 && (
              <div className="mt-3">
                <label className="block text-[14px] font-semibold mb-1.5">Select your address</label>
                <Select
                  styles={rsStyles(false)}
                  options={addressOptions}
                  value={addressOptions.find((o) => o.value === selectedAddress) || null}
                  placeholder="Select from the list"
                  onChange={(opt) => {
                    setSelectedAddress(opt?.value || "");
                    setSelectedAddressData(opt?.all || null);
                  }}
                />
                {selectedAddress && (
                  <div className="mt-3 text-[10.5px] text-[#0e7a4d] font-semibold bg-[#e7f8f0] rounded-lg px-3.5 py-2.5 flex items-center gap-2">
                    <Check size={14} />
                    Starter pack will ship here.
                    <span className="text-[#3b7df6] cursor-pointer underline ml-1.5" onClick={() => { setSelectedAddress(""); setSelectedAddressData(null); }}>Change</span>
                  </div>
                )}
              </div>
            )}
            {showAddrSelect && addressOptions.length === 0 && !addressLoading && (
              <div className="mt-3 text-[14px] text-[#8a6d00] bg-[#fffcf0] border border-[#ffd21f] rounded-lg px-3.5 py-2.5 flex items-center gap-2">
                <MapPin size={16} />
                No addresses found for this postcode. Try a different one.
              </div>
            )}
          </div>
        )}

        <div className="mb-6">
          <label className="block text-gray-700 font-regular text-[14px] mb-1">
            Discount Code
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
              className="flex-1 input mainShadow bg-white placeholder:text-[#494949] placeholder:font-medium rounded-[6px] px-4 py-2"
            />
            <button
              onClick={handleApplyDiscount}
              disabled={applyingDiscount || !discountCode.trim()}
              className="bg-[#042C89] text-white rounded-[10px] px-6 py-2 font-semibold hover:bg-blue-800 disabled:opacity-50"
            >
              {applyingDiscount ? "Applying..." : "Apply"}
            </button>
          </div>
        </div>

        <label className="flex items-center gap-2 mb-2 text-sm text-gray-700">
          <input
            type="checkbox"
            checked={agreeTerms}
            onChange={() => setAgreeTerms(!agreeTerms)}
          />
          <span className="underline">
            You agree to the{" "}
            <a href="#" className="font-bold">Terms Conditions</a> and{" "}
            <a href="#">Privacy Policy</a>.
          </span>
        </label>

        <label className="flex items-center gap-2 mb-6 text-sm text-gray-700">
          <input
            type="checkbox"
            checked={consentPhotos}
            onChange={() => setConsentPhotos(!consentPhotos)}
          />
          <span className="underline">
            You provide consent for your child to be included in photos.
          </span>
        </label>

        <div className="flex justify-end gap-3">
          <button className="text-[#042C89] hover:text-gray-900" type="button">
            Cancel
          </button>

          <button
            onClick={() => setStep(step - 1)}
            className="border border-[#042C89] rounded-[6px] px-4 py-2 text-[#042C89] font-semibold hover:bg-blue-50"
            type="button"
          >
            Back
          </button>

          <button
            onClick={() => setStep(step + 1)}
            disabled={!canSubmit}
            className={`bg-[#042C89] text-white rounded-[6px] px-4 py-2 font-semibold ${!canSubmit ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-800"}`}
            type="button"
          >
            Save and continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentStep;