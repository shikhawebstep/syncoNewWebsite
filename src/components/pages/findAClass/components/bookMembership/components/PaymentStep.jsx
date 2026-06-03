import { useContext, useState } from "react";
import { BookingContext } from "../context/BookingContext";

const PaymentStep = () => {
  const { step, setStep } = useContext(BookingContext)
  const [accountHolder, setAccountHolder] = useState("");
  const [sortCode, setSortCode] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [consentPhotos, setConsentPhotos] = useState(true);

  // Simple validation example
  const isSortCodeValid = sortCode.replace(/\D/g, "").length === 8;
  const isAccountNumberValid = accountNumber.replace(/\D/g, "").length === 8;

  const canSubmit =
    accountHolder.trim() &&
    isSortCodeValid &&
    isAccountNumberValid &&
    agreeTerms &&
    consentPhotos;

  return (
    <div className="flex gap-10 poppins">
      {/* Left summary box */}
      <div className="bg-[#F1F4FC] p-6 rounded-xl w-96  text-sm text-gray-800">
        <p className="text-[20px] text-[#042C89] font-bold mb-4">Summary</p>

        <div className="mb-4 grid gap-1">
          <p>
            <span className="font-semibold text-[#042C89] text-[16px]">12 Month Plan</span>
            <span className="float-right font-semibold">£45.00</span>
          </p>
          <p> <span className="text-[14px] font-medium text-[#34353B]">1 Student</span></p>
          <p> <span className="text-[14px] font-medium text-[#34353B]">Start Date:</span> 17th Aug 2023</p>
          <p><span className="text-[14px] font-medium text-[#34353B]">First monthly payment:</span> 1st Sep 2023</p>
        </div>

        <hr className="my-4 border-gray-300" />

        <div className="mb-4">
          <p>
            <span className="font-semibold text-[#042C89] text-[16px]">Samba Soccer Schools</span>
            <span className="float-right">£35.00</span>
          </p>
          <p>Joining Fee</p>
        </div>

        <hr className="my-4 border-gray-300" />

        <div className="mb-4">
          <p>
            <span className="font-semibold font-semibold text-[#042C89] text-[16px]">Pro-rata lessons</span>
          </p>
          <p>Number of lessons <span className="float-right">2</span></p>
          <p>Fee <span className="float-right">£45.00</span></p>
        </div>

        <hr className="my-4 border-gray-300" />

        <p className="font-bold text-lg font-semibold text-[#042C89] text-[16px]">
          Total to pay now <span className="float-right text-[22px] font-bold">£42.89</span>
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
          <span className="block text-gray-700 font-regular text-[14px] mb-1">Account Holder Name</span>
          <input
            type="text"
            value={accountHolder}
            onChange={(e) => setAccountHolder(e.target.value)}
            className="input w-full mt-1 mainShadow bg-white placeholder:text-[#494949] placeholder:font-medium rounded-[6px] px-4 py-3"
          />
        </label>

        <div className="flex gap-4 mb-4">
          <label className="flex-1">
            <span className="block text-gray-700 font-regular text-[14px] mb-1">Sort Code</span>
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
            <span className="block text-gray-700 font-regular text-[14px] mb-1">Account Number</span>
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
