import React from "react";
import TexturedBackground from "/assets/TexturedBackground.png";

const RecentPosts = () => {
  const categories = [
    { title: "Parents", icon: "/assets/img-icon-parents.svg" },
    { title: "Skills", icon: "/assets/img-icon-skills.svg" },
    { title: "General", icon: "/assets/img-icon-general.svg" },
    { title: "Franchise", icon: "/assets/img-icon-franchise.svg" },
    { title: "Coaches", icon: "/assets/img-icon-coaches.svg" },
    { title: "Services", icon: "/assets/img-icon-services.svg" },
  ];
  return (
    <>
      <section
        className="relative py-20 bg-[#fff]  bg-no-repeat bg-cover"
       
      >
        <div className="container"> 
          <span className="poppins text-[32px] font-semibold text-[#34353B]">Recent Posts</span>
        <div className="grid text-left mt-8 grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-5">
          <div className='text-left  bg-white shadow-sm'>
            <div className='min-h-50 '>
              <img src="/assets/Blog1.png" className='mx-auto w-full   ' alt="" />
            </div>
            <div className="px-8 py-5">
              <p className='text-[20px] text-[#042C89] mb-2   font-semibold'>Football Skills to Practice in the Playground</p>
              <p className='text-[16px] text-[#87838D] mb-2  font-medium '>Every kid loves pulling off fancy tricks and skills and there’s no better place to try these out than on the playgroun...</p>
              <button className="bg-[#042C89] text-white text-[14px] mt-10  rounded-full  poppins py-2 px-5">Read More</button>

            </div>
          </div>
          <div className='text-left bg-white shadow-sm'>
            <div className='min-h-50'>
              <img src="/assets/Blog2.png" className='mx-auto w-full ' alt="" />
            </div>
            <div className="px-8 py-5">
              <p className='text-[20px] text-[#042C89] mb-2   font-semibold'>5 Ways The SSS Skills Tutorial App Can Improve Your Child’s Football Skills</p>
              <p className='text-[16px] text-[#87838D] mb-2  font-medium'>The Samba Soccer Skills Tutorial App is our home for weekly skills and tutorials. The SSS app...</p>
              <button className="bg-[#042C89] text-white text-[14px] mt-10  rounded-full  poppins py-2 px-5">Read More</button>
            </div>
          </div>
          <div className='text-left bg-white shadow-sm'>
            <div className='min-h-50'>
              <img src="/assets/Blog3.png" className='mx-auto w-full  ' alt="" />
            </div>
            <div className="px-8 py-5">
              <p className='text-[20px] text-[#042C89] mb-2   font-semibold'>5 Important Attributes the Best Strikers Need</p>
              <p className='text-[16px] text-[#87838D] mb-2  font-medium'>Everyone loves scoring goals and there’s no position that is focussed more on scoring goals than a striker. However, t...</p>
              <button className="bg-[#042C89] text-white text-[14px] mt-10  rounded-full  poppins py-2 px-5">Read More</button>
            </div>
          </div>
        </div>
</div>
      </section>
    </>
  );
};

export default RecentPosts;
