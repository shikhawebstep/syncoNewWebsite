import React from 'react'
import { FaInstagram } from 'react-icons/fa';
import BookTrialGreenBg from "/assets/BookTrialGreenBg.png";

const Follow = () => {
    const galleryImages = [
        "/assets/gallary1.png",
        "/assets/gallary2.png",
        "/assets/gallary3.png",
        "/assets/gallary4.png",
        "/assets/gallary5.png",
        "/assets/gallary6.png",
    ];
    return (
        <>
            <div className="relative  max-w-[1200px] mx-auto md:py-20 pt-0 px-4 md:px-0">
                <div className="relative  overflow-hidden md:min-h-auto min-h-[700px] rounded-[32px] bg-[#00A6E3] bg-cover px-5 md:px-10 py-12 flex flex-col lg:flex-row items-center justify-between"
                    style={{ backgroundImage: `url(${BookTrialGreenBg})` }}
                >

                    {/* Left Content */}
                    <div className="max-w-[511px] text-white z-10">
                        <h1 className="text-[36px] recline lg:text-[40px] font-bold leading-tight">
                            <span className="text-[#FFDE14]">Follow us</span> <br /> on Instagram
                        </h1>

                        <p className="mt-4 text-[14px] leading-relaxed text-white/90">
                            Relive every moment. Our photographers are always on the lookout for the best flicks, tricks and celebrations so you can add it to the family album. Follow the action from our kids football training in London by subscribing to our Instagram.
                        </p>

                        <button className="mt-6 inline-flex items-center text-[16px] justify-center bg-[#FFDE14] poppins font-bold hover:bg-yellow-500 transition text-[#042C89]  px-6 py-3 rounded-full">
                            <img src="/assets/instaBlueIcon.png" className='w-5 h-5 mr-2' alt="" />    Follow on Instagram
                        </button>
                    </div>
                    <div className="">
                        <img src="/assets/img-kids-picture-2.png" className="absolute right-[20px] bottom-[0px]" alt="" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Follow
