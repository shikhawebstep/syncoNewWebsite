import { useContext, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { BookingContext } from "../context/BookingContext";

export default function StepChildrenCount({ classDetails }) {
  const {
    childrenCount,
    setChildrenCount,
    showPlans,
    setShowPlans,
    selectedPlan,
    setSelectedPlan,
    showBreakdown,
    setShowBreakdown,
    step,
    setStep, trialDate
  } = useContext(BookingContext);

  const isValid = childrenCount >= 1 && childrenCount <= 4 && selectedPlan;

  // Render Plan Dynamic values
  const paymentGroups = classDetails?.venue?.paymentGroups || [];
  const allPlans = paymentGroups.flatMap((group) =>
    (group.paymentPlans || []).map((p) => ({ ...p, groupName: group.name }))
  );

  // Filter plans matching selected student count
  const filteredPlans = allPlans.filter((p) => p.students === childrenCount);

  // 🔥 Auto-select first plan when childrenCount changes or if none selected
  useEffect(() => {
    // If current selected plan is NOT valid for new childrenCount → reset it
    if (
      selectedPlan &&
      !filteredPlans.some((p) => p.id === selectedPlan.id)
    ) {
      setSelectedPlan(null);
    }
  }, [childrenCount, filteredPlans]);

  const parseCurrency = (val) => {
    if (typeof val === "number") return val;
    if (typeof val !== "string") return 0;
    return parseFloat(val.replace(/[^0-9.]/g, '')) || 0;
  };

  console.log('selectedPlan', selectedPlan)

  // The breakdown now always uses selectedPlan
  const planInfo = selectedPlan;
  const planTitle = planInfo?.title || "Membership Plan";
  const planPrice = planInfo?.price || "£0.00";

  const isStarterPack = classDetails?.venue?.starterPack === true;
  const starterPackItem = classDetails?.starterPack?.[0];
  const starterPackPrice = starterPackItem?.price || 0;

  // Determine joining fee
  const joiningFeeNum = isStarterPack
    ? (starterPackPrice * (childrenCount || 1))
    : (planInfo?.joiningFee ? parseCurrency(planInfo.joiningFee) : 35.00);

  const joiningFeeStr = isStarterPack
    ? `£${joiningFeeNum.toFixed(2)}`
    : (planInfo?.joiningFee || `£${joiningFeeNum.toFixed(2)}`);


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

  const nextMonthFirst = trialDate ? new Date(trialDate.getFullYear(), trialDate.getMonth() + 1, 1) : null;
  const nextMonthStr = formatDate(nextMonthFirst);

  const proRataLessonsCountRaw = Array.from(sessionDates)
    .filter(d => d >= selectedDateStr && d < nextMonthStr)
    .length;

  const monthlyPriceNum = parseCurrency(selectedPlan?.price);
  const totalLessonsPerYear = 40;
  const perSessionPrice = Number(((monthlyPriceNum * selectedPlan?.duration) / totalLessonsPerYear).toFixed(2));
  const proRataAmountRaw = proRataLessonsCountRaw * perSessionPrice;

  const totalAvailableSessions = monthSessionDates.length;
  const isFirstSessionSelected = monthSessionDates.length > 0 && selectedDateStr === monthSessionDates[0];
  const showProRata = totalAvailableSessions >= 3 && !isFirstSessionSelected;
  console.log('totalAvailableSessions', totalAvailableSessions)
  const proRataLessonsCount = showProRata ? proRataLessonsCountRaw : 0;
  const proRataAmount = showProRata ? proRataAmountRaw : 0;

  return (
    <div className="text-left poppins max-w-[696px] m-auto md:pt-0 pt-5">
      {/* Heading */}
      <p className="md:text-[18px] text-center font-semibold py-5 text-[#282829]">
        How many children would <br className="md:hidden" /> you like to book?
      </p>

      <p className="text-sm text-[#282829] mb-1 pt-5">
        Please select the number of children you’d like to book
      </p>

      {/* Children Count */}
      <input
        type="number"
        value={childrenCount ?? ""}
        onChange={(e) => {
          const val = e.target.value;
          if (val === "") {
            setChildrenCount("");
            return;
          }
          const num = Number(val);
          if (num < 1 || num > 4) return;
          setChildrenCount(num);
        }}
        className=" w-full px-4 mx-auto block text-start py-3 border border-[#E2E1E5] bg-white rounded-[12px] text-[#494949] font-normal"
      />

      {/* Plan label */}
      <p className="text-sm text-[#282829] mt-6 mb-1">
        Which membership plan would you like to book?
      </p>

      {/* Choose Plan Button */}
      <button
        type="button"
        onClick={() => setShowPlans(!showPlans)}
        className=" flex justify-between w-full mx-auto block text-left px-4 py-3 border border-[#E2E1E5] bg-white rounded-[12px] text-[#494949] font-normal"
      >
        {selectedPlan ? `${selectedPlan.title}: £${selectedPlan.price}` : "Choose plan"}
        {showPlans ? <ChevronUp /> : <ChevronDown />}
      </button>

      {/* PLAN PANEL */}
      {showPlans && (
        <div className=" w-full mx-auto mt-3 rounded-xl border border-[#E2E1E5] bg-white text-left overflow-hidden">
          {/* Header */}
          <div className="bg-[#DFF3FF] px-4 py-2 text-[#00A6E3] font-semibold text-sm">
            {childrenCount || 1} Student{childrenCount > 1 ? "s" : ""}
          </div>

          {/* Plans */}
          {filteredPlans.length === 0 ? (
            <div className="px-4 py-3 text-gray-500 italic">No plans available for this student count.</div>
          ) : (
            filteredPlans.map((plan) => (
              <div
                key={plan.id || plan.title}
                onClick={() => {
                  setSelectedPlan(plan);
                  setShowPlans(false);
                }}
                className="px-4 py-3 cursor-pointer hover:bg-gray-50 border-b last:border-0 border-[#E2E1E5]"
              >
                <span className="font-semibold">{plan.title}:</span>{" "}
                <span className="text-gray-600"> £{plan.price}/month</span>
              </div>
            ))
          )}
        </div>
      )}

      {/* PAYMENT BREAKDOWN */}
      <div
        className={` w-full mx-auto mt-6 rounded-xl border 
          ${selectedPlan && planInfo
            ? "bg-white border-[#E2E1E5]"
            : "bg-gray-100 border-gray-200 opacity-50 pointer-events-none"
          }
        `}
      >
        {/* Header */}
        <button
          type="button"
          onClick={() => setShowBreakdown((prev) => !prev)}
          className="w-full flex justify-center gap-3 items-center px-4 py-3 bg-[#0DD180] text-white rounded-xl font-semibold text-sm"
        >
          Payment Breakdown
          <span>{showBreakdown ? <ChevronUp /> : <ChevronDown />}</span>
        </button>

        {/* Breakdown Content */}
        {showBreakdown && selectedPlan && planInfo && (
          <div className="p-4 text-sm text-[#282829] space-y-2">
            <div className="flex justify-between">
              <span>Membership Plan</span>
              <span className="font-semibold">{planTitle}</span>
            </div>

            <div className="flex justify-between">
              <span>Monthly Subscription Fee</span>
              <span className="font-semibold">{planPrice}</span>
            </div>

            <div className="flex justify-between">
              <span>{isStarterPack ? (starterPackItem?.title || "Starter Pack") : "One-off Joining Fee"}</span>
              <span className="font-semibold">{joiningFeeStr}</span>
            </div>

            {showProRata && (
              <>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-1">
                    Number of lessons pro-rated
                  </span>
                  <span className="float-right">{proRataLessonsCount}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-1 relative group">
                    Cost of pro-rated lessons
                    <img
                      src="/assets/Icon.png"
                      className="w-4 cursor-pointer"
                      alt="Info"
                    />

                    {/* Tooltip */}
                    <div className="absolute left-0 top-6 hidden group-hover:block z-20 md:w-[360px] w-[300px]">
                      <div className="bg-[#042C89] text-white p-4 rounded-xl text-left text-sm relative">
                        <div className="flex gap-4 items-start">
                          <img src="/assets/greeninfo.png" className="w-5" alt="" />
                          <div>
                            <p className="font-bold mb-1 text-[#0DD180] ">
                              Pro Rata Information
                            </p>
                            <p>
                              The pro-rata cost is the amount due to cover the number
                              of lessons between your selected start date and your
                              first monthly payment.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </span>

                  <div className="text-right">
                    <p className="font-semibold">
                      £{proRataAmount.toFixed(2)}
                    </p>
                  </div>
                </div>
              </>
            )}

            <div className="flex justify-between items-center">
              <span className="flex items-center gap-1 relative group">
                Billing day
                <img
                  src="/assets/Icon.png"
                  className="w-4 cursor-pointer"
                  alt="Info"
                />

                {/* Tooltip */}
                <div className="absolute left-0 top-6 hidden group-hover:block z-20 md:w-[360px] w-[300px]">
                  <div className="bg-[#042C89] text-white p-4 rounded-xl text-left text-sm relative">
                    <div className="flex gap-4 items-start">
                      <img src="/assets/greeninfo.png" className="w-5" alt="" />
                      <div>
                        <p className="font-bold mb-1 text-[#0DD180] "> Billing Day</p>
                        <p>The day your regular payments will be collected each month.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </span>

              <span className="font-semibold">1st of each month</span>
            </div>
          </div>
        )}
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3 mt-10">
        <button
          onClick={() => setStep(step - 1)}
          className="px-4 py-2 text-[#042C89] rounded-xl border border-[#042C89] font-semibold hover:bg-gray-100"
        >
          Back
        </button>

        <button
          onClick={() => setStep(step + 1)}
          disabled={!isValid}
          className={`px-5 py-2 rounded-xl font-semibold text-white
            ${isValid
              ? "bg-[#042C89]"
              : "bg-[#042C89] opacity-40 cursor-not-allowed"
            }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
