export default function StepChildrenCount({
  value,
  setValue,
  onNext,
  onBack,
}) {
  const isValid = value >= 1 && value <= 3;

  return (
    <div className="text-center poppins md:pt-0 pt-5">
      <p className="md:text-[18px] font-semibold md:my-13 my-5  text-[#282829]">
        How many children would <br className="md:hidden" /> you like to book?
      </p>

      <p className="text-sm text-[#282829] mb-2 md:block hidden">
        Please select the number of children you'd like to book
      </p>

      <p className="text-sm text-[#282829] mb-2 md:hidden block">
        Select the number of children you’d like to book
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
          if (num < 1 || num > 3) return;

          setValue(num);
        }}
        className="md:w-[676px] w-full mx-auto block text-center py-3 border border-[#E2E1E5] bg-white rounded-[12px] text-[#717073]"
      />

      {/* Buttons */}
      <div className="flex justify-center gap-3 mt-10">
        <button
          onClick={onBack}
          className="px-7 py-3 text-[#042C89] rounded-xl border border-[#042C89] font-semibold hover:bg-gray-100"
        >
          Back
        </button>

        <button
          onClick={onNext}
          disabled={!isValid}
          className={`px-7 py-3 rounded-xl font-semibold text-white
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
