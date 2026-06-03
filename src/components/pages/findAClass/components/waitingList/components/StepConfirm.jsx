import { useState } from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast, Toast } from "../../../../Common/Toast";
export default function StepConfirm({
  venue,
  students,
  parents,
  sessionInfo,
  onBack,
  onCancel,
  onConfirm,
}) {
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toasts, addToast, removeToast } = useToast();
  const navigate = useNavigate();

  const handleBookNow = async () => {
    setIsSubmitting(true);
    const result = await onConfirm();
    setIsSubmitting(false);
    if (result.success) {
      setShowSuccessModal(true);
    } else {
      let errorMsg = result.message || "Something went wrong. Please try again.";
      if (result.error && typeof result.error === 'object') {
        const firstKey = Object.keys(result.error)[0];
        errorMsg = result.error[firstKey];
      }
      addToast(errorMsg, "error");
    }
  };

  return (
    <div className="max-w-3xl mx-auto text-center md:mt-16 mt-5">
      <Toast toasts={toasts} removeToast={removeToast} />
      {/* Heading */}
      <p className="text-[18px] text-[18px] text-[#282829] font-semibold mb-2">
        Confirm your details
      </p>
      <p className="text-[#5F5F6D] text-[14px] mb-7 mt-1">
        Please see below for a summary <br className="md:hidden block" /> of your waiting list details
      </p>

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
        <div className="bg-[#F6F6F7] border border-[#FCF9F6] rounded-xl md:p-6 p-3 mb-1 thankyou">
          <div className="grid grid-cols-3 items-center mb-4 max-w-[370px] m-auto thankyou">
            <div className="text-left ps-4">
              <p className="font-semibold">{sessionInfo?.area}</p>
            </div>

            <div className="border-x-4 border-white">
              <p className="font-semibold">{sessionInfo?.day}</p>
              <p className="text-sm text-gray-500">{sessionInfo?.type}</p>
            </div>

            <div className="text-left ps-8">
              <p className="font-semibold">Date</p>
          <p className="text-sm text-gray-500">
  {new Date().toLocaleDateString("en-GB").replaceAll("/", "-")}
</p>
            </div>
          </div>

          <div className="border-t-4 border-[#FDFDFF]  pt-4 space-y-3">
            <div className="md:max-w-[88%] m-auto grid gap-3">
              {students.length > 0 ? (
                students.map((student, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-3 items-center justify-between text-sm text-gray-700 gap-4 md:border-b-0 border-b-4 border-white last:border-0 pb-3 last:pb-0"
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
                      <span className="truncate">{student?.class}</span>
                    </div>

                    <div className="md:flex items-center text-center md:text-left justify-center gap-2 truncate">
                      <img src="/assets/clock.png" alt="clock" className="w-4 h-4 m-auto md:m-0 mb-2 md:mb-0 text-sky-500" />
                      <span className="text-left truncate">{student?.time}</span>
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
          disabled={isSubmitting}
          className="text-[#FF6C6C] font-semibold text-[12px] hover:underline disabled:opacity-50"
        >
          Cancel
        </button>

        <button
          type="button"
          onClick={onBack}
          disabled={isSubmitting}
          className="px-4 py-2 ms-3 rounded-lg font-semibold border border-[#042C89] text-[#042C89] text-[12px] hover:bg-blue-50 disabled:opacity-50"
        >
          Back
        </button>

        <button
          type="button"
          disabled={isSubmitting}
          onClick={handleBookNow}
          className="px-4 py-2 rounded-lg bg-[#042C89] font-bold md:text-[14px] text-white hover:bg-blue-900 disabled:bg-gray-400 text-[12px]"
        >
          {isSubmitting ? "Submitting..." : "Add to waiting list"}
        </button>
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
              Cancel Waiting List
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
              You have been added to the waiting list
            </p>

            <p className="text-[#5F5F6D] text-[14px] mb-8 -tracking-[0.1px]">
              A member of our team will contact you when a space becomes available.
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
