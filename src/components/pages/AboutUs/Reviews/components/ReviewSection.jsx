import React, { useState, useEffect } from "react";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import TexturedBackground from "/assets/TexturedBackground.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { FaStar } from "react-icons/fa";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";


import Unforgettable from '../../../home/components/Unforgettable'
import Reviews from "../../../Common/Reviews";
const locations = [
    {
        id: 1,
        title: "Battersea",
        image: "/assets/Battersea.png",
        desc: "Football classes are held at the Battersea academy on Saturday afternoons for boys and girls aged 4-12.",
    },
    {
        id: 2,
        title: "Chelsea",
        image: "/assets/Chelsea.png",
        desc: "Football classes are held at the Chelsea academy on Sunday afternoons for boys and girls aged 4-12.",
    },
    {
        id: 3,
        title: "Fulham",
        image: "/assets/Fulham.png",
        desc: "Football classes are held at the Fulham academy on Saturday afternoons for boys and girls aged 4-12.",
    },
    {
        id: 4,
        title: "Acton",
        image: "/assets/Fulham.png",
        desc: "Football classes are held at the Wandsworth academy on Sunday afternoons for boys and girls aged 4-12.",
    },
];
const testimonials = [
    {
        text: "Every Tuesday my son is excited to attend his session to learn new skills and listen to loud samba music!",
        author: "Student, Samba Soccer School",
        rating: 5,
        img: "/assets/Review-img1.png",
        color: "bg-[#00A6E3]",
        starColor: "text-[#FFDE14]",
        arrowColor: "text-[#00A6E3]",
        textColor: "text-white",
    },
    {
        text: "Every Tuesday my son is excited to attend his session to learn new skills and listen to loud samba music!",
        author: "Student, Samba Soccer School",
        rating: 5,
        img: "/assets/Review-img2.png",
        color: "bg-[#0DD180]",
        starColor: "text-[#FFDE14]",
        arrowColor: "text-[#0DD180]",
        textColor: "text-white",
    },
    {
        text: "Every Tuesday my son is excited to attend his session to learn new skills and listen to loud samba music!",
        author: "Student, Samba Soccer School",
        rating: 5,
        img: "/assets/Review-img3.png",
        color: "bg-[#FFDE14]",
        starColor: "text-[#042C89]",
        arrowColor: "text-[#FFDE14]",
        textColor: "text-[#042C89]",
    },
    {
        text: "Every Tuesday my son is excited to attend his session to learn new skills and listen to loud samba music!",
        author: "Student, Samba Soccer School",
        rating: 5,
        img: "/assets/Review-img1.png",
        color: "bg-[#00A6E3]",
        starColor: "text-[#FFDE14]",
        arrowColor: "text-[#00A6E3]",
        textColor: "text-white",
    },
    {
        text: "Every Tuesday my son is excited to attend his session to learn new skills and listen to loud samba music!",
        author: "Student, Samba Soccer School",
        rating: 5,
        img: "/assets/Review-img2.png",
        color: "bg-[#0DD180]",
        starColor: "text-[#FFDE14]",
        arrowColor: "text-[#0DD180]",
        textColor: "text-white",
    },
    {
        text: "Every Tuesday my son is excited to attend his session to learn new skills and listen to loud samba music!",
        author: "Student, Samba Soccer School",
        rating: 5,
        img: "/assets/Review-img1.png",
        color: "bg-[#00A6E3]",
        starColor: "text-[#FFDE14]",
        arrowColor: "text-[#00A6E3]",
        textColor: "text-white",
    },
    {
        text: "Every Tuesday my son is excited to attend his session to learn new skills and listen to loud samba music!",
        author: "Student, Samba Soccer School",
        rating: 5,
        img: "/assets/Review-img2.png",
        color: "bg-[#0DD180]",
        starColor: "text-[#FFDE14]",
        arrowColor: "text-[#0DD180]",
        textColor: "text-white",
    },
    {
        text: "Every Tuesday my son is excited to attend his session to learn new skills and listen to loud samba music!",
        author: "Student, Samba Soccer School",
        rating: 5,
        img: "/assets/Review-img3.png",
        color: "bg-[#FFDE14]",
        starColor: "text-[#042C89]",
        arrowColor: "text-[#FFDE14]",
        textColor: "text-[#042C89]",
    },
    {
        text: "Every Tuesday my son is excited to attend his session to learn new skills and listen to loud samba music!",
        author: "Student, Samba Soccer School",
        rating: 5,
        img: "/assets/Review-img1.png",
        color: "bg-[#00A6E3]",
        starColor: "text-[#FFDE14]",
        arrowColor: "text-[#00A6E3]",
        textColor: "text-white",
    },
    {
        text: "Every Tuesday my son is excited to attend his session to learn new skills and listen to loud samba music!",
        author: "Student, Samba Soccer School",
        rating: 5,
        img: "/assets/Review-img2.png",
        color: "bg-[#0DD180]",
        starColor: "text-[#FFDE14]",
        arrowColor: "text-[#0DD180]",
        textColor: "text-white",
    },
    {
        text: "Every Tuesday my son is excited to attend his session to learn new skills and listen to loud samba music!",
        author: "Student, Samba Soccer School",
        rating: 5,
        img: "/assets/Review-img1.png",
        color: "bg-[#00A6E3]",
        starColor: "text-[#FFDE14]",
        arrowColor: "text-[#00A6E3]",
        textColor: "text-white",
    },
    {
        text: "Every Tuesday my son is excited to attend his session to learn new skills and listen to loud samba music!",
        author: "Student, Samba Soccer School",
        rating: 5,
        img: "/assets/Review-img2.png",
        color: "bg-[#0DD180]",
        starColor: "text-[#FFDE14]",
        arrowColor: "text-[#0DD180]",
        textColor: "text-white",
    },
    {
        text: "Every Tuesday my son is excited to attend his session to learn new skills and listen to loud samba music!",
        author: "Student, Samba Soccer School",
        rating: 5,
        img: "/assets/Review-img3.png",
        color: "bg-[#FFDE14]",
        starColor: "text-[#042C89]",
        arrowColor: "text-[#FFDE14]",
        textColor: "text-[#042C89]",
    },
    {
        text: "Every Tuesday my son is excited to attend his session to learn new skills and listen to loud samba music!",
        author: "Student, Samba Soccer School",
        rating: 5,
        img: "/assets/Review-img1.png",
        color: "bg-[#00A6E3]",
        starColor: "text-[#FFDE14]",
        arrowColor: "text-[#00A6E3]",
        textColor: "text-white",
    },
    {
        text: "Every Tuesday my son is excited to attend his session to learn new skills and listen to loud samba music!",
        author: "Student, Samba Soccer School",
        rating: 5,
        img: "/assets/Review-img2.png",
        color: "bg-[#0DD180]",
        starColor: "text-[#FFDE14]",
        arrowColor: "text-[#0DD180]",
        textColor: "text-white",
    },
    {
        text: "Every Tuesday my son is excited to attend his session to learn new skills and listen to loud samba music!",
        author: "Student, Samba Soccer School",
        rating: 5,
        img: "/assets/Review-img1.png",
        color: "bg-[#00A6E3]",
        starColor: "text-[#FFDE14]",
        arrowColor: "text-[#00A6E3]",
        textColor: "text-white",
    },
    {
        text: "Every Tuesday my son is excited to attend his session to learn new skills and listen to loud samba music!",
        author: "Student, Samba Soccer School",
        rating: 5,
        img: "/assets/Review-img2.png",
        color: "bg-[#0DD180]",
        starColor: "text-[#FFDE14]",
        arrowColor: "text-[#0DD180]",
        textColor: "text-white",
    },
    {
        text: "Every Tuesday my son is excited to attend his session to learn new skills and listen to loud samba music!",
        author: "Student, Samba Soccer School",
        rating: 5,
        img: "/assets/Review-img3.png",
        color: "bg-[#FFDE14]",
        starColor: "text-[#042C89]",
        arrowColor: "text-[#FFDE14]",
        textColor: "text-[#042C89]",
    },
    {
        text: "Every Tuesday my son is excited to attend his session to learn new skills and listen to loud samba music!",
        author: "Student, Samba Soccer School",
        rating: 5,
        img: "/assets/Review-img1.png",
        color: "bg-[#00A6E3]",
        starColor: "text-[#FFDE14]",
        arrowColor: "text-[#00A6E3]",
        textColor: "text-white",
    },
    {
        text: "Every Tuesday my son is excited to attend his session to learn new skills and listen to loud samba music!",
        author: "Student, Samba Soccer School",
        rating: 5,
        img: "/assets/Review-img2.png",
        color: "bg-[#0DD180]",
        starColor: "text-[#FFDE14]",
        arrowColor: "text-[#0DD180]",
        textColor: "text-white",
    },
];
const ReviewSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(1);

    const sliderRef = useRef(null);
    const infiniteLocations = [...locations, ...locations, ...locations];
    const totalSlides = testimonials.length;

    const scrollByCard = (direction = 1) => {
        if (!sliderRef.current) return;

        const card = sliderRef.current.querySelector(".slider-card");
        if (!card) return;

        const gap = 80; // gap-20 = 80px
        const scrollAmount = card.offsetWidth + gap;

        sliderRef.current.scrollBy({
            left: direction * scrollAmount,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        if (!sliderRef.current) return;

        const card = sliderRef.current.querySelector(".slider-card");
        if (!card) return;

        const gap = 80;
        const scrollAmount = card.offsetWidth + gap;

        sliderRef.current.scrollLeft = locations.length * scrollAmount;
    }, []);
    const chunkArray = (arr, size) => {
        const result = [];
        for (let i = 0; i < arr.length; i += size) {
            result.push(arr.slice(i, i + size));
        }
        return result;
    };

    // 2 cards per column
    const groupedTestimonials = chunkArray(testimonials, 2);
    return (
        <section className="relative md:py-[100px] py-[50px] px-5 md:px-0  bg-[#F9FAFB]"
            style={{ backgroundImage: `url(${TexturedBackground})` }}>
            <div className="container mx-auto max-w-[1100px]">
                {/* Heading */}



                <div className="text-center mb-10">
                    <div className=" mb-4 flex justify-center items-center gap-3">
                        {/* <img className='w-[120px]' src="/assets/google-reviews.png" alt="" />
                        <img className='w-[120px]' src="/assets/trustpoint.png" alt="" /> */}
                       <h6 className="text-[#042C89] poppins ">GOOGLE REVIEWS</h6>
                    </div>
                    <h3 className="blue-text">
                        Unforgettable <span className='light-blue-text '>moments</span> <br className="md:block hidden" /> since 2009
                    </h3>
                </div>
                <div className="w-full md:bg-white rounded-4xl  max-w-6xl mx-auto md:py-15 py-5 relative">
                    <div className="lg:max-w-[1085px] mx-auto">
                        <Swiper
                            modules={[Navigation]}
                            navigation={{
                                nextEl: ".custom-next",
                                prevEl: ".custom-prev",
                            }}
                            loop
                            centeredSlides
                            spaceBetween={30}
                            slidesPerView={3}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                            onSlideChange={(swiper) => {
                                setCurrentSlide(swiper.realIndex + 1);
                            }}
                        >
                            {groupedTestimonials.map((group, index) => (
                                <SwiperSlide key={index}>
                                    {/* COLUMN (2 ROWS) */}
                                    <div className="flex flex-col gap-10">
                                        {group.map((item, i) => (
                                            <div key={i} className="flex flex-col items-center text-center">
                                                {/* REVIEW BUBBLE */}
                                                <div
                                                    className={`relative p-6 rounded-xl shadow-lg ${item.color}`}
                                                >
                                                    <p
                                                        className={`italic font-semibold text-base leading-relaxed ${item.textColor}`}
                                                    >
                                                        “{item.text}”
                                                    </p>

                                                    <p className={`mt-3 text-sm ${item.textColor}`}>
                                                        {item.author}
                                                    </p>

                                                    {/* STARS */}
                                                    <div className="flex justify-center mt-3">
                                                        {Array.from({ length: item.rating }).map((_, j) => (
                                                            <FaStar
                                                                key={j}
                                                                className={`${item.starColor} text-lg`}
                                                            />
                                                        ))}
                                                    </div>

                                                    {/* SPEECH ARROW */}
                                                    <div
                                                        className="absolute bottom-[-14px] left-1/2 -translate-x-1/2 w-0 h-0
                    border-l-[15px] border-r-[15px] border-t-[15px]
                    border-l-transparent border-r-transparent"
                                                        style={{
                                                            borderTopColor: item.color
                                                                .replace("bg-[", "")
                                                                .replace("]", ""),
                                                        }}
                                                    />
                                                </div>

                                                {/* USER IMAGE */}
                                                <div className="mt-6 w-20 h-20 overflow-hidden rounded-full">
                                                    <img
                                                        src={item.img}
                                                        alt={item.author}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* PAGINATION */}
                        <div className="flex items-center justify-center gap-4 mt-8 text-[#5F5F6D] text-sm">
                            <button className="custom-prev flex items-center">
                                <MdKeyboardArrowLeft className="text-2xl" />
                            </button>

                            <span>
                                {currentSlide} of {groupedTestimonials.length} comments
                            </span>

                            <button className="custom-next flex items-center">
                                <MdKeyboardArrowRight className="text-2xl" />
                            </button>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default ReviewSection;
