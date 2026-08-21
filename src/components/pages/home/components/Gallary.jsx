import React from "react";
import Follow from "./Follow";

const Gallary = () => {
  const galleryItems = [
    {
      img: "/assets/gallary1.webp",
      link: "https://www.instagram.com/p/DVjc-s0j9zl/",
    },
    {
      img: "/assets/gallary2.webp",
      link: "https://www.instagram.com/p/DVgxVGEgVhs/",
    },
    {
      img: "/assets/gallary3.webp",
      link: "https://www.instagram.com/p/DVeFnkHDPjq/",
    },
    {
      img: "/assets/gallary4.webp",
      link: "https://www.instagram.com/p/DVbnwTIDYDG/",
    },
    {
      img: "/assets/gallary5.webp",
      link: "https://www.instagram.com/p/DVRUiLIj92j/",
    },
    {
      img: "/assets/gallary6.webp",
      link: "https://www.instagram.com/p/DVOo3ApjWhr/",
    },
  ];

  return (
    <section className="gallery grey-bg py-10 md:py-12 lg:py-16">
      <div className="container">
        <div className="m-auto md:max-w-[1038px]">
          {/* Heading */}
          <div className="text-center px-4 sm:px-0">
            <h3 className="blue-text text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px]">
              Image Gallery
            </h3>
            <p className="text-[#797A88] font-medium text-[14px] md:text-[14px] lg:text-[15px] py-2 md:py-3">
              Our classes are all about fun, flicks & tricks - some of which we
              manage to catch on camera! Check out{" "}
              <br className="md:block hidden" /> the latest images from our
              training session across London.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-5 lg:gap-[40px] my-6 md:my-8 lg:my-10">
            {galleryItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full aspect-square overflow-hidden block group cursor-pointer"
              >
                <img
                  src={item.img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </a>
            ))}
          </div>

          <Follow />
        </div>
      </div>
    </section>
  );
};

export default Gallary;