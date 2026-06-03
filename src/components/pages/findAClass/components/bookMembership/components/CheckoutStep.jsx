import { useContext, useState } from "react";
import { BookingContext } from "../context/BookingContext";

const CheckoutStep = () => {
  const [nameOnCard, setNameOnCard] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [country, setCountry] = useState("United States");
  const [zip, setZip] = useState("");
  const { step, setStep } = useContext(BookingContext)

  // Simple validation (can be enhanced)
  const isFormValid =
    nameOnCard.trim() &&
    cardNumber.replace(/\s/g, "").length >= 12 &&
    expiry.trim() &&
    cvc.trim() &&
    country.trim() &&
    zip.trim();

  return (
    <div className="">


      <div className="flex gap-6">
        {/* Summary */}
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

        {/* Checkout Form */}
        <div className="flex-1  flex flex-col">
          <h2 className="text-xl font-semibold pb-4">Checkout</h2>
          <p className="text-gray-600 mb-12 text-sm">
            Fill out your card details below to pay for the Joining Fee and
            Pro-Rata lessons
          </p>

          <label className="block mb-4">
            <span className="block text-gray-700 font-regular text-[14px]">
              Name on card
            </span>
            <input
              type="text"
              value={nameOnCard}
              onChange={(e) => setNameOnCard(e.target.value)}
              placeholder="Enter Name on card"
              className="input w-full mt-1 mainShadow bg-white placeholder:text-[#494949] placeholder:font-medium rounded-[6px] px-4 py-2"
            />
          </label>

          <label className="block mb-4">
            <span className="block text-gray-700 font-regular text-[14px]">
              Card information
            </span>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="1234 1234 1234 1234"
              maxLength={19}
              className="input w-full mt-1 mainShadow bg-white placeholder:text-[#494949] placeholder:font-medium rounded-[6px] px-4 py-2"
            />
          </label>

          <div className="flex gap-4 mb-4">
            <label className="flex-1">
              <span className="block text-gray-700 font-regular text-[14px]">
                Expiration date
              </span>
              <input
                type="text"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                placeholder="MM / YY"
                maxLength={5}
                className="input w-full mt-1 mainShadow bg-white placeholder:text-[#494949] placeholder:font-medium rounded-[6px] px-4 py-2"
              />
            </label>

            <label className="flex-1">
              <span className="block text-gray-700 font-regular text-[14px]">CVC</span>
              <input
                type="text"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                placeholder="CVC"
                maxLength={4}
                className="input w-full mt-1 mainShadow bg-white placeholder:text-[#494949] placeholder:font-medium rounded-[6px] px-4 py-2"
              />
            </label>
          </div>

          <div className="flex gap-4 mb-6">
            <label className="flex-1">
              <span className="block text-gray-700 font-regular text-[14px]">
                Country or region
              </span>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="input w-full mt-1 mainShadow bg-white placeholder:text-[#494949] placeholder:font-medium rounded-[6px] px-4 py-2"
              >
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Canada</option>
                <option>Australia</option>
                {/* Add more countries as needed */}
              </select>
            </label>

            <label className="flex-1">
              <span className="block text-gray-700 font-regular text-[14px]">Zip</span>
              <input
                type="text"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                placeholder="Enter zip code"
                className="input w-full mt-1 mainShadow bg-white placeholder:text-[#494949] placeholder:font-medium rounded-[6px] px-4 py-2"
              />
            </label>
          </div>

          <p className="font-semibold text-lg">
            Total to pay now{" "}
            <span className="float-right text-blue-900">£42.89</span>
          </p>

          <button
            disabled={!isFormValid}
            onClick={() => setStep(step + 1)}
            className={`mt-6 px-6 py-2 rounded bg-blue-900 text-white font-semibold ${!isFormValid ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-800"
              }`}
            type="button"
          >
            Complete Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutStep;
