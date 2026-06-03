import bannerImg from "/assets/bg-primary-texture.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useRef, useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const fitItems = [
    {
        title: "A strong passion\nfor children's football coaching",
        icon: "/assets/goodfit1.png",
        bg: "bg-[#0D3989]",
    },
    {
        title: "Minimum two years of football coaching experience (Aged 4–12)",
        icon: "/assets/goodfit2.png",
        bg: "bg-[#0D3989]",
    },
    {
        title: "Love the Brazilian way of playing football",
        icon: "/assets/goodfit3.png",
        bg: "bg-[#0D3989]",
    },
    {
        title: "Good communication skills",
        icon: "/assets/goodfit4.png",
        bg: "bg-[#0D3989]",
    },
    {
        title: "Self-motivation",
        icon: "/assets/goodfit5.png",
        bg: "bg-[#0D3989]",
    },
    {
        title: "Entrepreneurial skills",
        icon: "/assets/goodfit6.png",
        bg: "bg-[#0D3989]",
    },
];

const GoodFit = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className=" bg-cover bg-top  py-[70px] text-white flex items-center relative overflow-hidden"
            style={{ backgroundImage: `url(${bannerImg})` }}>
            <div className="container mx-auto px-4 text-center">
                {/* Heading */}
                <h2 className="md:text-[62px] text-[48px] recline font-bold tracking-tight">
                    Are we a{" "} <br className="md:hidden" />
                    <span className="text-[#FFDE14] permanent-marker font-normal tracking-wide">
                        GOOD FIT?
                    </span>
                </h2>

                {/* Description */}
                <p className="mx-auto hidden md:block mt-6 max-w-[950px] text-[18px] text-lg text-white/90 leading-relaxed">
                    We’d love to hear from you if you like the sound of what we do and
                    think you might be a good fit to join the exciting and ever-expanding
                    Samba Soccer Schools franchise. We’re always looking for passionate
                    and motivated people to partner with, so if you tick the following
                    boxes, get in contact today.
                </p>
                <p className="block md:hidden text-[22px]">If you have each of the following, we would love to work with you</p>

                {/* Cards */}
                <div className="mt-20  md:grid hidden max-w-[1190px] m-auto gap-4 sm:grid-cols-2 lg:grid-cols-6">
                    {fitItems.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className={`relative rounded-3xl ${item.bg}  px-4 pb-6 pt-14 `}
                            >
                                {/* Icon */}
                                <div
                                    className={`absolute -top-7 left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full `}
                                >
                                    <img src={item?.icon} alt="" />
                                </div>

                                {/* Text */}
                                <p className="text-[16px] font-medium leading-relaxed whitespace-pre-line">
                                    {item.title}
                                </p>
                            </div>
                        );
                    })}
                </div>
                {/* Mobile Swiper */}
                <div className="lg:hidden mt-16">
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            nextEl: ".custom-next",
                            prevEl: ".custom-prev",
                        }}
                        loop
                        className="overflowvisible"
                        spaceBetween={30}
                        centeredSlides
                        slidesPerView={3}   // DESKTOP stays the same
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        breakpoints={{
                            0: {
                                slidesPerView: 1.5,     // MOBILE
                                centeredSlides: true,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,     // DESKTOP
                            },
                        }}
                    >
                        {fitItems.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div
                                    className={`relative rounded-3xl ${item.bg} px-6 pb-10 pt-16 min-h-[180px]`}
                                >
                                    {/* Icon */}
                                    <div className="absolute -top-7 left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center  rounded-full">
                                        <img src={item.icon} alt="" />
                                    </div>

                                    {/* Text */}
                                    <p className="text-sm font-medium leading-relaxed whitespace-pre-line text-white text-center">
                                        {item.title}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="flex justify-center gap-4 mt-6">
                        <button className="custom-prev mobilebtnngreen leftMobileBtnn text-[#0DD180] text-2xl absolute top-[32%] left-[-4%]"><MdKeyboardArrowLeft className="text-5xl" /></button>
                        <button className="custom-next mobilebtnngreen rightMobileBtnn text-[#0DD180] text-2xl absolute top-[32%] right-[-4%]"><MdKeyboardArrowRight className="text-5xl" /></button>
                    </div>
                    <div className="flex justify-center mt-8 md:hidden gap-2 absolute left-0 right-0 bottom-10">
                        {fitItems.map((_, index) => (
                            <span
                                key={index}
                                className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === activeIndex ? "bg-[#0DD180]" : "bg-[#C3C4CC]"
                                    }`}
                            ></span>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default GoodFit;
