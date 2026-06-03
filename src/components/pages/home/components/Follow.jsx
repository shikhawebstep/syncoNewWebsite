import React from 'react'
import { FaInstagram } from 'react-icons/fa';

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
            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl shadow-custom mt-10 md:mt-16 lg:mt-[100px]">
                <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-8">

                    {/* Left text col */}
                    <div className="col md:max-w-[511px]">
                        <h4 className="recline text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] blue-text">
                            Follow us{" "}
                            <br className="md:block hidden" /> on Instagram
                        </h4>
                        <p className="text-[12px] sm:text-[13px] md:text-[14px] text-[#797A88] py-3 md:py-4 leading-relaxed">
                            Relive every moment. Our photographers are always on the lookout for the best flicks, tricks and celebrations so you can add it to the family album. Follow the action from our kids football training in London by subscribing to our Instagram.
                        </p>
                        <button className="bg-[#042C89] text-white px-4 py-2 rounded-3xl flex gap-2 md:gap-3 font-bold text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] items-center">
                            <FaInstagram /> Follow on Instagram
                        </button>
                    </div>

                    {/* Gallery grid col */}
                    <div className="col">
                        <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                            {galleryImages.map((img, index) => (
                                <div key={index} className='w-full aspect-square overflow-hidden '>
                                    <img
                                        src={img}
                                        alt={`Gallery ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Follow