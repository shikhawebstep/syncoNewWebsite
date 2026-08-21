import React from 'react'
import { FaInstagram } from 'react-icons/fa';

const Follow = () => {
    const galleryImages = [
        { img: "/assets/gallary1.webp", link: "https://www.instagram.com/p/DVjc-s0j9zl/" },
        { img: "/assets/gallary2.webp", link: "https://www.instagram.com/p/DVgxVGEgVhs/" },
        { img: "/assets/gallary3.webp", link: "https://www.instagram.com/p/DVeFnkHDPjq/" },
        { img: "/assets/gallary4.webp", link: "https://www.instagram.com/p/DVbnwTIDYDG/" },
        { img: "/assets/gallary5.webp", link: "https://www.instagram.com/p/DVRUiLIj92j/" },
        { img: "/assets/gallary6.webp", link: "https://www.instagram.com/p/DVOo3ApjWhr/" },
    ];

    return (
        <>
            <div className="bg-white p-6 sm:p-8 md:p-10 md:px-15 rounded-2xl md:rounded-3xl shadow-custom mt-10 md:mt-16 lg:mt-[100px]">
                <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-8">

                    {/* Left text col */}
                    <div className="md:w-[60%] md:max-w-[511px]">
                        <h4 className="recline text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] blue-text">
                            Follow us{" "}
                            <br className="md:block" /> on Instagram
                        </h4>
                        <p className="text-[12px] sm:text-[13px] md:text-[14px] text-[#797A88] py-3 md:py-4 leading-relaxed">
                            Relive every moment. Our photographers are always on the lookout for the best flicks, tricks and celebrations so you can add it to the family album. Follow the action from our kids football training in London by subscribing to our Instagram.
                        </p>
                        <button onClick={() => window.open('https://www.instagram.com/sambasoccer_uk/', '_blank')} className="bg-[#042C89] text-white px-4 py-2 rounded-3xl flex gap-2 md:gap-3 font-bold text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] items-center">
                            <FaInstagram /> Follow on Instagram
                        </button>
                    </div>

                    {/* Gallery grid col */}
                    <div className="md:w-[40%]">
                        <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                            {galleryImages.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='w-full aspect-square overflow-hidden block group cursor-pointer'
                                >
                                    <img
                                        src={item.img}
                                        alt={`Gallery ${index + 1}`}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Follow