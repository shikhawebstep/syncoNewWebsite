export default function StepChildrenCount({
  value,
  setValue,
  onNext,
}) {
  const isValid = value >= 1 && value <= 4;

  return (
    <div className="text-center poppins md:pt-0 pt-5">
      <p className="md:text-[18px] font-semibold md:my-13 my-5  text-[#282829]">
        How many children would <br className="md:hidden" /> you like to book?
      </p>

      <p className="text-sm text-[#282829] mb-2 md:block hidden">
        Please select the number of children you’d like to add to the waiting list
      </p>

      <p className="text-sm text-[#282829] mb-2 md:hidden block">
        Please select the number of children you’d like to add to the waiting list
      </p>

      <input
        type="number"
        value={value ?? ""}
        onChange={(e) => {
          const val = e.target.value;

          // allow clearing input
          if (val === "") {
            setValue("");
            return;
          }

          const num = Number(val);

          // block invalid range
          if (num < 1 || num > 4) return;

          setValue(num);
        }}
        className="md:w-[676px] w-full mx-auto block text-center py-3 border border-[#E2E1E5] bg-white rounded-[12px] text-[#717073]"
      />


      {/* Buttons */}
      <div className="flex justify-center gap-3 mt-10">
        <button
          disabled
          className="px-6 py-3 text-[14px] rounded-[6px] bg-[#E1E2E6] text-white font-bold cursor-not-allowed"
        >
          Back
        </button>

        <button
          onClick={onNext}
          disabled={!isValid}
          className={`md:px-7 px-4 py-2 md:py-3 rounded-xl font-semibold text-white
            ${isValid
              ? "bg-[#042C89]"
              : "bg-[#042C89] opacity-40 cursor-not-allowed"
            }
          `}
        >
          Next
        </button>
      </div>
    </div>
  );
}
