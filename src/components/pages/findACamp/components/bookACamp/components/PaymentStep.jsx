import { useContext, useState } from "react";
import { BookingContext } from "../context/BookingContext";
import { useToast, Toast } from "../../../../Common/Toast";

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
    setDiscount
  } = useContext(BookingContext);
  
  const { accountHolder, sortCode, accountNumber } = paymentDetails;
  
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [consentPhotos, setConsentPhotos] = useState(true);
  const [discountCode, setDiscountCode] = useState(discount?.code || "");
  const [applyingDiscount, setApplyingDiscount] = useState(false);
  const { toasts, addToast, removeToast } = useToast();

  const setAccountHolder = (val) => setPaymentDetails(prev => ({ ...prev, accountHolder: val }));
  const setSortCode = (val) => setPaymentDetails(prev => ({ ...prev, sortCode: val }));
  const setAccountNumber = (val) => setPaymentDetails(prev => ({ ...prev, accountNumber: val }));

  // Simple validation example
  const isSortCodeValid = sortCode.replace(/\D/g, "").length === 8;
  const isAccountNumberValid = accountNumber.replace(/\D/g, "").length === 8;

  const canSubmit =
    accountHolder.trim() &&
    isSortCodeValid &&
    isAccountNumberValid &&
    agreeTerms &&
    consentPhotos;

  // Use selectedPlan from context if available, otherwise fallback (safety)
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

  const joiningFee = isStarterPack
    ? (starterPackPrice * (childrenCount || 1))
    : (plan.joiningFee ? parseCurrency(plan.joiningFee) : 35.00);

  // Format joiningFee string
  const joiningFeeStr = isStarterPack
    ? `£${joiningFee.toFixed(2)}`
    : (plan.joiningFee || `£${joiningFee.toFixed(2)}`);

  // Discount Logic
  const discountAmount = discount?.amount || 0;

  // Default initial payment total
  const initialPayment = parseCurrency(planPrice) + joiningFee - discountAmount;

  // Start Date
  const startDate = trialDate ? trialDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : "TBD";
  const firstPaymentDate = "1st of next month"; // Can be dynamic if API provides it

  const handleApplyDiscount = async () => {
    if (!discountCode.trim()) return;
    setApplyingDiscount(true);
    try {
      // Use the same endpoint as findAClass if that's the standard, 
      // but keeping the current one if it's camp-specific.
      // However, making the payload more comprehensive.
      const response = await fetch("https://api.grabbite.com/api/open/discount/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          code: discountCode, 
          planId: plan.id,
          starterPack: joiningFee // Including joiningFee as starterPack might be expected by the API
        })
      });
      const result = await response.json();
      
      if (response.ok && (result.success || result.data)) {
        const data = result.data || result;
        setDiscount({ 
          code: discountCode, 
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

  return (
    <div className="flex gap-10 poppins">
      <Toast toasts={toasts} removeToast={removeToast} />
      {/* Left summary box */}
      <div className="bg-[#F1F4FC] p-6 rounded-xl w-[450px] text-sm text-gray-800">
        <p className="text-[20px] text-[#042C89] font-bold mb-4">
          {isStarterPack ? "Payment Breakdown" : "Summary"}
        </p>

        <div className="mb-4 grid gap-1">
          <p>
            <span className="font-semibold text-[#042C89] text-[16px]">{planTitle}</span>
            <span className="float-right font-semibold">{planPrice}</span>
          </p>
          <p> <span className="text-[14px] font-medium text-[#34353B]">{childrenCount} Student{childrenCount > 1 ? "s" : ""}</span></p>
          <p> <span className="text-[14px] font-medium text-[#34353B]">Start Date:</span> {startDate}</p>
          <p><span className="text-[14px] font-medium text-[#34353B]">First monthly payment:</span> {firstPaymentDate}</p>
        </div>

        <hr className="my-4 border-gray-300" />

        <div className="mb-4">
          <p>
            <span className="font-semibold text-[#042C89] text-[16px]">{classDetails?.venue?.name || "Venue"}</span>
            <span className="float-right">{joiningFeeStr}</span>
          </p>
          <p>{isStarterPack ? (starterPackItem?.title || "Starter Pack Price") : "Joining Fee"}</p>
        </div>

        <hr className="my-4 border-gray-300" />

        <div className="mb-4">
          <p>
            <span className="font-semibold font-semibold text-[#042C89] text-[16px]">Pro-rata lessons</span>
          </p>
          <p>Number of lessons <span className="float-right">0</span></p>
          <p>Fee <span className="float-right">£0.00</span></p>
        </div>

        {discountAmount > 0 && (
          <>
            <hr className="my-4 border-gray-300" />
            <div className="mb-4 text-green-600 font-semibold">
              <p>
                Discount Applied ({discount.code})
                <span className="float-right">-£{discountAmount.toFixed(2)}</span>
              </p>
            </div>
          </>
        )}

        <hr className="my-4 border-gray-300" />

        <p className="font-bold text-lg font-semibold text-[#042C89] text-[16px]">
          Total to pay now <span className="float-right text-[22px] font-bold">£{initialPayment.toFixed(2)}</span>
        </p>
      </div>

      {/* Right form */}
      <div className="flex-1 rounded-xl  flex flex-col">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-xl font-semibold">Set up your direct debit</h2>
          {/* Direct Debit Logo - placeholder */}
          <img
            src="/assets/debit.png"
            alt="Direct Debit"
            className="h-8"
          />
        </div>

        <p className="text-[#797A88] text-[14px] mb-6 text-sm">
          Your regular Direct Debit payments will be collected <br /> from this account starting from the 1st of next month.
        </p>

        <label className="block mb-4">
          <span className="block text-gray-700 font-regular text-[14px] mb-1">Account Holder Name<span className="text-red-500 ml-0.5">*</span></span>
          <input
            type="text"
            value={accountHolder}
            onChange={(e) => setAccountHolder(e.target.value)}
            className="input w-full mt-1 mainShadow bg-white placeholder:text-[#494949] placeholder:font-medium rounded-[6px] px-4 py-3"
          />
        </label>

        <div className="flex gap-4 mb-4">
          <label className="flex-1">
            <span className="block text-gray-700 font-regular text-[14px] mb-1">Sort Code<span className="text-red-500 ml-0.5">*</span></span>
            <input
              type="text"
              maxLength={8}
              value={sortCode}
              onChange={(e) => setSortCode(e.target.value)}
              className={`input w-full mt-1 mainShadow bg-white placeholder:text-[#494949] placeholder:font-medium rounded-[6px] px-4 py-3 ${!isSortCodeValid && sortCode ? "border-red-500" : ""
                }`}
            />
            <span className="text-[11px] text-[#797A88]">Must be 8 digits long</span>
          </label>
          <label className="flex-1">
            <span className="block text-gray-700 font-regular text-[14px] mb-1">Account Number<span className="text-red-500 ml-0.5">*</span></span>
            <input
              type="text"
              maxLength={8}
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              className={`input w-full mt-1 mainShadow bg-white placeholder:text-[#494949] placeholder:font-medium rounded-[6px] px-4 py-3 ${!isAccountNumberValid && accountNumber ? "border-red-500" : ""
                }`}
            />
            <span className="text-[11px] text-[#797A88]">Must be 8 digits long</span>
          </label>
        </div>

        {/* Discount Section */}
        <div className="mb-6">
          <label className="block text-gray-700 font-regular text-[14px] mb-1">Discount Code</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
              placeholder="Enter discount code"
              className="flex-1 input mainShadow bg-white placeholder:text-[#494949] placeholder:font-medium rounded-[6px] px-4 py-3"
            />
            <button
              onClick={handleApplyDiscount}
              disabled={applyingDiscount || !discountCode.trim()}
              className="bg-[#042C89] text-white rounded-[6px] px-6 py-2 font-semibold hover:bg-blue-800 disabled:opacity-50 transition-colors"
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
            You agree to the <a href="#" className="font-bold ">Terms Conditions</a> and <a href="#" className=" ">Privacy Policy</a>.
          </span>
        </label>

        <label className="flex items-center gap-2 mb-6 text-sm text-gray-700">
          <input
            type="checkbox"
            checked={consentPhotos}
            onChange={() => setConsentPhotos(!consentPhotos)}
          />
          <span className="underline">You provide consent for your child to be included in photos.</span>
        </label>

        <div className="flex justify-end gap-3">
          <button
            // onClick={onCancel}
            className="text-[#042C89]   hover:text-gray-900"
            type="button"
          >
            Cancel
          </button>

          <button
            onClick={() => {
              setStep(step - 1)
            }}
            className="border border-[#042C89] rounded px-6 py-2 text-[#042C89] font-semibold hover:bg-blue-50"
            type="button"
          >
            Back
          </button>

          <button
            onClick={() => {
              setStep(step + 1)
            }}
            disabled={!canSubmit}
            className={`bg-[#042C89] text-white rounded px-6 py-2 font-semibold ${!canSubmit ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-800"
              }`}
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