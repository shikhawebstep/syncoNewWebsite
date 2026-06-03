import React from "react";

const CallBack = () => {
  return (
    <section className="relative blubpage bg-white py-[80px]">
      <div className="container mx-auto px-4">
        <div
          className="
            relative z-50 m-auto max-w-[770px] 
            rounded-4xl bg-white p-8 text-center
             shadowBox border-t-10  border-[#fede23]
          "
        >
          <h3 className="small permanent-marker blue-text">
            Request a call back.
          </h3>

          <h6 className="text-[14px] recline blue-text py-5">
            Looking to take your child's game up a notch? <br className="onlyDesktop" />
            Private 1-2-1 football classes are the perfect way
            to develop skills and boost confidence in a short time.
          </h6>

          <p className="font-regular text-[#5F5F6D] py-5 md:text-[16px] text-[15px]">
            Fill out the form at the bottom of the page and a member of our team
            will discuss <br className="hidden md:block"/> how we can help your child.
          </p>

          <button
            type="button"
            onClick={() => document.getElementById('enquiry-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="
              mt-4 w-full rounded-4xl 
              bg-[#0DD180] p-3 text-[18px]
              font-bold text-white poppins
            "
          >
            Submit Details
          </button>
        </div>
      </div>

      {/* Decorative Vectors */}
      <div className="absolute md:top-0 top-[50%] right-0">
        <img src="/assets/blueVector.png" alt="Blue decorative vector" />
      </div>

      <div className="absolute md:top-0 md:top-[70%] top-[50%] md:left-[10%] left-[-10%] md:w-4/12">
        <img src="/assets/greenVector1.png" alt="Green decorative vector 1" />
      </div>

      <div className="absolute top-0 right-0 md:w-4/12">
        <img src="/assets/greenVector.png" alt="Green decorative vector 2" />
      </div>
    </section>
  );
};

export default CallBack;
