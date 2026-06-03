"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaStar } from "react-icons/fa";
import { useRef, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const testimonials = [
  {
    text: "Very cool approach to coaching. Something different. I've taken my son to quite a few clubs but with samba soccer I can see his progress especially his confidence in dribbling the ball. Cheers.",
    author: "Karolina Hogner",
    rating: 5,
    img: "/assets/Review-img1.png",
    color: "bg-[#FFDE14]",
    starColor: "text-[#0DD180]",
    arrowColor: "text-[#00A6E3]",
    textColor: "text-[#042C89]",
  },
  {
    text: "Amazing experience with our son; the team manages to be extremely kind with the kids while being able to teach proper skills to them. Highly recommend them!",
    author: "Laure Lebrun",
    rating: 5,
    img: "/assets/Review-img2.png",
    color: "bg-[#00A6E3]",
    arrowColor: "text-[#0DD180]",
    starColor: "text-[#FFDE14]",
    textColor: "text-[#fff]",
  },
  {
    text: "Every Tuesday my son is excited to attend his session to learn new skills and listen to loud samba music!",
    author: "Student, Samba Soccer School",
    rating: 5,
    img: "/assets/Review-img3.png",
    color: "bg-[#FFDE14]",
    arrowColor: "text-[#FFDE14]",
    starColor: "text-[#042C89]",
    textColor: "text-[#042C89]",
  },
  {
    text: "Every Tuesday my son is excited to attend his session to learn new skills and listen to loud samba music!",
    author: "Student, Samba Soccer School",
    rating: 5,
    img: "/assets/Review-img3.png",
    color: "bg-[#00A6E3]",
    arrowColor: "text-[#00A6E3]",
    starColor: "text-[#FFDE14]",
    textColor: "text-[#fff]",
  },
  {
    text: "Great work. Thank you for using Brasilian football to inspire younger children",
    author: "Student, Samba Soccer School",
    rating: 5,
    img: "/assets/Review-img3.png",
    color: "bg-[#0DD180]",
    arrowColor: "text-[#0DD180]",
    starColor: "text-[#FFDE14]",
    textColor: "text-[#fff]",
  },
];

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="w-full max-w-6xl mx-auto py-10 relative">
      <div className="lg:max-w-[1085px] m-auto">


        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          loop
          spaceBetween={30}
          centeredSlides
          slidesPerView={3}   // DESKTOP stays the same
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          breakpoints={{
            0: {
              slidesPerView: 1.3,     // MOBILE
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
          {testimonials.map((item, index) => (
            <SwiperSlide
              key={index}
              className={index === activeIndex ? "active" : ""}
            >
              <div className="flex flex-col items-center text-center">
                {/* Bubble box */}
                <div
                  className={`relative p-6 rounded-lg shadow-lg ${item.color}
  max-w-[300px] mx-auto
  md:max-w-full`}
                >
                  <p
                    className={`italic text-[15px] font-bold  ${item.textColor}  leading-relaxed`}
                  >
                    “{item.text}”
                  </p>
                  <p className={`mt-3 ${item.textColor} text-[14px] text-sm`}>
                    {item.author}
                  </p>
                  {/* Stars */}
                  <div className="flex justify-center mt-3">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <FaStar
                        key={i}
                        className={`  ${item.starColor}  text-lg`}
                      />
                    ))}
                  </div>
                  {/* Bubble arrow */}
                  <div
                    className={`${item.arrowColor} absolute bottom-[-14px] left-1/2 -translate-x-1/2 w-0 h-0 
                  border-l-[15px] border-r-[15px] border-t-[15px] border-l-transparent border-r-transparent`}
                    style={{ borderTopColor: item.color.replace("bg-", "") }}
                  />
                </div>
                {/* User Image */}
                <div className="mt-4 w-16 h-16 rounded-full overflow-hidden md:w-20 md:h-20">
                  <img
                    src={item.img}
                    alt={item.author}
                    className="w-full h-full object-cover"
                  />
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Custom Buttons */}
      <div className="flex justify-center gap-4 mt-6">
        <button className="custom-prev mobilebtnn leftMobileBtnn text-[#0DD180] text-2xl absolute top-[32%] left-[-4%]"><MdKeyboardArrowLeft className="text-5xl" /></button>
        <button className="custom-next mobilebtnn rightMobileBtnn text-[#0DD180] text-2xl absolute top-[32%] right-[-4%]"><MdKeyboardArrowRight className="text-5xl" /></button>
      </div>
      <div className="flex justify-center mt-4 md:hidden gap-2">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === activeIndex ? "bg-[#042C89]" : "bg-[#FFDE14]"
              }`}
          ></span>
        ))}
      </div>

    </div>
  );
}
