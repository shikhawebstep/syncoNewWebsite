import React from "react";

const Banner = () => {
  return (
    <section
      className="relative mainFranchiseBanner z-50 md:flex bg-cover md:bg-bottom bg-top md:py-[100px] md:min-h-[1100px] py-[70px] min-h-[780px]"
     
    >
      <div className="container mx-auto">
        <div className="mx-auto pb-10 md:pt-0 pt-10 text-center">
          <h1 className="recline text-white lg:text-[50px] md:text-[50px] text-[42px]">
            Increase your income and wake <br className="block md:hidden" /> up <br className="md:block hidden" /> each day doing what you love
          </h1>

          <button className=" md:block mx-auto hidden mt-6 rounded-full bg-[#FFDE14] px-8 py-2.5 text-[20px] font-bold text-[#042C89] poppins">
            Learn More
          </button>
            <button className=" md:hidden mx-auto block mt-6 rounded-full bg-[#FFDE14] px-8 py-2.5 text-[18px] font-bold text-[#042C89] poppins">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
