import { useContext } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { BookingContext } from "../context/BookingContext";

export default function StepChildrenCount() {
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
    setStep,
  } = useContext(BookingContext);

  const isValid = childrenCount >= 1 && childrenCount <= 3 && selectedPlan;

  return (
    <div className="text-center poppins md:pt-0 pt-5">
      {/* Heading */}
      <p className="md:text-[18px] font-semibold my-5 text-[#282829]">
        How many children would <br className="md:hidden" /> you like to book?
      </p>

      <p className="text-sm text-[#282829] mb-4">
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
          if (num < 1 || num > 3) return;
          setChildrenCount(num);
        }}
        className="md:w-[676px] w-full mx-auto block text-center py-3 border border-[#E2E1E5] bg-white rounded-[12px] text-[#717073]"
      />

      {/* Plan label */}
      <p className="text-sm text-[#282829] mt-6 mb-2">
        Which membership plan would you like to book?
      </p>

      {/* Choose Plan Button */}
      <button
        type="button"
        onClick={() => setShowPlans(!showPlans)}
        className="md:w-[676px] flex justify-between w-full mx-auto block text-left px-4 py-3 border border-[#E2E1E5] bg-white rounded-[12px] text-[#717073]"
      >
        {selectedPlan || "Choose plan"}
        {showPlans ? <ChevronUp /> : <ChevronDown />}
      </button>

      {/* PLAN PANEL */}
      {showPlans && (
        <div className="md:w-[676px] w-full mx-auto mt-3 rounded-xl border border-[#E2E1E5] bg-white text-left overflow-hidden">
          {/* Header */}
          <div className="bg-[#DFF3FF] px-4 py-2 text-[#00A6E3] font-semibold text-sm">
            {childrenCount || 1} Student
          </div>

          {/* Plans */}
          {[
            { name: "12 Month Plan", price: "£39.99/month" },
            { name: "6 Month Plan", price: "£47.99/month" },
            { name: "Flexi Plan", price: "£50.00/month" },
          ].map((plan) => (
            <div
              key={plan.name}
              onClick={() => {
                setSelectedPlan(`${plan.name}: ${plan.price}`);
                setShowPlans(false);
              }}
              className="px-4 py-3 cursor-pointer hover:bg-gray-50"
            >
              <span className="font-semibold">{plan.name}:</span>{" "}
              <span className="text-gray-600">{plan.price}</span>
            </div>
          ))}
        </div>
      )}

      {/* PAYMENT BREAKDOWN */}
      <div
        className={`md:w-[676px] w-full mx-auto mt-6 rounded-xl border 
          ${
            selectedPlan
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
        {showBreakdown && selectedPlan && (
          <div className="p-4 text-sm text-[#282829] space-y-2">
            <div className="flex justify-between">
              <span>Membership Plan</span>
              <span className="font-semibold">12 Months</span>
            </div>

            <div className="flex justify-between">
              <span>Monthly Subscription Fee</span>
              <span className="font-semibold">£39.99 p/m</span>
            </div>

            <div className="flex justify-between">
              <span>One-off Joining Fee</span>
              <span className="font-semibold">£35.00</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="flex items-center gap-1">
                Number of lessons pro-rated
              </span>
              <span className="font-semibold">2</span>
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

              <span className="font-semibold">£23.66</span>
            </div>

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
      <div className="flex justify-center gap-3 mt-10">
        <button
          onClick={() => setStep(step - 1)}
          className="px-7 py-3 text-[#042C89] rounded-xl border border-[#042C89] font-semibold hover:bg-gray-100"
        >
          Back
        </button>

        <button
          onClick={() => setStep(step + 1)}
          disabled={!isValid}
          className={`px-7 py-3 rounded-xl font-semibold text-white
            ${
              isValid
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
