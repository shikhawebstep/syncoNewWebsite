import React from "react";

const Qa = () => {
  return (
    <section className="bg-white py-20 px-5 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-[34px] lg:text-[48px] leading-tight recline font-bold text-[#042C89]">
            If you think you have <br />
            what it takes, we’d love <br />
            to hear from you!
          </h2>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <p className="text-[#042C89] poppins text-[22px] font-semibold mb-4">
            Further details
          </p>

          <ul className="space-y-0 text-[#5F5F6D] text-[18px]">
            <li>• Start Date: Immediate</li>
            <li>• Hours: Sat & Sun: 9am–6pm</li>
            <li>• Salary: £100 per day (Experience dependent)</li>
            <li>• Regions available: North, East, South, West London</li>
          </ul>
        </div>
      </div>
      <div className="mt-20">
       <p className="space-y-0 text-[#5F5F6D] text-[18px] font-semibold text-center">Regional Split (example)</p>
      <div className="mb-6 border-[9px] md:max-w-[70%] m-auto border-white overflow-hidden rounded-4xl bg-gray-200">
     
        <div className="relative aspect-[16/4] h-[500px]  w-full">
          <iframe
            className="absolute inset-0 h-[1000px] w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.83988669532!2d-0.26640339995072626!3d51.528739805038576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sin!4v1766649812397!5m2!1sen!2sin"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0 , borderRadius: '22px'}}
            allowFullScreen
          />
        </div>
      </div>
      </div>
      <div className="text-center mt-16">
        <p className="text-[#0DD180] text-[40px] permanent-marker font-semibold tracking-wide uppercase">
          So what are you waiting for?
        </p>

        <p className="text-[#797A88] poppins text-[20px] mt-2">
          If you believe you’d be a good fit for the role and would relish <br />
          the opportunity, fill out the application form below.
        </p>
      </div>
    </section>
  );
};

export default Qa;
