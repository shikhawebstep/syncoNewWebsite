import { useContext, useEffect, useState } from "react";
import { BookingContext } from "../context/BookingContext";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
export default function StepConfirm() {

  const { parents, venue, students, sessionInfo, step, setStep } = useContext(BookingContext);

  const [showCancelModal, setShowCancelModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="max-w-3xl mx-auto text-center mt-16">
      {/* Heading */}
      <p className="text-[18px] text-[18px] text-[#282829] font-semibold mb-2">
        Thanks, your all set!
      </p>
      <p className="text-[#5F5F6D] text-[14px] mb-7 mt-1">
        Please see below for a summary of your booking      </p>
      {/* Card */}
      <div className="bg-white max-w-[672px] m-auto rounded-2xl border border-[#E2E1E5] p-3">
        {/* Venue Bar */}
        <div className="bg-[#00A6E3] text-white rounded-xl px-6 py-4 flex items-center justify-center gap-3 mb-3">
          <img src="/assets/location-01.png" className="w-5 h-5" />
          <p className="font-semibold text-left">
            Venue: <span className="font-normal">{venue}</span>
          </p>
        </div>

        {/* Session Info */}
        <div className="bg-[#F6F6F7] border border-[#FCF9F6] rounded-xl md:p-6 p-3 mb-1">
          <div className="grid grid-cols-3 items-center mb-4 max-w-[370px] m-auto">
            <div className="text-left ps-4">
              <p className="font-semibold">{sessionInfo?.area}</p>
            </div>

            <div className="border-x-4 border-white">
              <p className="font-semibold">{sessionInfo?.day}</p>
              <p className="text-sm text-gray-500">{sessionInfo?.type}</p>
            </div>

            <div className="text-left ps-8">
              <p className="font-semibold">Date</p>
              <p className="text-sm text-gray-500">{sessionInfo?.date}</p>
            </div>
          </div>

          <div className="border-t-4 border-[#FDFDFF]  pt-4 space-y-3">
            <div className="md:max-w-[88%] m-auto">
              {students.length > 0 ? (
                students.map((student, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-3 items-center justify-between text-sm text-gray-700 gap-4"
                  >
                    <div className="md:flex items-center text-center md:text-left justify-center gap-2 truncate">
                      <img src="/assets/User.png" alt="user" className="w-4 h-4 m-auto md:m-0 mb-2 md:mb-0 text-sky-500" />
                      <span className="truncate">
                        {student?.firstName || student?.name
                          ? `${student?.firstName ?? student?.name} ${student?.lastName ?? ""}`.trim()
                          : "Unnamed Student"}
                      </span>
                    </div>

                    <div className="md:flex items-center text-center md:text-left justify-center gap-2 truncate">
                      <img src="/assets/content.png" alt="content" className="w-4 h-4 m-auto md:m-0 mb-2 md:mb-0 text-sky-500" />
                      <span className="truncate">{sessionInfo?.ageGroup}</span>
                    </div>

                    <div className="md:flex items-center text-center md:text-left justify-center gap-2 truncate">
                      <img src="/assets/clock.png" alt="clock" className="w-4 h-4 m-auto md:m-0 mb-2 md:mb-0 text-sky-500" />
                      <span className="text-left truncate">{sessionInfo?.time}</span>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500">No students added yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-center items-center gap-3 mt-8">
        <button
          type="button"
          onClick={() => setShowCancelModal(true)}
          className="text-[#FF6C6C] font-semibold text-[12px] hover:underline"
        >
          Cancel
        </button>

        <button
          type="button"
          onClick={setStep - 1}
          className="px-4 py-2 ms-3 rounded-lg font-semibold border border-[#042C89] text-[#042C89] text-[12px] hover:bg-blue-50"
        >
          Back
        </button>

        <button
          type="button"
          onClick={() => {
            setShowSuccessModal(true);
          }}
          className="px-4 py-2 rounded-lg bg-[#042C89] font-bold text-[14px] text-white hover:bg-blue-900"
        >
          Book a Membership
        </button>
      </div>

      <div
        className=" bg-cover bg-center p-[70px]  flex items-center relative z-50"
        style={{ backgroundImage: `url('/assets/Sessioncard.png')` }}
      >

        <div className="text-left ps-6">
          <h1 className="text-[48px] leading-normal recline blue-text">
            Order your
            <span className="light-blue-text block leading-[30px]"> Uniform today</span>

          </h1>
          <p className="text-[14px] mt-4 blue-text font-semibold">Uniform is compulsory. Use your discount code <br /> below and get 50% off.</p>
          <div className="flex gap-3 mt-4">
            <button className="py-1.5 px-8 text-[24px] rounded-full bg-white recline uppercase text-[#00A6E3]  border-dotted border border-[#00A6E3]">
              SAMBA10
            </button><button className="bg-[#00A6E3] text-white rounded-3xl px-6 py-3 poppins">Buy Now</button>
          </div>
        </div>

      </div>
      {showCancelModal && (
        <div className="fixed inset-0 z-50 px-6 flex items-center justify-center bg-black/40">
          <div className="bg-white w-[540px] rounded-[30px] p-6 pb-14 relative">

            {/* Close Icon */}
            <div className="flex justify-end mb-4 border-b border-[#E2E1E5] pb-4">
              <button
                onClick={() => setShowCancelModal(false)}
                className="text-black font-bold hover:text-black"
              >
                <X size={22} />
              </button>
            </div>


            {/* Title */}
            <h2 className="md:text-[22px] text-[20px] font-semibold text-[#282829] mb-2">
              Cancel Book a Free Trial
            </h2>

            <p className="text-[#5F5F6D] md:text-[18px] font-medium mt-4  mb-8">
              Are you sure you want to cancel this booking?
            </p>

            {/* Actions */}
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowCancelModal(false)}
                className="px-6 py-2 rounded-lg border border-[#5F5F6D] text-[#5F5F6D] font-semibold text-[14px]"
              >
                No, go back
              </button>

              <button
                onClick={onCancel}
                className="px-6 py-2 rounded-lg bg-[#FF6C6C] text-white font-semibold text-[14px]"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {showSuccessModal && (
        <div className="fixed p-6 inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white w-[500px] rounded-3xl p-6 text-center relative">

            {/* Trophy Image */}
            <img
              src="/assets/win.png" // replace with your actual trophy asset
              alt="success"
              className=" w-[200px] mx-auto mb-6"
            />

            {/* Heading */}
            <h2 className="md:text-[32px] text-[24px] font-bold -tracking-[0px] text-[#16C784] mb-2">
              Congratulations {parents.length > 0 ? parents[0]?.parentFirstName + " " + parents[0]?.parentLastName : ""}!
            </h2>

            {/* Subtext */}
            <p className="text-[#042C89] font-semibold text-[16px] mt-4 mb-1">
              Your Free Trial Booking has been successful
            </p>

            <p className="text-[#5F5F6D] text-[14px] mb-8 -tracking-[0.1px]">
              We'll send you an email confirming your free trial session.
            </p>

            {/* Actions */}
            <div className="grid grid-cols-2 justify-center gap-4">
              <button
                onClick={() => {
                  setShowSuccessModal(false);
                  onCancel();
                  navigate('/find-a-class');
                }}
                className="md:px-8  px-6 py-2 rounded-lg border border-[#042C89] text-[#042C89] font-semibold"
              >
                Go Home
              </button>

              <button
                onClick={() => setShowSuccessModal(false)}
                className="md:px-8  px-6 py-2 rounded-lg bg-[#042C89] text-white font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}


    </div>
  );
}
