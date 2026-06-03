const Steps = () => {
  return (
    <section className="grey-bg py-20 ">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="md:text-[64px] text-[58px] font-bold recline text-[#0b3c8c]">
            Your next{" "}
            <span className="text-[#22c55e] permanent-marker font-normal">STEPS...</span>
          </h2>
          <p className="mt-4 md:text-[22px] text-[18px] text-[#797A88] leading-relaxed">
            If you ticked all of the boxes above, you’re already well on your way.
            We’ve streamlined our entire application process into four simple
            steps so we can find out quickly if franchising with Samba Soccer
            Schools is right for you.
          </p>
        </div>

        {/* Steps Wrapper */}
        <div className="relative mt-24 mx-auto lg:max-w-[980px] md:pb-15">

          {/* Center Line */}
          <div className="absolute left-1/2 md:block hidden top-0 h-full -translate-x-1/2">
            <img
              src="/assets/stepLine.png"
              className="h-full w-[120px]"
              alt=""
            />
          </div>

          {/* STEP 1 */}
          <div className="relative flex flex-col md:flex-row items-center justify-between mb-28">

            {/* Text Content */}
            <div className="md:w-[40%] text-center order-3 md:order-1 mt-6 md:mt-0">
              <h5 className="text-xl font-bold text-[#22c55e]">Enquire</h5>
              <p className="mt-2 text-[16px] text-[#797A88] leading-[28px] md:px-6">
                Simply fill out the short application form <br className="md:block hidden" />at the bottom of this
                page to let us <br className="md:block hidden" />know you're interested in our football coaching
                franchise, and we'll be in touch <br className="md:block hidden" /> shortly.
              </p>
            </div>

            {/* one.png — TOP on mobile */}
            <div className="md:w-[20%]  flex justify-center order-1 md:order-2 mb-4 md:mb-0">
              <img src="/assets/one.png" className="w-[100px]" alt="Step 1" />
            </div>

            {/* Clipboard image — stays below on mobile */}
            <div className="md:w-[40%] md:flex hidden justify-center order-2 md:order-3 mb-6 md:mb-0">
              <div className="max-w-[160px]">
                <img src="/assets/clipboard.png" alt="" />
              </div>
            </div>

          </div>


          {/* STEP 2 */}
          <div className="relative flex flex-col md:flex-row items-center justify-between mb-28">

            {/* Phone image */}
            <div className="md:w-[40%] md:flex hidden justify-center order-2 md:order-1 mb-6 md:mb-0">
              <div className="max-w-[160px] m-auto">
                <img src="/assets/img-phone-call.png" alt="" />
              </div>
            </div>

            {/* two.png — TOP on mobile */}
            <div className="md:w-[20%] flex justify-center order-1 md:order-2 mb-4 md:mb-0">
              <img src="/assets/two.png" className="w-[100px]" alt="Step 2" />
            </div>

            {/* Text content */}
            <div className="md:w-[40%] text-center order-3 md:order-3 mt-4 md:mt-0">
              <h5 className="text-xl font-bold text-[#0ea5e9]">Phone Call</h5>
              <p className="mt-2 text-[16px] text-[#797A88] leading-[28px] px-4.5">
                One of our team will give you a call within 48 hours to discuss your needs and business ideas. This also allows us to answer any questions you might have before we send you our official franchise prospectus with everything you need to know.
              </p>
            </div>

          </div>


          {/* STEP 3 */}
          <div className="relative flex flex-col md:flex-row items-center justify-between mb-28">

            {/* Text content */}
            <div className="md:w-[40%] text-center order-3 md:order-1 mt-6 md:mt-0">
              <h5 className="text-xl font-bold text-[#22c55e]">Meet with us</h5>
              <p className="mt-2 text-[16px] text-[#797A88] leading-[28px] md:px-6">
                Get to know the management team behind Samba Soccer Schools with a face-to-face meeting where we’ll be happy to 
                discuss the franchise process and answer any questions you still <br className="md:block hidden" /> have.
              </p>
            </div>

            {/* three.png — TOP on mobile */}
            <div className="md:w-[20%] flex justify-center order-1 md:order-2 mb-4 md:mb-0">
              <img src="/assets/three.png" className="w-[100px]" alt="Step 3" />
            </div>

            {/* Meeting image */}
            <div className="md:w-[40%] md:flex hidden justify-center order-2 md:order-3 mb-6 md:mb-0">
              <div className="max-w-[160px] m-auto">
                <img src="/assets/img-meet-with-us.png" alt="" />
              </div>
            </div>

          </div>


          <div className="relative flex flex-col md:flex-row items-center justify-between">

            {/* Lesson image */}
            <div className="md:w-[40%] md:flex hidden justify-center order-2 md:order-1 mb-6 md:mb-0">
              <div className="max-w-[160px] m-auto">
                <img src="/assets/img-watch-a-lesson.png" alt="" />
              </div>
            </div>

            {/* four.png — TOP on mobile */}
            <div className="md:w-[20%] flex justify-center order-1 md:order-2 mb-4 md:mb-0">
              <img src="/assets/four.png" className="w-[110px]" alt="Step 4" />
            </div>

            {/* Text content */}
            <div className="md:w-[40%] text-center order-3 md:order-3 mt-4 md:mt-0">
              <h5 className="text-xl font-bold text-[#0ea5e9]">Watch A Lesson</h5>
              <p className="mt-2 text-[16px] text-[#797A88] leading-[28px] md:px-6">
                Observe one of our lessons in person to see how it all works
                while having <br className="md:block hidden" /> the opportunity to speak to our <br className="md:block hidden" /> coaches and
                operations manager.
              </p>
            </div>

          </div>


        </div>
      </div>
    </section>
  );
};

export default Steps;
