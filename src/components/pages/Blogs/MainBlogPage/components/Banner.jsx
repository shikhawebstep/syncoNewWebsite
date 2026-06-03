import React from "react";
import bannerImg from "/assets/BlogpostBanner.png";

const Banner = () => {
  return (
    <section
      className="relative     bg-bottom md:py-[100px] py-[70px] pb-0 lg:min-h-[700px]"

    >
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="text-3xl lg:text-[56px] text-[48px] recline  font-bold text-[#042C89] recline">
            Check out our <span className="permanent-marker text-[#0DD180]">blogs</span>
          </h1>
          <p className='text-[20px] leading-[30px] text-[#042C89] font-medium md:px-[11%] pt-5 py-4'>
            Check out our blogs to stay updated with the latest news about our football training for kids in London.
          </p>
          <div className="bg-[#FFDE14] md:block hidden mt-10 py-35 bg-cover items-center"
            style={{ backgroundImage: `url(${bannerImg})` }}>
            <div className="flex justify-start  text-start pl-25">
              <div>
                <h1 className="text-3xl lg:text-[58px] recline  font-bold text-[#042C89] recline">
                  How to Plan <br /><span className="permanent-marker text-[#00A6E3]">Football Sessions</span> <br />for Children?
                </h1>
                <div className="mt-10">
                  <button className="bg-[#042C89] text-white  rounded-full  poppins py-2 px-6">Read More</button>
                </div>
              </div>
            </div>
          </div>
          <div className='text-left md:hidden block  bg-white md:shadow-sm'>
            <div className='min-h-50 '>
              <img src="/assets/Blog0.png" className='mx-auto w-full   ' alt="" />
            </div>
            <div className="md:px-8 py-5">
              <p className='text-[20px] text-[#042C89] mb-2   font-semibold'>How to Plan Football Sessions for Children?</p>
              <p className='text-[16px] text-[#87838D] mb-2  font-medium '>Planning a football session for kids can seem daunting but it doesn’t have to be. The following article will provide a...</p>
              <button className="bg-[#042C89] text-white text-[14px] mt-10  rounded-full  poppins py-2 px-5">Read More</button>

            </div>
          </div>
        </div>
        <div className="grid text-left mt-8 grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-5">

          {[1, 2, 3].map((_, i) => (
            <div key={i} className="bg-white mainShadow flex flex-col h-full">

              <div className="min-h-50">
                <img src={`/assets/Blog${i + 1}.png`} className="mx-auto w-full" alt="" />
              </div>

              {/* CONTENT */}
              <div className="md:px-8 px-4 py-5 flex flex-col justify-between flex-grow">

                {/* TEXT */}
                <div>
                  <p className="text-[20px] text-[#042C89] mb-2 font-semibold">
                    {i === 0 && "Football Skills to Practice in the Playground"}
                    {i === 1 && "5 Ways The SSS Skills Tutorial App Can Improve Your Child’s Football Skills"}
                    {i === 2 && "5 Important Attributes the Best Strikers Need"}
                  </p>

                  <p className="text-[16px] text-[#87838D] mb-2 font-medium">
                    {i === 0 && "Every kid loves pulling off fancy tricks and skills and there’s no better place to try these out than on the playgroun..."}
                    {i === 1 && "The Samba Soccer Skills Tutorial App is our home for weekly skills and tutorials. The SSS app..."}
                    {i === 2 && "Everyone loves scoring goals and there’s no position that is focussed more on scoring goals than a striker. However, t..."}
                  </p>
                </div>

                {/* BUTTON */}
                <button className="bg-[#042C89] text-white text-[14px] mt-5 rounded-full poppins py-2 px-5 self-start">
                  Read More
                </button>

              </div>
            </div>
          ))}

        </div>


      </div>

    </section>
  );
};

export default Banner;
