import React from "react";
import TexturedBackground from "/assets/TexturedBackground.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";
const BrowseCategory = () => {
  const categories = [
    { title: "Parents", icon: "/assets/img-icon-parents.svg" },
    { title: "Skills", icon: "/assets/img-icon-skills.svg" },
    { title: "General", icon: "/assets/img-icon-general.svg" },
    { title: "Franchise", icon: "/assets/img-icon-franchise.svg" },
    { title: "Coaches", icon: "/assets/img-icon-coaches.svg" },
    { title: "Services", icon: "/assets/img-icon-services.svg" },
  ];
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <>
      <section
        className="relative py-20 md:bg-[#F9FAFB] pb-0 md:pb-20  bg-no-repeat bg-cover  bg-none md:bg-[url('/assets/TexturedBackground.png')]"
      >
        <div className="container space-y-6">
          <div className="flex justify-between mb-0">
            <p className='text-[20px] text-[#042C89] mb-2 relative blueshortLine w-fit  font-semibold'>Browse The Category </p>
            <p className='text-[20px] text-[#797A88] mb-2 relative blueRightArrow w-fit  font-semibold md:block hidden'>See All Category</p>
          </div>
          <div className="w-full">

            {/* ✅ MOBILE SWIPER */}
            <div className="block md:hidden relative py-10">

              <Swiper
                modules={[Navigation]}
                navigation={{
                  nextEl: ".cat-next",
                  prevEl: ".cat-prev",
                }}
                loop
                centeredSlides
                spaceBetween={20}
                slidesPerView={2}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              >
                {categories.map((item, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <SwiperSlide key={index}>
                      <div
                        className={`
                    rounded-2xl mainShadow cursor-pointer
                    flex flex-col items-center justify-center
                    h-[260px] p-6 mx-auto
                    transition-all duration-300

                    ${isActive ? "bg-[#0DD180] scale-105" : "bg-[#FFDE14] scale-90 opacity-70"}
                  `}
                      >
                        <img
                          src={item.icon}
                          alt={item.title}
                          className="h-[80px] object-contain mb-4"
                        />

                        <p
                          className={`
                      text-[20px] font-semibold
                      ${isActive ? "text-white" : "text-[#042C89]"}
                    `}
                        >
                          {item.title}
                        </p>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>

              {/* 🔥 Arrows */}
              <button className="cat-prev absolute left-2 top-[75%] z-10 text-[70px] text-[#797A88]">
                ‹
              </button>
              <button className="cat-next absolute right-2 top-[75%] z-10 text-[70px] text-[#797A88]">
                ›
              </button>

              {/* 🔥 Dots */}
              <div className="flex justify-center mt-14 gap-2">
                {categories.map((_, i) => (
                  <div
                    key={i}
                    className={`w-2.5 h-2.5 rounded-full ${i === activeIndex ? "bg-[#042C89]" : "bg-gray-300"
                      }`}
                  />
                ))}
              </div>
            </div>

            {/* ✅ DESKTOP GRID (UNCHANGED) */}
            <div className="
  hidden md:grid 
  grid-cols-2 
  lg:grid-cols-3 
  xl:grid-cols-4 
  2xl:grid-cols-6 
  gap-6 lg:gap-8 xl:gap-10 mt-10
">
              {categories.map((item, index) => (
                <div
                  key={index}
                  className="
        group rounded-2xl shadow-md cursor-pointer
        flex flex-col items-start justify-center
        p-6 lg:p-8 xl:p-10
        h-[220px] lg:h-[260px] xl:h-[300px]
        w-full
        transition-all duration-300
        bg-[#FFDE14] hover:bg-[#0DD180]
      "
                >
                  <div className="flex items-center justify-center mb-4 h-[120px] lg:h-[150px] xl:h-[180px]">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="max-h-full object-contain"
                    />
                  </div>

                  <p className="text-[18px] lg:text-[22px] xl:text-[26px] font-semibold text-[#042C89] group-hover:text-white">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </section>
    </>
  );
};

export default BrowseCategory;
